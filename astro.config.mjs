// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // 1. Importamos el adaptador

// https://astro.build/config
export default defineConfig({
  output: 'server', // 2. Definimos el modo server
  adapter: vercel(), // 3. Activamos el adaptador
  vite: {
    plugins: [tailwindcss()]
  }
});