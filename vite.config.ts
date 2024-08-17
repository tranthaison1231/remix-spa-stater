import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";
import svgr from "vite-plugin-svgr";
import { remixDevTools } from "remix-development-tools";

export default defineConfig({
  plugins: [
    remixDevTools(),
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
});
