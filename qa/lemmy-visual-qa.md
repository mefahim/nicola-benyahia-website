# Lemmy Lou & Friends — Visual QA ও Production Release

**তারিখ:** ১৪ অক্টোবর ২০২৬

**Canonical live page:** [Lemmy Lou & Friends](https://fhf.bro.bd/nicola/lemmy-lou-and-friends/)

**Branch:** `manus/lemmy-mockup-match`

**Visual/CSS commit:** `568616e`

**Canonical-host/app commit:** `55fd02c`

**Reference width:** 843px

## সারাংশ

অনুমোদিত mockup ধরে responsive refinement সম্পন্ন, GitHub branch-এ push এবং production-এ deploy করা হয়েছে। User-confirmed canonical base এখন `https://fhf.bro.bd/nicola/`। Lemmy route-এর local targeted QA **10/10 viewport** পাস করেছে; production live page-এর browser QA **4/4 viewport** পাস করেছে। Production page, JavaScript ও stylesheet—তিনটিই HTTP 200; production browser-এ 12/12 image load হয়েছে, horizontal overflow বা console/page error নেই।

## পরিবর্তন

- Duplicate/পুরনো Lemmy responsive declarations সরিয়ে consolidated hub CSS রাখা হয়েছে; card height content-চালিত।
- 320–430px mobile, 768–843px tablet/reference এবং desktop layout-এ navigation, spacing, cards ও CTA পুনঃসমন্বয় করা হয়েছে।
- Product/story card cover-এ fixed 225/290px height সরানো হয়েছে; CTA আর cover/কার্ডের বাইরে যায় না।
- Existing supplied artwork, book covers, portrait, approved copy ও prices অক্ষত রাখা হয়েছে।
- Runtime app-এর `LIVE` base ও QA external-host allowlist user-confirmed `fhf.bro.bd`-এ আপডেট হয়েছে; same-site routes `/nicola/` prefix-এ থাকে।
- `app.js`/`public/app.js` এবং root/public stylesheet mirror যাচাই করা হয়েছে। Newsletter endpoint না থাকায় কোনো কৃত্রিম signup form বা submit behavior যোগ করা হয়নি।

## Local responsive QA

| প্রস্থ | পূর্ণ পৃষ্ঠার উচ্চতা | HTTP | Overflow | ছবি | ফল |
|---:|---:|---:|---|---:|---|
| 320px | 6433px | 200 | নেই | 12/12 | PASS |
| 360px | 6249px | 200 | নেই | 12/12 | PASS |
| 375px | 6191px | 200 | নেই | 12/12 | PASS |
| 390px | 6176px | 200 | নেই | 12/12 | PASS |
| 430px | 6089px | 200 | নেই | 12/12 | PASS |
| 768px | 3342px | 200 | নেই | 12/12 | PASS |
| 843px (mockup reference) | 3286px | 200 | নেই | 12/12 | PASS |
| 1024px | 3296px | 200 | নেই | 12/12 | PASS |
| 1280px | 3458px | 200 | নেই | 12/12 | PASS |
| 1440px | 3465px | 200 | নেই | 12/12 | PASS |

প্রতিটি width-এ একটি H1, five-card CTA containment/no-overlap, support art overlap, section order, `/nicola/` route prefix ও allowed canonical host পরীক্ষা করা হয়েছে। 390px-এ menu open, `aria-expanded=true`, Escape-এ close—সব পাস।

## Production live QA

Public canonical page সরাসরি browser-এ 320px, 390px, 843px ও 1440px-এ খোলা হয়েছে। চারটিতেই HTTP 200, scroll width viewport-এর সমান, 12/12 image load, no page/console/request errors। 390px mobile menu interaction-ও পাস; live app.js-এ canonical base সরাসরি পরীক্ষা করা হয়েছে।

- [Live 320px mobile capture](captures/lemmy-live/320px.jpg)
- [Live 390px mobile capture](captures/lemmy-live/390px.jpg)
- [Live 843px reference capture](captures/lemmy-live/843px.jpg)
- [Live 1440px desktop capture](captures/lemmy-live/1440px.jpg)

## সাইট-ব্যাপী regression

`qa/acceptance.py` দিয়ে **26 route × 3 viewport = 78 render/capture** এবং **2/2 interaction checks** চালানো হয়েছে। Lemmy route-এর তিন standard breakpoint পাস; নতুন host-এর জন্য কোনো warning নেই। Suite-এর একমাত্র বিদ্যমান findings `/about/`-এর চারটি অনুপস্থিত PNG (`beige.png`, `Casual.png`, `Jumper sat.png`, `blue and white - Copy.png`): তিন viewport-এ মোট 15টি image/404 finding। About page/assets এই scope-এর বাইরে; বাকি 75 route/viewport-এ finding ছিল না।

## Screenshot ও data evidence

- [843px local mockup-reference capture](captures/lemmy-final/843px.jpg)
- [390px local mobile capture](captures/lemmy-final/390px.jpg)
- [1440px local desktop capture](captures/lemmy-final/1440px.jpg)
- [সব local/live screenshot ও viewport metrics-এর ZIP](lemmy-visual-evidence.zip)
- [10-width machine-readable results (JSON)](lemmy-visual-results.json)

## Production deployment

- `public/styles.css` → `/var/www/nicola/styles.css`; SHA-256: `ce66b9e56c636e4a4bde1d6c7de8ce1d39e733c7f0f33f85be939e31630e0de5`; rollback copy: `/var/backups/nicola/20261014-0035-568616e/styles.css`.
- `public/app.js` → `/var/www/nicola/app.js`; SHA-256: `8d1628d31e4843ed3f22032999edd2d424588fb97bab7394baf54974477b4408`; rollback copy: `/var/backups/nicola/20261014-0045-55fd02c/app.js`.
- দুই live hash source branch-এর সঙ্গে মিলে; static file owner `www-data`, mode `644`। Nginx/DNS configuration পরিবর্তন বা reload করা হয়নি।
- Branch-এ CSS/QA refinement commit `568616e` এবং canonical-host update commit `55fd02c` push হয়েছে।
- Page, `/nicola/app.js`, `/nicola/styles.css`: canonical public host-এ HTTP 200; server/origin ও public browser—দুই দিকেই যাচাই হয়েছে।

## অবশিষ্ট সীমা

Mockup-এর কিছু wording বর্তমান অনুমোদিত copy থেকে আলাদা; copy ও price অক্ষত রাখার নির্দেশ মেনে তা বদলানো হয়নি। Newsletter signup endpoint সরবরাহ করা হয়নি, তাই বিদ্যমান CTA-ই রাখা হয়েছে। `/about/`-এর missing PNG-গুলো আলাদা asset-fix কাজ।
