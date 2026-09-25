import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_LOGO } from '../data/studioData';

export default function Navbar({ onOpenBooking, onOpenWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stories', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-dark border-b border-white/10 ${
        scrolled ? 'py-3 shadow-2xl' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center transition-opacity z-50"
        >
          <img src={BRAND_LOGO} alt="Mission StayFit Logo" className="h-12 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-200 hover:text-white transition-colors duration-300 relative group py-1"
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-brand-terracotta' : 'bg-brand-green'
              }`} />
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenBooking(null)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-md bg-white text-brand-dark hover:bg-brand-terracotta hover:text-white"
          >
            <span>Join a Batch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full transition-colors z-50 text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu Fullscreen Opaque Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-dark text-white flex flex-col justify-between p-8 pt-24 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">Studio Navigation</p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-light hover:text-brand-terracotta transition-colors tracking-wide border-b border-white/5 pb-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking(null);
              }}
              className="w-full py-4 rounded-full bg-brand-terracotta text-white font-semibold text-sm tracking-wider uppercase hover:bg-brand-terracotta-light transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Join a Batch Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-400 text-center">Move. Sweat. Smile. Repeat.</p>
          </div>
        </div>
      )}
    </header>
  );
}
