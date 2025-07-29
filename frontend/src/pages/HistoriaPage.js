import React from 'react';
import Navigation from '../components/Navigation';
import Historia from '../components/Historia';
import Footer from '../components/Footer';

const HistoriaPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Historia />
      <Footer />
    </div>
  );
};

export default HistoriaPage;