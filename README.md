# Sarfraz Ahmed — Portfolio

A clean, minimal-light portfolio built with React + Vite. Sections: About, Skills,
Experience, Projects, Contact.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Edit your content

Almost everything on the site (name, bio, skills, experience, projects, links) is
in one file: **`src/data.js`**. Edit that file and the whole site updates —
you don't need to touch the components.

## Enable the contact form (Formspree)

The contact form needs a free [Formspree](https://formspree.io) account —
create it yourself (don't share your Formspree login with anyone, including an AI
assistant):

1. Go to https://formspree.io and sign up (free plan = 50 submissions/month).
2. Click **New Form**, name it (e.g. "Portfolio Contact"), and create it.
3. Formspree gives you a form endpoint like `https://formspree.io/f/abcd1234`.
4. Open `src/data.js` in this project and replace:
   ```js
   export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint URL.
5. Save, rebuild (`npm run build`), and redeploy (see below). The form will now
   email you every submission.

Until you do this, the form shows a friendly notice and stays disabled — visitors
can still reach you via the direct Email / LinkedIn / GitHub buttons.

## Deploy to GitHub Pages (free hosting)

1. Push this project to a new GitHub repository (e.g. `portfolio`).
2. On GitHub: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.
3. That's it — this repo already includes `.github/workflows/deploy.yml`, which
   builds and publishes the site automatically on every push to `main`.
4. After the first push, check the **Actions** tab for the deployment run. Once
   it's green, your site is live at:
   `https://<your-github-username>.github.io/<repo-name>/`

## Tech stack

React 19, Vite, plain CSS (no UI framework) — kept intentionally dependency-light
so it builds fast and deploys anywhere.
