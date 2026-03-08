# andry.ink — Portfolio Next.js 14

Portfolio de **ANDRIANAIVO Noé** — Développeur Full-Stack.  
Construit avec **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**.

## Démarrage rapide

```bash
# Installer les dépendances
pnpm install   # ou npm install

# Variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos identifiants SMTP

# Développement
pnpm dev       # http://localhost:3000

# Production
pnpm build
pnpm start
```

## Structure

```
app/
  layout.tsx          ← Layout racine (fonts, themes, metadata)
  page.tsx            ← Accueil
  about/page.tsx
  projects/page.tsx   ← Client component (filtre interactif)
  experience/page.tsx
  skills/page.tsx
  contact/page.tsx    ← Client component (formulaire)
  not-found.tsx
  api/contact/route.ts ← API Route (POST /api/contact)
  sitemap.ts          ← Sitemap automatique
components/
  Navbar.tsx          ← Navigation responsive + mobile
  Footer.tsx
  ThemeToggle.tsx     ← Dark/Light via next-themes
  Reveal.tsx          ← Intersection Observer animation
  TypedText.tsx       ← Effet machine à écrire
  SkillBars.tsx       ← Barres de compétences animées
lib/
  data.ts             ← Toutes les données du portfolio
```

## Polices

- **Cormorant** — display / titres (Google Fonts via `next/font`)
- **Plus Jakarta Sans** — corps de texte

## Contact form

Configure `.env.local` avec tes variables SMTP, puis le formulaire `/contact` envoie directement via `/api/contact`.

## Déploiement VPS

```bash
# Build
pnpm build

# PM2
pm2 start ecosystem.config.js --env production
pm2 save && pm2 startup

# Apache reverse proxy → port 3000
sudo cp andry.ink.conf /etc/apache2/sites-available/
sudo a2ensite andry.ink.conf
sudo a2enmod proxy proxy_http rewrite headers ssl
sudo systemctl reload apache2

# HTTPS
sudo certbot --apache -d andry.ink -d www.andry.ink
```

## Checklist REVIEW

- [ ] `public/images/avatar.jpg` — photo réelle
- [ ] `public/images/og-image.png` — 1200×630
- [ ] `public/favicon.ico` — via favicon.io
- [ ] `public/resume.pdf` — CV
- [ ] `lib/data.ts` — LinkedIn, dates projets, liens GitHub manquants
- [ ] `.env.local` — SMTP configuré

## Licence

MIT
