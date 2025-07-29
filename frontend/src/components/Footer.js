import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Music, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const enlaces = [
    { nombre: 'Historia', href: '#historia' },
    { nombre: 'Repertorio', href: '#repertorio' },
    { nombre: 'Conciertos', href: '#conciertos' },
    { nombre: 'Contratar', href: '#contratar' }
  ];

  const servicios = [
    { nombre: 'Únete a la Coral', href: '#unete' },
    { nombre: 'Escuela de Música', href: '#escuela' },
    { nombre: 'Zona de Socios', href: '#socios' },
    { nombre: 'Próximas actuaciones', href: '#conciertos' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Pre-footer CTA */}
      <section className="py-16 bg-gradient-to-r from-coral-maroon to-coral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
              ¿Listo para formar parte de nuestra historia?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Únete a 25 años de tradición musical o contrata nuestros servicios para tu evento especial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('#unete')}
                className="bg-white text-coral-maroon font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Únete a la Coral
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contratar')}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-coral-maroon transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contrátanos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-4 cursor-pointer"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-coral-maroon to-coral-light rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">
                    Coral Tierras Altas
                  </h3>
                  <p className="text-sm text-gray-400">
                    Sanabria y Carballeda
                  </p>
                </div>
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed">
                25 años llevando la música polifónica por los caminos de Sanabria y Carballeda, 
                preservando el patrimonio musical y creando nuevas melodías para el futuro.
              </p>
            </motion.div>

            {/* Enlaces principales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                {enlaces.map((enlace, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(enlace.href)}
                      className="text-gray-300 hover:text-coral-light transition-colors duration-200 text-sm"
                    >
                      {enlace.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Servicios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                {servicios.map((servicio, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(servicio.href)}
                      className="text-gray-300 hover:text-coral-light transition-colors duration-200 text-sm"
                    >
                      {servicio.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-coral-light" />
                  <span className="text-sm text-gray-300">677 700 598</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-coral-light" />
                  <span className="text-sm text-gray-300">richard1978_1@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-coral-light" />
                  <span className="text-sm text-gray-300">Puebla de Sanabria, Zamora</span>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Síguenos</h5>
                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral-maroon transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral-maroon transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral-maroon transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Youtube className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 Coral Tierras Altas de Sanabria y Carballeda. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Aviso Legal
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated music notes */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-coral-light opacity-10"
              style={{
                left: `${10 + i * 20}%`,
                bottom: '10px',
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Music size={20} />
            </motion.div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;