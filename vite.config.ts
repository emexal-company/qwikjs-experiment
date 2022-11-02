import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { join, resolve } from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
      viteStaticCopy({
        targets: [
          { src: 'node_modules/@fortawesome/fontawesome-free/webfonts/*', dest: 'webfonts'
          }
        ]
      })
    ],
    resolve: {
      alias: {
        "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
        "~fontawesome": resolve(__dirname, "node_modules/@fortawesome/fontawesome-free")
      },
    },
  };
});
