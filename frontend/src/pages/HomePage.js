import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Repertorio from '../components/Repertorio';
import Conciertos from '../components/Conciertos';
import Contratar from '../components/Contratar';
import Escuela from '../components/Escuela';
import Unete from '../components/Unete';
import Socios from '../components/Socios';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Historia />
      <Repertorio />
      <Conciertos />
      <Contratar />
      <Escuela />
      <Unete />
      <Socios />
      <Footer />
    </div>
  );
};

export default HomePage;