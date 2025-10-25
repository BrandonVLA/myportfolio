function Header() {
  return (
    <header className="bg-gray-900 text-white p-3 fixed w-full top-0 z-[9999] shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo más corto para móvil */}
        <div className="text-lg font-bold text-blue-400 whitespace-nowrap">
          Portfolio
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Botón más compacto para móvil */}
        <div className="md:hidden">
          <button className="text-white text-sm bg-blue-500 rounded hover:bg-blue-600 transition mr-2">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
