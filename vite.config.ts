import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import svgr from "vite-plugin-svgr";
import { remixDevTools } from "remix-development-tools";

const isVitest = Boolean(process.env.VITEST);

const remixPlugin = remix({
  ssr: false,
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => flatRoutes("pages", defineRoutes),
  appDirectory: "app",
});

export default defineConfig({
  plugins: [
    remixDevTools(),
    tsconfigPaths(),
    svgr(),
    !isVitest && remixPlugin,
  ].filter(Boolean),
  test: {
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
