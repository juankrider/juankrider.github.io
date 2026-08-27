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
    url: "https://juankrider.github.io/juankcerrato",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#e4e1dc" />
      </head>
      <body className="min-h-screen bg-ground text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
