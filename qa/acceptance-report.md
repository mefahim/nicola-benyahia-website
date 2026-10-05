# Responsive Visual Acceptance

- **Preview:** `http://127.0.0.1:4173`
- **Browser:** Headless Chromium (Playwright, installed in the sandbox)
- **Viewports:** 1440×900 desktop; 768×1024 tablet; 390×844 mobile
- **Routes:** 25 routes × 3 viewports = 75 page renders
- **Scope:** direct route loads, JS runtime, local image decoding, document overflow, mobile navigation, FAQ disclosure, and screenshots.

## Route matrix

| Route | Viewport | HTTP | H1 | Width | Images | Console/page errors | Screenshot |
|---|---|---:|---:|---:|---:|---:|---|
| `/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/home.jpg` |
| `/about/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/about.jpg` |
| `/therapy/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/therapy.jpg` |
| `/reclaim/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/reclaim.jpg` |
| `/coaching/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/coaching.jpg` |
| `/resources/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/resources.jpg` |
| `/lemmy-lou-and-friends/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/lemmy-lou-and-friends.jpg` |
| `/contact/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/contact.jpg` |
| `/discovery-call/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/discovery-call.jpg` |
| `/faq/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/faq.jpg` |
| `/cart/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/cart.jpg` |
| `/privacy/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/privacy.jpg` |
| `/terms/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/terms.jpg` |
| `/cookies/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/cookies.jpg` |
| `/booking-policy/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/booking-policy.jpg` |
| `/refund-policy/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/refund-policy.jpg` |
| `/product/reclaim-workbook/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-reclaim-workbook.jpg` |
| `/product/reclaim-guided-programme/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-reclaim-guided-programme.jpg` |
| `/product/reclaim-1on1-intensive/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-reclaim-1on1-intensive.jpg` |
| `/product/my-big-feelings/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-my-big-feelings.jpg` |
| `/product/calm-with-me/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-calm-with-me.jpg` |
| `/product/i-am-amazing/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-i-am-amazing.jpg` |
| `/product/worry-cloud-storybook/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-worry-cloud-storybook.jpg` |
| `/product/strong-little-no/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-strong-little-no.jpg` |
| `/product/affirmation-colouring-book/` | 1440x900 | 200 | 1 | PASS | PASS | 0 | `captures/desktop/product-affirmation-colouring-book.jpg` |
| `/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/home.jpg` |
| `/about/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/about.jpg` |
| `/therapy/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/therapy.jpg` |
| `/reclaim/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/reclaim.jpg` |
| `/coaching/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/coaching.jpg` |
| `/resources/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/resources.jpg` |
| `/lemmy-lou-and-friends/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/lemmy-lou-and-friends.jpg` |
| `/contact/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/contact.jpg` |
| `/discovery-call/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/discovery-call.jpg` |
| `/faq/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/faq.jpg` |
| `/cart/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/cart.jpg` |
| `/privacy/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/privacy.jpg` |
| `/terms/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/terms.jpg` |
| `/cookies/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/cookies.jpg` |
| `/booking-policy/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/booking-policy.jpg` |
| `/refund-policy/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/refund-policy.jpg` |
| `/product/reclaim-workbook/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-reclaim-workbook.jpg` |
| `/product/reclaim-guided-programme/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-reclaim-guided-programme.jpg` |
| `/product/reclaim-1on1-intensive/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-reclaim-1on1-intensive.jpg` |
| `/product/my-big-feelings/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-my-big-feelings.jpg` |
| `/product/calm-with-me/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-calm-with-me.jpg` |
| `/product/i-am-amazing/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-i-am-amazing.jpg` |
| `/product/worry-cloud-storybook/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-worry-cloud-storybook.jpg` |
| `/product/strong-little-no/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-strong-little-no.jpg` |
| `/product/affirmation-colouring-book/` | 768x1024 | 200 | 1 | PASS | PASS | 0 | `captures/tablet/product-affirmation-colouring-book.jpg` |
| `/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/home.jpg` |
| `/about/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/about.jpg` |
| `/therapy/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/therapy.jpg` |
| `/reclaim/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/reclaim.jpg` |
| `/coaching/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/coaching.jpg` |
| `/resources/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/resources.jpg` |
| `/lemmy-lou-and-friends/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/lemmy-lou-and-friends.jpg` |
| `/contact/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/contact.jpg` |
| `/discovery-call/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/discovery-call.jpg` |
| `/faq/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/faq.jpg` |
| `/cart/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/cart.jpg` |
| `/privacy/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/privacy.jpg` |
| `/terms/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/terms.jpg` |
| `/cookies/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/cookies.jpg` |
| `/booking-policy/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/booking-policy.jpg` |
| `/refund-policy/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/refund-policy.jpg` |
| `/product/reclaim-workbook/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-reclaim-workbook.jpg` |
| `/product/reclaim-guided-programme/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-reclaim-guided-programme.jpg` |
| `/product/reclaim-1on1-intensive/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-reclaim-1on1-intensive.jpg` |
| `/product/my-big-feelings/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-my-big-feelings.jpg` |
| `/product/calm-with-me/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-calm-with-me.jpg` |
| `/product/i-am-amazing/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-i-am-amazing.jpg` |
| `/product/worry-cloud-storybook/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-worry-cloud-storybook.jpg` |
| `/product/strong-little-no/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-strong-little-no.jpg` |
| `/product/affirmation-colouring-book/` | 390x844 | 200 | 1 | PASS | PASS | 0 | `captures/mobile/product-affirmation-colouring-book.jpg` |

## Interaction checks

- **Mobile navigation opens and Escape closes it:** PASS — open=True, expanded=True, escape_closed=True
- **FAQ disclosure opens on mobile:** PASS — open=True

## Issues

- None found in the executed checks.

## Notes

- Screenshots are full-page captures at each viewport, not a formal baseline comparison.
- External practice, booking, product, shop and policy destinations were not clicked or submitted; the preview preserves them as outbound links.
- Browser acceptance does not imply a production deployment; none was performed.
