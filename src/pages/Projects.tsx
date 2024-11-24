import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Iniciativas innovadoras en salud que están marcando la diferencia en nuestra comunidad
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Proyectos Actuales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ 
              {
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "IA en Salud",
                category: "Investigación",
                description: "Implementación de soluciones de inteligencia artificial para mejorar el diagnóstico y la atención de los pacientes."
              },
              {
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Plataforma de Telemedicina",
                category: "Tecnología",
                description: "Desarrollo de una solución integral de telemedicina para atención remota de pacientes."
              },
              {
                image: "https://plus.unsplash.com/premium_photo-1664475559006-b854dc6289a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Salud Comunitaria",
                category: "Salud Pública",
                description: "Mejorando el acceso a la atención sanitaria en comunidades marginadas mediante clínicas móviles."
              },
              {
                image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Educación Médica",
                category: "Educación",
                description: "Entrenamiento de la próxima generación de profesionales de salud utilizando tecnología de realidad virtual."
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-primary hover:text-secondary">
                    Saber más <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Historias de Éxito</h2>
          <div className="space-y-8">
            {[ 
              {
                title: "Implementación de Registros de Salud Digitales",
                impact: "Reducción del tiempo administrativo en un 40%",
                description: "Implementación exitosa de un sistema unificado de registros de salud digitales en 10 hospitales principales."
              },
              {
                title: "Monitoreo Remoto de Pacientes",
                impact: "Mejora de los resultados de los pacientes en un 25%",
                description: "Desarrollo e implementación de sistemas de monitoreo de pacientes basados en IoT para la gestión de enfermedades crónicas."
              },
              {
                title: "Programa de Capacitación para Trabajadores de Salud",
                impact: "Capacitación de más de 1,000 profesionales",
                description: "Programa de capacitación integral para trabajadores de salud en nuevas tecnologías médicas."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-primary font-medium mb-4">{story.impact}</p>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
