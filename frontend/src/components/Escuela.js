import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, BookOpen, Guitar, Piano, Mic, Clock, MapPin } from 'lucide-react';

const Escuela = () => {
  const instrumentos = [
    { nombre: 'Piano', icon: Piano, color: 'from-blue-500 to-indigo-600' },
    { nombre: 'Guitarra española', icon: Guitar, color: 'from-amber-500 to-orange-600' },
    { nombre: 'Ukelele', icon: Guitar, color: 'from-green-500 to-emerald-600' },
    { nombre: 'Coro', icon: Users, color: 'from-purple-500 to-violet-600' },
    { nombre: 'Música infantil', icon: Music, color: 'from-pink-500 to-rose-600' },
    { nombre: 'Canto', icon: Mic, color: 'from-red-500 to-red-600' },
    { nombre: 'Flauta travesera', icon: Music, color: 'from-teal-500 to-cyan-600' },
    { nombre: 'Lenguaje musical', icon: BookOpen, color: 'from-gray-500 to-slate-600' },
    { nombre: 'Guitarra eléctrica', icon: Guitar, color: 'from-yellow-500 to-orange-500' },
    { nombre: 'Bajo eléctrico', icon: Guitar, color: 'from-indigo-500 to-purple-600' }
  ];

  const beneficios = [
    {
      titulo: 'Sin experiencia previa',
      descripcion: 'No necesitas conocimientos musicales previos para empezar',
      icon: '🎵'
    },
    {
      titulo: 'Profesores cualificados',
      descripcion: 'Aprende con músicos experimentados y pedagogos dedicados',
      icon: '👨‍🏫'
    },
    {
      titulo: 'Ambiente familiar',
      descripcion: 'Disfruta de un ambiente acogedor y familiar para aprender',
      icon: '🏠'
    },
    {
      titulo: 'Todas las edades',
      descripcion: 'Clases para niños, jóvenes y adultos de todas las edades',
      icon: '👥'
    },
    {
      titulo: 'Instalaciones cómodas',
      descripcion: 'Aprende en el histórico exconvento de San Francisco',
      icon: '🏛️'
    },
    {
      titulo: 'Conexión con la Coral',
      descripcion: 'Oportunidad de unirte a la Coral cuando estés preparado',
      icon: '🎭'
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Escuela de <span className="text-coral-light">Música</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprende música con nosotros en un ambiente familiar y profesional. 
            Más de una década formando músicos en las comarcas de Sanabria y Carballeda
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
              src="https://images.unsplash.com/photo-1519076976365-9c64dbd98317?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGxlc3NvbnN8ZW58MHx8fHwxNzUzNzg1NDM4fDA&ixlib=rb-4.1.0&q=85"
              alt="Escuela de Música"
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
              Una escuela con historia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La Escuela de Música es la heredera de la que en su momento mantenía 
              el Ayuntamiento de Puebla de Sanabria. La Coral ofreció darle un nuevo 
              impulso, contando con el apoyo económico y logístico del Ayuntamiento 
              desde el primer momento.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Las instalaciones donde tiene su sede la Escuela -exconvento de San Francisco 
              en Puebla de Sanabria- son facilitadas por el Ayuntamiento de Puebla de Sanabria, 
              creando un espacio único para el aprendizaje musical.
            </p>
            <div class="glass-dark p-4 rounded-lg">
              <p className="text-coral-light font-semibold text-center">
                ¡Más de una década formando músicos!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Instrumentos disponibles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Instrumentos y <span className="text-coral-light">especialidades</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {instrumentos.map((instrumento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-dark p-4 rounded-lg text-center elegant-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${instrumento.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <instrumento.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-medium text-sm">
                  {instrumento.nombre}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            ¿Por qué elegir nuestra <span className="text-coral-light">escuela</span>?
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
                <div className="text-4xl mb-4">{beneficio.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {beneficio.titulo}
                </h4>
                <p className="text-gray-300 text-sm">
                  {beneficio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Información práctica */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Información <span className="text-coral-light">práctica</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-300">Exconvento de San Francisco</p>
                    <p className="text-gray-300">Puebla de Sanabria, Zamora</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Requisitos</h4>
                    <p className="text-gray-300">No se requiere experiencia previa</p>
                    <p className="text-gray-300">Solo ganas de aprender y disfrutar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Modalidades</h4>
                    <p className="text-gray-300">Clases individuales y grupales</p>
                    <p className="text-gray-300">Horarios flexibles</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Un camino hacia la <span className="text-coral-light">Coral</span>
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                La Escuela ha servido desde sus inicios para formar musicalmente a los 
                integrantes de la Coral, pero también para acercar la música a los 
                sanabreses y carballeses, niños y mayores.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                No son pocos los alumnos de la Escuela que han acabado integrándose 
                como coralistas, encontrando en la música coral una forma de expresión 
                y una pasión para toda la vida.
              </p>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-coral-maroon to-coral-light p-6 rounded-lg">
                  <h4 className="text-white font-bold text-xl mb-2">
                    ¡Apúntate a nuestra Escuela!
                  </h4>
                  <p className="text-white opacity-90">
                    Si te gusta la música, este es tu lugar
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Escuela;