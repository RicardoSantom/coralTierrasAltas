import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Calendar, Heart, Music, Church, Users, Clock } from 'lucide-react';

const Contratar = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const servicios = [
    {
      titulo: 'Bodas',
      descripcion: 'Hacemos única tu boda, ya sea religiosa o civil',
      icon: Heart,
      color: 'from-pink-500 to-rose-600'
    },
    {
      titulo: 'Fiestas Patronales',
      descripcion: 'Amenizamos la fiesta patronal de tu pueblo',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      titulo: 'Misas Solemnes',
      descripcion: 'Misa grande de vuestro/a patrono/a',
      icon: Church,
      color: 'from-purple-500 to-violet-600'
    },
    {
      titulo: 'Conciertos',
      descripción: 'Conciertos personalizados para tu evento',
      icon: Music,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const onSubmit = async (data) => {
    // Aquí se procesaría el formulario en una aplicación real
    console.log('Datos del formulario:', data);
    setIsSubmitted(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

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
            <span className="text-coral-light">Contrátanos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Si quieres que la Coral Tierras Altas de Sanabria y Carballeda aporte 
            un toque de distinción en un evento especial, solo tienes que contactarnos
          </p>
        </motion.div>

        {/* Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Nuestros <span className="text-coral-light">servicios</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-lg text-center elegant-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${servicio.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <servicio.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-3">
                  {servicio.titulo}
                </h4>
                <p className="text-gray-300 text-sm">
                  {servicio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Contacto <span className="text-coral-light">directo</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                La forma más rápida de contactar con nosotros es a través de WhatsApp o llamada telefónica. 
                Te responderemos lo antes posible para hacer realidad tu evento musical.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 glass-dark p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Teléfono / WhatsApp</h4>
                  <p className="text-coral-light text-lg font-bold">677 700 598</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-dark p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-coral-light">richard1978_1@hotmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-dark p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-coral-maroon rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ubicación</h4>
                  <p className="text-gray-300">Puebla de Sanabria, Zamora</p>
                </div>
              </motion.div>
            </div>

            <div className="glass-dark p-6 rounded-lg">
              <h4 className="text-xl font-serif font-bold text-white mb-4">
                Proceso de contratación
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-gray-300">Contacta con nosotros por WhatsApp, teléfono o formulario</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-gray-300">Te responderemos para concretar detalles del evento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-coral-maroon text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-gray-300">Una persona revisará la solicitud y formalizará la reserva</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Formulario de <span className="text-coral-light">solicitud</span>
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">¡Solicitud enviada!</h4>
                  <p className="text-gray-300">Nos pondremos en contacto contigo pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        {...register('nombre', { required: 'El nombre es obligatorio' })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                        placeholder="Tu nombre completo"
                      />
                      {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        {...register('telefono', { required: 'El teléfono es obligatorio' })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                        placeholder="Tu número de teléfono"
                      />
                      {errors.telefono && <p className="text-red-400 text-sm mt-1">{errors.telefono.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'El email es obligatorio',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email no válido'
                        }
                      })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Tipo de evento *</label>
                      <select
                        {...register('tipoEvento', { required: 'Selecciona el tipo de evento' })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                      >
                        <option value="">Selecciona...</option>
                        <option value="boda">Boda</option>
                        <option value="fiesta-patronal">Fiesta Patronal</option>
                        <option value="misa-solemne">Misa Solemne</option>
                        <option value="concierto">Concierto</option>
                        <option value="otro">Otro</option>
                      </select>
                      {errors.tipoEvento && <p className="text-red-400 text-sm mt-1">{errors.tipoEvento.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Fecha del evento *</label>
                      <input
                        type="date"
                        {...register('fecha', { required: 'La fecha es obligatoria' })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                      />
                      {errors.fecha && <p className="text-red-400 text-sm mt-1">{errors.fecha.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Ubicación del evento *</label>
                    <input
                      type="text"
                      {...register('ubicacion', { required: 'La ubicación es obligatoria' })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                      placeholder="Ciudad, iglesia, salón..."
                    />
                    {errors.ubicacion && <p className="text-red-400 text-sm mt-1">{errors.ubicacion.message}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Detalles adicionales</label>
                    <textarea
                      {...register('detalles')}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-coral-light focus:outline-none transition-colors"
                      placeholder="Cuéntanos más sobre tu evento, repertorio preferido, horarios..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-coral-maroon hover:bg-coral-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 elegant-hover"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar solicitud
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contratar;