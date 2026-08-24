import React, { useState, useEffect } from 'react';
import { 
  Luggage, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ShoppingBag, 
  ChevronRight, 
  Clock, 
  ShieldCheck,
  PlaneTakeoff
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenHoldModal?: () => void;
  holdCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  onOpenHoldModal,
  holdCount = 0 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Shop', target: 'shop' },
    { label: 'Luggage', target: 'luggage' },
    { label: 'Trolley Bags', target: 'trolley-bags' },
    { label: 'About', target: 'about' },
    { label: 'Visit Us', target: 'airport-store' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Airport Notice Strip */}
      <aside 
        aria-label="Airport store notice"
        className="bg-[#070709] border-b border-white/10 text-xs py-2 px-4 text-zinc-400 relative z-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-200 font-medium text-[11px] uppercase tracking-wider border border-white/10">
              <PlaneTakeoff className="w-3.5 h-3.5 text-orange-500" />
              SFO Airport Store
            </span>
            <span className="text-zinc-300">San Francisco International Airport</span>
            <span className="hidden md:inline text-zinc-600">•</span>
            <span className="hidden md:inline text-zinc-400">Open 7 Days for Airport Travelers</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a 
              href={`mailto:${STORE_INFO.emails[0]}`}
              className="hidden lg:inline text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {STORE_INFO.emails[0]}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3.5' 
            : 'bg-[#0A0A0C]/90 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo / Wordmark */}
            <button 
              id="navbar-brand-logo"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#1C1C1F] border border-white/10 p-0.5 shadow-lg shadow-orange-500/10 group-hover:scale-105 transition-transform flex items-center justify-center">
                <Luggage className="w-5 h-5 text-orange-500 transition-transform group-hover:rotate-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tighter text-white flex items-center gap-0.5">
                  PACK<span className="text-orange-500">N</span>GO
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-orange-500" /> SFO Terminal Store
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`nav-link-${link.target}`}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-300 bg-[#1C1C1F] hover:bg-[#27272A] border border-white/10 rounded-full transition-colors"
                title="Call SFO Airport Store directly"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>Call {STORE_INFO.phone}</span>
              </a>

              <button
                id="header-explore-collection-btn"
                onClick={() => handleLinkClick('shop')}
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-white text-black hover:bg-orange-500 hover:text-white rounded-full transition-colors shadow-lg cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="p-2 text-orange-500 bg-[#1C1C1F] rounded-xl border border-white/10"
                aria-label="Call Store"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-[#1C1C1F] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#0A0A0C]/98 border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              
              {/* SFO Airport Tag */}
              <div className="p-3.5 bg-[#121214] rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <PlaneTakeoff className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">SFO Airport Physical Store</div>
                    <div className="text-[11px] text-zinc-400">Open 7 Days • Terminal Pickup Ready</div>
                  </div>
                </div>
                <a
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 text-xs font-bold bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Call
                </a>
              </div>

              {/* Mobile Links */}
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    id={`mobile-nav-link-${link.target}`}
                    onClick={() => handleLinkClick(link.target)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-zinc-200 hover:text-orange-500 hover:bg-[#121214] rounded-xl transition-colors text-left"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 space-y-2">
                <button
                  id="mobile-view-collection-btn"
                  onClick={() => handleLinkClick('shop')}
                  className="w-full py-3.5 px-4 text-center font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>View Full Luggage Collection</span>
                </button>

                <button
                  id="mobile-visit-store-btn"
                  onClick={() => handleLinkClick('airport-store')}
                  className="w-full py-3 px-4 text-center font-semibold text-zinc-300 bg-[#121214] hover:bg-[#1C1C1F] border border-white/10 rounded-xl flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>SFO Airport Store Directions & Hours</span>
                </button>
              </div>

              {/* Mobile Contact info */}
              <div className="pt-3 border-t border-white/10 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <a href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-zinc-300 font-medium">
                    {STORE_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-medium">Email:</span>
                  <a href={`mailto:${STORE_INFO.emails[0]}`} className="text-zinc-300">
                    {STORE_INFO.emails[0]}
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
};
