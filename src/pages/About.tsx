import React from 'react';
import { Clock, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Acerca de nosotros</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Liderando la innovación en salud en Córdoba a través de la colaboración, la investigación y la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Fomentar la innovación y colaboración en el sector salud conectando profesionales, 
                instituciones e investigadores, impulsando el avance médico y mejorando 
                la atención de los pacientes en nuestra región.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Convertirnos en el centro líder de innovación en salud en América Latina, reconocido por 
                la excelencia en investigación médica, avances tecnológicos y soluciones colaborativas en salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro recorrido</h2>
          <div className="space-y-8">
            {[ 
              {
                year: "2020",
                title: "Formación del Cluster",
                description: "Establecimiento de la iniciativa del cluster de salud en Córdoba"
              },
              {
                year: "2021",
                title: "Primeras Alianzas",
                description: "Formación de alianzas estratégicas clave con instituciones médicas"
              },
              {
                year: "2022",
                title: "Iniciativa de Investigación",
                description: "Lanzamiento de programas de investigación colaborativa"
              },
              {
                year: "2023",
                title: "Centro de Innovación",
                description: "Apertura de nuestro centro de innovación de última generación"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-primary">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Logros clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: <Clock className="w-12 h-12 text-primary" />,
                title: "Más de 10 años de experiencia",
                description: "Una década de excelencia en innovación en salud"
              },
              {
                icon: <Target className="w-12 h-12 text-primary" />,
                title: "Más de 50 socios",
                description: "Una red sólida de instituciones de salud"
              },
              {
                icon: <Award className="w-12 h-12 text-primary" />,
                title: "Más de 100 proyectos",
                description: "Iniciativas exitosas en salud completadas"
              }
            ].map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
