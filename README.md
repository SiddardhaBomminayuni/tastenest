# TasteNest – Restaurant Homepage

Homepage (Home-1) from the "Restaurant Website templates" Figma file, built with React + Vite + Tailwind CSS.

## Tech stack

- React 19
- Vite
- Tailwind CSS v4
- react-icons

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:5173.

Production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/        one component per homepage section
    ui/              shared pieces (buttons, section title, slider dots, stars)
  data/content.js    menu items, dishes, chefs, posts and other page content
  hooks/             useItemsPerView (cards per slide for each screen size)
  index.css          Tailwind setup, theme colors and fonts
public/
  images/            images exported from the Figma file
  fonts/             self-hosted fonts (latin subset)
```

## Sections

Header, Hero, About + service cards, Menu categories (tabs), Discover Menu banners,
Reserve a Table form, Featured Dishes (slider), Testimonials (slider), Meet Our Experts,
App promo, Recent News, Instagram follow, Footer.

## Responsiveness

Desktop layout follows the 1920px Figma frame (1300px content width). Layouts adapt at
1280px, 1024px, 768px and 640px; the header nav collapses into a slide-in menu below 1280px.

## Deployment

**Vercel:** import the repository, framework preset "Vite", build command `npm run build`,
output directory `dist`.

**Netlify:** build command `npm run build`, publish directory `dist`.
