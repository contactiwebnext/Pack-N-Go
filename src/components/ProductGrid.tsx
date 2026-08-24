import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES, STORE_INFO } from '../data/products';
import { 
  ShoppingBag, 
  Eye, 
  Search, 
  SlidersHorizontal, 
  CheckCircle, 
  Plane, 
  ShieldCheck, 
  Phone, 
  Tag, 
  Star,
  Luggage,
  Sparkles
} from 'lucide-react';

interface ProductGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onViewProductDetails: (product: Product) => void;
  onHoldProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onViewProductDetails,
  onHoldProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [filterCarryOnOnly, setFilterCarryOnOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Carry-on compliance filter
      if (filterCarryOnOnly && !product.airlineCarryOnCompliant) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDesc.toLowerCase().includes(query) || product.fullDesc.toLowerCase().includes(query);
        const matchesMaterial = product.material.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesMaterial) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' retains natural data order
    });
  }, [selectedCategory, filterCarryOnOnly, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-16 lg:py-24">
      <div id="trolley-bags" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
            <Luggage className="w-3.5 h-3.5 text-orange-500" />
            <span>SFO Airport In-Stock Inventory</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Featured Luggage &amp; Travel Bags
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Airport-tested luggage ready for immediate pickup before your flight or doorstep delivery. Every model meets strict transit endurance standards.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-[#121214] rounded-3xl border border-white/5 p-4 sm:p-5 mb-8 shadow-2xl backdrop-blur-sm space-y-4">
          
          {/* Top row: Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              id="filter-cat-all"
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-[#1C1C1F] text-zinc-300 hover:bg-[#27272A] hover:text-white border border-white/10'
              }`}
            >
              All Inventory ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-[#1C1C1F] text-zinc-300 hover:bg-[#27272A] hover:text-white border border-white/10'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search & Sort controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="product-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search carry-ons, spinners, duffels..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#0A0A0C] border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick toggles and Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end flex-wrap">
              
              {/* Carry-on Compliant toggle */}
              <button
                id="toggle-carryon-filter"
                onClick={() => setFilterCarryOnOnly(!filterCarryOnOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  filterCarryOnOnly 
                    ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' 
                    : 'bg-[#1C1C1F] text-zinc-300 border-white/10 hover:text-white'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Carry-On Compliant Only</span>
              </button>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 hidden sm:inline">Sort:</span>
                <select
                  id="product-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#0A0A0C] border border-white/10 rounded-xl text-xs text-zinc-200 px-3 py-2 focus:outline-none focus:border-orange-500"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

          </div>

        </div>

        {/* Product Count & Active State */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6">
          <span>Showing {filteredProducts.length} travel items</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-orange-500 hover:underline font-semibold"
            >
              Reset to all categories
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#121214] rounded-3xl border border-white/5 space-y-4">
            <Luggage className="w-12 h-12 text-zinc-600 mx-auto" />
            <div className="text-lg font-bold text-white">No products found</div>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto">
              We couldn&apos;t find anything matching your search criteria. Try clearing filters or searching for another term.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
                setFilterCarryOnOnly(false);
              }}
              className="px-5 py-2.5 bg-orange-500 text-white font-bold text-xs rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group flex flex-col justify-between rounded-3xl bg-[#121214] border border-white/5 hover:border-white/20 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-64 w-full overflow-hidden bg-[#0A0A0C]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />

                    {/* Top Left Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                        {product.badge}
                      </div>
                    )}

                    {/* Top Right In-Stock Pill */}
                    <div className="absolute top-3 right-3 bg-[#0A0A0C]/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SFO In-Stock
                    </div>

                    {/* Airline Carry-On Badge if applicable */}
                    {product.airlineCarryOnCompliant && (
                      <div className="absolute bottom-3 left-3 bg-[#0A0A0C]/90 backdrop-blur-md border border-white/10 text-zinc-300 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Plane className="w-3 h-3 text-orange-500" />
                        Carry-On Approved
                      </div>
                    )}

                    {/* Dimensions tag */}
                    <div className="absolute bottom-3 right-3 bg-[#0A0A0C]/90 backdrop-blur-md text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10">
                      {product.dimensions.split(' ')[0]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    
                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-orange-500 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-orange-500" />
                        <span>{product.rating}</span>
                        <span className="text-zinc-500 font-normal">({product.reviewsCount} reviews)</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {product.capacity}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-orange-500 transition-colors leading-snug">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-zinc-300">
                      <span className="px-2 py-0.5 rounded-md bg-[#1C1C1F] border border-white/5">
                        {product.weight}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#1C1C1F] border border-white/5">
                        {product.lockType.split(' ')[0]} {product.lockType.split(' ')[1]}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Footer with Price and Buttons */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-baseline justify-between pt-3 border-t border-white/5">
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-zinc-500">Retail Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-black text-2xl text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-zinc-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                        <CheckCircle className="w-3 h-3" /> Ready at SFO
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`view-details-btn-${product.id}`}
                      onClick={() => onViewProductDetails(product)}
                      className="w-full py-2.5 px-3 bg-[#1C1C1F] hover:bg-[#27272A] text-zinc-200 hover:text-white text-xs font-bold rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-orange-500" />
                      <span>View Details</span>
                    </button>

                    <button
                      id={`hold-sfo-btn-${product.id}`}
                      onClick={() => onHoldProduct(product)}
                      className="w-full py-2.5 px-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Hold at SFO</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
