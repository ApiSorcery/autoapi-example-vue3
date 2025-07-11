import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_GLOB_PUBLIC_PATH,
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: Number(env.VITE_PORT),
      proxy: {
        [env.VITE_GLOB_BASE_API]: {
          target: 'http://150.158.52.214:9015/', // Prod
          // target: 'http://localhost:9005/', // Local
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_GLOB_BASE_API}`), ''),
        },
      },
    },
  }
})
