import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import svgr from "vite-plugin-svgr";
import { remixDevTools } from "remix-development-tools";
import AutoImport from "unplugin-auto-import/vite";

const isVitest = Boolean(process.env.VITEST);

const remixPlugin = remix({
  ssr: false,
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => flatRoutes("pages", defineRoutes),
  appDirectory: "app",
});

const plugins = [
  remixDevTools(),
  tsconfigPaths(),
  svgr(),
  AutoImport({
    imports: ["vitest"],
    dts: true, // generate TypeScript declaration
  }),
];

if (!isVitest) {
  plugins.push(remixPlugin);
}

export default defineConfig({
  plugins: plugins,
  build: {
    minify: "terser",
  },
  test: {
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
