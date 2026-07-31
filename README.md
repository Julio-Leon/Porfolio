# Julio Leon Portfolio

<p align="center">
	<b>A modern, animated developer portfolio built with React.</b><br/>
	Showcases projects, technical skills, and contact points in a clean single-page experience.
</p>

<p align="center">
	<img src="https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white" alt="React" />
	<img src="https://img.shields.io/badge/Create%20React%20App-4.0.3-09D3AC?logo=createreactapp&logoColor=white" alt="CRA" />
	<img src="https://img.shields.io/badge/Bootstrap-5.0.2-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap" />
	<img src="https://img.shields.io/badge/TailwindCSS-2.2.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
	<img src="https://img.shields.io/badge/License-Private-informational" alt="License" />
</p>

---

## Overview

This repository contains the source code for Julio Leon's personal portfolio website. It is designed as a **story-driven single-page application** with smooth section navigation, animation-enhanced UI, and project highlights with live/demo links.

The portfolio emphasizes:

- Professional identity and engineering mindset
- Project case studies and demo access
- Technical skills by category
- Fast contact access (email, LinkedIn, GitHub, resume)

---

### Portfolio - https://julio-leon-portfolio.netlify.app

## Portfolio Sections

### 1) Header Navigation

- Sticky header with scroll-aware styling (`scrolled` state)
- Smooth scrolling anchors to `About`, `Projects`, and `Skills`
- Direct links for resume download and contact

### 2) Hero + Intro Narrative

- Problem-solving focused opening statement
- StoryBeat cards that frame experience in 4 themes:
	- Analytical Problem Solving
	- Technical Expertise & Growth
	- Collaboration & Communication
	- The Why Behind the Code

### 3) About Section

- Personal introduction and background
- Focus on impact-driven software development

### 4) Projects Showcase

The projects section displays alternating left/right feature cards with animation and outbound links.

Featured projects include:

- Pathfinder Visualizer
- Préstamos León
- Snake Game
- League Finder
- BookStop
- B-LUCID
- Tic Tac Toe (React Native)

### 5) Skills Grid

Skills are grouped into:

- Languages
- Frameworks/Libraries
- Technologies

### 6) Footer

- Contact email
- LinkedIn profile
- GitHub profile
- Resume download

---

## Tech Stack

| Category | Tools |
|---|---|
| Frontend | React 17, React DOM |
| Routing & UX | `react-router-dom`, `react-scroll` |
| UI & Styling | Bootstrap, React-Bootstrap, TailwindCSS, custom CSS |
| Animation | AOS (Animate On Scroll) |
| Docs/PDF | `react-pdf` |
| Testing | React Testing Library, Jest DOM, User Event |

---

## Project Structure

```text
porfolio_client/
├─ public/
│  ├─ assets/
│  │  ├─ Logo/
│  │  ├─ Personal/
│  │  ├─ Projects/
│  │  └─ Resume/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Header/
│  │  ├─ Home/
│  │  ├─ StoryBeat/
│  │  ├─ Projects/
│  │  ├─ Skills/
│  │  ├─ About/
│  │  └─ Footer/
│  ├─ styles/
│  └─ App.js
└─ package.json
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Open `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

### Build Tailwind CSS Output

```bash
npm run build:css
```

---

## Available Scripts

| Script | Purpose |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates an optimized production build |
| `npm test` | Launches test runner |
| `npm run eject` | Exposes CRA config (irreversible) |
| `npm run build:css` | Compiles Tailwind input CSS to `public/styles.css` |

---

## Customization Guide

### Update Personal Info

- Header name and contact links: `src/components/Header/Header.js`
- Intro and story narrative: `src/components/Home/Home.js`
- Footer links: `src/components/Footer/Footer.js`

### Update Projects

- Project cards and outbound links: `src/components/Projects/Projects.js`
- Project preview images: `public/assets/Projects/`

### Update Resume

- Replace: `public/assets/Resume/Julio-Leon-Resume.pdf`

### Update Styling

- Main styling: `src/styles/App_styles.css`
- Shared/global styling: `src/styles/styles.css`

---

## Deployment Notes

- The app builds as a static bundle (`npm run build`) and can be deployed on Netlify, Vercel, GitHub Pages, or similar static hosts.
- If you use SPA rewrites on Netlify, verify redirect file naming in `public/` to match host expectations.

---

## Contact

- Email: `julio.leon.diaz1@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/julio-leon-diaz/`
- GitHub: `https://github.com/Julio-Leon`

---

## License

This project is currently private/personal-use unless otherwise specified by the repository owner.
