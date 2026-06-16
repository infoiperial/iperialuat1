// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

// When this build runs INSIDE a Lovable sandbox (preview/publish), the wrapper
// forces preset=cloudflare-module regardless of what we pass here.
// When the build runs OUTSIDE Lovable (e.g. GitHub Actions for GitHub Pages),
// the `nitro.preset = "static"` below is honored and Nitro emits a static site
// under `.output/public/`. For GitHub Pages we use prerendered HTML instead of
// TanStack Start's SPA shell mode, which avoids Vite's SSR/html input conflict.
export default defineConfig({
  tanstackStart: {
    // Keep the custom SSR error wrapper for Lovable preview/publish builds only.
    // For GitHub Pages static exports, TanStack's default server entry is required
    // so the prerender step can resolve the expected server bundle correctly.
    ...(isLovableSandbox ? { server: { entry: "server" } } : {}),
    ...(!isLovableSandbox
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
          },
        }
      : {}),
  },
  // Lovable preview/publish needs the deploy plugin; GitHub Pages does not.
  // Disabling Nitro outside Lovable avoids the failing SSR build stage in Actions.
  nitro: isLovableSandbox
    ? {
        preset: process.env.NITRO_PRESET || "static",
      }
    : false,
  vite: {
    // GitHub Actions sets BASE_PATH=/<repo>/ for project sites. Defaults to "/"
    // so user/org sites and custom domains work out of the box. This value is
    // also exposed to the router via import.meta.env.BASE_URL (see src/router.tsx).
    base: "/",
  },
});
