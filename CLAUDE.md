# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hannan Miah's personal portfolio website, deployed at **hannanmiah.github.io** via GitHub Pages. Built with **Nuxt 4**, **Nuxt UI v4**, and **Tailwind CSS 4**. The site showcases professional experience, skills, projects, and education.

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
- `pnpm lint` — Run ESLint
- `pnpm typecheck` — Run TypeScript checks via `nuxt typecheck`

Package manager is **pnpm** (v10.32.1). No test runner is configured.

## Architecture

### Key files

- `nuxt.config.ts` — Nuxt config with `@nuxt/eslint` and `@nuxt/ui` modules. ESLint stylistic rules: no dangling commas, 1TBS brace style.
- `app/app.vue` — Root layout with `UApp` wrapper, `UHeader`/`UMain`/`UFooter` structure. Contains SEO meta via `useSeoMeta`.
- `app/assets/css/main.css` — Tailwind + Nuxt UI CSS imports and custom theme (green primary, Public Sans font).
- `app/pages/` — File-based routing.
- `app/components/` — Custom components. Nuxt UI components are auto-imported.

### Conventions

- Home page (`/`) is prerendered via `routeRules` in nuxt config.
- Components, composables, and utilities are auto-imported by Nuxt — no manual imports needed.
- Icon sets used: `lucide` and `simple-icons` (via `@iconify-json/*`).
- CI runs lint + typecheck on push to main (Node 22, Ubuntu, pnpm).

## Portfolio Content Reference

### Profile

- **Name:** Hannan Miah
- **Title:** Fullstack Software Developer
- **Email:** hannanhridoy@gmail.com
- **Location:** Uttara, Dhaka, Bangladesh
- **GitHub:** https://github.com/hannanmiah
- **LinkedIn:** https://linkedin.com/in/hannanmiah
- **Phone:** 01787378887
- **Website:** https://hannanmiah.github.io

### Professional Summary

Results-driven Fullstack Developer with over 5 years of experience specializing in the TALL and VILT stacks (Laravel, Vue.js, Inertia, Tailwind). Proven track record in architecting scalable ERP systems, high-traffic e-commerce platforms, and microservices. Expert in Dockerized environments and CI/CD workflows, with a passion for writing clean, testable code and leading cross-functional teams.

### Technical Skills

- **Frontend:** Vue.js, Nuxt.js, Inertia.js, Tailwind CSS
- **Backend:** PHP (Laravel), Node.js (AdonisJS, Express), Go (learning), Microservices
- **Database:** MySQL, PostgreSQL, Drizzle ORM, Eloquent, Prisma
- **DevOps:** Docker, Nitro, Git, CI/CD, Redis

### Experience

1. **Backend Developer** — Amarsolution (02/2025 – 02/2026, Uttara, Dhaka)
2. **Senior Laravel Developer** — Curlware Digital Agency (04/2024 – 01/2025, Shyamloy, Dhaka)
3. **Laravel Developer** — Boost Education Service (06/2022 – 12/2022, Remote)

### Key Projects

- **Dazzle.com.bd** — E-commerce platform. Backend Team Lead. Laravel API, Docker.
- **AmarSolution ERP** — ERP solution. Laravel API with microservices architecture.
- **Swapix Ecommerce** — UK e-commerce platform. Laravel, Nuxt, Inertia, WebSocket.
- **TechMax POS** — UK POS software. Laravel, Inertia, Vue 3.
- **The Lead Library** — CRM for student consultancy. Laravel, Vue.js, Tailwind, MySQL, WebSocket.
- **YourHouseTV** — Streaming platform. Laravel, Reverb, Inertia.js.
- **Techdiary Blog** — Open-source tech blog. Laravel, Nuxt.js.
- **Nazmul Villa** — House rental platform. Laravel API, Nuxt.js.
- **Padma Textile** — Textile sample management. Laravel, Inertia.js.
- **University Hall Management System** — Laravel, Livewire, Filament, Tailwind.

### Education

- **B.Sc. in Electrical and Electronic Engineering** — Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj (2016–2023)

### Awards

- 2nd Place – National Mobile App Development, ICT Division Bangladesh (2019)
- Mobile Apps Development Training — ICT Division Bangladesh
- ICT Olympiad Bangladesh — University Team Lead
- Digital Marketing Training — LEDP Project by Govt. of Bangladesh
