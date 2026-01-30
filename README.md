# Content Marketing Playbook Microsite

A clean, minimal single-page microsite showcasing the Content Marketing Playbook & Strategy Matthew Baggetta.

## Features

- **Hero** — Bold headline, tagline, badge, smooth-scroll hint
- **Sticky Table of Contents** — Floating sidebar (desktop) or collapsible menu (mobile) with scroll-highlight
- **7 Content Sections** — Content Strategy, Pain Point SEO, Content Production (includes A5 brief template), Case Study Development, Social Media, Performance Reporting, Team Collaboration
- **Collapsible Accordions** — Templates and guidance in expandable sections with smooth animations
- **Responsive** — Optimized for desktop, tablet, and mobile

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Radix UI Accordion
- Lucide React icons

## Setup

1. **Fix npm cache (if you see EACCES):**
   ```bash
   sudo chown -R $(whoami) ~/.npm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run dev server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

- `src/App.tsx` — Main layout, hero, scroll spy, section wrappers, footer
- `src/sections/` — Section content components (Section1–Section5, Section7, Section8)
- `src/components/` — TableOfContents, Accordion, CodeBlock, Blockquote
- `src/data/sections.ts` — Section IDs and titles for TOC
