import React from 'react';
import { motion } from 'framer-motion';
import { Music, Globe, Clock, Heart } from 'lucide-react';

const Repertorio = () => {
  const periods = [
    {
      name: 'Renacimiento',
      pieces: ['No la debemos dormir', 'Ay linda amiga', 'Hoy comamos y bebamos', 'Más vale trocar', 'Verbum caro'],
      color: 'from-amber-500 to-orange-600',
      icon: Clock
    },
    {
      name: 'Barroco, Clasicismo y Romanticismo',
      pieces: ['Obras de Haendel', 'Composiciones de Mozart', 'Piezas de Schubert'],
      color: 'from-blue-500 to-indigo-600',
      icon: Music
    },
    {
      name: 'Contemporáneo',
      pieces: ['Música moderna', 'Composiciones actuales', 'Adaptaciones contemporáneas'],
      color: 'from-green-500 to-teal-600',
      icon: Heart
    }
  ];

  const regions = [
    { name: 'Puerto Rico', flag: '🇵🇷' },
    { name: 'Cádiz', flag: '🇪🇸' },
    { name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { name: 'Italia', flag: '🇮🇹' },
    { name: 'Sefarad', flag: '✡️' },
    { name: 'Galicia', flag: '🇪🇸' },
    { name: 'Inglaterra', flag: '🇬🇧' },
    { name: 'Estados Unidos', flag: '🇺🇸' },
    { name: 'Sudáfrica', flag: '🇿🇦' },
    { name: 'Alemania', flag: '🇩🇪' },
    { name: 'Cantabria', flag: '🇪🇸' }
  ];

  return (
    <section id="repertorio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Nuestro <span className="text-coral-light">Repertorio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Viajamos en el tiempo y en el espacio a través de la música, 
            desde el Renacimiento hasta nuestros días, desde nuestra tierra hasta los confines del mundo
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
              src="https://images.unsplash.com/photo-1593678779327-f3c098ca0230?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjaG9pciUyMHBlcmZvcm1hbmNlfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1Mzc4MjEyNXww&ixlib=rb-4.1.0&q=85"
              alt="Coro infantil actuando"
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
              Un viaje musical único
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La Coral Tierras Altas ha cantado, a lo largo de sus 25 años, 
              varios centenares de piezas. Aunque nunca ha sido una agrupación 
              musical especializada en un repertorio específico, siempre ha tenido 
              la inquietud por incorporar piezas de distinto carácter.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Desde lo popular, lo religioso hasta lo más clásico. Y desde lo más 
              alejado en el tiempo a lo más cercano, creando un bagaje musical que 
              recorre las diferentes etapas musicales y artísticas del continente europeo.
            </p>
          </motion.div>
        </div>

        {/* Periodos musicales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Épocas <span className="text-coral-light">musicales</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {periods.map((period, index) => (
              <motion.div
                key={period.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg elegant-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${period.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <period.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white text-center mb-4">
                  {period.name}
                </h4>
                <ul className="space-y-2">
                  {period.pieces.map((piece, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-coral-light rounded-full mr-3"></span>
                      {piece}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Origen geográfico */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Viaje por el <span className="text-coral-light">mundo</span>
          </h3>
          
          <div className="glass-dark p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-coral-light mr-3" />
              <p className="text-gray-300 text-center text-lg">
                Nuestro repertorio incluye melodías de lugares tan lejanos y dispares como:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 glass rounded-lg elegant-hover"
                >
                  <div className="text-3xl mb-2">{region.flag}</div>
                  <div className="text-white text-sm font-medium">{region.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tradición local */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Patrimonio <span className="text-coral-light">local</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                La Coral nunca ha querido olvidar la importancia que tiene el 
                patrimonio musical propio de las tierras de origen. Ha sabido 
                introducir en su repertorio muchas de las piezas de la tradición 
                oral de las comarcas de Sanabria y Carballeda.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Gracias al trabajo de adaptación realizado por músicos como 
                Miguel Manzano, García Bernalt, Ángel Barja, Luis María Martín Negro, 
                Julio Domínguez y Héctor Diez, estas melodías populares han sido 
                adaptadas para agrupación polifónica mixta a cuatro voces.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/6193852/pexels-photo-6193852.jpeg"
                alt="Tradición musical local"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-coral-light mt-4 font-medium">
                Revitalizando y exportando la música sanabresa, carballesa, zamorana y leonesa
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Repertorio;