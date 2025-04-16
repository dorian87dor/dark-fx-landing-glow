
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Day Trader",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "The execution speed and tight spreads on this platform are exceptional. I've tried several forex brokers, and FXTrade delivers the best overall trading experience.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Swing Trader",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "I value the advanced charting tools and technical indicators. Being able to customize my workspace and save multiple layouts has streamlined my trading process.",
    rating: 5
  },
  {
    id: 3,
    name: "David Smith",
    role: "Professional Trader",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "The customer support is outstanding. Any issues I've had were resolved quickly, which is crucial when you're actively trading in volatile markets.",
    rating: 4
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Forex Analyst",
    avatar: "https://i.pravatar.cc/150?img=29",
    content: "The daily market analysis provided is incredibly valuable. It has helped me make more informed trading decisions and improved my overall strategy.",
    rating: 5
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Part-time Trader",
    avatar: "https://i.pravatar.cc/150?img=13",
    content: "As someone new to forex trading, I appreciate how intuitive the platform is. The educational resources have helped me understand the markets better.",
    rating: 4
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Algorithmic Trader",
    avatar: "https://i.pravatar.cc/150?img=23",
    content: "The API integration is flawless. I've been able to implement my trading strategies with minimal latency, which is essential for my algorithmic approach.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="glow-text-teal">Traders Worldwide</span>
          </h2>
          <p className="text-white/70">
            See why thousands of traders choose our platform for their forex trading needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-dark-300 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-glow-teal fill-glow-teal' : 'text-white/20'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-white/80 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-white/80">Trusted by traders in 180+ countries</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">Visa</span>
            </div>
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">Mastercard</span>
            </div>
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">PayPal</span>
            </div>
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">Skrill</span>
            </div>
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">Neteller</span>
            </div>
            <div className="text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xl font-bold">Bank Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
