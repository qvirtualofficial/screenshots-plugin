import fs from "fs-extra";
import type { Plugin } from "vite";

export default function smartCARSPlugin(options: {
  pluginName: string;
  sc3PluginDir: string | undefined;
  outputDir: string;
}): Plugin {
  return {
    name: "vite-plugin-smartcars",

    configureServer(server) {
      server.httpServer?.once("listening", () => {
        if (options.sc3PluginDir) {
          console.log(
            "🚀 Dev server started - copying initial build to smartCARS...",
          );
          copyToSmartCARS(
            options.pluginName,
            options.sc3PluginDir,
            options.outputDir,
          );
        }
      });
    },

    closeBundle: () => {
      if (options.sc3PluginDir) {
        console.log("📦 Build completed - copying to smartCARS...");
        copyToSmartCARS(
          options.pluginName,
          options.sc3PluginDir,
          options.outputDir,
        );
      }
    },
  };
}

function copyToSmartCARS(
  pluginName: string,
  sc3PluginDir: string,
  outputDir: string,
) {
  try {
    fs.mkdir(`${sc3PluginDir}/${pluginName}/ui/assets`, {
      recursive: true,
    });

    fs.removeSync(`${sc3PluginDir}/${pluginName}`);

    fs.copySync(outputDir + "/../", `${sc3PluginDir}/${pluginName}`, {
      overwrite: true,
    });
  } catch (error) {
    console.error(error);
  }
}
