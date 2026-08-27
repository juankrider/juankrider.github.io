export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-950 px-6 py-8 md:px-12 lg:px-24">
      <div className="container-custom mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white"
        >
          JC<span className="text-accent">.</span>
        </a>
        <p className="text-center text-xs text-gray-500 md:text-sm">
          © {new Date().getFullYear()} Juan Carlos Cerrato. Ingeniería,
          diseño & IA.
        </p>
        <p className="text-xs text-gray-600">
          Hecho con Next.js y mucho café
        </p>
      </div>
    </footer>
  );
}
