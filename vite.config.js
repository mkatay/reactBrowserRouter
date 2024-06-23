import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://course-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

//az összes /api-val kezdődő kérés továbbításra kerül a https://course-api.com címre.
//Amikor egy kérés érkezik az /api útvonallal, akkor a proxy ezt a kérést átirányítja a https://course-api.com szerverre.