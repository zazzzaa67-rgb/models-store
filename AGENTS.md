# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router storefront built with TypeScript and React. Route pages and shared layout live in `app/` (including `app/3d-models/` and `app/about/`). Reusable UI components are in `components/`. Data access, domain logic, shared types, and constants are in `lib/`; `lib/seeds/` contains scripts that populate the SQLite database, and `lib/data/` holds its data files. Static assets belong in `public/`. `printforge_mockup/` contains standalone HTML design references; treat them as references unless a task specifically targets the mockups.

## Build, Test, and Development Commands

- `npm install` installs the dependencies in `package-lock.json`.
- `npm run dev` runs the model and category seed scripts, then starts the Next.js development server. Check seed scripts before rerunning if you need to preserve local database state.
- `npm run build` creates a production build; `npm start` serves that build.
- `npm run lint` runs the configured Next.js lint script.

There is no test script or test suite currently defined in `package.json`. For UI or data changes, at minimum run the lint command and production build when practical.

## Coding Style & Naming Conventions

Use TypeScript with strict checking and the `@/*` path alias for project-root imports. Follow the existing two-space indentation and React conventions. Use PascalCase for component files and component names (for example, `ModelCard.tsx`), camelCase for functions and values, and lowercase route directory names. Keep database access in `lib/` rather than embedding it in presentation components. Match surrounding Tailwind CSS and JSX style; no separate formatter configuration is present.

## Testing Guidelines

No framework, coverage target, or test naming convention is configured yet. If adding tests, place them alongside the code or in a clearly named test directory and document the command used to run them. Verify behavior manually in the browser for route, search, sorting, and pagination changes.

## Commit & Pull Request Guidelines

This checkout does not include accessible Git history, so no repository-specific commit convention could be confirmed. Write short imperative commit subjects (for example, `Fix model pagination links`). Pull requests should explain the user-visible change, note database or configuration impacts, link related issues when available, and include screenshots for visual changes. Record the lint/build commands run and any known gaps.

## Configuration & Data

Keep credentials and machine-specific settings out of source control. The local SQLite database is `printforge.db`; inspect `lib/db.ts` and the seed scripts before changing its schema or contents, and avoid committing generated or personal database data.
