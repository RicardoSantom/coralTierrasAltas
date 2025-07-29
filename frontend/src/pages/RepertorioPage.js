import React from 'react';
import Navigation from '../components/Navigation';
import Repertorio from '../components/Repertorio';
import Footer from '../components/Footer';

const RepertorioPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Repertorio />
      <Footer />
    </div>
  );
};

export default RepertorioPage;