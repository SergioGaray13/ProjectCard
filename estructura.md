📂 mi-portafolio/
├── 📂 public/          # Archivos estáticos (imágenes, fuentes, favicon, etc.)
│   ├── 📂 images/      # Imágenes accesibles directamente desde la web
│   │   ├── Abstractgris.jpeg
│   │   ├── AbstractNegro.png
│   ├── nnneon.svg      # Imagen de fondo
│   ├── favicon.ico
│   ├── HOJA DE VIDA SERGIO GARAY.pdf
│
├── 📂 src/             # Código fuente del sitio
│   ├── 📂 assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   ├── 📂 components/  # Componentes reutilizables (Astro, React, Svelte, etc.)
│   │   ├── ProjectCard.astro
│   │   ├── Header.astro
│   │   └── NavBar.astro
│   │   └── ProfileImage.astro
│   │   ├── Footer.astro
│   │   └── Welcome.astro
│   │
│   ├── 📂 content/     # contenido markdown
│   │   ├── 📂 projects/    #proyectos markdown
│   │   │   ├── avamar.mdx
│   │   │   ├── blog.mdx
│   │   │   ├── compilador.mdx
│   │   │   ├── portafolio.mdx
│   │
│   ├── 📂 layouts/     # Plantillas para páginas (estructura base)
│   │   ├── Layout.astro
│   │
│   ├── 📂 pages/       # Páginas del sitio (cada archivo aquí es una URL)
│   │   ├── index.astro # Página principal → http://localhost:3000/
│   │   ├── about.astro # Página "Acerca de" → http://localhost:3000/about
│   │   ├── contact.astro
│   │   └── [slug].astro
│   │
│   ├── 📂 styles/      # Estilos CSS globales o específicos
│   │   ├── styles.css
│   │   ├── header.css
│   │   ├── navbar.css
│   │
│   ├── 📂 images/      # (Opcional) Imágenes procesadas por Astro
│   │
│   ├── 📂 data/        # Datos en JSON o JavaScript para alimentar la web (opcional)
│   │   ├── data.json
│
├── 📂 node_modules/    # Dependencias instaladas con npm/yarn/pnpm
│
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias y scripts npm
├── tsconfig.json       # Configuración de TypeScript (si usas TS)
└── README.md           # Información del proyecto
