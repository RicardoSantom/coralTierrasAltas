import React from 'react';
import Navigation from '../components/Navigation';
import Contratar from '../components/Contratar';
import Footer from '../components/Footer';

const ContratarPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Contratar />
      <Footer />
    </div>
  );
};

export default ContratarPage;