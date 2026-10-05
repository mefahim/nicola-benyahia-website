#!/usr/bin/env python3
"""Responsive visual acceptance for the static Nicola Benyahia preview."""
from __future__ import annotations

import json
import os
import re
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "qa"
CAPTURES = QA / "captures"
BASE_URL = os.environ.get("PREVIEW_URL", "http://127.0.0.1:4173").rstrip("/")
CHROMIUM = os.environ.get("CHROMIUM_PATH", "/usr/bin/chromium")
ROUTES = [
    "/", "/about/", "/therapy/", "/reclaim/", "/coaching/", "/resources/",
    "/lemmy-lou-and-friends/", "/contact/", "/discovery-call/", "/faq/", "/cart/",
    "/privacy/", "/terms/", "/cookies/", "/booking-policy/", "/refund-policy/",
    "/product/reclaim-workbook/", "/product/reclaim-guided-programme/",
    "/product/reclaim-1on1-intensive/", "/product/my-big-feelings/", "/product/calm-with-me/",
    "/product/i-am-amazing/", "/product/worry-cloud-storybook/",
    "/product/strong-little-no/", "/product/affirmation-colouring-book/",
]
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900, "is_mobile": False},
    "tablet": {"width": 768, "height": 1024, "is_mobile": True},
    "mobile": {"width": 390, "height": 844, "is_mobile": True},
}


def slug(route: str) -> str:
    if route == "/":
        return "home"
    return re.sub(r"[^a-z0-9]+", "-", route.strip("/").replace("/", "-" ).lower()).strip("-")


def write_report(results: list[dict], interactions: list[dict], problems: list[str]) -> None:
    rows = [
        "# Responsive Visual Acceptance",
        "",
        f"- **Preview:** `{BASE_URL}`",
        "- **Browser:** Headless Chromium (Playwright, installed in the sandbox)",
        "- **Viewports:** 1440×900 desktop; 768×1024 tablet; 390×844 mobile",
        f"- **Routes:** {len(ROUTES)} routes × {len(VIEWPORTS)} viewports = {len(results)} page renders",
        "- **Scope:** direct route loads, JS runtime, local image decoding, document overflow, mobile navigation, FAQ disclosure, and screenshots.",
        "",
        "## Route matrix",
        "",
        "| Route | Viewport | HTTP | H1 | Width | Images | Console/page errors | Screenshot |",
        "|---|---|---:|---:|---:|---:|---:|---|",
    ]
    for item in results:
        rows.append(
            f"| `{item['route']}` | {item['viewport']} | {item['status']} | {item['h1_count']} | "
            f"{'PASS' if not item['horizontal_overflow'] else 'FAIL'} | "
            f"{'PASS' if not item['broken_images'] else 'FAIL'} | "
            f"{len(item['errors'])} | `{item['screenshot']}` |"
        )
    rows.extend(["", "## Interaction checks", ""])
    rows.extend(f"- **{item['name']}:** {'PASS' if item['pass'] else 'FAIL'} — {item['detail']}" for item in interactions)
    rows.extend(["", "## Issues", ""])
    if problems:
        rows.extend(f"- {problem}" for problem in problems)
    else:
        rows.append("- None found in the executed checks.")
    rows.extend([
        "",
        "## Notes",
        "",
        "- Screenshots are full-page captures at each viewport, not a formal baseline comparison.",
        "- External practice, booking, product, shop and policy destinations were not clicked or submitted; the preview preserves them as outbound links.",
        "- Browser acceptance does not imply a production deployment; none was performed.",
        "",
    ])
    (QA / "acceptance-report.md").write_text("\n".join(rows), encoding="utf-8")
    (QA / "acceptance-results.json").write_text(json.dumps({"base_url": BASE_URL, "viewports": VIEWPORTS, "results": results, "interactions": interactions, "problems": problems}, indent=2), encoding="utf-8")


def main() -> int:
    QA.mkdir(parents=True, exist_ok=True)
    CAPTURES.mkdir(parents=True, exist_ok=True)
    results: list[dict] = []
    interactions: list[dict] = []
    problems: list[str] = []

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROMIUM, headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
        for viewport_name, config in VIEWPORTS.items():
            context = browser.new_context(
                viewport={"width": config["width"], "height": config["height"]},
                device_scale_factor=1,
                is_mobile=config["is_mobile"],
                reduced_motion="reduce",
            )
            page = context.new_page()
            for route in ROUTES:
                page_errors: list[str] = []
                console_errors: list[str] = []
                failed_requests: list[str] = []
                page.on("pageerror", lambda err, out=page_errors: out.append(str(err)))
                page.on("console", lambda msg, out=console_errors: out.append(msg.text) if msg.type == "error" else None)
                page.on("requestfailed", lambda req, out=failed_requests: out.append(f"{req.url}: {req.failure}"))
                response = None
                screenshot_rel = f"captures/{viewport_name}/{slug(route)}.jpg"
                screenshot_path = CAPTURES / viewport_name / f"{slug(route)}.jpg"
                screenshot_path.parent.mkdir(parents=True, exist_ok=True)
                try:
                    response = page.goto(f"{BASE_URL}{route}", wait_until="networkidle", timeout=30000)
                    page.wait_for_selector("#app > main#main-content", timeout=8000)
                    page.evaluate("""async () => {
                      const images = Array.from(document.images);
                      for (const image of images) image.loading = 'eager';
                      await Promise.all(images.map(image => new Promise(resolve => {
                        if (image.complete) { resolve(); return; }
                        const done = () => resolve();
                        image.addEventListener('load', done, { once: true });
                        image.addEventListener('error', done, { once: true });
                        setTimeout(done, 8000);
                      })));
                      await Promise.all(images.map(image => image.decode().catch(() => null)));
                    }""")
                    snapshot = page.evaluate("""() => ({
                      title: document.title,
                      h1Count: document.querySelectorAll('main h1').length,
                      viewportWidth: window.innerWidth,
                      viewportHeight: window.innerHeight,
                      clientWidth: document.documentElement.clientWidth,
                      scrollWidth: document.documentElement.scrollWidth,
                      brokenImages: Array.from(document.images).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.currentSrc || img.src),
                      externalHosts: Array.from(document.querySelectorAll('a[href^="http"]')).map(a => new URL(a.href).host),
                      mainText: (document.querySelector('main')?.innerText || '').slice(0, 300)
                    })""")
                    overflow = snapshot["scrollWidth"] > snapshot["clientWidth"] + 1
                    if response is None or response.status >= 400:
                        problems.append(f"{route} at {viewport_name}: HTTP {response.status if response else 'no response'}")
                    if snapshot["h1Count"] != 1:
                        problems.append(f"{route} at {viewport_name}: expected one H1, got {snapshot['h1Count']}")
                    if overflow:
                        problems.append(f"{route} at {viewport_name}: horizontal overflow ({snapshot['scrollWidth']} > {snapshot['clientWidth']} CSS px)")
                    if snapshot["brokenImages"]:
                        problems.append(f"{route} at {viewport_name}: broken images: {snapshot['brokenImages']}")
                    unexpected_hosts = sorted({host for host in snapshot["externalHosts"] if host != "therapy.profahim.com"})
                    if unexpected_hosts:
                        problems.append(f"{route} at {viewport_name}: unverified external hosts {unexpected_hosts}")
                    page.screenshot(path=str(screenshot_path), full_page=True, type="jpeg", quality=65, animations="disabled")
                    errors = page_errors + console_errors
                    if errors:
                        problems.extend(f"{route} at {viewport_name}: browser error: {err}" for err in errors)
                    if failed_requests:
                        actionable = [err for err in failed_requests if "ERR_ABORTED" not in err]
                        problems.extend(f"{route} at {viewport_name}: failed request: {err}" for err in actionable)
                    results.append({
                        "route": route, "viewport": viewport_name, "status": response.status if response else None,
                        "title": snapshot["title"], "h1_count": snapshot["h1Count"],
                        "viewport": f"{snapshot['viewportWidth']}x{snapshot['viewportHeight']}",
                        "horizontal_overflow": overflow, "scroll_width": snapshot["scrollWidth"],
                        "client_width": snapshot["clientWidth"], "broken_images": snapshot["brokenImages"],
                        "errors": errors, "failed_requests": failed_requests, "screenshot": screenshot_rel,
                    })
                except Exception as exc:
                    problem = f"{route} at {viewport_name}: test exception: {type(exc).__name__}: {exc}"
                    problems.append(problem)
                    results.append({"route": route, "viewport": viewport_name, "status": response.status if response else None, "h1_count": 0, "horizontal_overflow": True, "broken_images": [], "errors": [problem], "screenshot": screenshot_rel})

                print(f"[{viewport_name}] {route}", flush=True)

                if route == "/" and viewport_name == "mobile":
                    try:
                        toggle = page.locator(".menu-toggle")
                        toggle.click()
                        nav_visible = page.locator("#site-navigation").is_visible()
                        expanded = toggle.get_attribute("aria-expanded") == "true"
                        page.keyboard.press("Escape")
                        closed = toggle.get_attribute("aria-expanded") == "false" and not page.locator("#site-navigation").is_visible()
                        interactions.append({"name": "Mobile navigation opens and Escape closes it", "pass": nav_visible and expanded and closed, "detail": f"open={nav_visible}, expanded={expanded}, escape_closed={closed}"})
                    except Exception as exc:
                        interactions.append({"name": "Mobile navigation opens and Escape closes it", "pass": False, "detail": str(exc)})
                if route == "/faq/" and viewport_name == "mobile":
                    try:
                        first = page.locator(".faq-item").first
                        first.locator("summary").click()
                        opened = first.evaluate("el => el.open")
                        interactions.append({"name": "FAQ disclosure opens on mobile", "pass": bool(opened), "detail": f"open={opened}"})
                    except Exception as exc:
                        interactions.append({"name": "FAQ disclosure opens on mobile", "pass": False, "detail": str(exc)})
            context.close()
        browser.close()

    write_report(results, interactions, problems)
    print(f"Checked {len(results)} route/viewports; captured {len(list(CAPTURES.rglob('*.jpg')))} screenshots.")
    print(f"Interaction checks: {sum(1 for x in interactions if x['pass'])}/{len(interactions)} passed.")
    print(f"Issues: {len(problems)}")
    for issue in problems[:50]:
        print(f"- {issue}")
    print(f"Report: {QA / 'acceptance-report.md'}")
    return 1 if problems or any(not x["pass"] for x in interactions) else 0


if __name__ == "__main__":
    raise SystemExit(main())
