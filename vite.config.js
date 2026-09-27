import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/alleo-nina-wedding/',
  plugins: [react()],
  build: {
    rollupOptions: {
      // The wedding site, plus a tiny redirect so …/rsvp/?inv= links reach its RSVP section.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        rsvp: resolve(import.meta.dirname, 'rsvp/index.html'),
      },
    },
  },
})
