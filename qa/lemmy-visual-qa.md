# Lemmy Lou & Friends — Visual QA

## রেফারেন্স

- ক্লায়েন্টের অনুমোদিত এক-পৃষ্ঠার PDF mockup: `Lemmy_Lou_Friends_Website_Visual_Mockup (1).pdf` (Google Drive থেকে পড়া হয়েছে; repository-তেও অনুমোদিত visual reference রয়েছে)।
- ডেস্কটপ, ট্যাবলেট ও মোবাইলের page order, brand colours, character artwork, book covers, Nicola-র ছবি, shop/newsletter callout এবং footer একই visual direction-এ পুনর্গঠন করা হয়েছে।
- ব্যবহার করা artwork ও book covers প্রকল্পে থাকা client-supplied Lemmy images থেকে নেওয়া; stock বা AI-generated image যোগ করা হয়নি।

## পরীক্ষার ফল

| Viewport | আকার | HTTP | Page width | Overflow | ভাঙা ছবি | JavaScript error |
|---|---:|---:|---:|---|---:|---:|
| Desktop | 1440 × 900 | 200 | 1440 / 1440 px | নেই | 0 | 0 |
| Tablet | 768 × 1024 | 200 | 768 / 768 px | নেই | 0 | 0 |
| Mobile | 390 × 844 | 200 | 390 / 390 px | নেই | 0 | 0 |

- ৯টি প্রধান section সঠিক ক্রমে রেন্ডার হয়েছে: Hero → Meet Lemmy Lou & Friends → Explore the Collection → Parents & Carers / Professionals → Shop → A Little Note From Nicola → newsletter callout → closing CTA → safety note.
- একটি H1, সব local images-এর load/decode, section order এবং internal link safety যাচাই হয়েছে। `fhf.bro.bd` ও `therapy.profahim.com`-এ কোনো link যোগ করা হয়নি; internal route `/nicola/` base path-এ রয়েছে।
- Mobile navigation খোলা এবং Escape দিয়ে বন্ধ—দুটিই পাস করেছে। `My Big Feelings`-এর বিদ্যমান product-detail route সরাসরি HTTP 200 দিয়েছে।
- JavaScript syntax (`node --check app.js`) এবং Python QA harness syntax (`python3 -m py_compile qa/acceptance.py`) পাস করেছে। Root ও `public/` source mirrors সমান।

## Capture

- `qa/captures/mockup-review/lemmy-desktop.png`
- `qa/captures/mockup-review/lemmy-tablet.png`
- `qa/captures/mockup-review/lemmy-mobile.png`

## Newsletter সীমাবদ্ধতা

Mockup-এ email signup field দেখা গেলেও প্রকল্পের handoff নির্দেশনা নতুন mailing-list form নিষিদ্ধ করেছে এবং কোনো verified signup endpoint দেওয়া নেই। তাই ভুয়া submit behavior না বানিয়ে section-টি রাখা হয়েছে এবং CTA-কে বিদ্যমান `/nicola/resources/` route-এ যুক্ত করা হয়েছে।

## বিস্তৃত regression run-এর পর্যবেক্ষণ

বিদ্যমান ২৬টি route-কে ৩টি viewport-এ চালিয়ে মোট ৭৮টি render/capture করা হয়েছে। Lemmy route-এর তিনটি render-ই পাস করেছে। সম্পূর্ণ suite-এর non-Lemmy findings—হাত না দেওয়া, কারণ সেগুলো এই কাজের পরিধির বাইরে:

- Harness-এর external-host allowlist-এ পুরোনো `therapy.profahim.com` আছে, কিন্তু অনুমোদিত canonical host `fhf.pro.bd` নেই; ফলে host check ৭৮টি route/viewport-তে warning দিয়েছে।
- `About` route-এর `public/assets/about/` mirror-এ চারটি পূর্বস্থিত PNG অনুপস্থিত; তিন viewport-এ সেগুলো broken-image finding এবং ১২টি সংশ্লিষ্ট browser 404 তৈরি করেছে। Lemmy page-এর asset বা route-এ এর প্রভাব নেই।

## Deployment

এই কাজটি repository-র static preview-তে সীমিত রাখা হয়েছে। Project handoff-এ production deployment-এর জন্য পৃথক স্পষ্ট authorization প্রয়োজন বলা আছে; তাই production server-এ কোনো ফাইল পরিবর্তন বা deploy করা হয়নি।
