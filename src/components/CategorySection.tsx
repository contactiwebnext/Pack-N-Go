import React from 'react';
import { CATEGORIES } from '../data/products';
import { Category } from '../types';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section id="luggage" className="py-16 bg-[#0A0A0C] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Comprehensive Travel Gear
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Featured Categories
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl">
              From airline-compliant overhead carry-ons to heavy-duty checked luggage and rolling duffels, discover the perfect travel companion for your route.
            </p>
          </div>

          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <span>In stock &amp; ready at our SFO Airport store</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat: Category) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-3xl overflow-hidden bg-[#1C1C1F] border transition-all duration-300 cursor-pointer text-left ${
                  isSelected 
                    ? 'border-orange-500 shadow-xl shadow-orange-500/15 ring-2 ring-orange-500/40 transform -translate-y-1' 
                    : 'border-white/5 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-[#0A0A0C]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1F] via-[#1C1C1F]/40 to-transparent" />

                  {/* Stock count badge */}
                  <div className="absolute top-3 right-3 bg-[#0A0A0C]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-zinc-300 border border-white/10">
                    {cat.itemCount}
                  </div>

                  {isSelected && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-md">
                      <Check className="w-3.5 h-3.5" />
                      Active Filter
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-500">
                    {cat.tagline}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-orange-500 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  {/* Action Link */}
                  <div className="pt-3 flex items-center text-xs font-bold text-zinc-300 group-hover:text-orange-500 gap-1.5 transition-colors">
                    <span>Browse {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-orange-500" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
