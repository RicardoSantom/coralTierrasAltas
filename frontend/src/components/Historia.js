import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Trophy } from 'lucide-react';

const Historia = () => {
  const milestones = [
    {
      year: '2000',
      title: 'Fundación de la Coral',
      description: 'Un grupo de aficionados a la música decide formar una agrupación polifónica ambiciosa.',
      icon: Users
    },
    {
      year: '2001',
      title: 'Primera presentación oficial',
      description: 'Presentación pública en Puebla de Sanabria el 16 de junio, tras una actuación de prueba en Porto de Sanabria.',
      icon: Trophy
    },
    {
      year: '2005',
      title: 'Primer disco',
      description: 'Grabación del primer disco en la iglesia del Monasterio de San Martín de Castañeda.',
      icon: Clock
    },
    {
      year: '2007-2009',
      title: 'Cambio de dirección',
      description: 'Incorporación de nuevos directores, culminando con D. Gregorio Díez como director actual desde 2009.',
      icon: Users
    },
    {
      year: '2014',
      title: 'Segundo disco',
      description: 'Grabación del segundo disco, consolidando el repertorio de la agrupación.',
      icon: Trophy
    },
    {
      year: '2019-2025',
      title: 'Giras anuales',
      description: 'Inicio de giras anuales por Francia, Andalucía, Castilla-La Mancha, Asturias y Cantabria.',
      icon: MapPin
    }
  ];

  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Nuestra <span className="text-coral-light">Historia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            25 años de música, tradición y compromiso cultural en las comarcas de Sanabria y Carballeda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1542990115-b0a05bb92698?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxjaG9pciUyMHBlcmZvcm1hbmNlfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1Mzc4MjEyNXww&ixlib=rb-4.1.0&q=85"
              alt="Director de la Coral"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-semibold text-white">
              Una agrupación única
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La Coral Tierras Altas de Sanabria y Carballeda nació en el año 2000, 
              recién comenzado el siglo XXI. Un grupo de aficionados a la música, 
              vinculados de una u otra manera con los múltiples coros parroquiales 
              de los pueblos de la zona, tuvieron la feliz idea de llevar el proyecto 
              de cantar más allá de las festividades dominicales.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Así decidieron comenzar realizando publicidad de la idea de cara a la 
              captación de cantores entre los coros parroquiales ya existentes, pero 
              también de otras personas ajenas a éstos que pudieran estar interesadas 
              en formar parte de una agrupación coral.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-coral-maroon"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="glass-dark p-6 rounded-lg elegant-hover">
                    <div className="flex items-center justify-center w-12 h-12 bg-coral-maroon rounded-full mb-4 mx-auto">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-coral-light mb-2">
                      {milestone.year}
                    </h4>
                    <h5 className="text-xl font-semibold text-white mb-3">
                      {milestone.title}
                    </h5>
                    <p className="text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-6 h-6 bg-coral-maroon rounded-full border-4 border-gray-900 z-10"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Características especiales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Lo que nos hace <span className="text-coral-light">especiales</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Aficionados dedicados',
                description: 'Integrada por aficionados sin formación musical formal, demostrando que la pasión supera las barreras.',
                icon: '🎵'
              },
              {
                title: 'Múltiples localidades',
                description: 'Miembros de toda Sanabria y Carballeda se desplazan kilómetros para ensayar semanalmente.',
                icon: '🌍'
              },
              {
                title: 'Actividad permanente',
                description: 'Actividad musical ininterrumpida durante todo el año con ensayos semanales y conciertos.',
                icon: '⏰'
              },
              {
                title: 'Sin ánimo de lucro',
                description: 'Asociación cultural que se mantiene gracias al esfuerzo económico de sus propios miembros.',
                icon: '❤️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg text-center elegant-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Historia;