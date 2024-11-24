import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-auto w-40 object-contain"
                src="/ClusterSalud/logo.png"
                alt="Cluster de Salud"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Inicio</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">Acerca de</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition">Servicios</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary transition">Proyectos</Link>
            <Link to="/news" className="text-gray-700 hover:text-primary transition">Noticias</Link>
            <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">Contacto</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Inicio</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">Acerca de</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-primary">Servicios</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-primary">Proyectos</Link>
            <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-primary">Noticias</Link>
            <Link to="/contact" className="block px-3 py-2 bg-primary text-white rounded-md">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
