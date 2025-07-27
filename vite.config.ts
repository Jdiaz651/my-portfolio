import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// ✅ Set this to match your GitHub repo name
const repoName = "my-portfolio";

export default defineConfig(({ mode }) => {
  const isBuild = mode === "production";

  return {
    base: `/${repoName}/`,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean,
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Copy index.html to 404.html after build (manual fallback)
          // You can also do this in a postbuild script
          plugins: [
            {
              name: "copy-index-to-404",
              closeBundle: () => {
                const distDir = path.resolve(__dirname, "dist");
                const indexPath = path.resolve(distDir, "index.html");
                const errorPath = path.resolve(distDir, "404.html");
                if (fs.existsSync(indexPath)) {
                  fs.copyFileSync(indexPath, errorPath);
                  console.log("✅ Copied index.html → 404.html");
                }
              },
            },
          ],
        },
      },
    },
  };
});
