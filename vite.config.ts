import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tools: resolve(__dirname, 'tools.html'),
        bruteforce: resolve(__dirname, 'bruteforce.html'),
        sqlinjection: resolve(__dirname, 'sqlinjection.html'),
        xss: resolve(__dirname, 'xss.html')
      }
    }
  }
})
