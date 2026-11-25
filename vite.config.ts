import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Versão nova é baixada em segundo plano e só entra em uso na próxima abertura do app
      // (sem skipWaiting/clientsClaim), para não recarregar no meio de uma partida.
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'ORIGINS',
        short_name: 'ORIGINS',
        description: 'Simulador de vida sandbox.',
        lang: 'pt-BR',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#1b2030',
        theme_color: '#1b2030',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
