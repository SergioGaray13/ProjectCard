import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static', // 👉 Esto indica que el sitio se generará como estático (SSG)
  experimental: {
    assets: true, // 👉 Esto habilita el nuevo sistema de manejo de assets de Astro
  },
  integrations: [mdx()],
  collections: {
    projects: '../content/projects/*.mdx', // ✅ esto depende de tu estructura real (ver nota abajo)
  },
});
