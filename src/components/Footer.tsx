import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-auto w-40 object-contain" src="/ClusterSalud/logoBlanco.png" alt="Cluster de Salud" />
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
              <li><a href="https://ccmonteria.org.co">Cámara de Comercio de Montería</a></li>
              <li>NIT: 891080019</li>
              <li><a href="https://www.google.com/maps/place/Cámara+De+Comercio+de+Montería/@8.7552831,-75.8878581,775m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e5a2fe59d5f0a7b:0xfe3793ee6586c9e5!8m2!3d8.7552778!4d-75.8852778!16s%2Fg%2F1tg82j1h?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D">Calle 28 No. 4 - 61 (Córdoba) Colombia</a></li>
              <li><a href="tel:+573152817473">Teléfono: +573152817473</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=<+573173709299>">Whatsapp: +573173709299</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ccmonteria/" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/ccmonteria/" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UC7xtfB8M3em-jTLLNl8zjyA" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
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
