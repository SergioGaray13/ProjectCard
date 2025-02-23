
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  collections: {
    projects: '../content/projects/*.mdx',  // Ajusta la ruta a la carpeta de proyectos
    info: '../content/info/*.mdx',
  },
});
