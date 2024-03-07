export default defineNuxtConfig({
  vite: {
    server: {
      watch: {
        usePolling: true, 
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'assets/main.scss'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],
  components: [
    {
      path: '~/components',
      global: true
    },
  ],
})
