import React from 'react';
import Navigation from '../components/Navigation';
import Conciertos from '../components/Conciertos';
import Footer from '../components/Footer';

const ConciertosPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Conciertos />
      <Footer />
    </div>
  );
};

export default ConciertosPage;