# BNF Consulting — Site web

Site web de **BNF Consulting** — conseil stratégique et production visuelle (drone, FPV, photo) pour PME et lieux d'exception.

**Production** : <https://www.bnf-consulting.fr> (hébergé sur GitHub Pages avec domaine custom)

---

## État actuel

Le site est **en cours de migration** depuis du **HTML statique** vers une **stack moderne React + Vite + TypeScript**.

| | Aujourd'hui | Cible |
|---|---|---|
| Stack | HTML/CSS/JS vanilla statique | React + Vite + TS |
| Hébergement | GitHub Pages (depuis branche `main` à la racine) | GitHub Pages depuis `dist/` (via GitHub Actions) |
| Bundle | aucun | Vite |
| Routing | Multi-fichiers HTML (`/immobilier/`, `/articles/...`) | React Router v6 |
| Style | CSS global (`style.css`) | CSS modules ou Tailwind (à choisir) |
| i18n | Dossier `/en/` parallèle | `react-i18next` ou routes parallèles |

**Le site live continue de fonctionner** pendant toute la migration. Aucune URL publique ne casse.

---

## Arborescence

```
.
├── index.html                     Homepage (entry point — futur Vite root)
├── mentions-legales.html
├── CNAME, robots.txt, sitemap.xml
├── favicon-*.png, apple-touch-icon.png
│
├── KIBART.html, article-1/2/3.html, drones.html
│   └── Redirections HTML — catchent les anciennes URLs publiées dans les pubs Meta, Google, etc.
│       MUST RESTER À LA RACINE.
│
├── public/                        ★ Convention Vite : servi à la racine au build
│   ├── photos/                    Médias photos
│   │   ├── articles/              Infographies dossiers (INFO_AVR, INFO_MAI, ...)
│   │   ├── drones-immo/           Galerie drone immobilier
│   │   └── secteurs/              Photos par secteur d'activité
│   │       ├── architecture/
│   │       ├── automobile/
│   │       ├── domaines/
│   │       ├── evenementiel/
│   │       ├── hotellerie/
│   │       └── immobilier/
│   └── videos/                    Médias vidéos (même structure)
│       └── secteurs/
│
├── src/                           Code source (sera utilisé par Vite/React)
│   ├── assets/
│   │   ├── css/                   CSS legacy (sera intégré dans composants React)
│   │   └── js/                    JS legacy (sera converti en hooks/composants)
│   ├── components/                React composants réutilisables (vide aujourd'hui)
│   ├── pages/                     React pages par route (vide aujourd'hui)
│   ├── lib/                       Utilitaires
│   ├── styles/                    Pour CSS-in-JS ou Tailwind futur
│   └── main.tsx                   Entry point React (placeholder commenté)
│
├── articles/                      Pages articles (URLs /articles/*.html)
├── en/                            Version anglaise (URLs /en/*)
├── architecture/, automobile/,
│   domaines/, evenementiel/,
│   hotellerie/, immobilier/,
│   optimisation-digitale/,
│   visibilite/                    Pages secteurs (URLs /[secteur]/)
│
├── package.json                   Dépendances Vite + React + TS
├── vite.config.ts                 Config bundler
├── tsconfig.json                  Config TypeScript
├── tsconfig.node.json             Config TS pour vite.config
└── .gitignore                     node_modules, dist, .vite, etc.
```

**Convention de chemins** : tous les `src=` / `href=` vers les assets utilisent des **chemins absolus** commençant par `/` :
- `/public/photos/foo.jpg`
- `/public/videos/bar.mp4`
- `/src/assets/css/style.css`
- `/src/assets/js/main.js`

Quand Vite sera activé, il strip le préfixe `/public/` automatiquement (Vite sert le contenu de `public/` à la racine). À ce moment, on rewrite les refs HTML pour drop ce préfixe.

---

## Commandes

> ⚠️ Nécessite Node.js ≥ 20.

```bash
# Installer les dépendances Vite (une seule fois après clone)
npm install

# Mode dev (futur — pas encore utilisable car src/ est vide)
npm run dev

# Build production (futur — pour les sessions de migration)
npm run build

# Preview du build local (futur)
npm run preview
```

Aujourd'hui, le site live est généré directement depuis le HTML statique de la racine. Aucune commande npm n'est nécessaire pour publier.

---

## Roadmap migration React/Vite

1. **[FAIT]** Cleanup + suppression du mort (~530 Mo)
2. **[FAIT]** Réorganisation arborescence `public/` + `src/`
3. **[FAIT]** Scaffolding Vite + React + TypeScript
4. **[À FAIRE]** Choisir une lib de style : CSS modules vs Tailwind CSS
5. **[À FAIRE]** Choisir un routeur : React Router v6 (déjà dans deps) vs TanStack Router
6. **[À FAIRE]** Migrer la **homepage** en `src/pages/Home.tsx` (gros boulot : scroll-driven anims, GA4, sticky bars, formulaire WhatsApp)
7. **[À FAIRE]** Migrer **1 page secteur** (proof of concept) : valider le pattern
8. **[À FAIRE]** Migrer les **7 autres secteurs** (factorisation possible)
9. **[À FAIRE]** Migrer **articles** (préférer MDX pour Markdown + composants)
10. **[À FAIRE]** Migrer **EN** (i18n)
11. **[À FAIRE]** Setup **CI/CD** : GitHub Actions qui build Vite → déploie sur `gh-pages`
12. **[À FAIRE]** Tests : **Vitest** + React Testing Library
13. **[À FAIRE]** Audit Lighthouse + lazy loading + optimisations images

Estimation du reste : **2-4 semaines** à temps plein, ou ~10 sessions IA.

---

## Liens importants

- **Production** : <https://www.bnf-consulting.fr>
- **Analytics** : GA4 ID `G-SS92XFM5CQ`
- **Formulaire contact** : Formspree `f/mbdaboon`
- **Calendrier RDV** : <https://calendar.app.google/owbWjVDz11BNwd2V6>
- **WhatsApp** : <https://wa.me/33668147915>
- **LinkedIn** : <https://www.linkedin.com/in/bnfconsulting-contact>

---

## Contributing

Pas de PR depuis l'externe pour l'instant. Le repo est privé à BNF Consulting + agents Claude.
