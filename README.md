# Nicola Benyahia — Static Website Rebuild

A self-contained multipage website made with **HTML, CSS and vanilla JavaScript**. It has no build step, framework, external script, remote font, backend, form handler or database.

## Run locally

From this directory, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000/`. The folder includes static entry pages for each route, so deep links work under a basic static server. `./serve.sh` is a convenience wrapper and accepts an optional `PORT` environment variable.

## Included routes

The site includes the home, About, Therapy, RECLAIM™, Coaching, Resources, Lemmy Lou & Friends, Contact, Discovery Call, FAQ and Cart paths; all nine verified product detail paths; and Privacy, Terms, Cookies, Booking Policy and Refund Policy paths. See `SOURCE-AUDIT.md` for the route list and historical source notes.

## Important behavior

This remains a static, frontend-only site: it does not submit enquiries, create appointments, add products to a cart or accept payment. Same-site routes use the `/nicola/` base path; the canonical base is `https://fhf.bro.bd/nicola/`. The Lemmy newsletter section has no signup form because a verified endpoint was not supplied; its existing CTA leads to Resources. Local policy pages preserve the supplied policy text rather than silently rewriting legal copy that contains client-review notices.

## Production status

The [live Lemmy Lou & Friends page](https://fhf.bro.bd/nicola/lemmy-lou-and-friends/) is deployed and verified. The Lemmy stylesheet and runtime app.js were updated under `/var/www/nicola/`; production HTTP checks and live browser QA passed at mobile, reference/tablet and desktop widths. Rollback copies are retained under `/var/backups/nicola/`. No Nginx or DNS configuration was changed. See [`qa/lemmy-visual-qa.md`](qa/lemmy-visual-qa.md) for screenshots, test results and the known unrelated About-page missing-image findings.

## Source and design notes

- `brand-spec.md` records the design system and supplied image assets used.
- `redesign-brief.md` records what is preserved and what was intentionally not simulated.
- `SOURCE-AUDIT.md` records supplied source files, verified routes and historical facts.
- `assets/nicola-brand/`, `assets/about/` and `assets/lemmy/` contain local copies of supplied client images. Several supplied image filenames used `.png` even though the bytes were WebP; the copies use the correct `.webp` extension. The original logo source copy is retained beside its transparent-margin crop.
- `qa/` contains route-by-route responsive acceptance reports and screenshot evidence.
