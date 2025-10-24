function Header() {
  return (
    <header className="bg-gray-900 text-white p-3 fixed w-full top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center">
        {/* Logo más corto para móvil */}
        <div className="text-lg font-bold text-blue-400 whitespace-nowrap">
          Portfolio
        </div>
        
        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li>
            <a href="#inicio" className="hover:text-blue-400 transition duration-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-blue-400 transition duration-300">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="hover:text-blue-400 transition duration-300">
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-blue-400 transition duration-300">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón más compacto para móvil */}
        <div className="md:hidden">
          <button className="text-white text-sm bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header