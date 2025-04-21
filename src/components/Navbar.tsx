
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-dark-400/80 border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white mr-8">
            <span className="glow-text-blue">Tradelocker</span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <div className="relative group">
              <button className="px-4 py-2 flex items-center text-white/80 hover:text-white rounded-md transition-all">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-dark-100 rounded-md shadow-lg p-2 min-w-[180px] border border-white/5">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-md">Forex Trading</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-md">CFDs</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-md">Commodities</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-md">Indices</a>
              </div>
            </div>
            <a href="#features" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Features</a>
            <a href="#markets" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Markets</a>
            <a href="#testimonials" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Testimonials</a>
          </div>
        </div>
        {/* Desktop CTA - removed account features */}
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-200 absolute top-16 left-0 right-0 shadow-lg z-50">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-2">
            <a href="#" className="py-2">Products</a>
            <a href="#features" className="py-2">Features</a>
            <a href="#markets" className="py-2">Markets</a>
            <a href="#testimonials" className="py-2">Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
