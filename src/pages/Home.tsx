import React from 'react';
import { ArrowRight, Activity, Heart, Microscope, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Sección Hero */}
      <section className="relative bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovando la atención médica juntos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conectando profesionales de la salud, investigadores e instituciones para avanzar en la innovación médica en Córdoba
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                Nuestros Servicios <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10">
                Únete al Cluster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visión General de los Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                icon: <Activity className="w-12 h-12 text-primary" />,
                title: "Innovación en Atención Médica",
                description: "Fomentando soluciones innovadoras en la entrega de atención médica y tecnología"
              },
              {
                icon: <Heart className="w-12 h-12 text-primary" />,
                title: "Excelencia en Atención al Paciente",
                description: "Mejorando los resultados de los pacientes a través de modelos colaborativos de atención"
              },
              {
                icon: <Microscope className="w-12 h-12 text-primary" />,
                title: "Investigación y Desarrollo",
                description: "Apoyando iniciativas innovadoras en investigación médica"
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Red Profesional",
                description: "Construyendo conexiones fuertes dentro de la comunidad médica"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Actualizaciones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Últimas Actualizaciones</h2>
            <p className="text-gray-600 mt-4">Mantente informado sobre nuestras últimas iniciativas y logros</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Nueva Asociación en Investigación",
                date: "15 de marzo de 2024",
                description: "Anunciamos nuestra colaboración con instituciones médicas líderes"
              },
              {
                image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Cumbre de Innovación en Salud",
                date: "10 de marzo de 2024",
                description: "Únete a nuestra conferencia anual sobre innovación en salud"
              },
              {
                image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Iniciativa de Salud Comunitaria",
                date: "5 de marzo de 2024",
                description: "Lanzamiento de nuestro nuevo programa de salud comunitaria"
              }
            ].map((update, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={update.image} alt={update.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-primary mb-2">{update.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                  <p className="text-gray-600">{update.description}</p>
                  <a href="/news" className="inline-flex items-center mt-4 text-primary hover:text-secondary">
                    Leer más <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
