import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Music, Calendar, MapPin, Phone, Clock, Star } from 'lucide-react';

const Unete = () => {
  const requisitos = [
    {
      titulo: 'Ganas de cantar',
      descripcion: 'Lo único que necesitas es querer formar parte de nuestra familia musical',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      titulo: 'Sin conocimientos previos',
      descripcion: 'No se precisan conocimientos musicales ni experiencia previa',
      icon: Music,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      titulo: 'Disponibilidad martes',
      descripcion: 'Poder venir a ensayar los martes por la tarde en Puebla de Sanabria',
      icon: Calendar,
      color: 'from-green-500 to-emerald-600'
    },
    {
      titulo: 'Participar en actuaciones',
      descripción: 'Asistir a nuestras actuaciones que mayoritariamente son los fines de semana',
      icon: Star,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const beneficios = [
    '🎵 Aprender técnica vocal y canto coral',
    '🎼 Formar parte de un repertorio de más de 100 piezas',
    '🌍 Viajar y actuar en diferentes lugares de España y Europa',
    '👥 Conocer personas que comparten tu pasión por la música',
    '🎭 Participar en encuentros corales y festivales',
    '❤️ Contribuir a preservar el patrimonio musical tradicional',
    '🏆 Ser parte de una agrupación con 25 años de historia',
    '🎪 Disfrutar de la música en un ambiente familiar y acogedor'
  ];

  const testimonios = [
    {
      nombre: 'María González',
      localidad: 'Lubián',
      testimonio: 'Llevo 8 años en la Coral y ha sido una experiencia increíble. He aprendido tanto y he conocido gente maravillosa.',
      años: '8 años en la Coral'
    },
    {
      nombre: 'José Fernández',
      localidad: 'Hermisende', 
      testimonio: 'Nunca había cantado antes y ahora no puedo imaginar mi vida sin la música coral. Los martes son mi día favorito.',
      años: '5 años en la Coral'
    },
    {
      nombre: 'Carmen Rodríguez',
      localidad: 'Mombuey',
      testimonio: 'Es emocionante llevar nuestra música a tantos lugares. Cada concierto es una nueva aventura.',
      años: '12 años en la Coral'
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            <span className="text-coral-light">¡Únete</span> a la Coral!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Para formar parte de la Coral solo es necesario que quieras hacerlo. 
            ¡Nosotros te enseñamos todo lo que necesitas saber!
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
              src="https://images.pexels.com/photos/6193851/pexels-photo-6193851.jpeg"
              alt="Únete a la Coral"
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
              Una familia musical
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La Coral Tierras Altas es más que una agrupación musical: somos una 
              familia unida por la pasión por la música coral. Desde hace 25 años, 
              personas de toda la comarca se reúnen cada martes para crear música juntos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              No importa si nunca has cantado en un coro o si no sabes leer música. 
              Lo que importa es tu ganas de aprender, de compartir y de formar parte 
              de algo especial.
            </p>
            <div className="glass-dark p-4 rounded-lg">
              <p className="text-coral-light font-semibold text-center">
                "Lo único que necesitas es tener ganas de cantar"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            ¿Qué <span className="text-coral-light">necesitas</span>?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requisitos.map((requisito, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg text-center elegant-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${requisito.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <requisito.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {requisito.titulo}
                </h4>
                <p className="text-gray-300 text-sm">
                  {requisito.descripcion}
                </p>
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
            ¿Qué <span className="text-coral-light">ganarás</span>?
          </h3>
          
          <div className="glass-dark p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 glass rounded-lg elegant-hover"
                >
                  <span className="text-2xl">{beneficio.split(' ')[0]}</span>
                  <span className="text-gray-300">{beneficio.substring(beneficio.indexOf(' ') + 1)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Lo que dicen nuestros <span className="text-coral-light">coralistas</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg elegant-hover"
              >
                <div className="text-coral-light text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-4 italic">
                  {testimonio.testimonio}
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-semibold">{testimonio.nombre}</h4>
                  <p className="text-gray-400 text-sm">{testimonio.localidad}</p>
                  <p className="text-coral-light text-sm">{testimonio.años}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cómo unirse */}
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
                ¿Cómo <span className="text-coral-light">unirte</span>?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="w-8 h-8 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contacta con nosotros</h4>
                    <p className="text-gray-300">Mándanos un WhatsApp o llámanos al 677 700 598</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="w-8 h-8 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ven a un ensayo</h4>
                    <p className="text-gray-300">Pásate cualquier martes a partir de las 18:30 al Ayuntamiento de Puebla de Sanabria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="w-8 h-8 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">¡Empieza a cantar!</h4>
                    <p className="text-gray-300">Verás qué fácil es cantar en nuestra Coral polifónica</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Información de <span className="text-coral-light">contacto</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 glass p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-coral-light" />
                  <div>
                    <h4 className="text-white font-semibold">Teléfono / WhatsApp</h4>
                    <p className="text-coral-light font-bold">677 700 598</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass p-4 rounded-lg">
                  <Calendar className="w-6 h-6 text-coral-light" />
                  <div>
                    <h4 className="text-white font-semibold">Ensayos</h4>
                    <p className="text-gray-300">Martes de 18:30 a 20:30h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-coral-light" />
                  <div>
                    <h4 className="text-white font-semibold">Lugar</h4>
                    <p className="text-gray-300">Ayuntamiento de Puebla de Sanabria</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-8 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-coral-maroon to-coral-light p-6 rounded-lg">
                  <h4 className="text-white font-bold text-xl mb-2">
                    ¡Te esperamos!
                  </h4>
                  <p className="text-white opacity-90">
                    Únete a nuestra familia musical
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

export default Unete;