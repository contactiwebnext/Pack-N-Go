import React from 'react';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  Clock, 
  PlaneTakeoff, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const AirportStoreSection: React.FC = () => {
  return (
    <section id="airport-store" className="py-16 lg:py-24 bg-[#0A0A0C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
            <PlaneTakeoff className="w-3.5 h-3.5 text-orange-500" />
            SFO Physical Storefront
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Visit Us Before Your Flight
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Located on-site at San Francisco International Airport. Whether you need an extra bag for souvenirs or an emergency replacement suitcase, we are ready to assist you.
          </p>
        </div>

        {/* 2 Column Layout: Store Information & Interactive Airport Map Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: SFO Details, Hours, Emergency Services */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/5 space-y-6 shadow-2xl">
              
              {/* Location Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Pack N Go @ SFO
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1 font-medium">
                    {STORE_INFO.location}
                  </p>
                  <p className="text-orange-500/90 text-xs mt-1 font-semibold">
                    Serving Domestic &amp; International Airport Terminals
                  </p>
                </div>
              </div>

              {/* Hours Box (Clearly marked as configurable per prompt guidelines) */}
              <div className="p-5 rounded-2xl bg-[#1C1C1F] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-300">
                  <span className="flex items-center gap-1.5 text-orange-500">
                    <Clock className="w-4 h-4" /> Store Hours Schedule
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                    Open Daily
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  {STORE_INFO.daysOpen}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {STORE_INFO.hoursNote}
                </p>
              </div>

              {/* Emergency Baggage Replacement Callout */}
              <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-orange-400" />
                  <span>Damaged Luggage / Overflow Emergency?</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Did an airline crack your suitcase or do you have overweight baggage? Call us on your way to SFO or visit directly. We can help you transfer gear into a brand new compliant case in under 5 minutes.
                </p>
              </div>

              {/* Terminal Arrival Information Notice */}
              <div className="text-xs text-zinc-400 bg-[#1C1C1F] p-4 rounded-2xl border border-white/5 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-200 block mb-0.5">Terminal Concierge Assistance:</span>
                  Exact gate concourses adjust to current flight wings. Give us a quick call at <a href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-orange-500 font-bold hover:underline">{STORE_INFO.phone}</a> upon reaching SFO for immediate in-terminal guidance.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {STORE_INFO.phone}</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=San+Francisco+International+Airport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-[#1C1C1F] hover:bg-[#27272A] text-zinc-200 hover:text-white font-semibold text-sm rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-orange-500" />
                  <span>Get SFO Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Airport & Terminal Location Card */}
          <div className="lg:col-span-6 flex flex-col">
            
            <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#121214] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
              
              {/* Top Header of Map Container */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-zinc-200">SFO Terminal Area Hub</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">37.6213° N, 122.3790° W</span>
              </div>

              {/* Stylized Visual Airport Blueprint / Map Placeholder */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#0A0A0C] border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80"
                  alt="San Francisco International Airport SFO"
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500"
                />
                
                {/* Radar Grid Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0C]/75 backdrop-blur-[2px] p-6 flex flex-col justify-between">
                  
                  {/* Top Terminal Indicators */}
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                    <span className="px-2 py-1 rounded-md bg-[#1C1C1F] border border-white/5">Terminal 1</span>
                    <span className="px-2 py-1 rounded-md bg-[#1C1C1F] border border-white/5">Terminal 2 &amp; 3</span>
                    <span className="px-2 py-1 rounded-md bg-[#1C1C1F] border border-white/5">Int&apos;l Main Hall</span>
                  </div>

                  {/* Center Store Marker */}
                  <div className="text-center my-auto space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500 text-white shadow-2xl shadow-orange-500/50 transform group-hover:scale-110 transition-transform">
                      <PlaneTakeoff className="w-7 h-7" />
                    </div>
                    <div className="font-heading font-extrabold text-white text-lg">
                      Pack N Go Airport Store
                    </div>
                    <div className="text-xs text-orange-400 font-medium">
                      San Francisco International Airport (SFO)
                    </div>
                  </div>

                  {/* Bottom Map Legend */}
                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-white/10">
                    <span>AirTrain &amp; BART Accessible</span>
                    <span className="text-emerald-400 font-medium">Luggage Pickup Available Today</span>
                  </div>

                </div>

              </div>

              {/* SFO Transit Tip */}
              <div className="p-4 rounded-2xl bg-[#1C1C1F] border border-white/5 text-xs text-zinc-300 space-y-1">
                <div className="font-bold text-orange-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Rapid SFO AirTrain &amp; Curbside Access
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Arriving by BART, SFO AirTrain, or rideshare drop-off? You can quickly stop by Pack N Go before passing through TSA security checkpoints.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
