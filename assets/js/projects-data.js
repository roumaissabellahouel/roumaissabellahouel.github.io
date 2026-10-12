/* ==========================================================================
   Shared project data — used by the homepage cards, the full projects list
   (projets.html) and the project detail page (projet.html). Single source
   of truth so gallery captions / descriptions only live in one place.
   ========================================================================== */
export const PROJECTS = {
  'laky-store': {
    category: 'Boutique en ligne',
    title: 'Laky Accessoires',
    cover: 'assets/projects/laky-store/cover.jpg',
    url: 'https://laky-store.vercel.app/',
    value:
      "Boutique de bijoux en acier inoxydable, avec paiement à la livraison et livraison partout en Algérie. " +
      "Ce qui change vraiment le quotidien de la cliente : un dashboard admin qui centralise tout — stock en " +
      "temps réel, statut de chaque commande (en attente, confirmée, expédiée, livrée, annulée, retournée), " +
      "revenus et meilleures ventes. Fini les commandes perdues dans les messages et le stock géré à la mémoire.",
    gallery: [
      { src: 'assets/projects/laky-store/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/laky-store/02-categories.jpg', caption: 'Navigation par catégorie' },
      { src: 'assets/projects/laky-store/05-product.jpg', caption: 'Fiche produit — paiement à la livraison' },
      { src: 'assets/projects/laky-store/06-dashboard.jpg', caption: 'Dashboard — revenus et commandes en un coup d’œil' },
      { src: 'assets/projects/laky-store/07-stock.jpg', caption: 'Gestion du stock produit' },
      { src: 'assets/projects/laky-store/08-orders.jpg', caption: 'Suivi des commandes par statut' },
      { src: 'assets/projects/laky-store/09-analytics.jpg', caption: 'Analytique des ventes et du panier moyen' },
    ],
  },
  'as-accessoires': {
    category: 'Boutique en ligne',
    title: 'Le As Accessoires Auto',
    cover: 'assets/projects/as-accessoires/cover.jpg',
    url: 'https://a-accessoires.netlify.app/',
    value:
      "Boutique d'accessoires auto en Algérie, avec paiement à la livraison dans les 58 wilayas. Côté " +
      "client : le client suit sa commande en ligne (numéro + téléphone) sans avoir à appeler. Côté " +
      "admin : un dashboard qui suit non seulement le chiffre d'affaires mais le profit réel sur les " +
      "commandes livrées, la gestion du stock produit par produit, et les commandes filtrées par statut " +
      "(en attente, confirmée, expédiée, livrée, annulée, retournée).",
    gallery: [
      { src: 'assets/projects/as-accessoires/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/as-accessoires/02-categories.jpg', caption: 'Catégories et produits en promotion' },
      { src: 'assets/projects/as-accessoires/03-cod-banner.jpg', caption: 'Paiement à la livraison, partout en Algérie' },
      { src: 'assets/projects/as-accessoires/04-tracking.jpg', caption: 'Suivi de commande pour le client' },
      { src: 'assets/projects/as-accessoires/05-dashboard.jpg', caption: 'Dashboard admin — chiffre d’affaires ET profit réel' },
      { src: 'assets/projects/as-accessoires/06-produits.jpg', caption: 'Gestion du stock produit' },
      { src: 'assets/projects/as-accessoires/07-commandes.jpg', caption: 'Commandes filtrées par statut' },
      { src: 'assets/projects/as-accessoires/08-categories-admin.jpg', caption: 'Gestion des catégories' },
    ],
  },
  'japan-sushi': {
    category: 'Menu Digital',
    title: 'Japan Sushi — Menu Digital',
    cover: 'assets/projects/japan-sushi/cover.jpg',
    url: 'https://japan-sushi.netlify.app/',
    value:
      "Un menu digital que les clients scannent directement à leur table avec leur téléphone — fini les " +
      "réimpressions à chaque changement de prix ou de plat. Chaque produit a sa photo, son prix et sa " +
      "description, organisés par catégorie pour une navigation fluide. Le restaurant reçoit aussi une carte " +
      "QR prête à imprimer (format A6) à poser directement sur les tables.",
    gallery: [
      { src: 'assets/projects/japan-sushi/01-hero.jpg', caption: 'Page d’accueil du menu' },
      { src: 'assets/projects/japan-sushi/02-menu-item.jpg', caption: 'Signatures du chef — photo, description, prix' },
      { src: 'assets/projects/japan-sushi/03-menu-list.jpg', caption: 'Navigation par catégorie' },
      { src: 'assets/projects/japan-sushi/04-qr-code.jpg', caption: 'QR code prêt à imprimer (format A6)' },
    ],
  },
  bunzos: {
    category: 'Menu Digital',
    title: 'Bunzo’s — Menu Digital',
    cover: 'assets/projects/bunzos/cover.jpg',
    url: 'https://bunzos-digital-menu.vercel.app/',
    value:
      "Un menu digital pensé pour la restauration rapide : chaque plat a son propre bouton de commande " +
      "WhatsApp — le client parcourt le menu par catégorie (Signature, Classiques, Menus, Sides), voit " +
      "photo, prix et description, et commande en un clic, sans créer de compte ni remplir de panier. " +
      "Simple et rapide, pensé pour un service street-food.",
    gallery: [
      { src: 'assets/projects/bunzos/01-hero.jpg', caption: 'Page d’accueil' },
      { src: 'assets/projects/bunzos/02-signature.jpg', caption: 'Catégorie Signature — commande directe par WhatsApp' },
      { src: 'assets/projects/bunzos/03-classiques.jpg', caption: 'Burgers Classiques' },
      { src: 'assets/projects/bunzos/04-menus-sides.jpg', caption: 'Menus, formules et sides' },
    ],
  },
  'coach-sahi': {
    category: 'Système de Gestion',
    title: 'Coach Sahi — Site & Suivi Clients',
    cover: 'assets/projects/coach-sahi/cover.jpg',
    url: 'https://coach-sahi.vercel.app/',
    value:
      "Un coach sportif en ligne qui gérait ses clients à la main — WhatsApp, papier et mémoire. Le site " +
      "vitrine présente ses offres et renvoie directement vers WhatsApp. Derrière, un espace admin protégé " +
      "centralise tout : fiche de chaque client (objectif, pack, paiements, notes), programmes d'entraînement " +
      "et de nutrition, paiements en attente, et rappels pour relancer en un clic les clients en pause.",
    gallery: [
      { src: 'assets/projects/coach-sahi/01-hero.jpg', caption: 'Site vitrine — contact direct sur WhatsApp' },
      { src: 'assets/projects/coach-sahi/02-dashboard.jpg', caption: 'Dashboard — clients actifs, paiements en attente' },
      { src: 'assets/projects/coach-sahi/03-clients.jpg', caption: 'Liste des clients filtrée par statut' },
      { src: 'assets/projects/coach-sahi/04-fiche-client.jpg', caption: 'Fiche client — paiements, programme et notes du coach' },
      { src: 'assets/projects/coach-sahi/05-rappels.jpg', caption: 'Rappels — relancer un client en un clic' },
    ],
  },
  'dar-dzayer': {
    category: 'Automatisation IA',
    title: 'Dar Dzayer — Bot WhatsApp',
    cover: 'assets/projects/dar-dzayer/cover.jpg',
    repo: 'https://github.com/roumaissabellahouel/dar-dzayer-bot',
    value:
      "Un assistant WhatsApp qui répond aux clients d'un restaurant à Oran, 24h/24. Il donne les horaires " +
      "et le menu, prend les réservations de A à Z en vérifiant qu'aucune table n'est réservée deux fois, " +
      "et répond aux autres questions grâce à l'IA (français, arabe, darija). Le gérant est alerté sur " +
      "WhatsApp pour chaque réclamation ou demande d'événement, et retrouve tout dans un dashboard.",
    gallery: [
      { src: 'assets/projects/dar-dzayer/01-conversation.jpg', caption: 'Une réservation complète, directement sur WhatsApp' },
      { src: 'assets/projects/dar-dzayer/02-dashboard.jpg', caption: 'Dashboard gérant — réservations et messages du jour' },
      { src: 'assets/projects/dar-dzayer/03-reservations.jpg', caption: 'Toutes les réservations, avec tables attribuées' },
      { src: 'assets/projects/dar-dzayer/04-messages.jpg', caption: 'Messages transférés au gérant — événements, réclamations' },
    ],
  },
};
