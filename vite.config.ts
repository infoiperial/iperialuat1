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
// this `nitro` block is honored and we produce a fully static site under
// `.output/public/`, including `.nojekyll` and a `404.html` fallback.
export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "github_pages",
  },
  vite: {
    // Allow GitHub Actions to set BASE_PATH=/<repo-name>/ when deploying a
    // project site (https://<user>.github.io/<repo>/). Defaults to "/" so
    // custom domains and user/org sites (<user>.github.io) work out of the box.
    base: process.env.BASE_PATH || "/",
  },
});
