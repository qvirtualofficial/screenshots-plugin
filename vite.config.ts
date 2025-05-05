import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { resolve } from "node:path";
import smartCARSPlugin from "./vite-plugin-smartcars.ts";
import packageJson from "./package.json";
import copy from "rollup-plugin-copy";

const PLUGIN_NAME = packageJson.name;
const OUTPUT_DIR = resolve(__dirname, `./${PLUGIN_NAME}/ui`);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_SC3_PLUGIN_DIR } = loadEnv(mode, process.cwd());
  return {
    base: `/plugins/${PLUGIN_NAME}/`,
    esbuild: {
      pure: ["console.log", "console.info"],
    },
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      tailwindcss(),
      smartCARSPlugin({
        pluginName: PLUGIN_NAME,
        sc3PluginDir: VITE_SC3_PLUGIN_DIR,
        outputDir: OUTPUT_DIR,
      }),
      copy({
        targets: [
          { src: "plugin.json", dest: OUTPUT_DIR + "/../" },
          {
            src: PLUGIN_NAME,
            dest: `${VITE_SC3_PLUGIN_DIR}`,
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: OUTPUT_DIR,
    },
  };
});
