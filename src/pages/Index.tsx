
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ForexChart from '../components/ForexChart';
import TradelockerFeatures from '../components/TradelockerFeatures';
import TradingMethods from '../components/TradingMethods';
import DownloadBanner from '../components/DownloadBanner';
import Features from '../components/Features';
import Instruments from '../components/Instruments';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      <Hero />
      <TradelockerFeatures />
      <TradingMethods />
      <DownloadBanner />
      <ForexChart />
      <Features />
      <Instruments />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
