import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Noticias y Eventos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mantente al tanto de los últimos avances en la innovación en salud
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                date: "15 de marzo, 2024",
                title: "Nueva Asociación de Investigación Anunciada",
                excerpt: "Colaboración importante con instituciones médicas líderes para avanzar en la innovación en salud."
              },
              {
                image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: "10 de marzo, 2024",
                title: "Cumbre de Innovación en Salud 2024",
                excerpt: "Conferencia anual que reúne a líderes e innovadores en el sector salud."
              },
              {
                image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                date: "5 de marzo, 2024",
                title: "Lanzamiento de la Iniciativa de Salud Comunitaria",
                excerpt: "Nuevo programa dirigido a mejorar el acceso a la salud en áreas rurales."
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={16} className="mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-primary hover:text-secondary">
                    Leer más <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Próximos Eventos</h2>
          <div className="space-y-6">
            {[ 
              {
                date: "15 de abril, 2024",
                title: "Taller de Innovación en Salud",
                location: "Centro de Convenciones de Córdoba",
                time: "9:00 AM - 5:00 PM"
              },
              {
                date: "1 de mayo, 2024",
                title: "Simposio de Salud Digital",
                location: "Evento Virtual",
                time: "2:00 PM - 6:00 PM"
              },
              {
                date: "20 de mayo, 2024",
                title: "Expo de Tecnología Médica",
                location: "Hub de Innovación",
                time: "10:00 AM - 4:00 PM"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-primary font-medium">{event.date}</p>
                    <p className="text-gray-500">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
