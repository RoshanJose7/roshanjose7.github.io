# Roshan Jose — Portfolio

A single-page portfolio built around a "Structural/Blueprint" design system —
numbered sheets, registration marks, and drafting-sheet motifs styling each
section like a technical drawing.

## Tech Stack

- **React 19** — UI
- **Vite** — dev server and build
- **Tailwind CSS v4** — CSS-first styling (`@theme` tokens in `src/index.css`, via `@tailwindcss/vite`)
- **Framer Motion** — scroll-reveal, page-load, and hover animations
- **EmailJS** — contact form submission, no backend required
- **gh-pages** — deployment to GitHub Pages

## Project Structure

```
src/
  components/
    blueprint/       Shared design-system primitives (Sheet wrapper, icons,
                      diagrams, registration marks, progress bars)
    *.jsx             One component per site section (Hero, About,
                      Experience, Projects, Skills, Education, Volunteer,
                      Publications, Contact, Footer, Navbar, Metrics)
  constants/          All site copy and data (single source of truth —
                      edit here, not in the components)
  utils/motion.js     Shared Framer Motion variants (fadeUp, staggerContainer)
  index.css           Tailwind v4 theme tokens + global styles
```

Sections are grouped into full-viewport-height "folds" in `App.jsx` on
desktop (`lg:` and up); on mobile everything stacks in normal document flow.

## Run Locally

Clone the project

```bash
git clone https://github.com/RoshanJose7/roshanjose7.github.io.git
```

Go to the project directory

```bash
cd roshanjose7.github.io
```

Install dependencies

```bash
npm install
```

Start the dev server

```bash
npm run dev
```

## Environment Variables

The contact form needs an [EmailJS](https://www.emailjs.com/) account. Create
a `.env` file in the project root with:

```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

## Build & Deploy

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run deploy    # build + publish dist/ to the gh-pages branch
```
