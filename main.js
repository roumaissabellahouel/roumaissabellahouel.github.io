import { PROJECTS as PROJECTS_FR, PROJECTS_EN } from './assets/js/projects-data.js?v=6';
import { LANG, UI, applyI18n } from './assets/js/i18n.js?v=1';

// Must run before anything reads page text: the GSAP word splits (hero H1,
// About paragraph) and the project cards are built from the translated DOM.
applyI18n();

// Project data in the current language — English overrides merged over the
// French source; gallery captions are swapped by index.
const PROJECTS = LANG === 'en'
  ? Object.fromEntries(
      Object.entries(PROJECTS_FR).map(([id, p]) => {
        const en = PROJECTS_EN[id] || {};
        const gallery = p.gallery.map((g, i) => ({ ...g, caption: en.captions?.[i] ?? g.caption }));
        return [id, { ...p, ...en, gallery }];
      })
    )
  : PROJECTS_FR;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

/* ==========================================================================
   Project cards — rendered from projects-data.js into every
   [data-projects] grid ("all" or a comma-separated list of ids). Runs before
   the GSAP setup and the category filters below, which both query
   .project-card at init.
   ========================================================================== */
const projectCardHTML = (id, p) => {
  const name = p.shortTitle || p.title;
  const media = p.cover
    ? `<img src="${p.cover}" alt="${name} — ${UI.preview}" loading="lazy">`
    : `<div class="project-card__placeholder"><span>${name}</span><small>${p.stack.slice(0, 3).join(' · ')}</small></div>`;
  return `
    <article class="project-card" data-reveal data-category="${p.type}">
      <a href="projet.html?id=${id}" class="project-card__link" aria-label="${UI.viewProject} ${name}">
        <div class="project-card__media">${media}</div>
        <div class="project-card__info">
          <span class="project-card__category">${p.category} · ${p.year}</span>
          <div class="project-card__row">
            <h3 class="project-card__title">${name}</h3>
            <span class="project-card__arrow" aria-hidden="true">↗</span>
          </div>
          <p class="project-card__context">${p.context} · ${p.team}</p>
          <ul class="tech-pills tech-pills--sm">${p.stack.slice(0, 4).map((t) => `<li>${t}</li>`).join('')}</ul>
        </div>
      </a>
    </article>`;
};

document.querySelectorAll('[data-projects]').forEach((grid) => {
  const ids = grid.dataset.projects === 'all' ? Object.keys(PROJECTS) : grid.dataset.projects.split(',');
  grid.innerHTML = ids
    .filter((id) => PROJECTS[id])
    .map((id) => projectCardHTML(id, PROJECTS[id]))
    .join('');
});

/* ==========================================================================
   Lenis smooth scroll + GSAP ScrollTrigger sync
   ========================================================================== */
let lenis;
if (!prefersReducedMotion && window.Lenis) {
  lenis = new Lenis({
    duration: 0.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  // Drive Lenis off GSAP's ticker rather than a bare requestAnimationFrame loop —
  // a plain rAF loop desyncs Lenis' smoothed scroll position from ScrollTrigger,
  // a well-known integration gotcha. This achieves the same per-frame raf() call.
  lenis.on('scroll', () => window.ScrollTrigger && ScrollTrigger.update());
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ==========================================================================
   GSAP setup
   ========================================================================== */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  // Split hero H1 into per-word spans up front (needed before the load timeline runs).
  document.querySelectorAll('.hero__title-line').forEach((line) => {
    // background-clip:text only clips an element's own direct text — once words move
    // into child spans, the gradient class has to move with them or the clip has nothing to paint.
    const isGradient = line.classList.contains('hero__title-line--gradient');
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words
      .map(
        (w) =>
          `<span class="word${isGradient ? ' hero__title-line--gradient' : ''}" style="display:inline-block">${w}</span>`
      )
      .join(' ');
  });

  // Split the About paragraph into per-word spans, scoped under .about so it can't
  // collide with the hero's own `.word` spans.
  const aboutText = document.getElementById('about-reveal-text');
  if (aboutText) {
    const words = aboutText.textContent.trim().split(/\s+/);
    aboutText.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(' ');
  }

  if (prefersReducedMotion) {
    gsap.set('[data-reveal], .navbar, .hero__title .word, .hero__cta-row > .btn, .hero__stats .stat-card', {
      opacity: 1,
      y: 0,
    });
    gsap.set('.about .word', { opacity: 1 });
    document.querySelectorAll('[data-count]').forEach((el) => {
      el.textContent = el.dataset.count;
    });
  } else {
    /* ------------------------------------------------------------------
       Entrance timeline: navbar, badge, H1 words, subtitle, buttons, stats —
       each on its own delay. Runs immediately rather than waiting for the
       window 'load' event: 'load' waits for every resource including the
       heavy TubesCursor 3D module, which can take seconds (or, on a flaky
       connection, much longer) — confirmed by testing that gating this on
       'load' left the navbar/headline invisible well past 3s when that one
       resource was slow. The CSS default (opacity:0) already prevents FOUC,
       so there's no reason to delay past "the script has run."
       ------------------------------------------------------------------ */
    const tl = gsap.timeline();
    tl.from('.navbar', { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .from('.hero .badge', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.3)
      .from(
        '.hero__title .word',
        { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
        0.3
      )
      .from('.hero__subtitle', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.8)
      .from(
        '.hero__cta-row > .btn',
        { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
        1
      )
      .from(
        '.hero__stats .stat-card',
        { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
        1.2
      );

    /* ------------------------------------------------------------------
       Section title reveal — projects, about, contact
       ------------------------------------------------------------------ */
    document.querySelectorAll('.section-title, .contact__title').forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el.closest('section'), start: 'top 80%' },
      });
    });

    /* ------------------------------------------------------------------
       Project cards — stagger reveal
       ------------------------------------------------------------------ */
    gsap.from('.project-card', {
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.projects', start: 'top 70%' },
    });

    /* ------------------------------------------------------------------
       About word reveal
       ------------------------------------------------------------------ */
    if (aboutText) {
      gsap.from('.about .word', {
        opacity: 0.1,
        stagger: 0.05,
        ease: 'none',
        duration: 0.5,
        scrollTrigger: { trigger: '.about', start: 'top 60%' },
      });
    }

    /* ------------------------------------------------------------------
       Remaining below-fold reveals not covered above
       (About stats column, Contact
       WhatsApp button + socials)
       ------------------------------------------------------------------ */
    const handled = new Set([
      ...document.querySelectorAll('.section-title, .contact__title, .project-card'),
    ]);
    [...document.querySelectorAll('[data-reveal]')]
      .filter((el) => !el.closest('.hero') && !handled.has(el))
      .forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: (i % 4) * 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

    /* ------------------------------------------------------------------
       Count-up stats. Hero stats are above the fold — count up on a fixed
       delay synced to the load timeline rather than relying on ScrollTrigger's
       "already in view at creation" detection, which races against web-font-load
       layout shifts and is flaky (confirmed: same wait, two runs, 0 vs counted).
       Below-the-fold stats (About section) stay scroll-triggered.
       ------------------------------------------------------------------ */
    document.querySelectorAll('[data-count]').forEach((el) => {
      const target = Number(el.dataset.count);
      const counter = { val: 0 };
      const countUp = () => {
        gsap.to(counter, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          snap: { val: 1 },
          onUpdate: () => (el.textContent = Math.round(counter.val)),
        });
      };

      if (el.closest('.hero')) {
        gsap.delayedCall(1.4, countUp); // after the 1.2s stat-card reveal kicks in
        return;
      }

      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: countUp });
    });

    /* ------------------------------------------------------------------
       Floating hero orbs — each one animates independently, offset by a
       start delay rather than GSAP's `stagger` option. `stagger` combined
       with `yoyo`/`repeat` on a single multi-target tween treats the whole
       staggered group as one repeating unit (confirmed via testing: the
       "per-orb" tween actually reported duration:7 — the full staggered
       span — and moved as a synced sweep-then-reverse, not independent
       4s bobbing per orb).
       ------------------------------------------------------------------ */
    document.querySelectorAll('.hero .orb').forEach((orb, i) => {
      gsap.to(orb, {
        y: -30,
        duration: 4,
        delay: i * 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    });
  }
}

/* ==========================================================================
   Typed.js — cycling roles under the H1
   ========================================================================== */
if (!prefersReducedMotion && window.Typed && document.getElementById('typed-text')) {
  new Typed('#typed-text', {
    strings: UI.typed,
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });
} else {
  const typedEl = document.getElementById('typed-text');
  if (typedEl) typedEl.textContent = UI.typed[0];
}

/* ==========================================================================
   TubesCursor 3D background (ES module import from CDN)
   ========================================================================== */
if (!prefersReducedMotion) {
  import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
    .then(({ default: TubesCursor }) => {
      const canvas = document.getElementById('canvas');
      if (!canvas) return;
      TubesCursor(canvas, {
        tubes: {
          colors: [0xff008a, 0x8b5cf6, 0x3b82f6, 0xffffff],
          // Lower geometry complexity than the library default (was count:16,
          // segments up to 128) — same colors/motion, noticeably less GPU work
          // per frame since this renders continuously, every frame, forever.
          count: 10,
          minTubularSegments: 24,
          maxTubularSegments: 64,
          lights: {
            intensity: 50,
            colors: [0xff008a, 0x8b5cf6, 0x3b82f6, 0xffffff],
          },
        },
      });
    })
    .catch((err) => console.warn('TubesCursor failed to load:', err));
} else {
  const canvas = document.getElementById('canvas');
  if (canvas) canvas.style.display = 'none';
}

/* ==========================================================================
   Custom pink cursor — dot scales 2x on hover, follower ring disappears
   ========================================================================== */
if (window.matchMedia('(hover: hover)').matches) {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll('a, button, .card, .magnetic').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('is-hovering');
      ring.classList.add('is-hovering');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('is-hovering');
      ring.classList.remove('is-hovering');
    });
  });
}

/* ==========================================================================
   Magnetic button effect — CTA buttons
   ========================================================================== */
if (!prefersReducedMotion) {
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${dx * 0.3}px, ${dy * 0.3}px)`;
      btn.style.transition = 'transform 0s';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.4s ease';
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* ==========================================================================
   Navbar: scroll state + mobile menu toggle
   ========================================================================== */
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll);
onScroll();

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ==========================================================================
   WhatsApp CTAs
   ========================================================================== */
const WHATSAPP_NUMBER = '213557246588';
const whatsappHref = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : '#';
['whatsapp-cta-main'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = whatsappHref;
});

/* ==========================================================================
   Project detail page (projet.html) — populate from ?id= and wire up the
   gallery carousel. Guarded on #pd-title so this is a no-op on every other
   page that also loads this shared script.
   ========================================================================== */
const pdTitle = document.getElementById('pd-title');
if (pdTitle) {
  const id = new URLSearchParams(location.search).get('id');
  const data = PROJECTS[id];

  if (!data) {
    location.href = 'projets.html';
  } else {
    const setText = (elId, text) => (document.getElementById(elId).textContent = text);
    document.title = `${data.title} — Roumaissa Bellahouel`;
    setText('pd-category', data.category);
    pdTitle.textContent = data.title;
    setText('pd-context', `${data.context} · ${data.year}`);
    setText('pd-summary', data.summary);
    // No role written yet (e.g. HeureSup) → hide the "Mon rôle" block instead of showing it empty
    if (data.role) setText('pd-role', data.role);
    else document.getElementById('pd-role').closest('.pd-block').remove();
    setText('pd-meta-context', data.context);
    setText('pd-meta-year', data.year);
    setText('pd-meta-team', data.team);
    document.getElementById('pd-stack').innerHTML = data.stack.map((t) => `<li>${t}</li>`).join('');
    document.getElementById('pd-features').innerHTML = data.features.map((f) => `<li>${f}</li>`).join('');

    // Live demo and/or source code — private repos simply have no `repo`
    const links = [];
    if (data.url) links.push(`<a href="${data.url}" target="_blank" rel="noopener" class="btn btn--primary btn--shimmer magnetic">${UI.liveSite}</a>`);
    if (data.repo) links.push(`<a href="${data.repo}" target="_blank" rel="noopener" class="btn btn--glass magnetic">${UI.sourceCode}</a>`);
    document.getElementById('pd-links').innerHTML = links.join('');

    const pdTrack = document.getElementById('pd-track');
    if (!data.gallery.length) {
      document.getElementById('pd-gallery').hidden = true;
    } else {
      pdTrack.innerHTML = data.gallery
        .map(
          (g) =>
            `<figure class="carousel__slide"><img src="${g.src}" alt="${data.title} — ${g.caption}" loading="lazy"><figcaption>${g.caption}</figcaption></figure>`
        )
        .join('');

      const dotsWrap = document.getElementById('pd-dots');
      dotsWrap.innerHTML = data.gallery
        .map((_, i) => `<button type="button" class="carousel__dot${i === 0 ? ' is-active' : ''}" aria-label="${UI.goToImage} ${i + 1}"></button>`)
        .join('');

      const slides = [...pdTrack.querySelectorAll('.carousel__slide')];
      const dots = [...dotsWrap.querySelectorAll('.carousel__dot')];

      const goTo = (i) => slides[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

      const activeIndex = () =>
        slides.reduce((closest, s, i) => {
          const d = Math.abs(s.getBoundingClientRect().left - pdTrack.getBoundingClientRect().left);
          return d < closest.d ? { i, d } : closest;
        }, { i: 0, d: Infinity }).i;

      document.getElementById('pd-prev')?.addEventListener('click', () => goTo(Math.max(0, activeIndex() - 1)));
      document.getElementById('pd-next')?.addEventListener('click', () => goTo(Math.min(slides.length - 1, activeIndex() + 1)));

      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const i = slides.indexOf(entry.target);
              dots.forEach((d) => d.classList.remove('is-active'));
              dots[i]?.classList.add('is-active');
            });
          },
          { root: pdTrack, threshold: 0.6 }
        );
        slides.forEach((s) => io.observe(s));
      }
    }
  }
}

/* ==========================================================================
   Project category filters
   ========================================================================== */
const filterPills = document.querySelectorAll('.filter-pill');
const projectCards = document.querySelectorAll('.project-card');
filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    filterPills.forEach((p) => p.classList.remove('is-active'));
    pill.classList.add('is-active');
    const filter = pill.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
});
