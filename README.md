# Portfolio (React + Vite + Tailwind)

A modern personal portfolio built with React, Vite, and Tailwind CSS.

---

## 1) Prerequisites

Install these first:

- **Node.js** (LTS recommended)
- **npm** (comes with Node.js)
- **Git**
- A **GitHub account**

Check versions:

```bash
node -v
npm -v
git --version
```

---

## 2) Run Locally

1. Open terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Build production files:

```bash
npm run build
```

---

## 3) Create a GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Create a new repository (example: `portfolio`)
3. Do **not** initialize with README (you already have one)

---

## 4) Push This Project to GitHub

Run these commands in the project root:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo>`.

---

## 5) Deploy on GitHub Pages (Recommended: Automatic)

### Step A: Add GitHub Actions workflow

Create this file in your project:

- `.github/workflows/deploy.yml`

Paste this content:

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

### Step B: Enable Pages in repository settings

1. Open your repo on GitHub
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

### Step C: Push workflow and deploy

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step D: Get your live URL

After workflow succeeds (Actions tab), your site will be available at:

```text
https://<your-username>.github.io/<your-repo>/
```

---

## 6) Update and Re-Deploy

Every time you push to `main`, GitHub Actions will:

1. Install dependencies
2. Run production build
3. Deploy latest `dist/` to GitHub Pages

---

## 7) Contact Form Setup (Real Email via Formspree)

Your contact form is wired to send real emails using Formspree.

### Step A: Create a Formspree form

1. Go to [https://formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL (example: `https://formspree.io/f/abcxyzpq`)

### Step B: Add environment variable

Create a `.env` file in project root (same level as `package.json`):

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

You can also copy from `.env.example` and replace the value.

### Step C: Restart dev server

If dev server is running, restart it so Vite picks up `.env` values:

```bash
npm run dev
```

### Step D: Test the form

1. Open the Contact section
2. Submit a test message
3. Check your Formspree inbox/email destination

---

## 8) Common Issues

### 404 or blank page

- Confirm **Settings → Pages → Source = GitHub Actions**
- Check **Actions** tab for failed workflow steps
- Ensure your default branch is `main`

### Build fails on Actions

- Run locally first:

```bash
npm run build
```

- Commit lockfile (`package-lock.json`) so `npm ci` works in CI

### Contact form shows “not configured”

- Make sure `.env` exists in project root
- Ensure var name is exactly `VITE_FORMSPREE_ENDPOINT`
- Restart dev server after changing `.env`

---

## 9) Deploy on Vercel (Recommended)

### Step A: Import repository in Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **Add New** → **Project**
4. Import `vishal8526/portfolio`

### Step B: Configure project

Vercel usually auto-detects Vite settings. If needed, set:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Step C: Add environment variable

In **Project Settings** → **Environment Variables**, add:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Step D: Deploy

1. Click **Deploy**
2. Wait for build to finish
3. Open your live URL from Vercel dashboard

### Step E: Auto re-deploy

Every push to `main` automatically triggers a new Vercel deployment.

---

## 10) Optional: Custom Domain

1. Go to **Settings** → **Pages**
2. Add your custom domain
3. Configure DNS records at your domain provider
4. Wait for SSL certificate provisioning

---

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- TypeScript
