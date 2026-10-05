# Source and Asset Audit Notes

Audit date: 2026-10-06

## Source locations

- Client asset folder: https://drive.google.com/drive/folders/1OMW1T4Sx4hDLrV5RR_zuYINS6yc8VlG2
- Live site used as factual/navigation reference only: https://therapy.profahim.com
- Consolidated copy: `Nicola_Benyahia_Streamlined_Website_RECLAIM_Lemmy_Lou.docx` in the Drive folder.
- About photos: `Pics About me.docx` in the Drive folder.
- Approved Lemmy pack: `Lemmy_Lou_Friends_Web_Designer_Editable.zip` in the Drive folder; it contains the original covers and Nicola portrait.
- Adult palette reference: `colour pallette.odt` in the Drive folder (a visual reference image, not a text list of hex tokens).
- Lemmy Lou approved page visual: `Lemmy_Lou_Friends_Website_Visual_Mockup (1).pdf` and `assets/approved-visual-reference.png` inside the pack.

## Supplied visual assets verified

- The main-brand logo source is named `New logo display.png`, but its bytes are WebP with transparency. It is copied with a correct `.webp` extension; the website also uses a no-content-loss crop of transparent margins.
- Lemmy pack image filenames include `.png`, but the supplied cover files are WebP-encoded; website copies use `.webp` extensions. The colouring book and Nicola portrait are JPEGs and remain `.jpg` files.
- The About document's embedded `.png` filenames also contain WebP-encoded images, plus WDP variants. Website copies use `.webp` extensions. Visual audit: two childhood photos (image4, image6); podium/public-speaking photo (image1); formal medal/recognition photos (image2, image5); running photo (image3). Captions should remain modest and visual; do not attach extra biographical facts.
- No generic or stock imagery is needed.

## Factual content and service separation

- The source copy positions Nicola Benyahia as the master professional brand. Therapy is trauma-informed counselling/EMDR for clinical therapeutic support; RECLAIM™ is a structured six-stage adult recovery pathway; Coaching is forward-focused around confidence, boundaries, direction, and action. Keep these distinct.
- RECLAIM™ stages in supplied/current source: SURVIVE → UNDERSTAND → RELEASE → REDISCOVER → RECLAIM → THRIVE.
- Use the About story from the supplied consolidated copy and current About page only. Avoid adding biographical claims beyond the supplied materials.
- Current site Home: https://therapy.profahim.com/
- About: https://therapy.profahim.com/about
- Therapy: https://therapy.profahim.com/therapy
- RECLAIM: https://therapy.profahim.com/reclaim
- Coaching: https://therapy.profahim.com/coaching
- Resources: https://therapy.profahim.com/resources
- Lemmy Lou hub: https://therapy.profahim.com/lemmy-lou-and-friends
- Contact: https://therapy.profahim.com/contact
- Discovery Call: https://therapy.profahim.com/discovery-call (fetch extraction exposed the current site shell/footer, not a visible booking widget or submission flow; preserve this destination, do not invent a booking interaction).
- FAQ: https://therapy.profahim.com/faq
- Cart: https://therapy.profahim.com/cart

## Verified product destinations

These routes resolve on the existing site. A preview CTA should link to the real destination; the static rebuild must not simulate cart/checkout or submit a purchase.
Product descriptions, formats, audiences, inclusions and caveats used in local detail pages were checked against these current product pages on 2026-10-06. Prices and purchase controls are omitted from the preview.

- RECLAIM Workbook: https://therapy.profahim.com/product/reclaim-workbook (current page lists £28.00)
- RECLAIM Guided 8-Week Programme: https://therapy.profahim.com/product/reclaim-guided-programme (current page lists £495.00)
- RECLAIM 1:1 Private Mentorship: https://therapy.profahim.com/product/reclaim-1on1-intensive (current page lists £1,850.00)
- My Big Feelings: https://therapy.profahim.com/product/my-big-feelings (current page lists £12.99)
- Calm With Me: https://therapy.profahim.com/product/calm-with-me (current page lists £12.99)
- I Am Amazing: https://therapy.profahim.com/product/i-am-amazing (current page lists £12.99)
- Lemmy Lou and the Worry Cloud: https://therapy.profahim.com/product/worry-cloud-storybook (current page lists £8.99)
- Layth and the Strong Little No: https://therapy.profahim.com/product/strong-little-no (current page lists £8.99)
- My Affirmation Colouring Book: https://therapy.profahim.com/product/affirmation-colouring-book (current page lists £6.50)

## Verified policy destinations

All pages below resolve on the current site. Their extracted text includes `[FINAL CLIENT / LEGAL COPY REQUIRED ...]` notices; do not silently duplicate or remove those notices. In this static preview, preserve them as clearly labeled outbound links to the current official pages instead of fabricating replacement legal copy.

- Privacy: https://therapy.profahim.com/privacy
- Terms: https://therapy.profahim.com/terms
- Cookies: https://therapy.profahim.com/cookies
- Booking & Cancellation: https://therapy.profahim.com/booking-policy
- Refund: https://therapy.profahim.com/refund-policy

## UI implementation boundaries

- No new booking, contact, mailing list, or checkout forms. Link to the verified current destinations.
- Prices are recorded here for source audit but should not be invented or represented as dynamically current by the static preview.
- Existing site and production domain are reference/link destinations only; no production files, settings, or checkout data are changed.
