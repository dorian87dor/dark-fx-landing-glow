
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ForexChart from '../components/ForexChart';
import Features from '../components/Features';
import Instruments from '../components/Instruments';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      <Hero />
      <ForexChart />
      <Features />
      <Instruments />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
