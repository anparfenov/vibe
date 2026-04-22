# My Site

A personal site built with modern web technologies, available in two framework implementations: **Preact** and **Vue 3**.

## Overview

This is a monorepo workspace containing multiple implementations of the same personal website. Choose the implementation that best suits your needs:

- **[Preact Version](packages/my-site-preact/)** — Lightweight, fast, and Preact-based
- **[Vue Version](packages/my-site-vue/)** — Full-featured Vue 3 implementation

## Workspace Structure

```
my-site/
├── packages/
│   ├── my-site-preact/    # Preact + Vite implementation
│   ├── my-site-vue/       # Vue 3 + Vite implementation
│   └── shared/            # Shared locales and styles
├── pnpm-workspace.yaml    # Workspace configuration
└── pnpm-lock.yaml         # Lockfile
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **pnpm** 8+ ([install pnpm](https://pnpm.io/installation))

### Installation

```bash
# Install dependencies for all packages
pnpm install
```

### Development

```bash
# Start dev servers for all packages
pnpm dev
```

Or run a specific package:

```bash
cd packages/my-site-preact
pnpm dev
```

## Available Scripts

Run from the workspace root:

| Command | Description |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev servers for all packages |
| `pnpm build` | Build all packages for production |
| `pnpm preview` | Preview production builds |
| `pnpm lint` | Run linting across all packages |
| `pnpm lint:fix` | Run linting and auto-fix |
| `pnpm format` | Format all files |
| `pnpm format:check` | Check formatting without writing |

## Technology Stack

### Common
- **[Vite](https://vitejs.dev/)** — Build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Oxlint](https://oxc.rs/)** — Fast linting
- **[Oxfmt](https://oxc.rs/)** — Fast formatting
- **CSS Modules** — Scoped component styles

### Preact Version
- **[Preact](https://preactjs.com/)** — Lightweight UI library
- **[wouter-preact](https://github.com/molefrog/wouter)** — Client-side routing

### Vue Version
- **[Vue 3](https://vuejs.org/)** — Progressive UI framework
- **[Vue Router](https://router.vuejs.org/)** — Official routing

## Shared Resources

The `packages/shared/` directory contains:
- **locales/** — Shared translation files for all implementations
- **styles/** — Shared CSS variables and global styles

## Project Pages

Both implementations include the following pages:
- **Home** — Landing page
- **CV** — Curriculum Vitae / Resume
- **Projects** — Portfolio of projects
- **Not Found** — 404 page

## License

This project is personal and proprietary unless otherwise specified.
