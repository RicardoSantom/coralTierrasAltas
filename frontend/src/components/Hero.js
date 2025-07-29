import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Calendar, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(128, 0, 32, 0.3)), url('https://images.unsplash.com/photo-1565971469177-852ce53c60cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjaG9pciUyMHBlcmZvcm1hbmNlfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc1Mzc4MjEyNXww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated music notes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-coral-light opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Music size={24} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Coral Polifónica
            <br />
            <span className="text-coral-light">Tierras Altas</span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            25 años llevando la música polifónica por los caminos de 
            <span className="text-coral-light font-medium"> Sanabria y Carballeda</span>
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { icon: Calendar, number: '25', text: 'Años de historia' },
              { icon: Users, number: '40+', text: 'Coralistas activos' },
              { icon: Music, number: '300+', text: 'Conciertos realizados' },
              { icon: Play, number: '100+', text: 'Piezas en repertorio' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-dark rounded-lg p-6 text-center min-w-[150px]"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-coral-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('#contratar')}
              className="bg-coral-maroon hover:bg-coral-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 elegant-hover shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contrátanos
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#historia')}
              className="glass border-2 border-coral-maroon hover:bg-coral-maroon text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 elegant-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestra historia
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;