# my-site

Personal site built with Preact, Vite, TypeScript, and pnpm.

## Stack

- **[Preact](https://preactjs.com/)** — UI
- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **[wouter-preact](https://github.com/molefrog/wouter)** — client-side routing
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Biome](https://biomejs.dev/)** — linting and formatting
- **CSS Modules** — scoped component styles

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Run Biome linter and auto-fix |
| `pnpm format` | Format all files with Biome |
| `pnpm format:check` | Check formatting without writing |

## Project structure

```
src/
  App/                  # Root layout and shell
  pages/
    HomePage/
    CvPage/
    ProjectsPage/
    NotFoundPage/
  i18n/
    i18n.tsx            # I18nProvider and useTranslations hook
    locales/
      en.ts             # English translations
  styles/
    colors.css          # CSS color variables
  index.css             # Global styles and typography
  main.tsx              # Entry point
```

## i18n

All UI text lives in `src/i18n/locales/en.ts`. To add a new language, create a new locale file with the same shape and pass it to `<I18nProvider>` in `main.tsx`.
