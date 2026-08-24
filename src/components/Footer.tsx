import React from 'react';
import { 
  Luggage, 
  MapPin, 
  Phone, 
  Mail, 
  PlaneTakeoff, 
  ArrowUpRight, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 text-zinc-400 text-xs relative overflow-hidden">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & SFO Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Luggage className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  PACK <span className="text-orange-500">N</span> GO
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                  SFO Airport Luggage Retailer
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pr-4">
              Your dedicated luggage, trolley bag, and travel accessories store at San Francisco International Airport (SFO). Ready for your departure, layover, or arrival.
            </p>

            <div className="pt-2 flex items-center gap-3 text-zinc-400">
              <span className="text-xs font-semibold text-zinc-300">Follow Us:</span>
              <a href="#home" className="w-8 h-8 rounded-lg bg-[#121214] border border-white/10 flex items-center justify-center hover:text-orange-500 hover:border-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#home" className="w-8 h-8 rounded-lg bg-[#121214] border border-white/10 flex items-center justify-center hover:text-orange-500 hover:border-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#home" className="w-8 h-8 rounded-lg bg-[#121214] border border-white/10 flex items-center justify-center hover:text-orange-500 hover:border-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Shop Luggage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('trolley-bags')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Trolley Bags
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('airport-store')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Visit SFO Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Luggage Categories
            </h4>
            <ul className="space-y-2 text-zinc-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigate('shop');
                    }}
                    className="hover:text-orange-500 transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Store & Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              SFO Airport Store
            </h4>
            
            <div className="space-y-3 text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a 
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="font-bold text-white hover:text-orange-500 transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a 
                    href={`mailto:${STORE_INFO.emails[0]}`}
                    className="block text-zinc-300 hover:text-orange-500 transition-colors break-all"
                  >
                    {STORE_INFO.emails[0]}
                  </a>
                  <a 
                    href={`mailto:${STORE_INFO.emails[1]}`}
                    className="block text-zinc-400 hover:text-orange-500 transition-colors break-all"
                  >
                    {STORE_INFO.emails[1]}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121214] border border-white/10 text-[11px] text-zinc-400">
                <PlaneTakeoff className="w-3.5 h-3.5 text-orange-500" />
                <span>Open 7 Days • Terminal Fast Pickup</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar with Required Attribution */}
      <div className="border-t border-white/10 bg-[#0A0A0C] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Pack N Go. All rights reserved. San Francisco International Airport (SFO), CA.
          </div>

          {/* Required Attribution */}
          <div className="text-zinc-400 text-xs font-medium">
            Developed by{' '}
            <a 
              href="https://iwebnext.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400 font-bold underline transition-colors"
            >
              iWebNext
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-500">
            <span>SFO Airport Retail</span>
            <span>•</span>
            <span>Luggage &amp; Travel Bags</span>
            <span>•</span>
            <span>Airline Approved</span>
          </div>

        </div>
      </div>

    </footer>
  );
};
