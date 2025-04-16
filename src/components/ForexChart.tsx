
import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, ChevronDown } from 'lucide-react';

// Mock data for the charts
const eurUsdData = [
  { time: '00:00', value: 1.0764 },
  { time: '04:00', value: 1.0771 },
  { time: '08:00', value: 1.0769 },
  { time: '12:00', value: 1.0794 },
  { time: '16:00', value: 1.0783 },
  { time: '20:00', value: 1.0802 },
  { time: '24:00', value: 1.0811 },
];

const gbpUsdData = [
  { time: '00:00', value: 1.2689 },
  { time: '04:00', value: 1.2702 },
  { time: '08:00', value: 1.2681 },
  { time: '12:00', value: 1.2724 },
  { time: '16:00', value: 1.2711 },
  { time: '20:00', value: 1.2742 },
  { time: '24:00', value: 1.2736 },
];

const usdJpyData = [
  { time: '00:00', value: 151.57 },
  { time: '04:00', value: 151.82 },
  { time: '08:00', value: 151.43 },
  { time: '12:00', value: 151.68 },
  { time: '16:00', value: 151.92 },
  { time: '20:00', value: 151.76 },
  { time: '24:00', value: 151.59 },
];

const marketPairs = [
  { name: 'EUR/USD', buy: 1.0811, sell: 1.0809, change: +0.0047, percentChange: +0.44, data: eurUsdData },
  { name: 'GBP/USD', buy: 1.2736, sell: 1.2734, change: +0.0047, percentChange: +0.37, data: gbpUsdData },
  { name: 'USD/JPY', buy: 151.59, sell: 151.57, change: +0.02, percentChange: +0.01, data: usdJpyData },
  { name: 'AUD/USD', buy: 0.6601, sell: 0.6599, change: -0.0015, percentChange: -0.23, data: eurUsdData },
  { name: 'USD/CAD', buy: 1.3594, sell: 1.3592, change: -0.0005, percentChange: -0.04, data: gbpUsdData },
  { name: 'USD/CHF', buy: 0.9049, sell: 0.9047, change: +0.0007, percentChange: +0.08, data: usdJpyData },
];

const ForexChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1D');
  const [selectedPair, setSelectedPair] = useState(marketPairs[0]);
  const [showPairDropdown, setShowPairDropdown] = useState(false);

  const handleTimeframeChange = (timeframe: string) => {
    setActiveTimeframe(timeframe);
  };

  const handlePairSelect = (pair: any) => {
    setSelectedPair(pair);
    setShowPairDropdown(false);
  };

  const timeframes = ['1H', '4H', '1D', '1W', '1M'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="text-sm font-medium">{`${payload[0].payload.time}`}</p>
          <p className="text-sm text-glow-blue font-semibold">
            {`${selectedPair.name}: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time <span className="glow-text-blue">Market Analysis</span>
          </h2>
          <p className="text-white/70">
            Stay ahead of the markets with real-time data and charts for major currency pairs
          </p>
        </div>
        
        <div className="bg-dark-200 rounded-xl border border-white/5 p-4 md:p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div className="relative mb-4 md:mb-0">
              <button 
                onClick={() => setShowPairDropdown(!showPairDropdown)}
                className="flex items-center space-x-2 bg-dark-100 hover:bg-dark-100/80 px-4 py-2 rounded-md transition-colors"
              >
                <span className="font-medium text-lg">{selectedPair.name}</span>
                <ChevronDown size={18} />
              </button>
              
              {showPairDropdown && (
                <div className="absolute left-0 top-full mt-1 bg-dark-100 rounded-md shadow-lg p-2 z-10 min-w-[180px] border border-white/10">
                  {marketPairs.map((pair) => (
                    <button
                      key={pair.name}
                      onClick={() => handlePairSelect(pair)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md ${selectedPair.name === pair.name ? 'bg-glow-blue/20 text-glow-blue' : 'hover:bg-dark-300'}`}
                    >
                      {pair.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              {timeframes.map((timeframe) => (
                <Button
                  key={timeframe}
                  onClick={() => handleTimeframeChange(timeframe)}
                  variant={activeTimeframe === timeframe ? "secondary" : "outline"}
                  className={`px-3 py-1 h-8 text-xs ${activeTimeframe === timeframe ? 'bg-glow-blue text-white' : 'border-white/10'}`}
                >
                  {timeframe}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="w-full h-72 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={selectedPair.data}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4AAAFE" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4AAAFE" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
                <XAxis dataKey="time" axisLine={false} tick={{ fill: '#ffffff80' }} />
                <YAxis 
                  domain={['dataMin - 0.001', 'dataMax + 0.001']} 
                  axisLine={false} 
                  tick={{ fill: '#ffffff80' }} 
                  tickFormatter={(value) => value.toFixed(4)} 
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4AAAFE" 
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketPairs.map((pair) => (
            <div 
              key={pair.name}
              className="bg-dark-200 rounded-lg border border-white/5 p-4 hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{pair.name}</h3>
                  <div className="flex items-center">
                    <span className={`text-xs ${pair.percentChange >= 0 ? 'text-glow-teal' : 'text-glow-pink'}`}>
                      {pair.percentChange >= 0 ? '+' : ''}{pair.percentChange}%
                    </span>
                    {pair.percentChange >= 0 ? (
                      <ArrowUp className="h-3 w-3 text-glow-teal ml-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-glow-pink ml-1" />
                    )}
                  </div>
                </div>
                
                <div className="h-16 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={pair.data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={pair.percentChange >= 0 ? "#36D6B0" : "#FE6E86"} 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-300 rounded p-2">
                  <div className="text-xs text-white/60 mb-1">Buy</div>
                  <div className="font-medium">{pair.buy.toFixed(4)}</div>
                </div>
                <div className="bg-dark-300 rounded p-2">
                  <div className="text-xs text-white/60 mb-1">Sell</div>
                  <div className="font-medium">{pair.sell.toFixed(4)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexChart;
