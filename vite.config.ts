import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import svgr from "vite-plugin-svgr";
import { remixDevTools } from "remix-development-tools";

export default defineConfig({
  plugins: [
    remixDevTools(),
    !process.env.VITEST &&
      remix({
        ssr: false,
        ignoredRouteFiles: ["**/.*"],
        routes: async (defineRoutes) => {
          return flatRoutes("pages", defineRoutes);
        },
        appDirectory: "app",
      }),
    tsconfigPaths(),
    svgr(),
  ],
  test: {
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
