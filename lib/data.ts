// lib/data.ts — Single source of truth for portfolio content

export const PERSON = {
  name:       'ANDRIANAIVO Noé',
  nameShort:  'Andry',
  title:      'Développeur Full-Stack',
  email:      'andrianaivonoe403@gmail.com',
  phone:      ['+261 34 41 805 07', '+261 33 14 568 86'],
  location:   'Ankilahila Fandriana, Madagascar',
  github:     'https://github.com/Andry-GitCrs',
  linkedin:   '', // REVIEW: ajouter l'URL LinkedIn
  twitter:    '', // REVIEW: ajouter l'URL Twitter/X
  bio:        "Étudiant en 2ᵉ année de Génie Logiciel à l'ISTA Ambositra, je suis un développeur web fullstack polyvalent et motivé. Mes projets m'ont donné une expertise concrète en APIs REST. Je cherche un stage pour mettre en pratique mes compétences au sein d'une équipe professionnelle.",
  available:  true,
  cvPath:     '/resume.pdf',
};

export const TAGLINES = [
  'Développeur Full-Stack',
  'Expert APIs REST',
  'NestJS · Flask · Next.js',
  'Open to Work 🌍',
];

export const STATS = [
  { value: '6+', label: 'Projets' },
  { value: '8+', label: 'Langages' },
  { value: '2', label: 'Ans d\'étude' },
  { value: '3', label: 'Déployés' },
];

export const PROJECTS = [
  {
    id:       'tantsaha',
    name:     'Tantsaha',
    role:     'Développeur Frontend',
    type:     'Équipe',
    status:   'deployed',
    emoji:    '🌱',
    summary:  "Plateforme communautaire pour agriculteurs malgaches. Vente, achat et partage de connaissances avec chat temps réel.",
    details: [
      "Intégration de l'authentification avec JWT",
      "Design et développement des fonctionnalités de publication de contenu varié (vente, formation, etc.)",
      "Mise en place d'un système de chat et notifications en temps réel (Socket.io)",
      "Déploiement sur Vercel (Next.js), Render (Flask API) et Railway (BDD)",
    ],
    tech:   ['Next.js', 'Flask API', 'Socket.io', 'JWT', 'Vercel'],
    link:   'https://tantsaha.vercel.app',
    github: '',
  },
  {
    id:       'stack-task',
    name:     'Stack Task',
    role:     'Développeur Full-Stack',
    type:     'Individuel',
    status:   'deployed',
    emoji:    '✅',
    summary:  "Gestionnaire de tâches multi-utilisateurs avec 2FA personnalisée, envoi d'OTP et notifications temps réel.",
    details: [
      "Développement d'un espace admin avec authentification à double facteur (2FA) personnalisée",
      "Intégration d'un service email OTP via Abstract API",
      "Notifications temps réel avec Socket.io",
      "Déploiement sur Render (Flask) et Railway (BDD)",
    ],
    tech:   ['Flask', 'JavaScript', 'PostgreSQL', 'Socket.io', '2FA'],
    link:   '',
    github: 'https://github.com/Andry-GitCrs/Task_Manager',
  },
  {
    id:       'realworld',
    name:     'Realworld API',
    role:     'Développeur Backend',
    type:     'Équipe',
    status:   'wip',
    emoji:    '🏭',
    summary:  "API REST de gestion de stock pour entreprise privée. Architecture NestJS avec CRUD complet et sécurité avancée.",
    details: [
      "Création et gestion des opérations CRUD",
      "Système d'authentification JWT",
      "Service d'envoi d'emails OTP pour validation",
      "Coordination équipe via Git, GitHub et Trello",
    ],
    tech:   ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Trello'],
    link:   '',
    github: '',
  },
  {
    id:       'music-app',
    name:     'Music Web App',
    role:     'Développeur Frontend',
    type:     'Individuel',
    status:   'done',
    emoji:    '🎵',
    summary:  "Clone frontend d'un lecteur de musique inspiré de Spotify. Interface responsive, playlist et lecteur audio custom.",
    details: [
      "Interface utilisateur responsive inspirée de Spotify",
      "Lecteur audio personnalisé avec contrôles playback",
      "Gestion de playlists dynamiques",
    ],
    tech:   ['JavaScript', 'HTML', 'CSS', 'Web Audio API'],
    link:   '',   // REVIEW: ajouter lien
    github: '',   // REVIEW: ajouter lien GitHub
  },
  {
    id:       'ecommerce',
    name:     'E-commerce Animaux',
    role:     'Développeur Full-Stack',
    type:     'Individuel',
    status:   'done',
    emoji:    '🐾',
    summary:  "Site e-commerce dédié aux animaux de compagnie. Catalogue produits, panier et gestion admin des commandes.",
    details: [
      "Catalogue produits avec filtres et recherche",
      "Système de panier et processus de commande",
      "Interface admin de gestion des commandes",
    ],
    tech:   ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
    link:   '',   // REVIEW: ajouter lien
    github: '',   // REVIEW: ajouter lien GitHub
  },
  {
    id:       'school-id',
    name:     'School ID Card',
    role:     'Développeur Full-Stack',
    type:     'Individuel',
    status:   'done',
    emoji:    '🪪',
    summary:  "Application simplifiant la création de cartes d'identité scolaires. Formulaire de saisie et génération automatique.",
    details: [
      "Formulaire de saisie des informations élèves",
      "Génération automatique de la carte d'identité",
      "Export et impression des cartes",
    ],
    tech:   ['PHP', 'HTML', 'CSS'],
    link:   '',   // REVIEW: ajouter lien
    github: '',   // REVIEW: ajouter lien GitHub
  },
];

export const SKILLS = {
  backend: [
    { name: 'NestJS / TypeScript', level: 80 },
    { name: 'Flask (Python)',      level: 82 },
    { name: 'Node.js / Express',   level: 75 },
    { name: 'PHP',                 level: 65 },
    { name: 'Django (bases)',      level: 40 },
  ],
  frontend: [
    { name: 'JavaScript (Vanilla)', level: 85 },
    { name: 'Next.js / React',      level: 80 },
    { name: 'Tailwind CSS',         level: 88 },
    { name: 'HTML / CSS',           level: 90 },
    { name: 'React Native',         level: 50 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 82 },
    { name: 'MySQL / MariaDB', level: 70 },
    { name: 'SQL (général)', level: 80 },
  ],
  devops: [
    { name: 'Git & GitHub',        level: 85 },
    { name: 'Linux',               level: 75 },
    { name: 'Docker',              level: 60 },
    { name: 'PM2 / Apache',        level: 65 },
  ],
  languages: [
    { name: 'JavaScript', icon: '🟨', level: 'Avancé' },
    { name: 'TypeScript', icon: '🔷', level: 'Avancé' },
    { name: 'Python',     icon: '🐍', level: 'Avancé' },
    { name: 'PHP',        icon: '🐘', level: 'Intermédiaire' },
    { name: 'Java',       icon: '☕', level: 'Intermédiaire' },
    { name: 'C / C++',    icon: '⚙️',  level: 'Intermédiaire' },
    { name: 'Bash',       icon: '🐚', level: 'Bases' },
    { name: 'SQL',        icon: '🗃️',  level: 'Avancé' },
  ],
  tools: ['PM2', 'Docker', 'Git', 'pgAdmin 4', 'Sequelize', 'WAMP', 'VirtualBox', 'Trello', 'LucidChart', 'Figma (bases)', 'Canva', 'UFW', 'Certbot'],
};

export const EXPERIENCE = [
  {
    title:   'Développeur Backend',
    project: 'Realworld',
    type:    'Équipe · En cours',
    period:  '2024 — présent', // REVIEW: préciser les dates
    wip:     true,
    summary: "API REST de gestion de stock pour entreprise privée avec NestJS.",
    tasks: [
      "Création et gestion des opérations CRUD",
      "Système d'authentification JWT",
      "Service d'envoi d'emails OTP",
      "Collaboration via Git, GitHub et Trello",
    ],
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Git'],
    link: '',
  },
  {
    title:   'Développeur Frontend',
    project: 'Tantsaha',
    type:    'Équipe',
    period:  '2024', // REVIEW: préciser les dates
    wip:     false,
    summary: "Plateforme agricole malgache — vente, achat et partage de connaissances.",
    tasks: [
      "Intégration de l'authentification JWT",
      "Fonctionnalités de publication de contenu varié",
      "Chat et notifications en temps réel (Socket.io)",
      "Déploiement Vercel + Render + Railway",
    ],
    tech: ['Next.js', 'Flask API', 'Socket.io'],
    link: 'https://tantsaha.vercel.app',
  },
  {
    title:   'Développeur Full-Stack',
    project: 'Stack Task',
    type:    'Individuel',
    period:  '2024', // REVIEW: préciser les dates
    wip:     false,
    summary: "Application de gestion de tâches multi-utilisateurs.",
    tasks: [
      "Espace admin avec 2FA personnalisée",
      "Service OTP email via Abstract API",
      "Notifications temps réel Socket.io",
      "Déploiement Render + Railway",
    ],
    tech: ['Flask', 'JavaScript', 'PostgreSQL'],
    link: 'https://github.com/Andry-GitCrs/Task_Manager',
  },
];

export const EDUCATION = [
  {
    degree:  'Génie Logiciel — 2ᵉ année',
    school:  'Université IST Ambositra Annexe Fandriana',
    period:  '2023 — 2025',
    detail:  'Ankilahila Fandriana 308, Madagascar',
  },
  {
    degree:  'Baccalauréat série D',
    school:  'Lycée Privé Adventiste Julien Ramamonjisoa',
    period:  '2022 — 2023',
    detail:  '',
  },
];

export const LANGUAGES = [
  { name: 'Malagasy', level: 'Natif',        pct: 100 },
  { name: 'Français', level: 'Écrit & parlé', pct: 90  },
  { name: 'Anglais',  level: 'Technique',     pct: 70  },
];

export const NAV_LINKS = [
  { href: '/about',      label: 'À propos'     },
  { href: '/projects',   label: 'Projets'      },
  { href: '/experience', label: 'Expérience'   },
  { href: '/skills',     label: 'Compétences'  },
  { href: '/contact',    label: 'Contact'      },
];
