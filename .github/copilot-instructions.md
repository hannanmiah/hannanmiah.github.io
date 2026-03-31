# Copilot instructions for this repository

## Project context

- This repository is Hannan Miah's personal portfolio site, deployed at `https://hannanmiah.github.io` (GitHub Pages).
- Stack: Nuxt 4, Nuxt UI v4, Tailwind CSS 4.
- Use `CLAUDE.md` as the canonical source for profile/work-history/project content when editing portfolio text.

## Build, lint, and validation commands

- Install dependencies: `pnpm install`
- Start local dev server: `pnpm dev`
- Build production output: `pnpm build`
- Preview production build: `pnpm preview`
- Lint entire repo: `pnpm lint`
- Lint a single file: `pnpm exec eslint app/pages/index.vue`
- Type-check the project: `pnpm typecheck`
- Run the same checks as CI: `pnpm lint && pnpm typecheck`

There is currently no automated test runner configured (`package.json` has no `test` script).

Single-test command is therefore not applicable until a test framework is added.

## High-level architecture

- This is a Nuxt 4 portfolio site using Nuxt UI v4 and Tailwind CSS 4.
- `app/app.vue` is the global shell. It defines `UApp` layout, header/footer structure, site-wide meta/SEO (`useHead`, `useSeoMeta`), and top-level anchor navigation.
- `app/pages/index.vue` is the primary content surface. It holds both presentation and the portfolio data arrays (`skills`, `experience`, `projects`, `awards`) used across page sections.
- UI/theme configuration is split:
  - `app/app.config.ts` for Nuxt UI color tokens (`primary: green`, `neutral: slate`)
  - `app/assets/css/main.css` for Tailwind + Nuxt UI imports and theme variables (font + palette)
- `nuxt.config.ts` wires modules (`@nuxt/eslint`, `@nuxt/ui`), global CSS inclusion, and route rules (`/` is prerendered).
- CI (`.github/workflows/ci.yml`) runs on push with Node 22 and validates lint + typecheck.

## Key repository conventions

- Use `pnpm` (repo is pinned to `pnpm@10.32.1`).
- Prefer Nuxt auto-import patterns: components/composables/utilities are generally used without manual imports.
- Build UI primarily with Nuxt UI components rather than custom low-level primitives.
- Keep `app/app.vue` navigation anchors in sync with section `id` values in `app/pages/index.vue`.
- Keep portfolio profile/project/contact details aligned with the canonical data in `CLAUDE.md` (name/title/email/location/GitHub/LinkedIn/phone, summary, skills, experience, projects, education, awards).
- When changing profile messaging, update both global SEO text in `app/app.vue` and visible profile copy in `app/pages/index.vue` to avoid drift.
- Use installed Iconify sets only (`lucide`, `simple-icons`) for icon names.
- Respect stylistic rules configured in `nuxt.config.ts` (`commaDangle: never`, `braceStyle: 1tbs`).
