import React from 'react';
import Navigation from '../components/Navigation';
import Socios from '../components/Socios';
import Footer from '../components/Footer';

const SociosPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Socios />
      <Footer />
    </div>
  );
};

export default SociosPage;