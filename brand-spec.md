# Brand and Design Specification

## Design read

**Artifact:** static multi-page practice website. **Audience:** adults looking for counselling, a structured recovery pathway, or coaching, alongside parents/carers and professionals exploring Lemmy Lou & Friends. **Visual language:** warm humanist editorial, photograph-led and personal, with a distinctly more playful child-resource sub-brand. **Mode:** redesign overhaul, retaining routes, source facts, supplied identity assets, and real destinations. **Dials:** visual variance 6/10 (asymmetric story moments, stable navigation spine); motion 2/10 (short state feedback only); information density 5/10 (clear pages, gentle pacing); asset dependence 9/10 (use supplied logo, original book art and personal photographs); brand fidelity 8/10 (preserve client identity and verified facts while recomposing layout).

## Positioning questions answered

- **Home:** orient and reassure; viewed on phones and laptops; warm, grounded and human; one clear personal image plus three differentiated pathways.
- **About:** tell a connected personal story, not a clinical résumé; photographs carry the timeline; calm editorial pacing; captions stay within what the supplied images establish.
- **Therapy / RECLAIM™ / Coaching:** each page should make its purpose legible at a glance; adult, trustworthy and sensitive; no invented booking or therapeutic claims.
- **Lemmy Lou & Friends:** immediately vivid, child-friendly and visually led; the original covers are the focal assets; retain the supplied multicolour identity separately from the adult practice palette.

## Tokens

| Role | Value | Source/intent |
|---|---|---|
| Warm paper | `#F7F2EB` | Warm cream from the supplied adult palette reference |
| Pale oat | `#EEE4D9` | Supporting neutral from the same reference |
| Soft peach | `#E8BDA8` | Strengthened requested peach integration |
| Terracotta | `#B96F59` | Muted rose/terracotta accent; ties to the supplied rose-gold logo |
| Sage | `#7B8675` | Quiet natural supporting color |
| Ink | `#2F312E` | High-legibility body text |
| Muted ink | `#66675F` | Secondary copy |
| Lemmy navy | `#163A75` | Exact token from supplied `styles.css` |
| Lemmy blue | `#0A8EDB` | Exact token from supplied `styles.css` |
| Lemmy pink | `#F43D86` | Exact token from supplied `styles.css` |
| Lemmy green | `#43AD59` | Exact token from supplied `styles.css` |
| Lemmy purple | `#8C55CF` | Exact token from supplied `styles.css` |
| Lemmy gold | `#F0BD1A` | Exact token from supplied `styles.css` |
| Lemmy sky / blush / mint / cream | `#E5F5FF` / `#FFE9F0` / `#E7F7E5` / `#FFF9D8` | Exact tokens from supplied `styles.css` |

The adult palette document is an image-led mood reference rather than a text palette; adult hex values above are implementation approximations, not claimed client-specified codes. The Lemmy tokens are copied from the supplied editable pack stylesheet.

## Type and layout

- **Display:** Georgia, serif; warm editorial hierarchy without importing an unprovided typeface.
- **Body / UI:** system sans stack with Trebuchet MS / Arial fallbacks for readable, familiar rhythm.
- **Spacing:** 4 px base, primarily 8 px multiples; wider section rhythm on desktop and tighter stacked rhythm on mobile.
- **Radius:** 4 px for controls, 14 px for supporting panels, 28 px for major image/feature frames; avoid uniform pill-card repetition.
- **Shadow:** restrained low-elevation shadow only under image/object layers; no floating-card overload.
- **Motion:** 160–220 ms state transitions; no motion required to access content; `prefers-reduced-motion` removes nonessential transitions.

## Client assets (local copies)

- Main logo: `assets/nicola-brand/brand-logo.webp`; untouched source copy: `assets/nicola-brand/brand-logo-original.webp`.
- About photographs: `assets/about/about-photo-1.webp` through `about-photo-6.webp`.
- Lemmy Lou product imagery: `assets/lemmy/` (original supplied illustrations/covers and author portrait, copied locally with correct file extensions).
- Approved visual reference: `assets/reference/lemmy-approved-reference.webp` (reference only, not substituted for real covers).

## Constraints

No live site modifications, production settings, or publishing. No generic stock imagery, generated replacement art, invented personal history, fake qualifications, testimonials, prices, forms, checkout, or booking flows. Use external links for verified existing product, booking, contact, cart, and policy destinations. See `SOURCE-AUDIT.md` for the exact routes and status.
