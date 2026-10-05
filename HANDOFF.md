# Website Rebuild Handoff

## Snapshot status

This is the current **static HTML/CSS/JavaScript working snapshot**. It is not a production deployment. The live site was not modified, overwritten or deployed, and no purchases or form submissions were made.

The package includes the static site, supplied client assets used by it, route entry points, project notes, the responsive QA script, the latest QA report and its screenshots.

## What has passed so far

- 25 routes were opened directly at desktop (1440 px), tablet (768 px) and mobile (390 px): **75 captures total**.
- All route responses were HTTP 200 and each rendered one main H1.
- No JavaScript/page errors, failed requests or broken-image reports were detected by the automated checks.
- Mobile navigation open/close and the FAQ disclosure checks passed.
- Booking, programme, product, shop and policy links remain links to verified destinations; the preview does not simulate checkout or bookings.

## Remaining issues found in QA

1. **About at mobile width:** the document is 2 px wider than the viewport (392 px scroll width vs 390 px client width). The overflowing element is the second photo in the formal recognition/photo pair: `assets/about/about-photo-5.webp` inside `.story-photo-pair--formal`.
2. **Lemmy product-card covers:** the supplied cover files load, but the tall images can expand beyond the intended cover frame and overlap the card text. The desktop full-page captures show this in the Calm With Me, I Am Amazing and Strong Little No cards. The image files themselves are present and valid.
3. **Screenshot harness:** the harness promotes lazy images to eager and waits for their load events, but should also wait for image decoding before taking full-page screenshots. The latest captures therefore need to be regenerated after the visual fixes below.

The latest automated results are in `qa/acceptance-report.md`. It records the mobile overflow; the cover-frame overlap was identified in the subsequent manual screenshot inspection and is noted separately here.

## Recommended work to finish

### 1. Fix Lemmy cover-frame sizing

In `styles.css`, adjust `.lemmy-product__cover` so it remains a fixed-height, clipped frame and does not expand to the intrinsic height of a portrait image. A centered flex frame is a suitable approach:

```css
.lemmy-product__cover {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  /* Keep the existing 330px desktop height and responsive heights. */
}

.lemmy-product__cover img {
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```

If necessary, set `min-height: 0` on the anchor and update the matching responsive height rules so the frame remains fixed at each breakpoint. Check that the text begins below the image area and that all six supplied covers are visible without cropping or overlap on both the collection and home pages.

### 2. Fix the About photo-pair overflow

In `styles.css`, make the two photo-pair grid tracks shrinkable and prevent their figures from imposing an intrinsic minimum width. For example:

```css
.story-photo-pair {
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
}

.story-photo-pair figure {
  min-width: 0;
}

.story-photo-pair--formal {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

Retest `/about/` at 390 px and confirm `scrollWidth <= clientWidth`; do not mask the issue by hiding overflow if the photograph is still wider than its grid track.

### 3. Make full-page image screenshots reliable

In `qa/acceptance.py`, after the existing eager-load wait has completed, decode the now-loaded images before taking the snapshot:

```javascript
await Promise.all(images.map(image => image.decode().catch(() => null)));
```

Keep the existing bounded load wait; awaiting `decode()` before promoting lazy images or before waiting for their load events can hang on off-screen lazy images.

### 4. Retest

From the extracted project folder:

```bash
node --check app.js
python3 -m py_compile qa/acceptance.py
PORT=4173 ./serve.sh
```

In a second terminal, run:

```bash
python3 qa/acceptance.py
```

If Playwright/Chromium is unavailable in the environment, install the Python Playwright package and its Chromium browser first. Review the generated `qa/acceptance-report.md` and open the desktop, tablet and mobile screenshots for every route. Confirm the mobile menu and FAQ interaction checks still pass, and manually inspect the six book covers on `/lemmy-lou-and-friends/` and the homepage.

After corrections, regenerate the ZIP from the complete project folder, including the final QA report and screenshots. Keep all changes in this separate static project unless deployment is explicitly requested and separately authorized.
