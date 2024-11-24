import React from 'react';
import { Stethoscope, Brain, Network, Users, Lightbulb } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluciones integrales de salud impulsando la innovación y la excelencia
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-12 h-12 text-primary" />,
                title: "Excelencia Clínica",
                description: "Apoyando a los proveedores de salud para ofrecer una atención excepcional a los pacientes mediante soluciones innovadoras y mejores prácticas."
              },
              {
                icon: <Brain className="w-12 h-12 text-primary" />,
                title: "Investigación Médica",
                description: "Facilitando proyectos de investigación innovadores y ensayos clínicos en colaboración con instituciones líderes."
              },
              {
                icon: <Network className="w-12 h-12 text-primary" />,
                title: "Laboratorio de Innovación",
                description: "Instalaciones de última generación para probar y desarrollar nuevas tecnologías y soluciones de salud."
              },
              {
                icon: <Network className="w-12 h-12 text-primary" />,
                title: "Creación de Redes",
                description: "Estableciendo conexiones valiosas entre profesionales de la salud, instituciones y socios de la industria."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Desarrollo Profesional",
                description: "Programas de formación integral y talleres para profesionales de la salud."
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-primary" />,
                title: "Consultoría en Innovación",
                description: "Orientación experta para implementar soluciones innovadoras en salud y transformación digital."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="/contact" className="text-primary hover:text-secondary font-medium inline-flex items-center">
                  Saber más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
