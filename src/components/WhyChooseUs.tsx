import React from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Maximize2, 
  PlaneTakeoff, 
  HeartHandshake, 
  Sparkles,
  Luggage,
  Clock
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Convenient SFO Airport Location',
      description: 'Right on-site at San Francisco International Airport. Pick up luggage on your way to check-in or resolve broken bag emergencies before your gate closes.',
      badge: 'Terminal Ready',
    },
    {
      icon: ShieldCheck,
      title: 'Airport-Tested Quality & Durability',
      description: 'Engineered with impact-resistant Makrolon polycarbonate, heavy-duty YKK burst-proof zippers, and reinforced corner bumpers that withstand aggressive baggage handlers.',
      badge: 'Heavy Duty',
    },
    {
      icon: Maximize2,
      title: 'Multiple Luggage Sizes & Styles',
      description: 'From 20" & 22" domestic overhead spinners to 28" high-capacity family suitcases and rolling trolley duffels, find the exact capacity your itinerary requires.',
      badge: 'All Airline Sizes',
    },
    {
      icon: PlaneTakeoff,
      title: 'Travel-Ready Selection',
      description: 'Every bag comes pre-fitted with TSA-accepted combination locks, 360° whisper-quiet multi-directional spinner wheels, and smart internal organization dividers.',
      badge: 'Zero Hassle',
    },
    {
      icon: HeartHandshake,
      title: 'Friendly, Knowledgeable Service',
      description: 'Our team understands airline baggage restrictions and travel demands. We will help you select the exact right bag for your airline carrier and trip duration.',
      badge: 'Travel Experts',
    },
    {
      icon: Clock,
      title: 'Same-Day Fast Hold & Pickup',
      description: 'Call or reserve online before arriving at SFO. We will have your selected bag waiting and ready so you don’t waste a single minute before boarding.',
      badge: 'Quick Transit',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0A0A0C] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            The Traveler&apos;s Advantage
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why Travelers Choose Pack N Go
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We are dedicated to providing reliable travel gear right where you need it most — at San Francisco International Airport.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 px-3 py-1 rounded-full bg-[#1C1C1F] border border-white/5">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>

                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-xs text-zinc-500 font-medium">
                  <span>Available at Pack N Go SFO</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
