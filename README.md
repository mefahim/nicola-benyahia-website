# Nicola Benyahia — Static Website Rebuild

A self-contained multipage website made with **HTML, CSS and vanilla JavaScript**. It has no build step, framework, external script, remote font, backend, form handler or database.

## Run locally

From this directory, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000/`. The folder includes static entry pages for each route, so deep links work under a basic static server. `./serve.sh` is a convenience wrapper and accepts an optional `PORT` environment variable.

## Included routes

The site includes the home, About, Therapy, RECLAIM™, Coaching, Resources, Lemmy Lou & Friends, Contact, Discovery Call, FAQ and Cart paths; all nine verified product detail paths; and Privacy, Terms, Cookies, Booking Policy and Refund Policy paths. See `SOURCE-AUDIT.md` for the route list and source links.

## Important behavior

This is a preview, not a production deployment. It does **not** modify the live website. Booking/contact, product, shopping-bag and policy actions link to the verified existing pages on `therapy.profahim.com`. The static preview does not submit enquiries, create appointments, add products to a cart or accept payment. Local policy pages link to current official policy text rather than silently rewriting legal copy that contains client-review notices.

## Source and design notes

- `brand-spec.md` records the design system and the supplied image assets used.
- `redesign-brief.md` records what is preserved and what was intentionally not simulated.
- `SOURCE-AUDIT.md` records supplied source files, verified routes and facts.
- `assets/nicola-brand/`, `assets/about/` and `assets/lemmy/` contain local copies of supplied client images. Several supplied image filenames used `.png` even though the bytes were WebP; the copies use the correct `.webp` extension. The original logo source copy is retained beside its transparent-margin crop.
- `qa/` contains the route-by-route responsive acceptance report and captures.

## No deployment performed

The ZIP is the complete editable source package. Review it before choosing a host or changing any live configuration.
