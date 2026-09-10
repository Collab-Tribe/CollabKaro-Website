# CollabKaro Website

> **Public showcase landing website** for [CollabKaro](https://collabkaro.in) — India's #1 two-sided marketplace for brands and creators.

This repository contains the **public marketing website** (`collabkaro.in`) with landing pages, feature showcases, and sign-up CTAs for both the Brand portal and the Creator portal.

## Product Surfaces

| Surface | URL | Description |
|---|---|---|
| **Home** | `/` | Dual-gateway master landing page |
| **For Brands** | `/for-brands` | Brand & agency feature showcase |
| **For Creators** | `/for-creators` | Creator & influencer feature showcase |
| **How It Works** | `/how-it-works` | Interactive dual-persona explainer |

## Related Repositories

| Repo | Description |
|---|---|
| [CollabKaro (monorepo)](https://github.com/Collab-Tribe/CollabKaro) | Full product monorepo — API server, web app portals, mobile app |
| **CollabKaro-Website** (this repo) | Public marketing website only |

## Tech Stack

- **React 18** + **Vite** + **TypeScript**
- **React Router v6** for client-side routing
- **Lucide React** for icons
- **Plus Jakarta Sans** typography
- CSS Design Tokens (Indian consumer-tech palette)

## Development

```bash
npm install
npm run dev       # Start dev server on port 3100
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## Deployment

Builds to a static `dist/` folder — deployable to Vercel, Netlify, Firebase Hosting, or any CDN.

Configure the app URL (the main CollabKaro product) via the `.env` file:
```bash
cp .env.example .env
# Edit VITE_APP_URL to point to the deployed app
```

## Organization

Part of the [Collab-Tribe GitHub organization](https://github.com/Collab-Tribe).
