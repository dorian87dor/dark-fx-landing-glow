
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-dark-400/80 border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center">
          <a href="/" className="flex items-center mr-8 group">
            <img
              src="/lovable-uploads/75a0cc07-2f16-40e6-ab2c-45f05b4d30cc.png"
              alt="Logo"
              className="w-8 h-8 mr-2 transition-transform duration-150 group-hover:scale-105"
              style={{ minWidth: 32 }}
            />
            <span className="text-2xl font-bold text-white tracking-wide">LIQUIDITY PROVIDER <span className="text-accent">FX</span></span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {/* No 'Products' item */}
            <a href="#features" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Features</a>
            <a href="#markets" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Markets</a>
            <a href="#testimonials" className="px-4 py-2 text-white/80 hover:text-white rounded-md transition-all">Testimonials</a>
          </div>
        </div>
        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex space-x-3">
          <Button variant="default" className="bg-accent text-dark-400 hover:bg-accent/80 transition-colors rounded-lg font-semibold px-6 py-2 shadow">
            Create Demo Account
          </Button>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-colors rounded-lg font-semibold px-6 py-2">
            Sign-In
          </Button>
        </div>
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
            {/* No 'Products' item */}
            <a href="#features" className="py-2">Features</a>
            <a href="#markets" className="py-2">Markets</a>
            <a href="#testimonials" className="py-2">Testimonials</a>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="default" className="bg-accent text-dark-400 font-semibold">
                Create Demo Account
              </Button>
              <Button variant="outline" className="border-accent text-accent">
                Sign-In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
