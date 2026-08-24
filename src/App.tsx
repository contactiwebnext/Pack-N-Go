import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HoldReservationModal } from './components/HoldReservationModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AirportStoreSection } from './components/AirportStoreSection';
import { AirlineBaggageChecker } from './components/AirlineBaggageChecker';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [holdModalProduct, setHoldModalProduct] = useState<{
    product: Product;
    selectedColor?: string;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('shop');
  };

  const handleOpenProductDetails = (product: Product) => {
    setActiveProductModal(product);
  };

  const handleOpenHoldModal = (product: Product, selectedColor?: string) => {
    setHoldModalProduct({ product, selectedColor });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E4E4E7] flex flex-col font-sans pb-16 sm:pb-0">
      
      {/* Navigation Header */}
      <Navbar 
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onExploreCollection={() => scrollToSection('shop')}
          onVisitStore={() => scrollToSection('airport-store')}
        />

        {/* 2. Featured Categories */}
        <CategorySection
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />

        {/* 3. Featured Products Grid */}
        <ProductGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewProductDetails={handleOpenProductDetails}
          onHoldProduct={(product) => handleOpenHoldModal(product)}
        />

        {/* 4. Why Pack N Go */}
        <WhyChooseUs />

        {/* 5. Airport Store Section (Visit Us Before Your Flight) */}
        <AirportStoreSection />

        {/* 6. Airline Carry-on Sizing Guide */}
        <AirlineBaggageChecker
          onSelectCategory={handleSelectCategory}
        />

        {/* 7. About Pack N Go + FAQs */}
        <AboutSection />

        {/* 8. Contact & Inquiries */}
        <ContactSection />

      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onHoldProduct={(product, color) => handleOpenHoldModal(product, color)}
      />

      {/* SFO In-Store Hold Modal */}
      {holdModalProduct && (
        <HoldReservationModal
          product={holdModalProduct.product}
          selectedColor={holdModalProduct.selectedColor}
          onClose={() => setHoldModalProduct(null)}
        />
      )}

      {/* Footer with required iWebNext attribution & store links */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating Scroll to top */}
      <ScrollToTop />

      {/* Mobile Quick Action Bar */}
      <MobileQuickBar onNavigate={scrollToSection} />

    </div>
  );
}
