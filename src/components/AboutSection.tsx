import React, { useState } from 'react';
import { FAQS, STORE_INFO } from '../data/products';
import { 
  Building2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Plane, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#0A0A0C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: About Text & SFO Heritage */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-orange-500" />
              Established SFO Airport Retailer
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              About Pack N Go
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Pack N Go is a dedicated luggage and travel accessories retailer proudly operating at <strong className="text-white">San Francisco International Airport (SFO)</strong> in California. 
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We provide business travelers, vacationing families, and transit passengers with dependable, airline-compliant travel gear. Whether you are departing on a long-haul international journey, experiencing an unexpected broken suitcase on arrival, or simply seeking an overhead-friendly carry-on that fits every airline sizer, Pack N Go offers airport-tested solutions right before you reach your gate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#121214] border border-white/5 space-y-1">
                <div className="font-heading font-bold text-2xl text-orange-500">SFO</div>
                <div className="text-xs text-zinc-300 font-semibold">Airport Location</div>
                <div className="text-[11px] text-zinc-500">San Francisco, CA</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121214] border border-white/5 space-y-1">
                <div className="font-heading font-bold text-2xl text-white">7 Days</div>
                <div className="text-xs text-zinc-300 font-semibold">Weekly Operations</div>
                <div className="text-[11px] text-zinc-500">Open for flight banks</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121214] border border-white/5 space-y-1">
                <div className="font-heading font-bold text-2xl text-emerald-400">100%</div>
                <div className="text-xs text-zinc-300 font-semibold">Airline Tested</div>
                <div className="text-[11px] text-zinc-500">Carry-on compliance</div>
              </div>
            </div>

          </div>

          {/* Right: Curated Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#121214] border border-white/5 shadow-2xl p-4 sm:p-6 space-y-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=900&q=80"
                  alt="Pack N Go SFO Luggage Storefront"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121214]/90 backdrop-blur-md border border-white/10 text-xs">
                  <div className="font-bold text-white text-sm">Need immediate luggage assistance?</div>
                  <div className="text-zinc-400 mt-0.5">Call our team directly at {STORE_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" /> SFO Airport, SF, CA
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Clock className="w-3.5 h-3.5" /> Ready for Travel
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Airport Traveler FAQs Accordion */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Airport Shopper &amp; Travel Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#121214] border border-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-zinc-200 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
