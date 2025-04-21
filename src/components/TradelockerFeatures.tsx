
import React from "react";
import { Activity, Layers, TrendingUp, Settings } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="text-accent w-8 h-8 mb-2" />,
    title: "Real-time market analysis"
  },
  {
    icon: <Layers className="text-accent w-8 h-8 mb-2" />,
    title: "Custom strategies"
  },
  {
    icon: <Activity className="text-accent w-8 h-8 mb-2" />,
    title: "Automated backtesting"
  },
  {
    icon: <Settings className="text-accent w-8 h-8 mb-2" />,
    title: "Risk management tools"
  }
];

const TradelockerFeatures = () => (
  <section className="py-16 md:py-24 bg-dark-300/80">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        What You Can Do with <span className="text-accent">Tradelocker</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center bg-card rounded-xl p-5 glass">
            {feature.icon}
            <span className="text-base font-semibold text-white mt-2 text-center">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TradelockerFeatures;
