import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Music, Users, Star } from 'lucide-react';

const Conciertos = () => {
  const proximasActuaciones = [
    {
      fecha: '24 agosto 2025',
      evento: 'Misa en la fiesta de Valdespino',
      lugar: 'Iglesia Parroquial de Valdespino',
      hora: '13:00 h',
      tipo: 'Celebración religiosa'
    },
    {
      fecha: '13 septiembre 2025',
      evento: 'Encuentro de Corales Especial 25º Aniversario',
      lugar: 'Iglesia de Santa María del Azogue, Puebla de Sanabria',
      hora: '20:00 h',
      tipo: 'Encuentro especial'
    },
    {
      fecha: '19-20 septiembre 2025',
      evento: 'Gira por la Comunidad de Madrid',
      lugar: 'Varios lugares de Madrid',
      hora: 'Por determinar',
      tipo: 'Gira'
    },
    {
      fecha: '27 septiembre 2025',
      evento: 'Encuentro de Corales de Piloño',
      lugar: 'Piloño, Galicia',
      hora: 'Por determinar',
      tipo: 'Encuentro coral'
    }
  ];

  const ciclosConciertos = [
    {
      titulo: 'Ciclo CEB Ledo del Pozo',
      descripcion: 'Recuperación y puesta en valor del patrimonio musical de tradición oral de las comarcas del norte zamorano.',
      imagen: 'https://images.unsplash.com/photo-1488630228244-bcdf33562a43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbHxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTM3ODIxMzZ8MA&ixlib=rb-4.1.0&q=85',
      localidades: ['Santa Marta de Tera', 'San Cristóbal de Entreviñas', 'Arrabalde', 'Codesal', 'Castrocalbón', 'Mombuey', 'Cerdillo de Sanabria'],
      destacado: 'Con el patrocinio del Centro de Estudios Benaventanos'
    },
    {
      titulo: 'Sanabria y Carballeda, al calor de la Música',
      descripcion: 'Acercar la cultura musical a las zonas rurales más alejadas de la provincia de Zamora.',
      imagen: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg',
      localidades: ['Peque', 'Rabanillo', 'Cional', 'Rábano', 'Cobreros', 'Vigo de Sanabria', 'Muelas de los Caballeros', 'Calabor', 'Ribadelago', 'Galende'],
      destacado: 'Patrocinado por la Diputación de Zamora'
    }
  ];

  const logrosDestacados = [
    { año: '2004', evento: 'VIII Festival Internacional de Polifonía de Verín', icon: Star },
    { año: '2006', evento: 'Misa del Peregrino de Liébana y Semana Santa de Valladolid', icon: Music },
    { año: '2007', evento: 'Concentración Internacional de Oporto', icon: MapPin },
    { año: '2009', evento: 'XXVII Festival Galaico-Portugués de Polifonía y Canto de Carballiño', icon: Users },
    { año: '2015', evento: 'Reunión de Agrupaciones Corales de Portugal y España (Ceuta)', icon: Star }
  ];

  return (
    <section id="conciertos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Conciertos y <span className="text-coral-light">Actuaciones</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras próximas actuaciones y los ciclos de conciertos que organizamos 
            para llevar la música a todos los rincones de nuestra comarca
          </p>
        </motion.div>

        {/* Próximas actuaciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Próximas <span className="text-coral-light">actuaciones</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proximasActuaciones.map((actuacion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg elegant-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-coral-light mr-3" />
                    <span className="text-coral-light font-semibold">{actuacion.fecha}</span>
                  </div>
                  <span className="text-xs bg-coral-maroon text-white px-2 py-1 rounded-full">
                    {actuacion.tipo}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-3">
                  {actuacion.evento}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{actuacion.lugar}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{actuacion.hora}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ciclos de conciertos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Ciclos de <span className="text-coral-light">conciertos</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ciclosConciertos.map((ciclo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-dark rounded-lg overflow-hidden elegant-hover"
              >
                <img
                  src={ciclo.imagen}
                  alt={ciclo.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">
                    {ciclo.titulo}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {ciclo.descripcion}
                  </p>
                  <div className="mb-4">
                    <p className="text-coral-light font-semibold mb-2">
                      {ciclo.destacado}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ciclo.localidades.slice(0, 6).map((localidad, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {localidad}
                        </span>
                      ))}
                      {ciclo.localidades.length > 6 && (
                        <span className="text-xs text-coral-light">
                          +{ciclo.localidades.length - 6} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logros destacados */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-lg"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Momentos <span className="text-coral-light">destacados</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logrosDestacados.map((logro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg text-center elegant-hover"
              >
                <div className="w-16 h-16 bg-coral-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <logro.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-coral-light mb-2">
                  {logro.año}
                </div>
                <p className="text-white text-sm">
                  {logro.evento}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Durante estos 25 años, la Coral Tierras Altas ha desarrollado 
              <span className="text-coral-light font-semibold"> centenares de actuaciones y conciertos </span>
              por geografías muy diversas, desde los pueblos más cercanos hasta llegar a 
              ciudades y regiones de gran parte de España, Portugal e incluso Francia.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conciertos;