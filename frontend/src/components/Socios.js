import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Plane, BookOpen, Download, Crown, Music, Heart } from 'lucide-react';

const Socios = () => {
  const beneficios = [
    {
      titulo: 'Participación plena',
      descripción: 'Asistir a todos los ensayos y cantar en las actuaciones de la Coral',
      icon: Music,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      titulo: 'Partituras gratuitas',
      descripción: 'Recibir de forma gratuita todas las partituras del repertorio coral',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600'
    },
    {
      titulo: 'Viajes con la Coral',
      descripción: 'Viajar con la Coral en todas sus actividades, gratuito o a precio especial',
      icon: Plane,
      color: 'from-purple-500 to-violet-600'
    },
    {
      titulo: 'Materiales exclusivos',
      descripción: 'Obtener gratuitamente todos los materiales que se distribuyen para socios',
      icon: Gift,
      color: 'from-amber-500 to-orange-600'
    },
    {
      titulo: 'Contenido exclusivo',
      descripción: 'Acceder a materiales exclusivos en la zona privada de socios',
      icon: Crown,
      color: 'from-red-500 to-pink-600'
    }
  ];

  const tiposSocio = [
    {
      nombre: 'Socio Coralista',
      descripcion: 'Para miembros activos que participan en ensayos y actuaciones',
      precio: 'Cuota anual',
      beneficios: ['Participación en ensayos', 'Actuaciones', 'Partituras gratuitas', 'Viajes incluidos', 'Materiales exclusivos'],
      destacado: true
    },
    {
      nombre: 'Socio Colaborador',
      descripcion: 'Para personas que quieren apoyar la labor de la Coral',
      precio: 'Cuota anual',
      beneficios: ['Acceso a conciertos especiales', 'Materiales informativos', 'Invitaciones a eventos', 'Reconocimiento público'],
      destacado: false
    },
    {
      nombre: 'Socio Honorífico',
      descripcion: 'Para personas e instituciones que han contribuido significativamente',
      precio: 'Por designación',
      beneficios: ['Reconocimiento especial', 'Invitaciones VIP', 'Participación en actos protocolarios', 'Mención en programas'],
      destacado: false
    }
  ];

  const ventajas = [
    {
      titulo: 'Asociación sin ánimo de lucro',
      descripcion: 'Somos una entidad cultural que se mantiene gracias al esfuerzo de nuestros socios',
      icon: '🤝'
    },
    {
      titulo: 'Compromiso cultural',
      descripcion: 'Tu cuota contribuye directamente a mantener viva la tradición musical de nuestra comarca',
      icon: '🎭'
    },
    {
      titulo: 'Comunidad musical',
      descripcion: 'Formas parte de una familia que comparte la pasión por la música coral',
      icon: '🎵'
    },
    {
      titulo: 'Apoyo institucional',
      descripcion: 'Colaboramos con el Ayuntamiento de Puebla de Sanabria, Diputación de Zamora y CEB Ledo del Pozo',
      icon: '🏛️'
    }
  ];

  return (
    <section id="socios" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Zona de <span className="text-coral-light">Socios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La Coral Polifónica Tierras Altas de Sanabria y Carballeda es una asociación cultural sin ánimo de lucro. 
            Nuestros socios son el corazón que mantiene viva nuestra música.
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
              src="https://images.unsplash.com/photo-1620175406441-1355276b45e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjaG9pciUyMHBlcmZvcm1hbmNlfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1Mzc4MjEyNXww&ixlib=rb-4.1.0&q=85"
              alt="Socios de la Coral"
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
              Una asociación con alma
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La Coral Tierras Altas es una asociación cultural sin ánimo de lucro 
              que se mantiene gracias al compromiso y el esfuerzo económico de sus 
              propios miembros, junto con el apoyo de instituciones colaboradoras.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Los socios pagan una cuota anual y disfrutan de una serie de beneficios 
              que les permiten participar plenamente en la vida musical de la agrupación 
              y contribuir a preservar el patrimonio cultural de nuestras comarcas.
            </p>
            <div className="glass-dark p-4 rounded-lg">
              <p className="text-coral-light font-semibold text-center">
                "Juntos mantenemos viva la tradición musical"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Beneficios de ser <span className="text-coral-light">socio</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg text-center elegant-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${beneficio.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <beneficio.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {beneficio.titulo}
                </h4>
                <p className="text-gray-300 text-sm">
                  {beneficio.descripción}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tipos de socio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Tipos de <span className="text-coral-light">membresía</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposSocio.map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`glass-dark p-6 rounded-lg elegant-hover relative overflow-hidden ${
                  tipo.destacado ? 'ring-2 ring-coral-light' : ''
                }`}
              >
                {tipo.destacado && (
                  <div className="absolute top-0 right-0 bg-coral-maroon text-white px-3 py-1 text-sm font-bold">
                    Más popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">
                    {tipo.nombre}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {tipo.descripcion}
                  </p>
                  <div className="text-coral-light font-bold text-lg">
                    {tipo.precio}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {tipo.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-coral-light rounded-full mr-3"></span>
                      <span className="text-sm">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ventajas de la asociación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            ¿Por qué ser <span className="text-coral-light">socio</span>?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg elegant-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{ventaja.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {ventaja.titulo}
                    </h4>
                    <p className="text-gray-300">
                      {ventaja.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zona exclusiva */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Acceso <span className="text-coral-light">exclusivo</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Los socios tienen acceso a una zona privada con contenido exclusivo: 
                grabaciones de ensayos, partituras digitales, fotografías de actuaciones, 
                documentos históricos y mucho más.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-coral-light" />
                  <span className="text-gray-300">Descarga de partituras en PDF</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Music className="w-5 h-5 text-coral-light" />
                  <span className="text-gray-300">Grabaciones de audio exclusivas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-coral-light" />
                  <span className="text-gray-300">Galería fotográfica privada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-coral-light" />
                  <span className="text-gray-300">Documentos históricos digitalizados</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="glass p-8 rounded-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-coral-maroon to-coral-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Zona de Socios
                </h4>
                <p className="text-gray-300 mb-6">
                  Inicia sesión para acceder al contenido exclusivo
                </p>
                <motion.button
                  className="bg-coral-maroon hover:bg-coral-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 elegant-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Acceder
                </motion.button>
                <p className="text-sm text-gray-400 mt-3">
                  Solo para socios registrados
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Socios;