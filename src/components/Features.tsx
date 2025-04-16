
import React from 'react';
import { 
  LineChart, Clock, Zap, Shield, Globe, BarChart3, 
  Award, Smartphone, Headphones 
} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-glow-blue" />,
    title: "Advanced Charting",
    description: "Access 50+ technical indicators and drawing tools for in-depth market analysis"
  },
  {
    icon: <Clock className="h-8 w-8 text-glow-blue" />,
    title: "24/5 Trading",
    description: "Trade around the clock during market hours with continuous support"
  },
  {
    icon: <Zap className="h-8 w-8 text-glow-blue" />,
    title: "Ultra-Fast Execution",
    description: "Execute trades in milliseconds with our high-performance infrastructure"
  },
  {
    icon: <Shield className="h-8 w-8 text-glow-blue" />,
    title: "Secure & Protected",
    description: "Your funds are held in segregated accounts with bank-level security"
  },
  {
    icon: <Globe className="h-8 w-8 text-glow-blue" />,
    title: "Global Market Access",
    description: "Trade 70+ forex pairs and CFDs on commodities, indices, and more"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-glow-blue" />,
    title: "Market Analysis",
    description: "Daily insights and technical analysis from our expert market analysts"
  },
  {
    icon: <Award className="h-8 w-8 text-glow-blue" />,
    title: "Award-Winning Platform",
    description: "Multiple industry awards for our innovative trading technology"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-glow-blue" />,
    title: "Mobile Trading",
    description: "Trade on the go with our powerful mobile apps for iOS and Android"
  },
  {
    icon: <Headphones className="h-8 w-8 text-glow-blue" />,
    title: "24/7 Support",
    description: "Get help whenever you need it from our dedicated support team"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Trade With <span className="glow-text-blue">FXTrade</span>
          </h2>
          <p className="text-white/70">
            Experience the advantage of trading with our award-winning platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-300 rounded-xl p-6 hover:bg-dark-200 transition-all border border-white/5 hover:border-white/10"
            >
              <div className="bg-dark-100 p-3 rounded-md inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-dark-300 rounded-xl border border-white/5">
            <div className="text-4xl font-bold glow-text-blue mb-2">$12B+</div>
            <div className="text-white/70">Monthly Volume</div>
          </div>
          <div className="text-center p-6 bg-dark-300 rounded-xl border border-white/5">
            <div className="text-4xl font-bold glow-text-blue mb-2">150k+</div>
            <div className="text-white/70">Active Traders</div>
          </div>
          <div className="text-center p-6 bg-dark-300 rounded-xl border border-white/5">
            <div className="text-4xl font-bold glow-text-blue mb-2">0.01s</div>
            <div className="text-white/70">Execution Speed</div>
          </div>
          <div className="text-center p-6 bg-dark-300 rounded-xl border border-white/5">
            <div className="text-4xl font-bold glow-text-blue mb-2">24/7</div>
            <div className="text-white/70">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
