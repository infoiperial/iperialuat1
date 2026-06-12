## Goal

Host the site on **GitHub Pages** while continuing to edit in Lovable. Every change you make in Lovable will sync to GitHub automatically, and GitHub Actions will rebuild and redeploy the Pages site on each push.

## Important caveat (please read first)

GitHub Pages only serves **static files** — no Node.js server, no server functions, no API routes. Your project is built on TanStack Start (SSR). Right now your site has **no backend logic** (the contact form is an embedded Google Form, no Lovable Cloud, no server functions), so it's safe to convert it to a static export.

If later you add features that need a server (auth, database, contact-form emailing, payments, etc.), GitHub Pages won't be able to run them. At that point you'd need to either:
- Switch to a host that supports SSR/serverless (Cloudflare Pages, Netlify, Vercel — all also deploy from GitHub), or
- Keep publishing through Lovable's hosting for those features.

## Plan

### Step 1 — Connect Lovable to GitHub (you do this in the UI)

1. In Lovable, open the **+** menu (bottom-left of chat) → **GitHub** → **Connect project**.
2. Authorize the Lovable GitHub App and pick the GitHub account/org.
3. Click **Create Repository**. Lovable creates a new repo and starts a two-way sync — every edit you make in Lovable from now on will commit and push automatically.

### Step 2 — Switch the project to a static build (I do this in build mode)

To make the site work on GitHub Pages I will:
- Configure the build to **prerender all pages to static HTML** (TanStack Start supports this).
- Add a `public/.nojekyll` file so GitHub doesn't strip underscore-prefixed assets.
- Add a `public/404.html` fallback so direct-URL refreshes work.
- Verify the only route (`/`) and the sitemap render cleanly as static files.

### Step 3 — Add a GitHub Actions deploy workflow (I do this)

Create `.github/workflows/deploy.yml` that, on every push to `main`:
1. Installs dependencies with bun
2. Runs the static build
3. Uploads the build output as a Pages artifact
4. Deploys to GitHub Pages

### Step 4 — Enable Pages in GitHub (you do this in the UI, one time)

1. In your new GitHub repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The first push from Lovable will trigger the workflow and publish the site to `https://<your-username>.github.io/<repo-name>/` (or a custom domain if you configure one).

### Step 5 — Optional: custom domain

In GitHub repo → Settings → Pages → Custom domain, enter your domain and add the DNS records GitHub shows you. I can also add a `public/CNAME` file with your domain so it persists.

## Technical details

- **Stack today**: TanStack Start + Vite + Cloudflare Worker SSR target (`nitro` preset). For Pages I'll switch the Nitro preset to `static` so `bun run build` outputs a fully static `dist/` (or equivalent) directory.
- **Routing**: Single route (`/`) plus the `/sitemap.xml` server route. For static export, the sitemap becomes a prerendered file rather than a live handler — same URL, same content.
- **Lovable previews**: keep working as today (Lovable still builds its own preview from the same source); GitHub Pages is purely your published deployment.
- **Reverting**: if you ever want to go back to Lovable hosting, just revert the Nitro preset change — no data lost.

## What you need to confirm before I implement

1. You're OK with the static-only constraint (no server-side features until you migrate to a different host).
2. You're fine with the public URL being `https://<username>.github.io/<repo>/` initially (custom domain can be added later).

Reply **"go ahead"** to switch to build mode and I'll do Step 2 and Step 3. You'll handle Step 1 and Step 4 in the GitHub/Lovable UIs.