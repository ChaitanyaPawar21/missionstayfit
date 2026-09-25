import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { FOOTER_DATA, BRAND_LOGO } from '../data/studioData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Motto */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-brand-terracotta shrink-0">
                <img src={BRAND_LOGO} alt="Mission StayFit Logo" className="w-full h-full object-cover" />
              </div>
              <span className="flex flex-col leading-tight">
                <span className="font-editorial text-xl font-bold tracking-widest">MISSION STAYFIT</span>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-medium">
                  BOUTIQUE WELLNESS STUDIO
                </span>
              </span>
            </a>

            <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
              Your elevated space to move, sweat, breathe, and become the strongest, most balanced version of yourself.
            </p>

            <div className="pt-2">
              <p className="text-sm font-display font-medium text-brand-terracotta-light italic">
                "Move. Sweat. Smile. Repeat."
              </p>
            </div>
          </div>

          {/* Column 2: Offerings */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300">
              Studio Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#classes" className="hover:text-white transition-colors">🧘 Yoga & Breathwork</a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white transition-colors">🔥 Tabata High Energy</a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white transition-colors">💃 Zumba Dance Fitness</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">📅 Batch Schedule</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Brand</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why StayFit</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Studio Experience</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Member Reviews</a></li>
              <li>
                <button onClick={() => onOpenBooking(null)} className="text-brand-terracotta-light hover:underline font-semibold">
                  Claim 1-Day Trial
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300">
              Visit Us
            </h4>
            <div className="space-y-3 text-xs text-gray-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                <span>{FOOTER_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-green-light shrink-0" />
                <span>{FOOTER_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-terracotta-light shrink-0" />
                <span>{FOOTER_DATA.email}</span>
              </div>
              <a
                href={FOOTER_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 pt-2 text-white font-medium hover:text-brand-terracotta-light transition-colors"
              >
                <svg className="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>{FOOTER_DATA.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Up */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Mission StayFit Wellness Studio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Designed for Mindful Living</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors flex items-center gap-1"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
