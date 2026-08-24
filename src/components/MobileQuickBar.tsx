import React from 'react';
import { Phone, MapPin, ShoppingBag, PlaneTakeoff } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface MobileQuickBarProps {
  onNavigate: (sectionId: string) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onNavigate }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#0A0A0C]/95 backdrop-blur-lg border-t border-white/10 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-orange-500 text-white rounded-xl font-bold text-[11px] shadow-md shadow-orange-500/20"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call SFO Store</span>
        </a>

        <button
          onClick={() => onNavigate('shop')}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#121214] text-zinc-200 border border-white/10 rounded-xl font-semibold text-[11px]"
        >
          <ShoppingBag className="w-4 h-4 mb-0.5 text-orange-500" />
          <span>Luggage</span>
        </button>

        <button
          onClick={() => onNavigate('airport-store')}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#121214] text-zinc-200 border border-white/10 rounded-xl font-semibold text-[11px]"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-orange-500" />
          <span>SFO Location</span>
        </button>
      </div>
    </div>
  );
};
