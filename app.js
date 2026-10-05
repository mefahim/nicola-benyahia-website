/* Nicola Benyahia static website preview — no framework or external runtime. */
(() => {
  'use strict';

  const LIVE = 'https://therapy.profahim.com';
  const app = document.getElementById('app');
  const navItems = [
    ['About', '/about/'],
    ['Therapy', '/therapy/'],
    ['RECLAIM™', '/reclaim/'],
    ['Coaching', '/coaching/'],
    ['Resources', '/resources/'],
    ['Lemmy Lou & Friends', '/lemmy-lou-and-friends/'],
    ['Contact', '/contact/']
  ];

  const products = [
    {
      slug: 'reclaim-workbook', title: 'The RECLAIM™ Workbook', family: 'RECLAIM™', kind: 'Adult resource',
      description: 'A self-guided workbook combining clinical insight with gentle, structured reflection. Across six chapters, it guides readers to map protective adaptations, explore internalised shame, clarify healthy boundaries and take steady steps toward a life of thriving.',
      format: 'Premium spiral-bound physical edition + instant PDF download; digital edition and printable journal included.',
      audience: 'Adults working through childhood trauma, people-pleasing and survival patterns.',
      features: ['Identify and appreciate protective coping mechanisms', 'Map nervous-system triggers and self-regulation anchors', 'Separate your true identity from past survival roles', 'Establish practical, non-negotiable boundaries with compassion'],
      external: '/product/reclaim-workbook', image: null, color: 'oat',
      notice: 'Self-guided material is not a substitute for individual psychotherapy or crisis support. It should not invite intensive trauma processing without appropriate clinical support.'
    },
    {
      slug: 'reclaim-guided-programme', title: 'RECLAIM™ Guided 8-Week Programme', family: 'RECLAIM™', kind: 'Guided cohort',
      description: 'A structured group cohort with live mentor facilitation. Participants move through RECLAIM™ in a held group setting with weekly video teaching, workbook integration calls and a secure private reflection space.',
      format: 'Eight-week live online cohort + resource portal; weekly live Zoom integration sessions (60 minutes).',
      audience: 'Adults seeking structured community support and guided step-by-step accountability.',
      features: ['Eight weeks of paced guidance through the RECLAIM™ method', 'Bi-weekly live Q&A and integration calls with Nicola', 'Private peer reflection space with compassionate group ground rules', 'RECLAIM™ Workbook package and audio grounding library'],
      external: '/product/reclaim-guided-programme', image: null, color: 'sage',
      notice: 'Participants should be in a stable emotional position. The current product page recommends 1:1 clinical therapy first for anyone experiencing acute crisis.'
    },
    {
      slug: 'reclaim-1on1-intensive', title: 'RECLAIM™ 1:1 Private Mentorship', family: 'RECLAIM™', kind: 'Individual pathway',
      description: 'A deeply personalised 1:1 pathway combining the RECLAIM™ methodology with coaching sessions directly with Nicola. Over twelve weeks, each stage is tailored to the client’s life history, relational patterns and future aspirations.',
      format: 'Twelve-week private 1:1 virtual mentorship.',
      audience: 'Individuals seeking bespoke, confidential guidance through the RECLAIM™ framework.',
      features: ['Twelve 60-minute private sessions with Nicola Benyahia MBE', 'A personalised roadmap tailored to life transitions', 'Direct email or messaging support between sessions', 'Personalised grounding exercises and reflective assignments'],
      external: '/product/reclaim-1on1-intensive', image: null, color: 'terracotta',
      notice: 'The source copy says suitability and the distinction between coaching and therapy should be made clear at assessment.'
    },
    {
      slug: 'my-big-feelings', title: 'My Big Feelings', family: 'Lemmy Lou & Friends', kind: 'Activity workbook',
      description: 'A colourful activity workbook designed to help children recognise, name and explore emotions in a safe, playful and engaging way.',
      format: 'Printed full-colour paperback; digital download also available.',
      audience: 'Ages 4–10; parents, teachers, pastoral teams and child therapists.',
      features: ['Recognise and name emotions such as anger, worry, sadness and joy', 'Learn how feelings can feel physically in the body', 'Explore safe ways to express big emotions without shame', 'Gentle conversation starters for parents and teachers'],
      external: '/product/my-big-feelings', image: '/assets/lemmy/my-big-feelings.webp', color: 'pink'
    },
    {
      slug: 'calm-with-me', title: 'Calm With Me', family: 'Lemmy Lou & Friends', kind: 'Activity workbook',
      description: 'Lemmy Lou and friends practise belly breathing, sensory grounding, muscle-relaxation games and gentle mindful movement. Designed for home routines, classroom calm corners or paediatric therapy settings.',
      format: 'Printed full-colour paperback; printable edition available.',
      audience: 'Children dealing with worry, anxiety, bedtime restlessness or sensory overwhelm.',
      features: ['Five easy breathing exercises children can remember anywhere', 'Five-senses grounding exercises for anxiety spikes', 'Bedtime calming routines to ease night-time worries', 'A printable Calm Corner poster'],
      external: '/product/calm-with-me', image: '/assets/lemmy/calm-with-me.webp', color: 'blue'
    },
    {
      slug: 'i-am-amazing', title: 'I Am Amazing', family: 'Lemmy Lou & Friends', kind: 'Activity workbook',
      description: 'A confidence-building workbook in which Lemmy Lou and friends show that being kind, creative, thoughtful or different is something to celebrate.',
      format: 'Printed full-colour paperback.',
      audience: 'Children building self-esteem, confidence and resilience.',
      features: ['Discover individual strengths and internal values', 'Celebrate neurodiversity, cultural richness and unique abilities', 'Reframe mistakes as natural opportunities for learning', 'Develop warm, self-compassionate inner speech'],
      external: '/product/i-am-amazing', image: '/assets/lemmy/i-am-amazing.webp', color: 'green'
    },
    {
      slug: 'worry-cloud-storybook', title: 'Lemmy Lou and the Worry Cloud', family: 'Lemmy Lou & Friends', kind: 'Storybook',
      description: 'One morning, Lemmy Lou finds a fluffy grey cloud above her head; it grows when she keeps her worries inside. She discovers that sharing her thoughts with trusted friends and adults can help the cloud shrink into sunshine.',
      format: 'Hardcover and paperback picture book.',
      audience: 'Children ages 3–8 experiencing worries or situational anxiety.',
      features: ['Normalises that everyone experiences worries', 'Encourages children to voice what feels scary or unsettling', 'Shows how adults and friends can listen without judgement', 'Parent and teacher prompts plus a Worry Cloud breathing bookmark'],
      external: '/product/worry-cloud-storybook', image: '/assets/lemmy/worry-cloud.webp', color: 'sky'
    },
    {
      slug: 'strong-little-no', title: 'Layth and the Strong Little No', family: 'Lemmy Lou & Friends', kind: 'Storybook',
      description: 'Layth loves helping everyone, but sometimes says yes when his tummy feels like saying no. He learns that a respectful “no” can protect his peace, keep him safe and still be kind.',
      format: 'Hardcover and paperback picture book.',
      audience: 'Children learning about personal boundaries, consent and healthy assertiveness.',
      features: ['Shows that saying no to unwanted touches or games is okay', 'Builds body autonomy in an age-appropriate, positive way', 'Models friends respecting one another’s boundaries', 'Parent and educator boundary conversation guide'],
      external: '/product/strong-little-no', image: '/assets/lemmy/strong-little-no.webp', color: 'mint'
    },
    {
      slug: 'affirmation-colouring-book', title: 'My Affirmation Colouring Book', family: 'Lemmy Lou & Friends', kind: 'Colouring book',
      description: 'Combines mindful colouring with affirming words such as “I Am Kind”, “I Am Brave”, “It Is Okay To Cry” and “My Feelings Matter”.',
      format: 'Paperback colouring book + printable PDF download.',
      audience: 'Ages 3–11; mindful calming sessions, home and classroom.',
      features: ['Calming fine-motor activity for transitions or quiet corners', 'Affirmations that support a positive self-concept', 'Thirty-six single-sided thick colouring pages', 'Bonus downloadable printable sheets'],
      external: '/product/affirmation-colouring-book', image: '/assets/lemmy/affirmation-colouring-book.jpg', color: 'cream'
    }
  ];

  const policyPages = {
    privacy: ['Privacy Policy', '/privacy'],
    terms: ['Terms & Conditions', '/terms'],
    cookies: ['Cookie Policy', '/cookies'],
    'booking-policy': ['Booking & Cancellation Policy', '/booking-policy'],
    'refund-policy': ['Refund Policy', '/refund-policy']
  };

  const routeMeta = {
    '/': ['Nicola Benyahia | Therapy, RECLAIM™ & Coaching', 'Trauma-informed therapy, RECLAIM™ programmes and forward-focused coaching with Nicola Benyahia.'],
    '/about/': ['About Nicola | Nicola Benyahia', 'Read Nicola Benyahia’s personal story and explore the experience behind her work.'],
    '/therapy/': ['Therapy & EMDR | Nicola Benyahia', 'Trauma-informed, person-centred counselling and EMDR for adults seeking therapeutic support.'],
    '/reclaim/': ['RECLAIM™ | Nicola Benyahia', 'A six-stage, trauma-informed personal recovery pathway for adults.'],
    '/coaching/': ['Coaching | Nicola Benyahia', 'Forward-focused coaching for confidence, identity, boundaries, direction and aligned action.'],
    '/resources/': ['Psychological Resources | Nicola Benyahia', 'Adult RECLAIM™ resources and the distinct Lemmy Lou & Friends children’s collection.'],
    '/lemmy-lou-and-friends/': ['Lemmy Lou & Friends | Nicola Benyahia', 'Explore the colourful, original Lemmy Lou & Friends emotional-wellbeing books and workbooks.'],
    '/contact/': ['Contact | Nicola Benyahia', 'Choose a pathway and continue to the current contact destination.'],
    '/discovery-call/': ['Discovery Call | Nicola Benyahia', 'Information about the current discovery-call route and how to continue there.'],
    '/faq/': ['Frequently Asked Questions | Nicola Benyahia', 'Answers based on the supplied site copy about Therapy, RECLAIM™, Coaching and resources.'],
    '/cart/': ['Shopping Bag | Nicola Benyahia', 'Continue to the existing shop for shopping-bag and order handling.']
  };

  function normalizePath(path) {
    let value = decodeURIComponent(path || '/').replace(/index\.html$/i, '');
    value = value.replace(/\/{2,}/g, '/');
    if (!value.startsWith('/')) value = `/${value}`;
    if (!value.endsWith('/')) value += '/';
    return value;
  }

  const currentPath = normalizePath(window.location.pathname);
  const local = (href, text, className = '', extra = '') => `<a class="${className}" href="${href}" ${extra}>${text}</a>`;
  const external = (href, text, className = '', extra = '') => {
    const mark = text.includes('↗') ? '' : '<span class="external-mark" aria-hidden="true">↗</span>';
    return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer" ${extra}>${text}${mark}<span class="sr-only"> (opens in a new tab)</span></a>`;
  };
  const live = (path) => `${LIVE}${path}`;
  const button = (href, text, style = 'button--primary') => local(href, `${text}<span class="button-arrow" aria-hidden="true">→</span>`, `button ${style}`);
  const liveButton = (path, text, style = 'button--primary') => external(live(path), `${text}`, `button ${style}`);
  const image = (src, alt, className = '', loading = 'lazy') => `<img class="${className}" src="${src}" alt="${alt}" loading="${loading}" decoding="async">`;
  const eyebrow = (text, extra = '') => `<p class="eyebrow ${extra}">${text}</p>`;
  const intro = (kicker, heading, copy = '', extra = '') => `<div class="section-heading ${extra}">${eyebrow(kicker)}<h2>${heading}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`;

  function header() {
    const nav = navItems.map(([label, href]) => {
      const active = currentPath === href || (href !== '/' && currentPath.startsWith(href) && href === '/lemmy-lou-and-friends/');
      return local(href, label, active ? 'nav-link is-active' : 'nav-link', active ? 'aria-current="page"' : '');
    }).join('');
    return `<a class="skip-link" href="#main-content">Skip to content</a>
      <header class="site-header">
        <div class="container header-row">
          <a class="brand-lockup" href="/" aria-label="Nicola Benyahia home">
            ${image('/assets/nicola-brand/brand-logo.webp', '', 'brand-logo', 'eager')}
            <span class="brand-copy"><strong>Nicola Benyahia</strong><small>Trauma Therapist · Coach · Creator of RECLAIM™</small></span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation"><span></span><span></span></button>
          <nav class="site-nav" id="site-navigation" aria-label="Main navigation">${nav}</nav>
          ${local('/discovery-call/', 'Start a conversation <span class="button-arrow" aria-hidden="true">→</span>', 'header-cta')}
        </div>
      </header>`;
  }

  function footer() {
    return `<footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="footer-brand__title" href="/">Nicola Benyahia</a>
          <p>Trauma Therapist · Coach · Creator of RECLAIM™</p>
          <p class="footer-quote">“Your past shaped you. It doesn’t have to define what comes next.”</p>
        </div>
        <div class="footer-links"><h2>Explore</h2><div>${local('/about/', 'About Nicola')}${local('/therapy/', 'Therapy & EMDR')}${local('/reclaim/', 'RECLAIM™')}${local('/coaching/', 'Coaching')}${local('/resources/', 'Resources')}${local('/lemmy-lou-and-friends/', 'Lemmy Lou & Friends')}${local('/faq/', 'FAQs')}${local('/contact/', 'Contact')}</div></div>
        <div class="footer-links"><h2>Current destinations</h2><div>${external(live('/discovery-call'), 'Discovery Call')}${external(live('/cart'), 'Shopping bag')}${external(live('/privacy'), 'Privacy Policy')}${external(live('/terms'), 'Terms & Conditions')}${external(live('/cookies'), 'Cookie Policy')}${external(live('/booking-policy'), 'Booking Policy')}${external(live('/refund-policy'), 'Refund Policy')}</div></div>
      </div>
      <div class="container footer-bottom"><span>© Nicola Benyahia</span><span>Preview links to current booking, shop and policy pages; no forms or checkout are simulated here.</span></div>
    </footer>`;
  }

  function pathwayCard(number, label, title, copy, href, theme) {
    return `<article class="pathway-card pathway-card--${theme}">
      <div class="pathway-card__top"><span class="pathway-number">${number}</span>${eyebrow(label)}</div>
      <h3>${title}</h3><p>${copy}</p>${local(href, `Explore ${title}<span class="text-arrow" aria-hidden="true">→</span>`, 'text-link')}
    </article>`;
  }

  function stageRow() {
    const stages = ['SURVIVE', 'UNDERSTAND', 'RELEASE', 'REDISCOVER', 'RECLAIM', 'THRIVE'];
    return `<ol class="stage-row" aria-label="The six RECLAIM stages">${stages.map((stage, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><strong>${stage}</strong></li>`).join('')}</ol>`;
  }

  function homePage() {
    return `<main id="main-content" class="page page-home">
      <section class="home-hero"><div class="container home-hero__grid">
        <div class="home-hero__copy">
          ${eyebrow('THERAPY · RECLAIM™ · COACHING')}
          <h1>Your past shaped you.<br><em>It doesn’t have to define what comes next.</em></h1>
          <p class="hero-lede">Trauma-informed therapy, RECLAIM™ programmes and coaching to help you understand what shaped you, reconnect with who you are and create a life in which you can thrive.</p>
          <div class="hero-actions">${local('/reclaim/', 'Explore RECLAIM™ <span aria-hidden="true">→</span>', 'button button--primary')}${local('/about/', 'Read Nicola’s story', 'text-link text-link--quiet')}</div>
          <p class="hero-signoff">Nicola Benyahia <span>Trauma Therapist · Coach · Creator of RECLAIM™</span></p>
        </div>
        <figure class="home-portrait-frame"><div class="portrait-arch"></div>${image('/assets/lemmy/nicola-portrait.jpg', 'Nicola Benyahia', 'home-portrait', 'eager')}<figcaption><span>Meet Nicola</span><span>Therapy · RECLAIM™ · Coaching</span></figcaption></figure>
      </div></section>
      <section class="home-context section-pad"><div class="container context-grid"><div>${eyebrow('A LIFE BEYOND SURVIVAL')}<h2>You survived.<br><em>Now it’s time to reclaim your life.</em></h2></div><div><p>Childhood experiences can continue to shape the way we see ourselves, relate to others and move through the world. My work is about understanding what shaped you without allowing it to dictate what comes next.</p><blockquote>“Healing is not about becoming somebody different. It is about reclaiming the person underneath the survival strategies.”</blockquote></div></div></section>
      <section class="pathways section-pad" id="ways-to-work"><div class="container">${intro('THREE DISTINCT PATHWAYS', 'A place to begin, in your own way', 'Different kinds of support meet different needs. Explore each pathway and choose the one that feels closest to where you are now.')}
        <div class="pathway-grid">${pathwayCard('01', 'Clinical support', 'Therapy & EMDR', 'A confidential, person-centred space for therapeutic support. Pace and focus are shaped around safety, readiness and individual needs.', '/therapy/', 'therapy')}${pathwayCard('02', 'Signature pathway', 'RECLAIM™', 'A structured journey to understand survival patterns, reconnect with identity and self-worth, and create what comes next.', '/reclaim/', 'reclaim')}${pathwayCard('03', 'Forward-focused', 'Coaching', 'Practical, reflective work around confidence, direction, identity, boundaries and turning insight into meaningful action.', '/coaching/', 'coaching')}</div>
      </div></section>
      <section class="reclaim-ribbon section-pad"><div class="container reclaim-ribbon__inner">${eyebrow('THE RECLAIM™ JOURNEY')}<div class="ribbon-heading"><h2>From surviving your past<br>to creating your future.</h2>${local('/reclaim/', 'Meet the six stages <span aria-hidden="true">→</span>', 'text-link')}</div>${stageRow()}<p class="ribbon-note">You survived what happened to you. Now you get to discover who you are beyond it.</p></div></section>
      <section class="approach section-pad"><div class="container approach-grid"><figure class="approach-photo">${image('/assets/about/about-photo-1.webp', 'Nicola speaking at a lectern', '', 'lazy')}<figcaption>A voice shaped by lived experience and professional practice</figcaption></figure><div>${eyebrow('A HUMAN, GROUNDED APPROACH')}<h2>Understanding the roots.<br><em>Making room for what comes next.</em></h2><p>I do not believe in surface-level motivation or simply telling people to think positively. I believe in understanding the roots of our patterns, integrating what we have lived through and building a future that is not controlled by fear.</p><p>Healing your past and building your future can happen alongside one another. Consistency matters more than perfection.</p>${local('/about/', 'More about Nicola’s story <span aria-hidden="true">→</span>', 'text-link')}</div></div></section>
      <section class="lemmy-preview section-pad"><div class="container lemmy-preview__grid"><div>${eyebrow('FOR CHILDREN & FAMILIES')}<h2>Big feelings.<br><em>Brighter days.</em></h2><p>Lemmy Lou & Friends is a playful collection of children’s emotional-wellbeing stories and activity books, created to open up gentle conversations about feelings, confidence and kindness.</p>${local('/lemmy-lou-and-friends/', 'Explore Lemmy Lou & Friends <span aria-hidden="true">→</span>', 'text-link')}</div><div class="mini-covers">${image('/assets/lemmy/my-big-feelings.webp', 'My Big Feelings workbook cover', 'mini-cover mini-cover--one')}${image('/assets/lemmy/calm-with-me.webp', 'Calm With Me workbook cover', 'mini-cover mini-cover--two')}${image('/assets/lemmy/worry-cloud.webp', 'Lemmy Lou and the Worry Cloud storybook cover', 'mini-cover mini-cover--three')}</div></div></section>
      <section class="closing-cta section-pad"><div class="container closing-cta__inner"><div>${eyebrow('A FIRST CONVERSATION')}<h2>You don’t have to stay<br>where you are.</h2><p>Choose the path that fits the support you are looking for.</p></div><div class="closing-cta__actions">${local('/discovery-call/', 'Explore the Discovery Call page <span aria-hidden="true">→</span>', 'button button--dark')}${local('/contact/', 'Contact options', 'text-link')}</div></div></section>
    </main>`;
  }

  function therapyPage() {
    const topics = ['Childhood trauma, neglect and abuse', 'Trauma and post-traumatic stress', 'Anxiety, overwhelm and emotional triggers', 'Low self-worth and shame', 'Relationship and attachment difficulties', 'Bereavement, loss and significant life events', 'Workplace stress, burnout and high-pressure roles', 'Identity, confidence and major life transitions'];
    return `<main id="main-content" class="page page-service page-therapy">
      <section class="service-hero"><div class="container service-hero__grid"><div>${eyebrow('CLINICAL SUPPORT · COUNSELLING & EMDR')}<h1>A safe space to understand, process and heal.</h1><p class="hero-lede">Sometimes moving forward requires more than insight or coaching. Therapy offers a confidential space to explore experiences that continue to affect emotional wellbeing, relationships, confidence and day-to-day life.</p><div class="hero-actions">${external(live('/discovery-call?intent=therapy'), 'Open the current Therapy Discovery Call page <span aria-hidden="true">↗</span>', 'button button--primary')}${local('/reclaim/', 'How RECLAIM™ differs', 'text-link text-link--quiet')}</div><p class="service-meta">Trauma-informed · Person-centred · Paced around safety</p></div><aside class="service-note service-note--peach"><span class="note-index">01</span><p>“The pace and focus of therapy are shaped around safety, readiness and your individual needs.”</p><span class="note-credit">From Nicola’s supplied therapy copy</span></aside></div></section>
      <section class="section-pad"><div class="container">${intro('THERAPY MAY SUPPORT', 'What you may want to bring into the room', 'The source copy describes therapy as a confidential place to explore how experiences continue to affect emotional wellbeing, relationships and everyday life.')}
        <ul class="support-list">${topics.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${item}</p></li>`).join('')}</ul>
      </div></section>
      <section class="safety-band section-pad"><div class="container safety-band__grid"><div>${eyebrow('A TRAUMA-INFORMED APPROACH')}<h2>Nothing is rushed.<br><em>Safety comes first.</em></h2></div><div><p>My approach is trauma-informed and person-centred, drawing on professional therapeutic experience and, where appropriate, EMDR and other evidence-informed approaches.</p><p>Therapy is not about forcing you to relive your story. The pace and focus are shaped around safety, readiness and your individual needs.</p>${external(live('/discovery-call?intent=therapy'), 'Open the existing discovery-call destination <span aria-hidden="true">↗</span>', 'text-link')}</div></div></section>
      <section class="section-pad service-contrast"><div class="container">${intro('CHOOSING THE RIGHT SUPPORT', 'Therapy is one pathway—not the only one', 'The supplied copy makes a clear distinction between clinical therapeutic support and the other ways to work with Nicola.')}
        <div class="contrast-grid">${pathwayCard('02', 'Structured adult pathway', 'RECLAIM™', 'For adults seeking a paced structure to understand patterns, reconnect with identity and strengthen boundaries.', '/reclaim/', 'reclaim')}${pathwayCard('03', 'Present to future', 'Coaching', 'For people ready to focus on confidence, direction, purpose, transitions and aligned action.', '/coaching/', 'coaching')}</div>
      </div></section>
    </main>`;
  }

  const reclaimStages = [
    ['SURVIVE', 'Understanding what protected you', 'Recognise the responses, beliefs and behaviours that helped you navigate childhood, and explore how they may still operate in adult life.'],
    ['UNDERSTAND', 'Making sense of your patterns', 'Explore how early experiences can influence self-worth, relationships, attachment, emotions, achievement, people-pleasing and the way you see yourself.'],
    ['RELEASE', 'Putting down what was never yours to carry', 'Begin challenging shame, misplaced responsibility, outdated beliefs and narratives that no longer serve the person you are becoming.'],
    ['REDISCOVER', 'Meeting the person underneath the protection', 'Reconnect with your needs, values, strengths, creativity, identity and the parts of yourself that may have been pushed aside in order to survive.'],
    ['RECLAIM', 'Taking back your voice and your space', 'Strengthen boundaries, self-trust and confidence. Practise being seen, heard and valued without automatically shrinking to keep others comfortable.'],
    ['THRIVE', 'Creating what comes next', 'Move beyond understanding the past and begin intentionally shaping relationships, goals, choices and a future that reflects who you are now.']
  ];

  function productCard(product, compact = false) {
    return `<article class="product-card product-card--${product.color} ${compact ? 'product-card--compact' : ''}">
      ${product.image ? `<a class="product-card__image" href="/product/${product.slug}/" aria-label="Read about ${product.title}">${image(product.image, `${product.title} cover`, '', 'lazy')}</a>` : `<div class="product-card__letter" aria-hidden="true">${product.family === 'RECLAIM™' ? 'R' : 'N'}</div>`}
      <div class="product-card__body">${eyebrow(product.kind)}<h3>${local(`/product/${product.slug}/`, product.title)}</h3><p>${product.description}</p>${local(`/product/${product.slug}/`, 'Explore this resource <span aria-hidden="true">→</span>', 'text-link')}</div>
    </article>`;
  }

  function reclaimPage() {
    return `<main id="main-content" class="page page-service page-reclaim">
      <section class="service-hero service-hero--reclaim"><div class="container service-hero__grid"><div>${eyebrow('SIGNATURE ADULT RECOVERY FRAMEWORK')}<h1>From surviving your past to creating your future.</h1><p class="hero-lede">RECLAIM™ is a trauma-informed personal recovery pathway for adults who experienced childhood trauma, neglect, instability or emotional unpredictability, and are ready to understand what shaped them, reconnect with who they are, and build a life beyond survival mode.</p><div class="hero-actions">${local('/reclaim/#the-six-stages', 'Explore the six stages <span aria-hidden="true">↓</span>', 'button button--primary')}${external(live('/discovery-call?intent=reclaim'), 'Open the current RECLAIM™ Discovery Call page <span aria-hidden="true">↗</span>', 'text-link text-link--quiet')}</div></div><aside class="reclaim-manifesto"><span>THE JOURNEY</span>${stageRow()}<blockquote>“You survived what happened to you. Now you get to discover who you are beyond it.”</blockquote></aside></div></section>
      <section class="section-pad" id="the-six-stages"><div class="container">${intro('THE RECLAIM™ JOURNEY', 'Six stages. One continuing story.', 'The focus is not on repeatedly revisiting traumatic memories. It is on making sense of survival patterns, developing self-compassion and self-trust, reconnecting with identity, strengthening boundaries and intentionally creating a life in which you can thrive.')}
        <ol class="stage-list">${reclaimStages.map(([name,subtitle,copy],i)=>`<li class="stage-item"><div class="stage-item__marker"><span>${String(i+1).padStart(2,'0')}</span><i aria-hidden="true"></i></div><div class="stage-item__copy">${eyebrow(`STAGE ${String(i+1).padStart(2,'0')}`)}<h3>${name}</h3><h4>${subtitle}</h4><p>${copy}</p></div></li>`).join('')}</ol>
      </div></section>
      <section class="section-pad product-pathways"><div class="container">${intro('WAYS TO EXPERIENCE RECLAIM™', 'Choose the level of guidance that fits', 'The current site offers self-guided, group and individual RECLAIM™ pathways. Their product and suitability details remain on the existing pages.')}
        <div class="product-grid product-grid--adult">${products.filter(p=>p.family==='RECLAIM™').map(p=>productCard(p)).join('')}</div>
      </div></section>
      <section class="clinical-note section-pad"><div class="container clinical-note__inner"><span class="clinical-note__mark" aria-hidden="true">!</span><div>${eyebrow('IMPORTANT CLINICAL & ETHICAL BOUNDARY')}<h2>RECLAIM™ does not replace individual psychotherapy or crisis support.</h2><p>Self-guided materials and group work should not encourage intensive trauma processing or detailed exposure to traumatic memories without appropriate clinical oversight. If you are experiencing acute psychological distress, individual clinical therapy may be the safer first step.</p>${local('/therapy/', 'Explore Therapy & EMDR <span aria-hidden="true">→</span>', 'text-link')}</div></div></section>
      <section class="closing-cta section-pad"><div class="container closing-cta__inner"><div>${eyebrow('NEXT STEP')}<h2>Begin where you are.</h2><p>Choose a pathway to read about, or open the existing discovery-call destination.</p></div><div class="closing-cta__actions">${external(live('/discovery-call?intent=reclaim'), 'Open the existing Discovery Call page <span aria-hidden="true">↗</span>', 'button button--dark')}${local('/resources/', 'Explore adult resources', 'text-link')}</div></div></section>
    </main>`;
  }

  function coachingPage() {
    const focuses = ['Confidence and self-trust', 'Imposter syndrome and fear of judgement', 'Feeling stuck despite ambition', 'Career or life transitions', 'Boundaries and people-pleasing', 'Identity and rediscovering yourself', 'Purpose, goals and direction', 'Turning ideas into action without waiting for perfection'];
    return `<main id="main-content" class="page page-service page-coaching">
      <section class="service-hero service-hero--coaching"><div class="container service-hero__grid"><div>${eyebrow('TRANSFORMATIONAL COACHING')}<h1>You understand where you have been.<br><em>Now, where do you want to go?</em></h1><p class="hero-lede">Coaching is for the stage where you want greater clarity, confidence and forward momentum. It can be valuable when old self-doubt or protective patterns still influence the choices you make, but are no longer the whole story.</p><p>Our work is practical and reflective: identifying what matters to you, recognising what is getting in the way and translating insight into meaningful action.</p><div class="hero-actions">${external(live('/discovery-call?intent=coaching'), 'Open the current Coaching Discovery Call page <span aria-hidden="true">↗</span>', 'button button--primary')}${local('/therapy/', 'See how Therapy differs', 'text-link text-link--quiet')}</div></div><aside class="service-note service-note--sage"><span class="note-index">03</span><p>“You understand where you have been. Now, where do you want to go?”</p><span class="note-credit">Forward-focused · Present to future</span></aside></div></section>
      <section class="section-pad"><div class="container">${intro('COACHING CAN FOCUS ON', 'Making room for aligned action', 'A grounded, practical partnership around what matters to you and the steps you want to take next.')}
        <ul class="support-list support-list--coaching">${focuses.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${item}</p></li>`).join('')}</ul>
      </div></section>
      <section class="coaching-distinction section-pad"><div class="container coaching-distinction__grid"><div>${eyebrow('ETHICAL CLARITY')}<h2>Coaching is not therapy.</h2></div><div><p>Therapy offers clinical support for processing unresolved trauma, abuse, grief or distress. Coaching is forward-focused on confidence, direction, purpose, transitions and action.</p><p>Where a client’s needs are primarily therapeutic rather than coaching-focused, this should be discussed openly so the most appropriate form of support can be offered.</p>${local('/therapy/', 'Read about Therapy & EMDR <span aria-hidden="true">→</span>', 'text-link')}</div></div></section>
      <section class="closing-cta section-pad"><div class="container closing-cta__inner"><div>${eyebrow('A FIRST CONVERSATION')}<h2>Take one considered step.</h2><p>Use the existing discovery-call destination to ask about coaching and suitability.</p></div><div class="closing-cta__actions">${external(live('/discovery-call?intent=coaching'), 'Open the current Discovery Call page <span aria-hidden="true">↗</span>', 'button button--dark')}${local('/contact/', 'Contact options', 'text-link')}</div></div></section>
    </main>`;
  }

  function aboutPage() {
    return `<main id="main-content" class="page page-about">
      <section class="about-hero"><div class="container about-hero__grid"><div class="about-hero__copy">${eyebrow('ABOUT NICOLA')}<h1>My story.</h1><p class="hero-lede">There was a time when I believed my past defined my future.</p><blockquote>“Healing the past and building the future do not have to be separate journeys.”</blockquote>${local('/therapy/', 'Explore the work I do <span aria-hidden="true">→</span>', 'text-link')}</div><figure class="about-hero__portrait">${image('/assets/lemmy/nicola-portrait.jpg', 'Nicola Benyahia', '', 'eager')}<figcaption>Nicola Benyahia</figcaption></figure></div></section>
      <article class="story-article"><div class="story-intro"><p>I grew up around instability, parental alcoholism, domestic violence, abuse and neglect. Safety was not always consistent, and I learned early how to adapt, stay alert and try to be what was needed.</p></div>
        <section class="story-moment story-moment--photos"><div class="story-moment__text"><span class="story-index">01</span><h2>Learning to adapt</h2><p>At school I was bullied and struggled academically. It was only in adulthood that I discovered I was dyslexic. By then, I had already absorbed a powerful story: that being different meant being behind, less capable or somehow not enough.</p><p>So I became a prover. A pusher. A performer.</p></div><div class="story-photo-pair"><figure>${image('/assets/about/about-photo-4.webp', 'Early childhood photograph from Nicola’s personal archive')}<figcaption>From my early years</figcaption></figure><figure>${image('/assets/about/about-photo-6.webp', 'Childhood photograph from Nicola’s personal archive')}<figcaption>A childhood memory</figcaption></figure></div></section>
        <section class="story-moment story-moment--reverse"><div class="story-moment__text"><span class="story-index">02</span><h2>The drive to prove myself</h2><p>I worked hard, reinvented myself, entered new careers, took on challenges and pushed myself physically too. Yet achievement did not automatically silence self-doubt or heal the younger parts of me that had learned to question whether I belonged.</p><p>Life later brought profound grief and experiences that changed me forever. Through that journey I learned that strength is not simply about carrying everything alone. It can mean allowing support, feeling what needs to be felt and continuing even when life has changed you.</p></div><aside class="story-pullquote"><span aria-hidden="true">“</span><p>Strength can mean allowing support—not carrying everything alone.</p></aside></section>
        <section class="story-moment story-moment--photo-right"><div class="story-moment__text"><span class="story-index">03</span><h2>Finding my voice</h2><p>I learned to say yes to opportunities that frightened me. Those yeses took me into rooms I once believed were not for someone like me, including writing, international speaking and recognition for my work.</p><p>Speaking about difficult truths helped me understand that different was never bad. Different could be perceptive, resilient, creative, intuitive and strong.</p></div><figure class="story-photo story-photo--podium">${image('/assets/about/about-photo-1.webp', 'Nicola speaking at a lectern')}<figcaption>Speaking at a public event</figcaption></figure></section>
        <section class="story-moment story-moment--photos"><div class="story-moment__text"><span class="story-index">04</span><h2>Recognition and the work</h2><p>My work grew from the meeting point between lived experience and professional practice. I dedicated years to clinical training, qualifying as an accredited counsellor with the British Association for Counselling and Psychotherapy and specialising in trauma and EMDR.</p><p>In 2020, I was honoured to receive an MBE for services to families, community and mental health. The recognition affirmed a commitment to bring trauma-informed safety, dignity and empowerment to my work.</p></div><div class="story-photo-pair story-photo-pair--formal"><figure>${image('/assets/about/about-photo-2.webp', 'Nicola at a formal recognition ceremony')}<figcaption>A formal recognition</figcaption></figure><figure>${image('/assets/about/about-photo-5.webp', 'Nicola at a formal celebration dinner')}<figcaption>A formal celebration</figcaption></figure></div></section>
        <section class="story-moment story-moment--photo-right"><div class="story-moment__text"><span class="story-index">05</span><h2>Life beyond the practice</h2><p>Therapy is one expression of who I am. Running and regular physical movement give me the grounded vitality to hold space for others and to keep showing up.</p><p>Today, through Therapy, RECLAIM™ and Coaching, I help people understand what shaped them, reconnect with who they are and create what comes next. Lemmy Lou & Friends grew from the wish to give children emotional language, tools and permission to feel.</p></div><figure class="story-photo story-photo--run">${image('/assets/about/about-photo-3.webp', 'Nicola running outdoors')}<figcaption>Movement, breath and a life beyond work</figcaption></figure></section>
        <section class="story-ending"><p class="story-ending__line">Evolution doesn’t end at survival.<br><em>It begins there.</em></p><p>Healing your past and building your future do not have to be separate. I continue to learn, grow and become—and I welcome you to explore which kind of support may fit your next step.</p><div>${local('/therapy/', 'Therapy & EMDR')}${local('/reclaim/', 'RECLAIM™')}${local('/coaching/', 'Coaching')}</div></section>
      </article>
      <section class="credential-strip"><div class="container credential-strip__inner"><span>${eyebrow('PROFESSIONAL PRACTICE')}</span><p><strong>Nicola Benyahia MBE</strong> <i aria-hidden="true">·</i> BACP Accredited Counsellor <i aria-hidden="true">·</i> EMDR Practitioner</p><p class="small-note">Credentials and professional information are drawn from the supplied copy and current site.</p></div></section>
    </main>`;
  }

  function resourcesPage() {
    const children = products.filter(p => p.family === 'Lemmy Lou & Friends');
    return `<main id="main-content" class="page page-resources">
      <section class="page-intro"><div class="container page-intro__inner">${eyebrow('PSYCHOLOGICAL RESOURCES')}<h1>Tools for understanding,<br><em>healing and growth.</em></h1><p class="hero-lede">The resource library brings together adult trauma-informed resources and a clearly separate children’s emotional-wellbeing collection.</p></div></section>
      <section class="section-pad"><div class="container resource-family resource-family--adult"><div class="resource-family__intro">${eyebrow('FOR ADULTS · RECLAIM™')}<h2>Structured resources for adults affected by early adversity.</h2><p>Guided workbooks and programmes to understand patterns, reconnect with yourself and begin building a life beyond survival.</p>${local('/reclaim/', 'Explore the RECLAIM™ pathway <span aria-hidden="true">→</span>', 'text-link')}</div><div class="product-grid product-grid--adult">${products.filter(p=>p.family==='RECLAIM™').map(p=>productCard(p,true)).join('')}</div></div></section>
      <section class="resource-kids section-pad"><div class="container"><div class="resource-family__intro">${eyebrow('FOR CHILDREN & FAMILIES · LEMMY LOU & FRIENDS')}<h2>Big feelings, playful learning and growing confidence.</h2><p>Activity workbooks and gentle stories for children and families. The collection keeps its own brighter visual identity while remaining part of Nicola’s resources.</p>${local('/lemmy-lou-and-friends/', 'Explore the children’s collection <span aria-hidden="true">→</span>', 'text-link')}</div><div class="product-grid product-grid--kids">${children.map(p=>productCard(p,true)).join('')}</div></div></section>
      <section class="section-pad resources-note"><div class="container resources-note__inner"><div>${eyebrow('A CLEAR DISTINCTION')}<h2>Adult and children’s resources are not the same pathway.</h2></div><p>RECLAIM™ is an adult trauma-informed recovery pathway. Lemmy Lou & Friends is a playful children’s emotional-wellbeing collection. Each has a different audience, purpose and visual language.</p></div></section>
    </main>`;
  }

  function lemmyPage() {
    const kids = products.filter(p => p.family === 'Lemmy Lou & Friends');
    return `<main id="main-content" class="page page-lemmy">
      <section class="lemmy-hero"><div class="container lemmy-hero__grid"><div class="lemmy-hero__copy">${eyebrow('A CHILDREN’S EMOTIONAL-WELLBEING COLLECTION')}<h1>Lemmy Lou<br><em>& Friends</em></h1><p class="lemmy-tagline">Big feelings. Brighter days.</p><p>A collection of therapeutic stories, activity books and emotional-wellbeing resources created to help children understand their feelings, build confidence and navigate life’s more difficult moments.</p><div class="hero-actions">${local('/lemmy-lou-and-friends/#collection', 'Explore the collection <span aria-hidden="true">→</span>', 'button button--lemmy')}${local('/resources/', 'For parents and professionals', 'text-link')}</div><p class="lemmy-motto">Kinder minds<br>brighter tomorrows</p></div><div class="lemmy-hero__art" aria-label="Original Lemmy Lou & Friends book covers">${image('/assets/lemmy/affirmation-colouring-book.jpg', 'My Affirmation Colouring Book cover', 'lemmy-cover lemmy-cover--hero')}${image('/assets/lemmy/my-big-feelings.webp', 'My Big Feelings workbook cover', 'lemmy-cover lemmy-cover--float-one')}${image('/assets/lemmy/worry-cloud.webp', 'Lemmy Lou and the Worry Cloud storybook cover', 'lemmy-cover lemmy-cover--float-two')}</div></div></section>
      <section class="lemmy-intro section-pad"><div class="container lemmy-intro__grid"><div>${eyebrow('MEET LEMMY LOU & FRIENDS')}<h2>Big feelings are part of being human.</h2><p>Lemmy Lou is curious, caring and sometimes has big feelings—just like all of us. Alongside her wonderfully diverse group of friends and animal companions, she discovers that it is okay to feel worried, sad, angry, nervous, different or unsure.</p></div><div class="lemmy-learnings"><h3>Through their adventures, children can explore how to:</h3><ul><li>recognise and name emotions</li><li>talk about difficult feelings</li><li>calm their bodies</li><li>build confidence and self-esteem</li><li>develop healthy boundaries</li><li>ask trusted adults for help</li><li>show kindness to themselves and others</li><li>celebrate difference</li></ul><p><strong>Most importantly, they can discover they do not have to work everything out alone.</strong></p></div></div></section>
      <section class="lemmy-products section-pad" id="collection"><div class="container">${intro('THE COLLECTION', 'Explore the books and workbooks', 'Real covers from the supplied Lemmy Lou & Friends collection. Product details and availability remain on each existing product page.', 'section-heading--lemmy')}<div class="lemmy-product-grid">${kids.map((p,i)=>`<article class="lemmy-product lemmy-product--${p.color}"><a class="lemmy-product__cover" href="/product/${p.slug}/" aria-label="Read about ${p.title}">${image(p.image, `${p.title} cover`, '', i<3?'eager':'lazy')}</a><div class="lemmy-product__body"><span class="lemmy-product__kind">${p.kind}</span><h3>${local(`/product/${p.slug}/`,p.title)}</h3><p>${p.description}</p>${local(`/product/${p.slug}/`, 'Discover this book <span aria-hidden="true">→</span>', 'lemmy-link')}</div></article>`).join('')}</div></div></section>
      <section class="lemmy-support section-pad"><div class="container lemmy-support__grid"><article class="lemmy-support__panel lemmy-support__panel--parents"><div class="support-doodle" aria-hidden="true">♡</div>${eyebrow('FOR PARENTS & CARERS')}<h2>Gentle conversation starters.</h2><p>Children do not always have the words to explain what they are feeling. Sometimes they show us through their behaviour instead. The books and activities can help with:</p><ul><li>introducing an activity or story</li><li>talking about difficult emotions</li><li>asking gentle, age-appropriate questions</li><li>noticing when a child may need additional support</li><li>continuing conversations beyond the book</li></ul></article><article class="lemmy-support__panel lemmy-support__panel--pros"><div class="support-doodle" aria-hidden="true">✳</div>${eyebrow('FOR PROFESSIONALS')}<h2>Resources for shared work.</h2><p>The collection may be useful to professionals who support children, including:</p><ul><li>counsellors and therapists</li><li>teachers and teaching assistants</li><li>SENCOs and pastoral teams</li><li>family support workers</li><li>social care professionals and youth workers</li></ul></article></div></section>
      <section class="lemmy-author section-pad"><div class="container lemmy-author__grid"><figure>${image('/assets/lemmy/nicola-portrait.jpg','Nicola Benyahia, creator of Lemmy Lou & Friends','', 'lazy')}<figcaption>Nicola Benyahia</figcaption></figure><div>${eyebrow('A NOTE FROM NICOLA')}<h2>Children deserve words for what they feel.</h2><p>I created Lemmy Lou & Friends because children experience enormous emotions long before they always have the language to explain them. Throughout my work as a counsellor and trauma therapist, I have seen how powerful it can be when someone finally feels able to say: “This is how I feel.”</p><p>My hope is that children reading these stories will recognise something of themselves in the characters and begin to understand that every feeling is allowed, asking for help is brave, and being exactly who you are is something worth celebrating.</p><p class="lemmy-author__signoff">Nicola Benyahia MBE</p></div></div></section>
      <section class="lemmy-safety"><div class="container"><p>Children’s resources are educational and supportive; they are not a substitute for individual therapeutic assessment or treatment.</p></div></section>
    </main>`;
  }

  function productPage(product) {
    const related = products.filter(p => p.family === product.family && p.slug !== product.slug).slice(0,3);
    return `<main id="main-content" class="page page-product page-product--${product.color}">
      <section class="product-hero"><div class="container product-hero__grid">${product.image ? `<figure class="product-hero__cover">${image(product.image, `${product.title} cover`, '', 'eager')}<figcaption>${product.family === 'Lemmy Lou & Friends' ? 'Original supplied cover' : ''}</figcaption></figure>` : `<div class="product-hero__symbol" aria-hidden="true">${product.family==='RECLAIM™'?'R':'N'}</div>`}<div class="product-hero__copy">${eyebrow(`${product.family} · ${product.kind}`)}<h1>${product.title}</h1><p class="hero-lede">${product.description}</p><p class="product-format">${product.format}</p><p class="product-audience"><strong>Intended audience:</strong> ${product.audience}</p>${external(live(product.external), 'View the current product page <span aria-hidden="true">↗</span>', 'button button--primary')}<p class="external-note">Product details and availability are handled on the existing site. This preview does not add items to a cart or process orders.</p></div></div></section>
      <section class="section-pad"><div class="container product-detail-grid"><div>${eyebrow('AT A GLANCE')}<h2>What this resource explores</h2></div><ul class="product-feature-list">${product.features.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${item}</p></li>`).join('')}</ul></div></section>
      ${product.notice ? `<section class="clinical-note clinical-note--product section-pad"><div class="container clinical-note__inner"><span class="clinical-note__mark" aria-hidden="true">!</span><div>${eyebrow('IMPORTANT NOTE')}<h2>Use with appropriate support.</h2><p>${product.notice}</p>${local('/therapy/', 'Read about Therapy & EMDR <span aria-hidden="true">→</span>', 'text-link')}</div></div></section>` : ''}
      ${related.length ? `<section class="section-pad related-products"><div class="container">${intro('MORE FROM THIS COLLECTION', 'Continue exploring', '')}<div class="product-grid product-grid--related">${related.map(p=>productCard(p,true)).join('')}</div>${local(product.family==='RECLAIM™'?'/reclaim/':'/lemmy-lou-and-friends/', 'Return to the collection <span aria-hidden="true">→</span>', 'text-link')}</div></section>`:''}
    </main>`;
  }

  function faqPage() {
    const items = [
      ['What is the difference between Therapy, RECLAIM™ and Coaching?', 'Therapy is clinical, trauma-informed counselling and may include EMDR where appropriate. RECLAIM™ is a structured adult recovery pathway focused on understanding survival patterns, reconnecting with identity and strengthening boundaries. Coaching is forward-focused around confidence, direction, transitions and aligned action.'],
      ['Does RECLAIM™ replace individual therapy?', 'No. The supplied RECLAIM™ copy says it is not intended to replace individual psychotherapy, psychiatric care or acute crisis support. Self-guided materials should not invite intensive trauma processing without appropriate clinical support.'],
      ['Will therapy require me to relive everything in detail?', 'The supplied therapy copy says therapy is not about forcing you to relive your story. The pace and focus are shaped around safety, readiness and your individual needs.'],
      ['How can I ask about working together?', 'The current site describes a confidential 20-minute Discovery Call. This static preview does not book or submit anything; it links to the existing Discovery Call page.'],
      ['Where do I find current product details?', 'Each resource page in this preview links to the corresponding existing product page, where current formats, availability and order handling are maintained.']
    ];
    return `<main id="main-content" class="page page-faq"><section class="page-intro"><div class="container page-intro__inner">${eyebrow('A FEW CLEAR ANSWERS')}<h1>Frequently asked<br><em>questions.</em></h1><p class="hero-lede">A helpful place to start when you are deciding which pathway or resource to explore.</p></div></section><section class="section-pad"><div class="container faq-layout"><aside class="faq-aside"><p>Choose the kind of support that reflects what you need now. If you are unsure, the existing Discovery Call destination is the place to ask about suitability.</p>${external(live('/discovery-call'), 'Open the current Discovery Call page <span aria-hidden="true">↗</span>', 'text-link')}</aside><div class="faq-list">${items.map(([q,a])=>`<details class="faq-item"><summary>${q}<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-answer"><p>${a}</p></div></details>`).join('')}</div></div></section></main>`;
  }

  function contactPage() {
    return `<main id="main-content" class="page page-contact"><section class="page-intro page-intro--peach"><div class="container page-intro__inner">${eyebrow('CONTACT & NEXT STEPS')}<h1>You don’t have to stay<br><em>where you are.</em></h1><p class="hero-lede">Whether you are looking for therapy, ready to explore RECLAIM™, want coaching to help you move forward or are browsing the resources, start with the pathway that best fits where you are now.</p></div></section><section class="section-pad"><div class="container contact-grid">${pathwayCard('01','Clinical support','Therapy & EMDR','Trauma-informed counselling for adults seeking therapeutic support.','/therapy/','therapy')}${pathwayCard('02','Structured recovery','RECLAIM™','A six-stage pathway from understanding survival patterns to creating what comes next.','/reclaim/','reclaim')}${pathwayCard('03','Forward-focused','Coaching','Reflective, practical work around confidence, purpose, boundaries and action.','/coaching/','coaching')}</div></section><section class="contact-destination section-pad"><div class="container contact-destination__inner"><div>${eyebrow('CURRENT CONTACT DESTINATION')}<h2>Continue to the existing practice page.</h2><p>This static preview does not collect or send messages. Use the current Contact page for enquiries.</p></div>${external(live('/contact'), 'Open the current Contact page <span aria-hidden="true">↗</span>', 'button button--dark')}</div></section></main>`;
  }

  function discoveryPage() {
    return `<main id="main-content" class="page page-discovery"><section class="page-intro page-intro--peach"><div class="container page-intro__inner">${eyebrow('A FIRST CONVERSATION')}<h1>Start with a<br><em>Discovery Call.</em></h1><p class="hero-lede">The current site describes a confidential 20-minute consultation to discuss your needs and identify a suitable pathway.</p></div></section><section class="section-pad"><div class="container discovery-grid"><div><h2>Choose the pathway you want to discuss.</h2><ul class="simple-list"><li>Trauma-informed Therapy & EMDR</li><li>The RECLAIM™ adult pathway</li><li>Forward-focused Coaching</li><li>Psychological resources for adults, children and families</li></ul></div><aside class="discovery-card"><span class="note-index">20</span><p class="discovery-card__label">MINUTES · CONFIDENTIAL</p><h3>Continue on the existing site.</h3><p>This preview has no scheduler or booking form. The button opens Nicola’s current Discovery Call destination.</p>${external(live('/discovery-call'), 'Open the current Discovery Call page <span aria-hidden="true">↗</span>', 'button button--primary')}${local('/contact/', 'See contact options', 'text-link')}</aside></div></section></main>`;
  }

  function cartPage() {
    return `<main id="main-content" class="page page-cart"><section class="page-intro"><div class="container page-intro__inner">${eyebrow('SHOPPING BAG & ORDERS')}<h1>Continue to the<br><em>existing shop.</em></h1><p class="hero-lede">Shopping-bag, checkout and order handling remain with the current store.</p></div></section><section class="section-pad"><div class="container cart-notice"><div class="cart-notice__symbol" aria-hidden="true">—</div><div><h2>No cart is simulated in this preview.</h2><p>This static site does not store cart contents, accept payment or submit an order. Use the verified current destination for shopping-bag and order functionality.</p>${external(live('/cart'), 'Open the current shopping bag <span aria-hidden="true">↗</span>', 'button button--dark')}${local('/resources/', 'Return to resources', 'text-link')}</div></div></section></main>`;
  }

  function policyPage(key) {
    const [title, path] = policyPages[key];
    return `<main id="main-content" class="page page-policy"><section class="page-intro"><div class="container page-intro__inner">${eyebrow('CURRENT PRACTICE POLICY')}<h1>${title}</h1><p class="hero-lede">The existing practice website maintains the current policy text. This preview links there rather than reproducing or revising legal wording.</p></div></section><section class="section-pad"><div class="container policy-notice"><p>For the latest version and full policy wording, open the official page on the current practice website.</p>${external(live(path), `Read the current ${title} <span aria-hidden="true">↗</span>`, 'button button--dark')}<p class="small-note">The static preview contains no replacement legal terms or policy text.</p></div></section></main>`;
  }

  function notFoundPage() {
    return `<main id="main-content" class="page page-not-found"><section class="page-intro"><div class="container page-intro__inner">${eyebrow('PAGE NOT FOUND')}<h1>This path doesn’t<br><em>lead anywhere here.</em></h1><p class="hero-lede">Try one of the main pages, or return to the home page.</p>${local('/', 'Return home <span aria-hidden="true">→</span>', 'button button--primary')}</div></section></main>`;
  }

  function renderPage() {
    if (currentPath === '/') return homePage();
    if (currentPath === '/about/') return aboutPage();
    if (currentPath === '/therapy/') return therapyPage();
    if (currentPath === '/reclaim/') return reclaimPage();
    if (currentPath === '/coaching/') return coachingPage();
    if (currentPath === '/resources/') return resourcesPage();
    if (currentPath === '/lemmy-lou-and-friends/') return lemmyPage();
    if (currentPath === '/contact/') return contactPage();
    if (currentPath === '/discovery-call/') return discoveryPage();
    if (currentPath === '/faq/') return faqPage();
    if (currentPath === '/cart/') return cartPage();
    const productMatch = currentPath.match(/^\/product\/([^/]+)\/$/);
    if (productMatch) {
      const product = products.find(p => p.slug === productMatch[1]);
      return product ? productPage(product) : notFoundPage();
    }
    const policyMatch = currentPath.match(/^\/(privacy|terms|cookies|booking-policy|refund-policy)\/$/);
    if (policyMatch) return policyPage(policyMatch[1]);
    return notFoundPage();
  }

  const isLemmy = currentPath === '/lemmy-lou-and-friends/' || currentPath.startsWith('/product/') && products.some(p => p.family === 'Lemmy Lou & Friends' && currentPath.includes(p.slug));
  document.documentElement.classList.toggle('theme-lemmy', isLemmy);
  const meta = routeMeta[currentPath] || (currentPath.startsWith('/product/') ? (() => { const slug = currentPath.split('/')[2]; const p = products.find(x => x.slug === slug); return p ? [`${p.title} | Nicola Benyahia`, `${p.description} View details on the existing product page.`] : ['Page not found | Nicola Benyahia', 'The requested page was not found.']; })() : (() => { const key = currentPath.replace(/^\//,'').replace(/\/$/,''); const p = policyPages[key]; return p ? [`${p[0]} | Nicola Benyahia`, `Open the current ${p[0]} on the existing practice website.`] : ['Page not found | Nicola Benyahia', 'The requested page was not found.']; })());
  document.title = meta[0];
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta[1]);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `${window.location.origin}${currentPath}`);
  app.innerHTML = `${header()}${renderPage()}${footer()}`;

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }
})();
