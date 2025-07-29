import React from 'react';
import Navigation from '../components/Navigation';
import Escuela from '../components/Escuela';
import Footer from '../components/Footer';

const EscuelaPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Escuela />
      <Footer />
    </div>
  );
};

export default EscuelaPage;