import React from 'react';
import Navigation from '../components/Navigation';
import Unete from '../components/Unete';
import Footer from '../components/Footer';

const UnetePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Unete />
      <Footer />
    </div>
  );
};

export default UnetePage;