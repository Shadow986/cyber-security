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
        xss: resolve(__dirname, 'xss.html'),
        portscanner: resolve(__dirname, 'portscanner.html'),
        vulnscanner: resolve(__dirname, 'vulnscanner.html'),
        networkmapper: resolve(__dirname, 'networkmapper.html'),
        hashanalyzer: resolve(__dirname, 'hashanalyzer.html'),
        prevention: resolve(__dirname, 'prevention.html')
      }
    }
  }
})
