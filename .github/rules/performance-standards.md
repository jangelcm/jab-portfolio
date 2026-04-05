# Performance Standards: Core Web Vitals Optimization

## Image Optimization (LCP)
- **Mandatory:** Use `NgOptimizedImage` for all images.
- **Priority:** Use the `priority` attribute for Hero images or any image visible above the fold.
- **Sizing:** Always provide `width` and `height` to prevent Layout Shift (CLS).

## Angular 19 Deferred Loading (Core Performance)
- **Rule:** Use `@defer` blocks for heavy components, third-party maps, or sections below the fold (e.g., "Contact Form" or "Detailed Project Lists").
- **Triggers:** Prefer `on viewport` or `on idle` for non-critical sections.
- **Placeholders:** Always provide a `@placeholder` and `@loading` state to ensure a smooth UX.

## Bundle Size & Tree Shaking
- **Imports:** Never use `import { ... } from 'rxjs'`. Use specific paths if possible to help tree-shaking.
- **Lazy Loading:** All main routes must be lazy-loaded in the `app.routes.ts`.

## Technical SEO
- **Prerendering:** Assume the project uses SSG (Static Site Generation) or SSR with Hydration.
- **Sitemap:** Ensure logical heading hierarchy (H1 -> H2 -> H3) to facilitate crawling.