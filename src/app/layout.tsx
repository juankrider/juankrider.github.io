import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Juan Carlos Cerrato | Industrial Design Engineer & AI Builder",
    template: "%s | Juan Carlos Cerrato",
  },
  description:
    "Portfolio de Juan Carlos Cerrato — Ingeniero de Diseño Industrial, especialista en I+D, diseño mecánico, automatización e inteligencia artificial. Construyendo el futuro entre la ingeniería y el software.",
  keywords: [
    "Juan Carlos Cerrato",
    "Ingeniero de Diseño Industrial",
    "SolidWorks",
    "AutoCAD",
    "Python",
    "Inteligencia Artificial",
    "Automatización",
    "I+D",
    "Diseño Mecánico",
    "FastAPI",
    "Ollama",
    "Portfolio",
  ],
  authors: [{ name: "Juan Carlos Cerrato" }],
  creator: "Juan Carlos Cerrato",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://juankrider.github.io/",
    title: "Juan Carlos Cerrato | Industrial Design Engineer & AI Builder",
    description:
      "Ingeniero de Diseño Industrial especializado en I+D, automatización e inteligencia artificial.",
    siteName: "Juan Carlos Cerrato Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos Cerrato | Industrial Design Engineer & AI Builder",
    description:
      "Ingeniero de Diseño Industrial especializado en I+D, automatización e inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://juankrider.github.io/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Anti-FOUC: fija data-theme antes del primer paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}}();`,
          }}
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#e4e1dc"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#141414"
        />
      </head>
      <body className="min-h-screen bg-ground text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
