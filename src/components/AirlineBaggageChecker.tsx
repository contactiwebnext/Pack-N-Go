import React, { useState } from 'react';
import { AIRLINE_GUIDES } from '../data/products';
import { Plane, Check, ArrowRight, ShieldCheck, Info, Sparkles } from 'lucide-react';

interface AirlineBaggageCheckerProps {
  onSelectCategory: (categoryId: string) => void;
}

export const AirlineBaggageChecker: React.FC<AirlineBaggageCheckerProps> = ({ onSelectCategory }) => {
  const [selectedAirlineIndex, setSelectedAirlineIndex] = useState<number>(0);

  const activeGuide = AIRLINE_GUIDES[selectedAirlineIndex];

  return (
    <section className="py-16 bg-[#0A0A0C] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
            <Plane className="w-3.5 h-3.5 text-orange-500" />
            SFO Passenger Sizing Assistant
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Airline Carry-On Compatibility Guide
          </h2>
          <p className="text-zinc-400 text-base">
            Check your airline carrier&apos;s carry-on baggage limits before heading to the gate. All Pack N Go carry-on models are built to pass standard domestic and international airline sizers.
          </p>
        </div>

        {/* Airline Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start md:justify-center scrollbar-none mb-8">
          {AIRLINE_GUIDES.map((guide, idx) => {
            const isActive = selectedAirlineIndex === idx;
            return (
              <button
                key={guide.airline}
                onClick={() => setSelectedAirlineIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 border border-orange-400'
                    : 'bg-[#1C1C1F] text-zinc-300 hover:bg-[#27272A] hover:text-white border border-white/10'
                }`}
              >
                <span>{guide.airline}</span>
                <span className="text-[10px] opacity-75 font-mono">({guide.code.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Active Airline Guide Details Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#121214] border border-white/5 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="text-xs font-mono font-semibold text-orange-500 uppercase">
                {activeGuide.code} • {activeGuide.verifiedYear}
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mt-1">
                {activeGuide.airline} Baggage Regulations
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Primary SFO Location: <span className="text-zinc-200 font-semibold">{activeGuide.sfoTerminal}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs text-emerald-400 font-bold self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>Pack N Go 20&quot; &amp; 22&quot; Compliant</span>
            </div>
          </div>

          {/* Sizing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#1C1C1F] border border-white/5 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                Max Carry-On Dimensions
              </div>
              <div className="text-base font-extrabold text-white">
                {activeGuide.carryOnMaxDimensions}
              </div>
              <p className="text-[11px] text-zinc-400">
                Must fit in overhead compartment
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1C1F] border border-white/5 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Weight Allowance
              </div>
              <div className="text-base font-extrabold text-white">
                {activeGuide.carryOnMaxWeight}
              </div>
              <p className="text-[11px] text-zinc-400">
                Checked at check-in counter or gate
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1C1F] border border-white/5 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Personal Item Policy
              </div>
              <div className="text-base font-extrabold text-white">
                {activeGuide.personalItemLimit}
              </div>
              <p className="text-[11px] text-zinc-400">
                Must fit beneath front seat
              </p>
            </div>

          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-zinc-500" />
              <span>Need help measuring your existing bag? Visit our SFO airport desk.</span>
            </div>

            <button
              onClick={() => onSelectCategory('carry-on')}
              className="w-full sm:w-auto px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Approved {activeGuide.airline.split(' ')[0]} Carry-Ons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
