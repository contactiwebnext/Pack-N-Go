import React from 'react';
import { 
  MapPin, 
  ShoppingBag, 
  ArrowRight, 
  Phone, 
  CheckCircle2
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeroProps {
  onExploreCollection: () => void;
  onVisitStore: () => void;
  onOpenSizerModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreCollection, 
  onVisitStore,
  onOpenSizerModal 
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-20">
      {/* Subtle Warm Radial Glow Background */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Location Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-white/10 text-xs text-zinc-300 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-orange-500">San Francisco International Airport</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">Terminal In-Store Retailer</span>
          </div>
        </div>

        <div className="w-full">
          {/* Hero Master Card */}
          <div className="w-full bg-[#121214] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl">
            {/* Background Image with Dark Vignette Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2000&q=80" 
                alt="San Francisco Airport Departure Hall & Luggage"
                className="w-full h-full object-cover object-center opacity-25 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/80 to-[#121214]/90" />
              <div className="absolute inset-0 bg-[#0A0A0C]/50 backdrop-blur-[2px]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/15 blur-[140px] rounded-full pointer-events-none z-0" />
            
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-block px-3.5 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-zinc-300 border border-white/10">
                Premium Airport Retailer
              </span>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
                Travel Ready.<br />
                <span className="text-orange-500">Wherever You&apos;re Going.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
                Discover world-class luggage, trolley bags, and travel accessories at Pack N Go, conveniently located within <strong className="text-white font-semibold">San Francisco International Airport</strong>.
              </p>

              {/* Quick Benefits Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-sm text-zinc-300 w-full max-w-3xl">
                <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-xs font-medium">Airline-Approved Sizes</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-xs font-medium">Baggage Replacement</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-xs font-medium">Polycarbonate Shells</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-xs font-medium">Instant SFO Pickup</span>
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
                <button
                  id="hero-explore-collection-btn"
                  onClick={onExploreCollection}
                  className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-visit-store-btn"
                  onClick={onVisitStore}
                  className="w-full sm:w-auto border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 text-white transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Visit Our SFO Store</span>
                </button>
              </div>

              {/* Call Dispatch Ribbon */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>
                  Need luggage before your flight? Call{' '}
                  <a 
                    href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`} 
                    className="text-orange-500 font-bold hover:underline"
                  >
                    {STORE_INFO.phone}
                  </a>
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
