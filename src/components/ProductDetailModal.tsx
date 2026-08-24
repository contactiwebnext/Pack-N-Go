import React, { useState } from 'react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Plane, 
  Phone, 
  ShoppingBag, 
  Clock, 
  MapPin, 
  Star, 
  Award, 
  Layers, 
  CheckCircle2,
  Lock,
  RotateCw
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onHoldProduct: (product: Product, selectedColor?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onHoldProduct,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) return null;

  const activeColor = selectedColor || (product.colors[0]?.name ?? 'Standard');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#121214] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1C1C1F] text-zinc-400 hover:text-white hover:bg-[#27272A] border border-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0A0A0C] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              {/* Main Image View */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#121214] border border-white/5">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 bg-[#121214]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available at SFO Store
                </div>
              </div>

              {/* Thumbnails if multiple */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-orange-500 scale-95' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick SFO Pickup Banner */}
            <div className="p-4 rounded-2xl bg-[#121214] border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500" />
                <div>
                  <div className="font-bold text-white">SFO Physical Location</div>
                  <div className="text-zinc-400 text-[11px]">Pick up before your departure</div>
                </div>
              </div>
              <a
                href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-orange-500 font-semibold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                {STORE_INFO.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Product Specs & Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-orange-500 tracking-wider">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1 text-orange-500 text-xs font-semibold">
                  <Star className="w-4 h-4 fill-orange-500" />
                  <span>{product.rating}</span>
                  <span className="text-zinc-400">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-3xl text-white">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-zinc-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Tax inclusive in-store
                </span>
              </div>

              {/* Full Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-zinc-300">
                    Selected Color: <span className="text-orange-500">{activeColor}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((c) => {
                      const isColorActive = activeColor === c.name;
                      return (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer relative flex items-center justify-center ${
                            isColorActive ? 'border-orange-500 scale-110 shadow-md ring-2 ring-orange-500/40' : 'border-zinc-700 hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {isColorActive && <Check className="w-4 h-4 text-white drop-shadow" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical Specifications Grid */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Luggage Specifications
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Dimensions</span>
                    <span className="font-semibold text-zinc-200">{product.dimensions}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Weight</span>
                    <span className="font-semibold text-zinc-200">{product.weight}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Packing Capacity</span>
                    <span className="font-semibold text-zinc-200">{product.capacity}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Lock Type</span>
                    <span className="font-semibold text-zinc-200">{product.lockType}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Shell Material</span>
                    <span className="font-semibold text-zinc-200">{product.material}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1C1C1F] border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">Wheels</span>
                    <span className="font-semibold text-zinc-200">{product.wheels}</span>
                  </div>
                </div>
              </div>

              {/* Key Features Checkmarks */}
              <div className="space-y-1.5 pt-2 text-xs text-zinc-300">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="modal-hold-sfo-button"
                  onClick={() => {
                    onHoldProduct(product, activeColor);
                    onClose();
                  }}
                  className="w-full py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve for SFO Pickup</span>
                </button>

                <a
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-3.5 px-4 bg-[#1C1C1F] hover:bg-[#27272A] text-zinc-200 hover:text-white font-semibold text-sm rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call Store ({STORE_INFO.phone})</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-zinc-400">
                No upfront payment required to hold items for same-day flight departure.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
