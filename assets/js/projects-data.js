/* ==========================================================================
   Shared project data — used by the homepage cards, the full projects list
   (projets.html) and the project detail page (projet.html). Single source
   of truth: cards and detail pages are rendered from this object by main.js.

   Fields:
     type      → filter key on projets.html: 'academique' | 'web' | 'menu' | 'ia'
     category  → visible label
     context   → academic vs freelance framing (shown on cards + detail page)
     year, team, role
     summary   → what the project is / does (detail page lead paragraph)
     stack     → technologies, verified against each repo's dependencies
     features  → technical highlights ("Points techniques")
     url       → live demo (optional) · repo → public GitHub repo (optional)
     cover     → optional; cards without one get a typographic cover
     gallery   → optional; carousel is hidden when empty
   Object order = display order on projets.html.
   ========================================================================== */
export const PROJECTS = {
  fittech: {
    type: 'academique',
    category: 'Projet académique',
    title: 'FitTech — Gestion de salle de sport',
    shortTitle: 'FitTech',
    cover: 'assets/projects/fittech/cover.jpg',
    repo: 'https://github.com/abdoulay-fqr/FitTech',
    context: 'Projet académique · ESI-SBA',
    year: '2025 – 2026',
    team: 'Équipe de 5 étudiants',
    role:
      "Développement du front-end web (React + TypeScript) : composants UI réutilisables, " +
      "authentification (connexion, mot de passe oublié, réinitialisation), dashboard, " +
      "parcours d'essai gratuit et espace coach.",
    summary:
      "Plateforme complète de gestion d'une salle de sport connectée, construite sur une " +
      "architecture microservices : gestion des membres et des coachs, réservation de cours, " +
      "suivi des présences, abonnements et notifications push. Deux clients consomment la même " +
      "API : un back-office web (React) et une application mobile (Flutter).",
    stack: [
      'Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'Spring Security + JWT', 'OpenFeign',
      'Resilience4j', 'RabbitMQ', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter',
    ],
    features: [
      "7 microservices (auth, utilisateurs, abonnements, réservations, notifications, cours…) découverts via Eureka",
      "API Gateway unique avec filtre JWT et routage vers les services",
      "Circuit breaker Resilience4j : valeurs de repli quand un service dépendant tombe",
      "Messagerie asynchrone RabbitMQ pour les notifications (files durables)",
      "Pattern CQRS : modèle de lecture séparé pour les requêtes sur les cours",
      "Une base PostgreSQL par service, orchestrées avec Docker Compose · 4 rôles (super-admin, admin, coach, membre)",
    ],
    gallery: [
      { src: 'assets/projects/fittech/01-architecture.jpg', caption: 'Architecture globale — clients, API Gateway, microservices, infrastructure' },
      { src: 'assets/projects/fittech/02-microservices.jpg', caption: 'Les 7 services et leur rôle' },
      { src: 'assets/projects/fittech/03-circuit-breaker.jpg', caption: 'Résilience — circuit breaker Resilience4j' },
      { src: 'assets/projects/fittech/04-rabbitmq.jpg', caption: 'Messagerie asynchrone avec RabbitMQ' },
    ],
  },
  'laky-store': {
    type: 'web',
    category: 'E-commerce full-stack',
    title: 'Laky Accessoires',
    cover: 'assets/projects/laky-store/cover.jpg',
    url: 'https://laky-store.vercel.app/',
    repo: 'https://github.com/roumaissabellahouel/laky-store',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets : modèle de données, back-office, boutique et déploiement.",
    summary:
      "Boutique en ligne d'une marque algérienne de bijoux, avec paiement à la livraison partout en " +
      "Algérie. Le back-office remplace la gestion des commandes par messages : stock, statut de " +
      "chaque commande, revenus et meilleures ventes au même endroit.",
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    features: [
      "Application full-stack Next.js : pages boutique et back-office dans le même projet",
      "Modèle relationnel Prisma / PostgreSQL (produits, catégories, commandes)",
      "Cycle de vie des commandes à 6 statuts : en attente → confirmée → expédiée → livrée / annulée / retournée",
      "Espace admin protégé par session chiffrée (iron-session)",
      "Tableaux de bord : revenus, meilleures ventes, panier moyen",
    ],
    gallery: [
      { src: 'assets/projects/laky-store/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/laky-store/02-categories.jpg', caption: 'Navigation par catégorie' },
      { src: 'assets/projects/laky-store/05-product.jpg', caption: 'Fiche produit — paiement à la livraison' },
      { src: 'assets/projects/laky-store/06-dashboard.jpg', caption: 'Dashboard — revenus et commandes' },
      { src: 'assets/projects/laky-store/07-stock.jpg', caption: 'Gestion du stock produit' },
      { src: 'assets/projects/laky-store/08-orders.jpg', caption: 'Suivi des commandes par statut' },
      { src: 'assets/projects/laky-store/09-analytics.jpg', caption: 'Analytique des ventes et du panier moyen' },
    ],
  },
  'dar-dzayer': {
    type: 'ia',
    category: 'Chatbot IA',
    title: 'Dar Dzayer — Bot WhatsApp IA',
    shortTitle: 'Dar Dzayer',
    cover: 'assets/projects/dar-dzayer/cover.jpg',
    repo: 'https://github.com/roumaissabellahouel/dar-dzayer-bot',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets : bot, intégration IA, base de données et dashboard.",
    summary:
      "Assistant WhatsApp pour un restaurant à Oran, disponible 24h/24 : horaires, menu, prise de " +
      "réservation de bout en bout et réponses libres par IA en français, arabe et darija. Le gérant " +
      "est alerté sur WhatsApp pour les réclamations et retrouve tout dans un dashboard web.",
    stack: ['Node.js', 'Express.js', 'whatsapp-web.js', 'Groq (Llama 3.3)', 'SQLite', 'EJS', 'node-cron'],
    features: [
      "Parcours de réservation guidé, étape par étape, dans la conversation WhatsApp",
      "Vérification en base pour empêcher qu'une table soit réservée deux fois",
      "Réponses libres par LLM (Groq, Llama 3.3) en français, arabe et darija",
      "Transfert automatique au gérant des réclamations et demandes d'événements",
      "Dashboard web Express + EJS : réservations et messages du jour · tâches planifiées avec node-cron",
    ],
    gallery: [
      { src: 'assets/projects/dar-dzayer/01-conversation.jpg', caption: 'Une réservation complète, directement sur WhatsApp' },
      { src: 'assets/projects/dar-dzayer/02-dashboard.jpg', caption: 'Dashboard gérant — réservations et messages du jour' },
      { src: 'assets/projects/dar-dzayer/03-reservations.jpg', caption: 'Toutes les réservations, avec tables attribuées' },
      { src: 'assets/projects/dar-dzayer/04-messages.jpg', caption: 'Messages transférés au gérant — événements, réclamations' },
    ],
  },
  'yellow-family': {
    type: 'academique',
    category: 'Projet académique',
    title: 'Yellow Family — Agence de voyages',
    shortTitle: 'Yellow Family',
    context: 'Projet académique · ESI-SBA',
    year: '2024',
    team: 'Équipe de 4 étudiants',
    role:
      "Front-end : header et page d'accueil (hero, prochaines destinations, derniers voyages, " +
      "citations, avis), configuration de Tailwind CSS ; contributions au back-end (authentification, modèles de données).",
    summary:
      "Application web d'une agence de voyages organisés : présentation des prochaines destinations, " +
      "pages détaillées de chaque voyage avec programme et avis des voyageurs, inscription et " +
      "connexion des utilisateurs, et espace profil.",
    stack: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Firebase', 'JWT'],
    features: [
      "Stack MERN : API REST Express + MongoDB (Mongoose), front React (Vite)",
      "Authentification JWT, mots de passe hachés (bcrypt) et routes protégées côté front",
      "Réinitialisation du mot de passe par email (Nodemailer)",
      "État global avec Redux Toolkit, persisté entre les sessions (Redux Persist)",
      "Upload multiple d'images vers Firebase Storage",
    ],
    gallery: [],
  },
  'as-accessoires': {
    type: 'web',
    category: 'E-commerce full-stack',
    title: 'Le As Accessoires Auto',
    shortTitle: 'As Accessoires Auto',
    cover: 'assets/projects/as-accessoires/cover.jpg',
    url: 'https://a-accessoires.netlify.app/',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets : modèle de données, back-office, boutique et déploiement.",
    summary:
      "Boutique d'accessoires auto avec paiement à la livraison dans les 58 wilayas. Le client suit " +
      "sa commande en ligne sans appeler ; l'admin suit le chiffre d'affaires, le profit réel sur les " +
      "commandes livrées et le stock produit par produit.",
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js (NextAuth)', 'Zod', 'Cloudinary', 'Tailwind CSS', 'shadcn/ui'],
    features: [
      "Authentification admin avec Auth.js et mots de passe hachés (bcrypt)",
      "Validation des données côté serveur avec Zod",
      "Upload et hébergement des images produits sur Cloudinary",
      "Suivi de commande public par numéro de commande + téléphone",
      "Calcul du profit réel (prix de vente − coût) sur les commandes livrées · tarifs de livraison par wilaya",
    ],
    gallery: [
      { src: 'assets/projects/as-accessoires/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/as-accessoires/02-categories.jpg', caption: 'Catégories et produits en promotion' },
      { src: 'assets/projects/as-accessoires/03-cod-banner.jpg', caption: 'Paiement à la livraison, partout en Algérie' },
      { src: 'assets/projects/as-accessoires/04-tracking.jpg', caption: 'Suivi de commande pour le client' },
      { src: 'assets/projects/as-accessoires/05-dashboard.jpg', caption: 'Dashboard admin — chiffre d’affaires et profit réel' },
      { src: 'assets/projects/as-accessoires/06-produits.jpg', caption: 'Gestion du stock produit' },
      { src: 'assets/projects/as-accessoires/07-commandes.jpg', caption: 'Commandes filtrées par statut' },
      { src: 'assets/projects/as-accessoires/08-categories-admin.jpg', caption: 'Gestion des catégories' },
    ],
  },
  'coach-sahi': {
    type: 'web',
    category: 'Application de gestion',
    title: 'Coach Sahi — Site & suivi clients',
    shortTitle: 'Coach Sahi',
    cover: 'assets/projects/coach-sahi/cover.jpg',
    url: 'https://coach-sahi.vercel.app/',
    repo: 'https://github.com/roumaissabellahouel/coach-sahi-dashboard',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets du site vitrine et de l'espace admin.",
    summary:
      "Un coach sportif en ligne qui suivait ses clients sur WhatsApp et sur papier. Le site vitrine " +
      "présente ses offres ; l'espace admin centralise la fiche de chaque client (objectif, pack, " +
      "paiements, notes), les programmes d'entraînement et de nutrition, et les relances.",
    stack: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Vercel'],
    features: [
      "Single Page Application React avec routage côté client (React Router)",
      "Espace admin protégé, séparé du site vitrine",
      "Fiches clients : paiements, programme et notes du coach",
      "Liste des clients filtrée par statut, paiements en attente mis en avant",
      "Relance d'un client en un clic via un lien WhatsApp pré-rempli",
    ],
    gallery: [
      { src: 'assets/projects/coach-sahi/01-hero.jpg', caption: 'Site vitrine' },
      { src: 'assets/projects/coach-sahi/02-dashboard.jpg', caption: 'Dashboard — clients actifs, paiements en attente' },
      { src: 'assets/projects/coach-sahi/03-clients.jpg', caption: 'Liste des clients filtrée par statut' },
      { src: 'assets/projects/coach-sahi/04-fiche-client.jpg', caption: 'Fiche client — paiements, programme et notes du coach' },
      { src: 'assets/projects/coach-sahi/05-rappels.jpg', caption: 'Rappels — relancer un client en un clic' },
    ],
  },
  'japan-sushi': {
    type: 'menu',
    category: 'Menu digital',
    title: 'Japan Sushi — Menu digital',
    shortTitle: 'Japan Sushi',
    cover: 'assets/projects/japan-sushi/cover.jpg',
    url: 'https://japan-sushi.netlify.app/',
    repo: 'https://github.com/roumaissabellahouel/menu-japan-sushi',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets, et carte QR imprimable.",
    summary:
      "Menu digital qu'on scanne à table avec son téléphone : chaque plat a sa photo, son prix et sa " +
      "description, organisés par catégorie. Le restaurant n'a plus à réimprimer ses menus à chaque " +
      "changement de prix.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    features: [
      "Site statique léger en JavaScript vanilla, sans framework, pensé mobile d'abord",
      "Contenu du menu séparé du code (dossier de données) : mise à jour sans toucher à l'interface",
      "Navigation par catégorie",
      "Carte QR code au format A6, prête à imprimer",
    ],
    gallery: [
      { src: 'assets/projects/japan-sushi/01-hero.jpg', caption: 'Page d’accueil du menu' },
      { src: 'assets/projects/japan-sushi/02-menu-item.jpg', caption: 'Signatures du chef — photo, description, prix' },
      { src: 'assets/projects/japan-sushi/03-menu-list.jpg', caption: 'Navigation par catégorie' },
      { src: 'assets/projects/japan-sushi/04-qr-code.jpg', caption: 'QR code prêt à imprimer (format A6)' },
    ],
  },
  bunzos: {
    type: 'menu',
    category: 'Menu digital',
    title: 'Bunzo’s — Menu digital',
    shortTitle: 'Bunzo’s',
    cover: 'assets/projects/bunzos/cover.jpg',
    url: 'https://bunzos-digital-menu.vercel.app/',
    repo: 'https://github.com/roumaissabellahouel/bunzos-digital-menu',
    context: 'Freelance · client réel',
    year: '2026',
    team: 'Projet individuel',
    role: "Conception et développement complets.",
    summary:
      "Menu digital pour un restaurant de street-food : le client parcourt le menu par catégorie " +
      "et commande un plat en un clic sur WhatsApp, sans compte ni panier.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    features: [
      "Site statique en JavaScript vanilla, pensé mobile d'abord",
      "Commande par plat via un lien WhatsApp avec message pré-rempli",
      "Contenu du menu séparé du code (dossier de données)",
      "Accès par QR code",
    ],
    gallery: [
      { src: 'assets/projects/bunzos/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/bunzos/02-signature.jpg', caption: 'Catégorie Signature — commande directe par WhatsApp' },
      { src: 'assets/projects/bunzos/03-classiques.jpg', caption: 'Burgers classiques' },
      { src: 'assets/projects/bunzos/04-menus-sides.jpg', caption: 'Menus, formules et sides' },
    ],
  },
};

/* ==========================================================================
   English overrides — merged over PROJECTS by main.js when the site is in
   English. Same keys as above; `captions` follows the gallery order.
   Anything not listed here (stack, urls, images) is shared.
   ========================================================================== */
export const PROJECTS_EN = {
  fittech: {
    category: 'Academic project',
    title: 'FitTech — Gym management platform',
    context: 'Academic project · ESI-SBA',
    team: 'Team of 5 students',
    role:
      'Built the web front-end (React + TypeScript): reusable UI components, authentication ' +
      '(login, forgot password, password reset), dashboard, free-trial flow and the coach area.',
    summary:
      'A complete management platform for a connected gym, built on a microservices architecture: ' +
      'members and coaches, class bookings, attendance tracking, subscriptions and push notifications. ' +
      'Two clients consume the same API: a web back office (React) and a mobile app (Flutter).',
    features: [
      '7 microservices (auth, users, subscriptions, bookings, notifications, classes…) discovered through Eureka',
      'Single API Gateway with a JWT filter and routing to the services',
      'Resilience4j circuit breaker: fallback values when a dependent service goes down',
      'Asynchronous messaging with RabbitMQ for notifications (durable queues)',
      'CQRS pattern: separate read model for class queries',
      'One PostgreSQL database per service, orchestrated with Docker Compose · 4 roles (super-admin, admin, coach, member)',
    ],
    captions: [
      'System architecture — clients, API Gateway, microservices, infrastructure',
      'The 7 services and their responsibilities',
      'Resilience — Resilience4j circuit breaker',
      'Asynchronous messaging with RabbitMQ',
    ],
  },
  'laky-store': {
    category: 'Full-stack e-commerce',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development: data model, back office, storefront and deployment.',
    summary:
      'Online store for an Algerian jewelry brand, with cash on delivery across Algeria. The back office ' +
      'replaces order handling over private messages: stock, the status of every order, revenue and ' +
      'best sellers in one place.',
    features: [
      'Full-stack Next.js application: storefront and back office in the same project',
      'Relational data model with Prisma / PostgreSQL (products, categories, orders)',
      '6-status order lifecycle: pending → confirmed → shipped → delivered / cancelled / returned',
      'Admin area protected by an encrypted session (iron-session)',
      'Dashboards: revenue, best sellers, average order value',
    ],
    captions: [
      'Home page', 'Browsing by category', 'Product page — cash on delivery',
      'Dashboard — revenue and orders', 'Product stock management', 'Order tracking by status',
      'Sales and average order analytics',
    ],
  },
  'dar-dzayer': {
    category: 'AI chatbot',
    title: 'Dar Dzayer — AI WhatsApp bot',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development: bot, AI integration, database and dashboard.',
    summary:
      'A 24/7 WhatsApp assistant for a restaurant in Oran: opening hours, menu, end-to-end table ' +
      'booking and free-form AI answers in French, Arabic and Darija. The manager is alerted on ' +
      'WhatsApp about complaints and finds everything in a web dashboard.',
    features: [
      'Step-by-step booking flow inside the WhatsApp conversation',
      'Database check that prevents the same table from being booked twice',
      'Free-form answers by an LLM (Groq, Llama 3.3) in French, Arabic and Darija',
      'Automatic hand-off of complaints and event requests to the manager',
      'Express + EJS web dashboard: today’s bookings and messages · scheduled jobs with node-cron',
    ],
    captions: [
      'A complete booking, directly on WhatsApp',
      'Manager dashboard — today’s bookings and messages',
      'All bookings, with assigned tables',
      'Messages forwarded to the manager — events, complaints',
    ],
  },
  'yellow-family': {
    category: 'Academic project',
    title: 'Yellow Family — Travel agency',
    context: 'Academic project · ESI-SBA',
    team: 'Team of 4 students',
    role:
      'Front-end: header and home page (hero, upcoming destinations, past trips, quotes, reviews), ' +
      'Tailwind CSS setup; contributions to the back-end (authentication, data models).',
    summary:
      'Web application for an organized-trips travel agency: upcoming destinations, a detailed page ' +
      'for each trip with its program and traveler reviews, user sign-up and login, and a profile area.',
    features: [
      'MERN stack: Express + MongoDB (Mongoose) REST API, React (Vite) front-end',
      'JWT authentication, hashed passwords (bcrypt) and protected routes on the front-end',
      'Password reset by email (Nodemailer)',
      'Global state with Redux Toolkit, persisted across sessions (Redux Persist)',
      'Multiple image uploads to Firebase Storage',
    ],
  },
  'as-accessoires': {
    category: 'Full-stack e-commerce',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development: data model, back office, storefront and deployment.',
    summary:
      'Car accessories store with cash on delivery across all 58 wilayas (provinces). Customers track ' +
      'their order online without calling; the admin follows revenue, real profit on delivered orders ' +
      'and stock product by product.',
    features: [
      'Admin authentication with Auth.js and hashed passwords (bcrypt)',
      'Server-side data validation with Zod',
      'Product image upload and hosting on Cloudinary',
      'Public order tracking by order number + phone',
      'Real profit computed (sale price − cost) on delivered orders · delivery fees per wilaya',
    ],
    captions: [
      'Home page', 'Categories and discounted products', 'Cash on delivery, everywhere in Algeria',
      'Order tracking for customers', 'Admin dashboard — revenue and real profit',
      'Product stock management', 'Orders filtered by status', 'Category management',
    ],
  },
  'coach-sahi': {
    category: 'Management app',
    title: 'Coach Sahi — Website & client tracking',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development of the showcase site and the admin area.',
    summary:
      'An online fitness coach who tracked clients on WhatsApp and paper. The showcase site presents ' +
      'the offers; the admin area centralizes each client’s file (goal, package, payments, notes), ' +
      'training and nutrition programs, and follow-ups.',
    features: [
      'React single-page application with client-side routing (React Router)',
      'Protected admin area, separate from the showcase site',
      'Client files: payments, program and coach notes',
      'Client list filtered by status, with pending payments highlighted',
      'One-click follow-up through a pre-filled WhatsApp link',
    ],
    captions: [
      'Showcase website', 'Dashboard — active clients, pending payments',
      'Client list filtered by status', 'Client file — payments, program and coach notes',
      'Reminders — follow up with a client in one click',
    ],
  },
  'japan-sushi': {
    category: 'Digital menu',
    title: 'Japan Sushi — Digital menu',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development, plus a printable QR card.',
    summary:
      'A digital menu customers scan at their table: every dish has its photo, price and description, ' +
      'organized by category. The restaurant no longer reprints menus whenever a price changes.',
    features: [
      'Lightweight static site in vanilla JavaScript, no framework, mobile-first',
      'Menu content kept separate from the code (data folder): updates without touching the UI',
      'Browsing by category',
      'Print-ready A6 QR code card',
    ],
    captions: [
      'Menu home page', 'Chef’s signatures — photo, description, price',
      'Browsing by category', 'Print-ready QR code (A6)',
    ],
  },
  bunzos: {
    category: 'Digital menu',
    title: 'Bunzo’s — Digital menu',
    context: 'Freelance · real client',
    team: 'Solo project',
    role: 'End-to-end design and development.',
    summary:
      'Digital menu for a street-food restaurant: customers browse by category and order a dish in ' +
      'one tap on WhatsApp, with no account and no cart.',
    features: [
      'Static site in vanilla JavaScript, mobile-first',
      'Per-dish ordering through a WhatsApp link with a pre-filled message',
      'Menu content kept separate from the code (data folder)',
      'Access by QR code',
    ],
    captions: [
      'Home page', 'Signature category — order directly on WhatsApp',
      'Classic burgers', 'Combos, meals and sides',
    ],
  },
};
