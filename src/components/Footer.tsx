export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-16 md:px-12 lg:px-24">
      <div className="container-custom mx-auto text-center">
        <h2 className="serif text-4xl font-medium text-white md:text-5xl">
          Let's Get
          <br />
          Creative.
        </h2>
        <div className="mx-auto mt-10 h-px w-16 bg-gray-600" />
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Juan Carlos Cerrato · Ingeniería &
          IA
        </p>
      </div>
    </footer>
  );
}
