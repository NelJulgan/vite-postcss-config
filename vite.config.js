import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';
import preCss from 'precss';
import autoPrefixer from 'autoprefixer';
import postcssAssets from 'postcss-assets';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        postcssPresetEnv,
        preCss,
        autoPrefixer,
        postcssAssets({
          loadPaths: ['images**'],
        }),
      ],
    },
  },
  base: '/vite-postcss-config/',
});
