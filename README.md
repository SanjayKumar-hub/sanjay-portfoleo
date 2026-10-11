# Sanjay Kumar S — Portfolio

React + Vite single-page portfolio. Editorial black/white design with a hero ticker,
numbered sections, a sideways-scrolling work section, scroll reveals and a page-load curtain.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Dependencies: `react`, `react-dom` (runtime); `vite`, `@vitejs/plugin-react` (dev). Fonts
(Anton, Instrument Sans, IBM Plex Mono) load from Google Fonts in `index.html`, with system fallbacks.

## Folder structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/favicon.svg
└── src/
    ├── main.jsx                 entry point, imports the three CSS files
    ├── App.jsx                  assembles loader, cursor, nav, sections, footer
    ├── data/content.js          ALL text content + link placeholders live here
    ├── hooks/                   useInView, useActiveSection, usePrefersReducedMotion
    ├── components/              Navbar, Marquee, Loader, Cursor, Reveal, MaskLines,
    │                            RollText, SectionHeader, ExternalLink, Footer,
    │                            FloodVisual, SwarmVisual, FluidLines
    ├── sections/                Hero, About, Experience, Projects, Skills, Research,
    │                            Education, Certifications, Extracurricular, Contact
    ├── styles/                  global.css (tokens, reveal, loader), components.css, sections.css
    └── assets/                  put images here (see below)
```

## Replace the LinkedIn / HackerRank / Portfolio placeholders

Open `src/data/content.js` and fill in the `LINKS` object at the top:

```js
export const LINKS = {
  portfolio: 'https://your-portfolio-url',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  hackerrank: 'https://www.hackerrank.com/profile/your-handle',
};
```

While a value is `''`, the Contact section shows a dashed "link to add" tag instead of a link.
Once filled in, it becomes a normal link that opens in a new tab.

## Add project images later

The project cards currently use original illustrations (`FloodVisual.jsx`, `SwarmVisual.jsx`) —
no photos or hardware are claimed. To use your own image:

1. Put it in `src/assets/` (e.g. `flood.jpg`).
2. In `src/sections/Projects.jsx`, import it: `import floodImg from '../assets/flood.jpg';`
3. Replace `<FloodVisual />` with `<img src={floodImg} alt="Describe the image" />`
   (the `.proj__visual img` rule is already sized to fill the frame — add `object-fit: cover`
   in `sections.css` if you want cropping).

## Notes

- Animations respect `prefers-reduced-motion` (reveals, loader, marquee, canvas and SVG loops are all disabled/static).
- The custom cursor ring only appears on devices with a mouse; touch devices use native scrolling with snap.
- The "Data Processing Intern" dates are shown exactly as supplied ("Dec 9 – Jan 15") — add the year in `content.js` if you wish.
