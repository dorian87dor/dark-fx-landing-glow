
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "Competitive spreads from 0.0 pips",
  "Ultra-fast execution with no requotes",
  "Free demo account with $10,000 virtual funds",
  "24/7 expert support in multiple languages",
  "Powerful trading platforms for web, desktop & mobile"
];

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-radial from-glow-blue/10 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-96 bg-gradient-radial from-glow-teal/10 to-transparent opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="bg-dark-200 border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Start Trading with <span className="glow-text-blue">FXTrade</span> Today
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                Join over 150,000 traders worldwide who trust our platform for their forex trading needs.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-glow-blue/10 rounded-full p-0.5 mt-0.5 mr-3">
                      <Check className="h-4 w-4 text-glow-blue" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-glow-blue to-glow-teal hover:brightness-110 text-white text-base px-6 py-6 shadow-lg shadow-glow-blue/20 transition-all duration-300 rounded-md flex items-center justify-center">
                  Open Trading Account <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white text-base px-6 py-6 transition-all duration-300 rounded-md">
                  Try Demo Account
                </Button>
              </div>
            </div>
            
            <div className="bg-dark-300 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Create Account in Minutes</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-dark-200 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-glow-blue font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Register Your Account</h4>
                      <p className="text-white/60 text-sm">
                        Complete our simple registration process with your basic details
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-dark-200 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-glow-blue font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Verify Your Identity</h4>
                      <p className="text-white/60 text-sm">
                        Submit your verification documents for a secure account
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-dark-200 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-glow-blue font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Fund Your Account</h4>
                      <p className="text-white/60 text-sm">
                        Deposit funds using one of our multiple payment methods
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-dark-200 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      <span className="text-glow-blue font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Start Trading</h4>
                      <p className="text-white/60 text-sm">
                        Access the markets and start trading on our powerful platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-dark-400 rounded-lg p-4 border border-white/5">
                <p className="text-white/70 text-sm mb-2">
                  Risk Warning: Trading involves significant risk and may not be suitable for everyone. Your capital is at risk.
                </p>
                <p className="text-white/70 text-sm">
                  FXTrade is regulated by the Financial Conduct Authority (FCA) with license number 123456.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
