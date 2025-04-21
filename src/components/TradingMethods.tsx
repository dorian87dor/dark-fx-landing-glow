
import React from "react";
import { Activity, TrendingUp, Bitcoin, DollarSign, Layers } from "lucide-react";

const methods = [
  {
    icon: <TrendingUp className="w-7 h-7 text-accent" />,
    label: "Day Trading"
  },
  {
    icon: <Layers className="w-7 h-7 text-accent" />,
    label: "Swing Trading"
  },
  {
    icon: <Bitcoin className="w-7 h-7 text-yellow-400" />,
    label: "Crypto"
  },
  {
    icon: <DollarSign className="w-7 h-7 text-green-400" />,
    label: "Forex"
  },
  {
    icon: <Activity className="w-7 h-7 text-accent" />,
    label: "Commodities"
  }
];

const TradingMethods = () => (
  <section className="py-16 md:py-24 bg-dark-400/90">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Supported Trading Methods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {methods.map((m) => (
          <div key={m.label} className="flex flex-col items-center p-6 bg-card rounded-xl shadow glass transition hover:scale-105 cursor-pointer">
            <div>{m.icon}</div>
            <span className="text-lg mt-3 font-semibold text-white text-center">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TradingMethods;
