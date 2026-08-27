# Juan Carlos Cerrato — Portfolio

Portfolio profesional de **Juan Carlos Cerrato**, Ingeniero de Diseño Industrial
especializado en I+D, diseño mecánico, automatización e inteligencia artificial.

## ✨ Características

- Next.js 14 + TypeScript + TailwindCSS
- Animaciones suaves con Framer Motion
- Iconografía Lucide
- Dark mode elegante e inmersivo
- Diseño 100% responsive
- SEO completo (metadata, OpenGraph, Twitter Cards)
- Sitemap y robots.txt generados
- Accesibilidad AA
- Despliegue preparado para GitHub Pages y Vercel

## 🛠️ Stack

| Categoría | Tecnologías |
|-----------|-------------|
| Framework | Next.js 14, React 18 |
| Estilos | TailwindCSS |
| Animación | Framer Motion |
| Iconos | Lucide |
| Lenguaje | TypeScript |

## 🚀 Puesta en marcha

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Servir build
npm start
```

## ☁️ Despliegue

### Vercel (recomendado)

1. Haz push del repositorio a GitHub.
2. Importa el proyecto en [vercel.com](https://vercel.com).
3. Vercel detecta Next.js automáticamente y construye el proyecto.

### GitHub Pages

Este proyecto está configurado con `output: "export"` en `next.config.js`.
Para desplegar en GitHub Pages:

1. Ejecuta `npm run build` (genera `out/`).
2. Publica el contenido de `out/` en la rama `gh-pages`.
3. Activa **GitHub Pages** en el repositorio usando `gh-pages`.

## 📁 Estructura

```
src/
├── app/
│   ├── globals.css        # Estilos globales + tema
│   ├── layout.tsx         # Layout + metadata SEO
│   ├── page.tsx           # Página principal
│   ├── icon.svg           # Favicon
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # sitemap.xml
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Certifications.tsx
    ├── TechStack.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## 📝 Personalización

- **Datos personales**: edita los componentes en `src/components/`.
- **Enlaces sociales**: actualiza en `Contact.tsx`.
- **Metadata**: modifica `layout.tsx`.

## 📄 Licencia

Uso personal. Proyecto creado para Juan Carlos Cerrato.
