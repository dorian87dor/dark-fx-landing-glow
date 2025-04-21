import React from 'react';
import { Apple, Smartphone, Computer, Globe } from 'lucide-react';

const appPlatforms = [
  {
    label: "App Store",
    icon: <Apple size={22} />,
    href: "#",
  },
  {
    label: "Google Play",
    icon: <Smartphone size={22} />,
    href: "#",
  },
  {
    label: "Desktop Version",
    icon: <Computer size={22} />,
    href: "#",
  },
  {
    label: "Web App",
    icon: <Globe size={22} />,
    href: "#",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden -z-10">
        <img
          src="/lovable-uploads/36e39cfd-1b3f-4fc8-926c-35861bf2d21f.png"
          alt="Tradelocker Platform Screenshot"
          className="w-full h-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400/90 via-dark-400/80 to-dark-300/90"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 z-10">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/30 border border-white/10 text-sm text-accent font-medium shadow-glass">
              Next-gen Trading Terminal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Unlock Your Edge with <span className="text-accent glow-text-teal">Tradelocker</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Real-time data, stunning visualizations, powerful automation tools—built for professional and aspiring traders in FX, Crypto, and more.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">24/7</div>
                <div className="text-xs text-white/60 mt-1">Market Access</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">0.0</div>
                <div className="text-xs text-white/60 mt-1">Pips Spread</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">500:1</div>
                <div className="text-xs text-white/60 mt-1">Leverage</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 z-10 flex items-center justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-accent/10 bg-dark-400">
              <img
                src="/lovable-uploads/36e39cfd-1b3f-4fc8-926c-35861bf2d21f.png"
                alt="Tradelocker Platform Device"
                className="w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-4 mt-12">
          {appPlatforms.map((platform) => (
            <a
              key={platform.label}
              href={platform.href}
              className={
                "flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-white text-base shadow-lg transition-all " +
                "hover:scale-105"
              }
              style={{
                background:
                  "linear-gradient(90deg, #9b87f5 0%, #D946EF 100%)",
                boxShadow: "0 2px 16px 0 rgba(155,135,245,0.18)",
              }}
            >
              {platform.icon}
              <span>{platform.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
