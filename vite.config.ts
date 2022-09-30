import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    },
  };
});
