# Avinash Talpade — Portfolio

A single-page, Minecraft-themed portfolio site. No build step — just static HTML/CSS/JS.

## Files

- `index.html` — page structure and content
- `style.css` — theme, layout, responsive rules
- `script.js` — hotbar navigation + scroll-spy highlighting

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from a branch → main / (root)**.
The site will be live at `https://<username>.github.io/<repo-name>/`.

## Deploy to Netlify / Vercel

Drag-and-drop the folder in the Netlify dashboard, or run `vercel` / `netlify deploy`
in this directory — no framework or build command needed (static site).

## Editing content

All copy lives in `index.html`, organized into `<section>` blocks matching the
hotbar: Spawn (hero), Player (about), Advancements, Journey (experience),
Enchant Table (skills), Trades (services), Chest (certifications), Contact.
