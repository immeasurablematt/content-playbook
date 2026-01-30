# Publishing the Content Playbook Microsite

The site is a static Vite app. After `npm run build`, the output is in the **`dist/`** folder. Use one of the options below to put it on the web.

---

## Option 1: GitHub Pages (free)

1. **Push this project to a GitHub repo** (e.g. `content-playbook-microsite`).

2. **Enable GitHub Pages:**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Set the correct base URL** (so assets load on Pages):
   - If the repo is `yourusername/content-playbook-microsite`, the site will be at  
     `https://yourusername.github.io/content-playbook-microsite/`
   - In `vite.config.ts`, set `base: '/content-playbook-microsite/'` (match your repo name).  
     If the repo name is different, use that instead (e.g. `base: '/my-playbook/'`).

4. **Push to `main`.** The workflow in `.github/workflows/deploy-pages.yml` will build and deploy. The live URL will appear under **Actions** → latest workflow run → **Deploy to GitHub Pages** step, and in **Settings** → **Pages**.

---

## Option 2: Netlify (free)

1. Go to [netlify.com](https://www.netlify.com) and sign in (or create an account).

2. **Drag-and-drop:**
   - Run `npm run build` in this folder.
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
   - Drag the **`dist`** folder onto the page. Netlify will give you a URL (e.g. `random-name.netlify.app`).
   - Optional: in **Site settings** → **Domain management** you can change the name or add a custom domain.

3. **Or connect a Git repo:**  
   **Add new site** → **Import an existing project** → choose your Git provider and repo. Build command: `npm run build`. Publish directory: `dist`. Deploy.

---

## Option 3: Vercel (free) — with password protection

The site is set up so only people with the link **and** the password can view it.

1. Go to [vercel.com](https://vercel.com) and sign in.

2. **Add New** → **Project** → import your Git repo (or upload the project).

3. Vercel usually detects Vite: build command `npm run build`, output directory `dist`.

4. **Set the password (required for protection):**
   - In the project, go to **Settings** → **Environment Variables**.
   - Add a variable:
     - **Name:** `PASSWORD_PROTECT_SECRET`
     - **Value:** the password you want (e.g. `mySecretPass123`).
   - Save and **redeploy** the project (Deployments → … → Redeploy) so the new env var is used.

5. Click **Deploy**. You’ll get a URL like `your-project.vercel.app`.

**How it works:**  
- Anyone opening the URL is sent to `/unlock` and must enter the password.  
- After a correct password, they get access for 30 days (cookie).  
- If you don’t set `PASSWORD_PROTECT_SECRET`, the site is open (no password).  
- **Keep the URL private** if you want “link + password” only access.

---

## Quick test before publishing

Run locally:

```bash
npm run build
npm run preview
```

Then open the URL shown (e.g. `http://localhost:4173`) to confirm the built site looks correct.
