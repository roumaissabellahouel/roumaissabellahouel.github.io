/* ==========================================================================
   FR / EN translations.

   The HTML is written in French, so French works even without JS. Static
   elements carry data-i18n="key" (textContent), data-i18n-attr="attr:key"
   (one or more, separated by ';') and data-cv (CV download links). On load,
   applyI18n() swaps in the English strings when LANG is 'en'.

   UI holds strings for content that main.js generates (typewriter, project
   cards, detail page) — those need both languages.

   Language choice: ?lang= in the URL > saved choice > browser language
   (English browsers get English, everything else French).
   ========================================================================== */
const SUPPORTED = ['fr', 'en'];

const storage = {
  get() { try { return localStorage.getItem('lang'); } catch { return null; } },
  set(v) { try { localStorage.setItem('lang', v); } catch { /* private mode */ } },
};

const fromUrl = new URLSearchParams(location.search).get('lang');
export const LANG = SUPPORTED.includes(fromUrl)
  ? fromUrl
  : SUPPORTED.includes(storage.get())
    ? storage.get()
    : (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr';
if (SUPPORTED.includes(fromUrl)) storage.set(fromUrl);

const CV = {
  fr: 'assets/cv/CV-Roumaissa-Bellahouel.pdf',
  en: 'assets/cv/CV-Roumaissa-Bellahouel-EN.pdf',
};

export const UI = {
  fr: {
    typed: ['Développeuse Full-Stack.', 'Développeuse Front-End.', 'Élève ingénieure à l’ESI-SBA.'],
    viewProject: 'Voir le projet',
    preview: 'aperçu',
    liveSite: 'Voir le site en ligne →',
    sourceCode: 'Code source sur GitHub →',
    goToImage: 'Aller à l’image',
    switchLabel: 'Switch to English',
  },
  en: {
    typed: ['Full-Stack Developer.', 'Front-End Developer.', 'Engineering student at ESI-SBA.'],
    viewProject: 'View project',
    preview: 'preview',
    liveSite: 'View live site →',
    sourceCode: 'Source code on GitHub →',
    goToImage: 'Go to image',
    switchLabel: 'Passer en français',
  },
}[LANG];

const EN = {
  // <head>
  'meta.homeTitle': 'Roumaissa Bellahouel — Engineering Student · Full-Stack Developer',
  'meta.homeDesc': "Portfolio of Roumaissa Bellahouel, final-year computer science engineering student at ESI Sidi Bel Abbès (Information Systems & Web). Seeking a final-year internship from January 2027.",
  'meta.projectsTitle': 'All projects — Roumaissa Bellahouel',
  'meta.projectsDesc': "Projects by Roumaissa Bellahouel, engineering student at ESI-SBA: academic team projects (microservices, MERN) and web applications delivered to real clients, with tech stack and role.",
  'meta.projectTitle': 'Project — Roumaissa Bellahouel',
  'meta.projectDesc': 'Project details by Roumaissa Bellahouel — tech stack, architecture and role.',

  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.parcours': 'Background',
  'nav.contact': 'Contact',
  'nav.cv': 'My CV ↓',
  'nav.menu': 'Open menu',

  // Hero
  'hero.badge': 'SEEKING A FINAL-YEAR INTERNSHIP · FROM JANUARY 2027',
  'hero.hello': "Hi, I'm",
  'hero.subtitle':
    'Final-year computer science engineering student at the Higher School of Computer Science (ESI) ' +
    'in Sidi Bel Abbès, majoring in Information Systems & Web.',
  'hero.ctaProjects': 'See my projects →',
  'hero.ctaCv': 'Download my CV ↓',
  'hero.scroll': 'Scroll down',
  'stats.projects': 'Projects built',
  'stats.clients': 'Client projects',
  'stats.internship': 'Company internship',

  // About
  'about.eyebrow': '✦ ABOUT',
  'about.title': 'About me',
  'about.text':
    "I'm a final-year computer science engineering student at ESI Sidi Bel Abbès, majoring in " +
    'Information Systems & Web. I enjoy building complete applications, from the data model to the ' +
    'interface. Alongside my studies, I have built and delivered web applications for Algerian ' +
    'businesses: e-commerce, management dashboards and an AI chatbot. I am now looking for a ' +
    'final-year internship starting in January 2027.',
  'about.locationLabel': 'Location',
  'about.location': 'Oran, Algeria',
  'about.educationLabel': 'Education',
  'about.education': 'ESI-SBA — final year, Information Systems & Web',
  'about.availabilityLabel': 'Availability',
  'about.availability': 'Final-year internship from January 2027',
  'about.languagesLabel': 'Languages',
  'about.languages': 'Arabic (native) · French B2 (TCF) · English B2',
  'skills.title': 'Technical skills',
  'skills.rest': 'REST APIs',
  'skills.databases': 'Databases',
  'skills.otherLanguages': 'Other languages',
  'skills.tools': 'Tools & methods',

  // Projects
  'projects.eyebrow': '✦ PROJECTS',
  'projects.title': 'Selected projects',
  'projects.intro':
    'Academic team projects and applications delivered to real clients. ' +
    'Each page details the tech stack, the architecture and my role.',
  'projects.cta': 'See all 8 projects →',
  'projects.allTitle': 'All my projects',
  'projects.allIntro':
    'Academic team projects at ESI-SBA, and applications designed and delivered to real clients as a freelancer.',
  'projects.back': '← Back to home',
  'filters.all': 'All',
  'filters.academic': 'Academic projects',
  'filters.web': 'Web applications',
  'filters.ai': 'AI',
  'filters.menu': 'Digital menus',

  // Background
  'parcours.eyebrow': '✦ BACKGROUND',
  'parcours.title': 'Education & experience',
  'parcours.education': 'Education',
  'parcours.experience': 'Experience',
  'edu.degree': 'State Engineering Degree in Computer Science',
  'edu.school': 'Higher School of Computer Science (ESI), Sidi Bel Abbès',
  'edu.details':
    "5-year program (Master's level) · Major: Information Systems & Web · currently in final year · GPA: 13.74/20",
  'edu.m1': 'Advanced Web Development',
  'edu.m2': 'Software Engineering',
  'edu.m3': 'Databases & Big Data',
  'edu.m4': 'Information Systems & ERP',
  'edu.m5': 'Cybersecurity',
  'edu.m6': 'Middleware & Services',
  'edu.bac': 'Baccalaureate in Technical Mathematics',
  'edu.bacGrade': 'Highest honors — 18.10/20',
  'exp.freelance': 'Freelance Web Developer',
  'exp.freelanceText':
    'Designed and delivered web applications for Algerian businesses: full-stack e-commerce platforms ' +
    '(Next.js, Prisma, PostgreSQL), an AI-powered WhatsApp chatbot (Node.js, Groq), a client-tracking ' +
    'dashboard (React) and digital menus.',
  'exp.seeProjects': 'See the projects →',
  'exp.internDate': 'Sept. 2025 · 1 month',
  'exp.intern': 'Intern',
  'exp.internText':
    "Explored the network infrastructure and servers of a national telecom operator. " +
    'Worked on company databases: SQL queries and data management.',

  // Contact
  'contact.title': "Let's talk about your internship offer",
  'contact.intro': 'Available for a final-year internship from January 2027. The easiest way to reach me: email.',

  // Project detail page
  'detail.back': '← All projects',
  'detail.project': 'The project',
  'detail.role': 'My role',
  'detail.features': 'Technical highlights',
  'detail.context': 'Context',
  'detail.year': 'Year',
  'detail.team': 'Team',
  'detail.stack': 'Tech stack',
  'detail.preview': 'Preview',
  'detail.prev': 'Previous image',
  'detail.next': 'Next image',
};

export function applyI18n() {
  document.documentElement.lang = LANG;

  if (LANG === 'en') {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = EN[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (EN[key] != null) el.setAttribute(attr, EN[key]);
      });
    });
  }

  document.querySelectorAll('[data-cv]').forEach((el) => (el.href = CV[LANG]));

  // Each switch shows the language you'd switch TO; reload so the GSAP word
  // splits, Typed.js and rendered cards all rebuild in the new language.
  const other = LANG === 'fr' ? 'en' : 'fr';
  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.textContent = other.toUpperCase();
    btn.setAttribute('aria-label', UI.switchLabel);
    btn.setAttribute('lang', other);
    btn.addEventListener('click', () => {
      storage.set(other);
      const url = new URL(location.href);
      url.searchParams.set('lang', other);
      location.href = url.toString();
    });
  });
}
