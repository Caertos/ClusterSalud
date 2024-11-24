import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-auto w-40 object-contain" src="/ClusterSalud/logo.png" alt="Cluster de Salud" />
            <p className="text-gray-400">
              Impulsando la innovación en salud a través de la colaboración y la excelencia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">Acerca de nosotros</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Servicios</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Proyectos</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">Noticias y eventos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Córdoba, Colombia</li>
              <li>Teléfono: +54 (351) 123-4567</li>
              <li>Email: info@clustersalud.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cluster de Salud Córdoba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
