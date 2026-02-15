# Guillaume Baratier – Portfolio

Site vitrine personnel (projets, mes coups de cœur). Construit avec **Next.js 14**, **React 18**, **TypeScript** et **Material UI (MUI)**. Thème sombre, export statique pour GitHub Pages ou hébergement de fichiers statiques.

## Quick Start

```bash
npm install
cp .env.example .env   # optionnel : basePath et nom du site
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande          | Description                                          |
|-------------------|------------------------------------------------------|
| `npm run dev`     | Serveur de développement                             |
| `npm run build`   | Build de production → génère le dossier `out/`       |
| `npm run lint`    | Vérification ESLint                                  |
| `npm run deploy`  | Build puis push de `out/` vers GitHub Pages (manuel) |

> **Note :** `npm run start` n’est pas utilisé pour ce projet. Avec `output: export`, Next.js génère des fichiers statiques. Pour tester en local après un build : `npx serve@latest out`.

## Modifier le contenu (data & config)

Tout le contenu éditable se trouve dans **`data/`** et **`config/`** :

| Fichier | Rôle |
|---------|------|
| **`config/site.ts`** | Nom du site, libellés et URLs de la navigation (Accueil, Projets, Mes coups de cœur). |
| **`data/profile.ts`** | Nom, headline et bio courte (affichés sur l’accueil). |
| **`data/projects.ts`** | Liste des projets. Chaque projet : `title`, `description`, `category` (`'pro'` ou `'side'`), `tags`, optionnellement `links` (label + url) et `image` (src + alt). |
| **`data/selection.ts`** | Items de la section « Initiatives inspirantes » (page Mes coups de cœur) : `title`, `description`, `tags`, `url`, optionnellement `image`. |
| **`data/amis.ts`** | Items de la section « Projet de mes amis » (page Mes coups de cœur), même structure que la sélection. |
| **`data/types.ts`** | Types TypeScript `Project` et `LinkItem` ; à consulter pour ajouter des champs. |

**Images** : déposer les fichiers dans **`public/`**. En production avec sous-chemins (ex. GitHub Pages), le préfixe est géré par `lib/basePath.ts` et `NEXT_PUBLIC_BASE_PATH`.

**Ajouter des photos aux coups de cœur (amis ou initiatives)** : dans `data/amis.ts` ou `data/selection.ts`, ajoutez pour chaque item la propriété optionnelle `image` :

```ts
import { basePath } from '@/lib/basePath';

// Dans un item :
image: { src: `${basePath}/nom-fichier.jpg`, alt: 'Description courte pour l’accessibilité' }
```

Placez le fichier (ex. `nom-fichier.jpg`) dans **`public/`**. Le composant `LinkCard` affichera l’image en en-tête de la carte.

**Thème** (couleurs, typo) : **`theme/theme.ts`**.

## Structure du projet

```
├── .github/workflows/   # CI/CD (déploiement GitHub Pages)
├── components/          # Layout, ProjectCard, LinkCard
├── config/              # site.ts (titre, nav)
├── data/                # types, profile, projects, selection, amis
├── lib/                 # basePath
├── pages/               # index, projets, coups-de-coeur
├── public/              # Assets statiques (images)
└── theme/               # Thème MUI (dark)
```

## Déploiement (GitHub Pages)

### Automatique (recommandé)

1. **Settings → Pages → Source** : **GitHub Actions**
2. À chaque push sur `main`, le workflow `.github/workflows/deploy.yml` build et déploie automatiquement le site
3. Si le site est sous une sous-URL (ex. `https://user.github.io/gb`), configurer **Secrets and variables → Actions** : `NEXT_PUBLIC_BASE_PATH=/gb`

### Manuel

- **Settings → Pages → Source** : **Deploy from a branch**, branche **gh-pages**, dossier **/ (root)**
- En local : `npm run deploy` (build + push de `out/` sur la branche `gh-pages`)

> Le `basePath` dans `next.config.js` doit correspondre à l’URL du dépôt (ex. `/gb`).

## Prérequis

- Node.js 18+ (recommandé : 20)
- npm (ou yarn)

## Licence

MIT (voir [LICENSE](LICENSE)).
