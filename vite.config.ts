// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When this build runs INSIDE a Lovable sandbox (preview/publish), the wrapper
// forces preset=cloudflare-module regardless of what we pass here.
// When the build runs OUTSIDE Lovable (e.g. GitHub Actions for GitHub Pages),
// the `nitro.preset = "static"` below is honored and Nitro emits a fully
// static site under `.output/public/`. We then run TanStack Start in SPA mode
// (`spa.enabled = true`) so a single shell HTML handles all client routes —
// the workflow copies it to `index.html` + `404.html` for GitHub Pages.
export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // SPA shell — renders the router pending fallback into a single static HTML file.
    spa: {
      enabled: true,
    },
  },
  nitro: {
    // GitHub Actions explicitly sets NITRO_PRESET=static in the Pages workflow.
    // Outside that workflow we still default to a static preset for self-hosted static builds.
    preset: process.env.NITRO_PRESET || "static",
  },
  vite: {
    // GitHub Actions sets BASE_PATH=/<repo>/ for project sites. Defaults to "/"
    // so user/org sites and custom domains work out of the box. This value is
    // also exposed to the router via import.meta.env.BASE_URL (see src/router.tsx).
    base: process.env.BASE_PATH || "/",
  },
});
