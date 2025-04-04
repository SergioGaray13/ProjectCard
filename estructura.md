📂 mi-portafolio/
├── 📂 public/          # Archivos estáticos (imágenes, fuentes, favicon, etc.)
│   ├── 📂 images/      # Imágenes accesibles
│   │   ├── Abstractgris.jpeg
│   │   ├── AbstractNegro.png
│   ├── nnneon.svg      # Imagen de fondo
│   ├── favicon.ico
│   ├── HOJA DE VIDA SERGIO GARAY.pdf
│
├── 📂 src/             # Código fuente del sitio
│   ├── 📂 assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── 📂 components/  # Componentes reutilizables (Astro)
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── NavBar.astro
│   │   ├── ProfileImage.astro
│   │   ├── ProjectCard.astro
│   │   └── Welcome.astro
│   │
│   ├── 📂 content/     # contenido markdown
│   │   ├── 📂 projects/    #proyectos markdown
│   │   │   ├── algoritmos.mdx
│   │   │   ├── avamar.mdx
│   │   │   ├── blog.mdx
│   │   │   ├── compilador.mdx
│   │   │   └── portafolio.mdx
│   │
│   ├── 📂 layouts/     # Plantillas para páginas (estructura base)
│   │   └── Layout.astro
│   │
│   ├── 📂 pages/       # Páginas del sitio (cada archivo aquí es una URL)
│   │   ├── 📂 projects/
│   │   │   └── [slug].astro
│   │   ├── 404.astro # Error 404
│   │   ├── about.astro # Página "Acerca de" → http://localhost:3000/about
│   │   ├── contacts.astro
│   │   └── index.astro # Página principal → http://localhost:3000/
│   │
│   ├── 📂 styles/      # Estilos CSS globales o específicos
│   │   ├── contacts.css
│   │   ├── navbar.css
│   │   ├── header.css
│   │   ├── navbar.css
│   │   ├── project.css
│   │   └── styles.css
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
├── package-lock.json
├── README.md           # Información del proyecto
└── tsconfig.json       # Configuración de TypeScript (si usas TS)
