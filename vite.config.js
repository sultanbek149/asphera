import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Use a regex to match the tag name of your custom element
          isCustomElement: (tag) => tag === 'spline-viewer'
        }
      }
    }),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*', // Source folder for images
          dest: 'icons' // Destination folder in the build output
        }
      ]
    })
    // gltf({
    //   transforms: [draco()],
    // }),
  ],
  // assetsInclude: ['**/*.glb', '**/*.gltf'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
