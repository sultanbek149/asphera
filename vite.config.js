import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import gltf from 'vite-plugin-gltf';
// import { draco } from "@gltf-transform/functions";



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
    // gltf({
    //   transforms: [draco()],
    // }),
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
