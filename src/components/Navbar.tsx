'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'glass py-2 sm:py-3 border-premium-red/15'
          : 'bg-transparent py-3 sm:py-4 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center">


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs lg:text-sm font-medium text-gray-400 hover:text-premium-red transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="/Harish.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-premium-red/20 border border-premium-red/50 text-premium-red text-xs lg:text-sm font-bold hover:bg-premium-red hover:text-black transition-colors">
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-premium-red focus:outline-none active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-premium-red/15 bg-black/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-premium-red hover:bg-premium-red/5 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-3">
                <a href="/Harish.pdf" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 rounded-lg bg-premium-red text-black text-sm font-bold text-center transition-transform active:scale-95">
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
