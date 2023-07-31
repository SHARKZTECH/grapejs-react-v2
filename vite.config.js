import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mjml from 'vite-plugin-mjml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mjml({
    input: "src",
    output: "emails",
    extension: ".html",
    watch: true
  }),
  react(),
],
})
