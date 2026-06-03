# Shepherd

[![CI](https://github.com/jeddelich/shepherd/actions/workflows/ci.yml/badge.svg)](https://github.com/jeddelich/shepherd/actions/workflows/ci.yml)

Shepherd is a Next.js + TypeScript project with linting, type checking, and Jest tests configured in CI.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- ESLint
- Jest

## Prerequisites

- Node.js 24 (recommended to match CI)
- npm 10+

## Getting Started

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - Start the Next.js dev server
- `npm run build` - Build the production app
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm test` - Run Jest tests

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`

CI runs on:

- Pushes to `main` and `dev`
- All pull requests

The workflow verifies:

- Linting
- Type checks
- Unit tests

## Project Structure

```text
app/       Next.js app router files
types/     Domain and shared TypeScript types
utils/     Utility functions and tests
public/    Static assets
```
