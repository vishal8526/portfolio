# Portfolio

A modern personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Table of Contents

- [Demo](#demo)
- [Overview](#overview)
- [Why This Portfolio](#why-this-portfolio)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [GitHub Pages (GitHub Actions)](#github-pages-github-actions)
  - [Vercel](#vercel)
- [Troubleshooting](#troubleshooting)

## Demo

- Live Site: https://vishal8526.github.io/portfolio/
- Source Code: https://github.com/vishal8526/portfolio

## Overview

This project is a responsive portfolio template with sections such as hero, about, skills, experience, projects, testimonials, and contact.

## Why This Portfolio

- Presents your profile in a clean one-page flow that is easy for recruiters to scan
- Highlights projects, skills, and experience in separate sections for clarity
- Includes social/contact links and a working contact form option via Formspree
- Uses modern React + Vite stack for fast performance and easy customization

## About This Project

This portfolio is designed for students, freshers, and developers who want a modern personal website to showcase:

- Professional intro and role highlights
- Technical skills and tools
- Featured projects
- Work/learning experience
- Certificates and testimonials
- Contact details and social profiles

The UI uses a dark modern style, smooth section-based navigation, and a short startup loading animation for a polished first impression.

## What Is Included

The app renders these sections in order:

1. Navbar
2. Hero
3. About
4. Skills
5. Projects
6. Experience
7. Certificates
8. Testimonials
9. Contact
10. Footer

All main sections are component-based under `src/components`, making it easy to update specific parts without changing the whole app.

## Customize Your Portfolio

Most profile content (name, headline roles, contact details, social links, and nav items) is managed from:

- `src/constants/portfolio.ts`

To personalize this portfolio quickly:

1. Update your personal details in `PERSON`
2. Update navigation labels in `SECTION_NAV_ITEMS`
3. Update social/contact links in `SOCIAL_LINKS` and `CONTACT_INFO_ITEMS`
4. Edit section component content in `src/components/*`

## Tech Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4

## Getting Started

### Prerequisites

Install the following:

- Node.js (LTS recommended)
- npm
- Git
- GitHub account (for deployment)

Check installed versions:

```bash
node -v
npm -v
git --version
```

### Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Build production files into `dist/` |
| `npm run preview` | Preview production build locally    |

## Project Structure

```text
.
├── public/
├── scripts/
│   └── extract_resume.py
├── src/
│   ├── components/
│   ├── constants/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

| Variable                  | Required         | Description            |
| ------------------------- | ---------------- | ---------------------- |
| `VITE_FORMSPREE_ENDPOINT` | For contact form | Formspree endpoint URL |

If you update `.env`, restart the dev server.

## Deployment

### GitHub Pages (GitHub Actions)

1. Create `.github/workflows/deploy.yml` with this workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. In your repository: **Settings → Pages → Source = GitHub Actions**

3. Commit and push:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

4. Live URL format:

```text
https://<your-username>.github.io/<your-repo>/
```

### Vercel

1. Import the repository at [vercel.com](https://vercel.com)
2. Confirm build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variable:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

4. Deploy from Vercel dashboard

## Troubleshooting

### 404 or blank page (GitHub Pages)

- Confirm Pages source is set to **GitHub Actions**
- Check the **Actions** tab for failed workflow steps
- Ensure deployment branch is `main`

### Build fails in CI

- Run locally: `npm run build`
- Commit `package-lock.json` so `npm ci` works in CI

### Contact form shows “not configured”

- Verify `.env` exists at the project root
- Verify variable name is exactly `VITE_FORMSPREE_ENDPOINT`
- Restart dev server after `.env` changes
