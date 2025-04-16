
import React from 'react';
import { 
  ArrowRight, 
  DollarSign, 
  Euro, 
  PoundSterling, 
  BarChart4, 
  Droplets, 
  GanttChart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const instrumentCategories = [
  {
    id: "forex",
    name: "Forex",
    description: "Trade major, minor and exotic currency pairs with competitive spreads",
    icon: <DollarSign className="h-6 w-6" />,
    instruments: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD"],
    color: "blue"
  },
  {
    id: "commodities",
    name: "Commodities",
    description: "Access global commodity markets including gold, oil, and silver",
    icon: <Droplets className="h-6 w-6" />,
    instruments: ["Gold", "Silver", "Crude Oil", "Natural Gas", "Copper"],
    color: "teal"
  },
  {
    id: "indices",
    name: "Indices",
    description: "Trade major stock indices from the US, Europe, and Asia",
    icon: <BarChart4 className="h-6 w-6" />,
    instruments: ["S&P 500", "NASDAQ", "Dow Jones", "FTSE 100", "DAX"],
    color: "purple"
  },
  {
    id: "stocks",
    name: "Stocks CFDs",
    description: "Trade CFDs on popular stocks from major global exchanges",
    icon: <GanttChart className="h-6 w-6" />,
    instruments: ["Apple", "Tesla", "Amazon", "Microsoft", "Google"],
    color: "pink"
  },
];

const Instruments = () => {
  return (
    <section id="markets" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diverse <span className="glow-text-blue">Trading Instruments</span>
          </h2>
          <p className="text-white/70">
            Explore a wide range of trading instruments across multiple markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instrumentCategories.map((category) => (
            <div 
              key={category.id}
              className={`bg-dark-200 rounded-xl overflow-hidden border border-white/5 transition-all hover:border-glow-${category.color}/30`}
            >
              <div className="p-6">
                <div className={`bg-glow-${category.color}/10 p-3 inline-flex rounded-lg mb-4 text-glow-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-white/70 mb-5">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.instruments.map((instrument) => (
                    <div 
                      key={instrument}
                      className="flex justify-between items-center bg-dark-300 rounded-md p-3"
                    >
                      <span>{instrument}</span>
                      <span className={`text-glow-${category.color}`}>
                        {category.id === "forex" && "0.01 pips"}
                        {category.id === "commodities" && "0.03%"}
                        {category.id === "indices" && "0.04%"}
                        {category.id === "stocks" && "0.08%"}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full group">
                  <span>View All {category.name}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-glow-blue/10 rounded-full filter blur-[80px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Start Trading With <span className="glow-text-blue">Zero Commission</span>
              </h3>
              <p className="text-white/70 max-w-lg">
                Open an account in minutes and trade with competitive spreads, fast execution, and no hidden fees.
              </p>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-glow-blue to-glow-teal text-white px-8 whitespace-nowrap">
              Open Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruments;
