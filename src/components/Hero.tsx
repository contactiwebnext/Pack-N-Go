import React from 'react';
import { 
  PlaneTakeoff, 
  MapPin, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Luggage,
  Clock
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
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-white/10 text-xs text-zinc-300 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-orange-500">San Francisco International Airport</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">Terminal In-Store Retailer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hero Master Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#121214] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-zinc-300 border border-white/10">
                Premium Airport Retailer
              </span>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                Travel Ready.<br />
                <span className="text-orange-500">Wherever You&apos;re Going.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
                Discover world-class luggage, trolley bags, and travel accessories at Pack N Go, conveniently located within <strong className="text-white font-semibold">San Francisco International Airport</strong>.
              </p>

              {/* Quick Benefits Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Airline-Approved Carry-On Sizes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Broken Baggage Replacement</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Polycarbonate &amp; Ballistic Nylon</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Instant SFO In-Store Pickup</span>
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-explore-collection-btn"
                  onClick={onExploreCollection}
                  className="bg-orange-500 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-visit-store-btn"
                  onClick={onVisitStore}
                  className="border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 text-white transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Visit Our SFO Store</span>
                </button>
              </div>

              {/* Call Dispatch Ribbon */}
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
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

          {/* Right Column: Interactive Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Top Card: Express Pickup */}
            <div className="bg-orange-500 rounded-3xl p-6 text-white shadow-xl shadow-orange-500/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">SFO Express Pick-up</span>
                <h3 className="text-2xl font-bold leading-tight mt-1">Reserve Online,<br />Collect at Airport</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-black/15 flex items-center justify-center shrink-0">
                <PlaneTakeoff className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Middle Card: Image showcase with specs */}
            <div className="bg-[#1C1C1F] rounded-3xl p-5 border border-white/5 flex flex-col justify-between flex-1 relative overflow-hidden group">
              <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-[#0A0A0C] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1000&q=80" 
                  alt="Pack N Go Premium Luggage at San Francisco Airport"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/20" />
                
                <div className="absolute top-3 left-3 bg-[#0A0A0C]/85 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Terminal Ready</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="text-xs">
                    <div className="font-bold text-white">Premium Hard-Shell Spinners</div>
                    <div className="text-zinc-400 text-[11px]">TSA Accepted Lock • 360° Glide</div>
                  </div>
                  <button 
                    onClick={onExploreCollection}
                    className="text-xs font-bold text-orange-500 hover:text-orange-400 px-3 py-1.5 rounded-lg bg-[#0A0A0C]/80 border border-white/10"
                  >
                    View &rarr;
                  </button>
                </div>
              </div>

              {/* Mini spec chips */}
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="p-2.5 bg-[#121214] rounded-2xl border border-white/5">
                  <div className="text-[10px] uppercase font-semibold text-zinc-500">Cabin Fit</div>
                  <div className="text-xs font-bold text-white mt-0.5">20&quot; &amp; 22&quot;</div>
                </div>
                <div className="p-2.5 bg-[#121214] rounded-2xl border border-white/5">
                  <div className="text-[10px] uppercase font-semibold text-zinc-500">Security</div>
                  <div className="text-xs font-bold text-orange-500 mt-0.5">TSA Lock</div>
                </div>
                <div className="p-2.5 bg-[#121214] rounded-2xl border border-white/5">
                  <div className="text-[10px] uppercase font-semibold text-zinc-500">SFO Gate</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">Open Now</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
