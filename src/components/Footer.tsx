export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 md:px-12 lg:px-24">
      <div className="container-custom mx-auto flex flex-col items-center gap-6 text-center">
        <div className="mono flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          Model JCC-01
        </div>

        <h2 className="text-3xl font-medium leading-none text-paper md:text-4xl">
          Let's get creative.
        </h2>

        <p className="mono text-[11px] uppercase tracking-wide text-paper/50">
          © {new Date().getFullYear()} Juan Carlos Cerrato · Engineering & AI
        </p>
      </div>
    </footer>
  );
}
