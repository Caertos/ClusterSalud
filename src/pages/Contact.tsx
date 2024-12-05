import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const socialLinks: Record<string, string> = {
  Facebook: "https://www.facebook.com/ccmonteria/",
  Twitter: "https://x.com/ccmonteria/",
  Youtube: "https://www.youtube.com/channel/UC7xtfB8M3em-jTLLNl8zjyA",
};

const Contact = () => {
  return (
    <div>
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ponte en contacto con nuestro equipo para conocer más sobre nuestras iniciativas en salud
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto & Información */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary transition"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Dirección</h3>
                    <a className="text-gray-600" href='https://www.google.com/maps/place/Cámara+De+Comercio+de+Montería/@8.7552831,-75.8878581,775m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e5a2fe59d5f0a7b:0xfe3793ee6586c9e5!8m2!3d8.7552778!4d-75.8852778!16s%2Fg%2F1tg82j1h?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D'>Calle 28 No. 4 - 61<br />Córdoba, Colombia</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Teléfono</h3>
                    <a className="text-gray-600" href="tel:+573152817473">+57 3152817473
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Correo electrónico</h3>
                    <p className="text-gray-600">info@clustersalud.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Horario</h3>
                    <p className="text-gray-600">Lunes a viernes | 8:00 am a 12:00 pm - 2:00 pm a 6:00 pm</p>
                  </div>
                </div>
              </div>

              {/* Enlaces sociales */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Youtube'].map((social) => (
                    <a
                      key={social}
                      href={socialLinks[social]}
                      className="bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-md transition"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
