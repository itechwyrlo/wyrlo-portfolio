# Wyrlo Lerios — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Bootstrap 5.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with static files ready to deploy.

## Add your resume

Replace `public/PUT_RESUME_HERE.txt` with your actual resume file, named
`resume.pdf`. The "Download resume" buttons link to `/resume.pdf`.

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Import the repository on [vercel.com](https://vercel.com).
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy. Vercel will redeploy automatically on every push to `main`.

### Other static hosts (Netlify, GitHub Pages, MonsterASP.NET static hosting)
1. Run `npm run build`.
2. Upload the contents of `dist/` to your host.

## CI/CD with GitHub Actions

A starter workflow is included at `.github/workflows/build.yml`. It installs
dependencies and runs the production build on every push, so you catch build
errors before deploying. Extend it with a deploy step for your chosen host
(for example, the official `vercel/action` or an FTP/SSH deploy step for
MonsterASP.NET).

## Project structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
  data/         projects.ts, holds the project content shown on the Projects section
  App.tsx       assembles all sections
  index.css     theme and layout styles (dark, terminal/IDE inspired)
public/
  favicon.svg
  resume.pdf    add your resume here
```

## Editing content

- **Projects**: edit `src/data/projects.ts`.
- **About text**: edit `src/components/About.tsx`.
- **Skills**: edit the `skillGroups` array in `src/components/Skills.tsx`.
- **Contact details**: edit `src/components/Contact.tsx`.
