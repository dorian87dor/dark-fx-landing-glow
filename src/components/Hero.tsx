
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-glow-blue/10 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-glow-teal/10 rounded-full filter blur-[120px] animate-pulse-glow animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 z-10">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-glow-teal">
              <span className="mr-2">🔥</span> 
              Trade with confidence on the leading forex platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trade the Global <span className="glow-text-blue">Forex Market</span> With Precision
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Access 70+ currency pairs, tight spreads, and lightning-fast execution with our award-winning trading platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-glow-blue to-glow-teal hover:brightness-110 text-white text-base px-6 py-6 shadow-lg shadow-glow-blue/20 transition-all duration-300 rounded-md flex items-center justify-center">
                Open Trading Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white text-base px-6 py-6 transition-all duration-300 rounded-md">
                Try Demo Account
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold glow-text-blue">24/7</div>
                <div className="text-xs text-white/60 mt-1">Market Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold glow-text-blue">0.0</div>
                <div className="text-xs text-white/60 mt-1">Pips Spread</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold glow-text-blue">500:1</div>
                <div className="text-xs text-white/60 mt-1">Leverage</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent z-10"></div>
              <div className="relative z-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Forex Trading Platform" 
                  className="w-full object-cover"
                />
                
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-dark-400/90 to-dark-400/20 z-20"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-white/60">Current price</div>
                      <div className="text-xl font-bold text-white flex items-center">
                        1.2145 <span className="text-glow-teal ml-2 text-sm">+0.02%</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-glow-blue hover:bg-glow-blue/90 text-white">
                      Trade <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
