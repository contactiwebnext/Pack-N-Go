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
    <section id="home" className="relative w-full overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center py-16 sm:py-20 lg:py-24 border-b border-white/10">
      
      {/* Edge-to-Edge Background Video with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-65 scale-105"
        >
          <source 
            src="https://orogellhvfbhfiex.public.blob.vercel-storage.com/Create_company_luggage_video_202608250013.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Gradients to blend smoothly into the obsidian dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/80 via-[#0A0A0C]/45 to-[#0A0A0C]" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/15 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6">
        
        {/* Top Location Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214]/90 border border-white/15 text-xs text-zinc-300 shadow-xl backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-orange-500">San Francisco International Airport</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">Terminal In-Store Retailer</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-4xl">
          <span className="inline-block px-3.5 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-zinc-300 border border-white/10">
            Premium Airport Retailer
          </span>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            Travel Ready.<br />
            <span className="text-orange-500">Wherever You&apos;re Going.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover world-class luggage, trolley bags, and travel accessories at Pack N Go, conveniently located within <strong className="text-white font-semibold">San Francisco International Airport</strong>.
          </p>
        </div>

        {/* Quick Benefits Bullet List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-sm text-zinc-300 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-xs font-medium">Airline-Approved Sizes</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-xs font-medium">Baggage Replacement</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-xs font-medium">Polycarbonate Shells</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-xs font-medium">Instant SFO Pickup</span>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <button
            id="hero-explore-collection-btn"
            onClick={onExploreCollection}
            className="w-full sm:w-auto bg-orange-500 text-white px-9 py-4 rounded-full font-bold hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-visit-store-btn"
            onClick={onVisitStore}
            className="w-full sm:w-auto bg-[#121214]/80 backdrop-blur-md border border-white/20 px-9 py-4 rounded-full font-bold hover:bg-white/10 text-white transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
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
    </section>
  );
};
