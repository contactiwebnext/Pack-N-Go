import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-20 sm:bottom-6 right-6 z-40 p-3 rounded-full bg-[#1C1C1F]/90 hover:bg-orange-500 text-zinc-300 hover:text-white border border-white/10 hover:border-orange-500 shadow-xl shadow-black/50 backdrop-blur-md transition-all transform hover:-translate-y-1 focus:outline-none cursor-pointer group"
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  );
};
