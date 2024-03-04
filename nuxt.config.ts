export default defineNuxtConfig({
  vite: {
    server: {
      watch: {
        usePolling: true, 
      },
    },
  },
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'assets/main.scss'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ]
})
