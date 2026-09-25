import React from 'react';
import { Compass, Flame, Sparkles } from 'lucide-react';
import { HERO_DATA, HERO_BACKGROUND } from '../data/studioData';

export default function Hero({ onOpenBooking, onScrollToClasses }) {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-brand-dark text-white selection:bg-brand-terracotta selection:text-white">
      {/* Dynamic Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_BACKGROUND}
          alt="Mission StayFit members at the studio in CIDCO N4, Chhatrapati Sambhajinagar"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110 opacity-70 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest uppercase text-brand-cream">
            <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
            <span>{HERO_DATA.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
            <span className="sr-only">Mission StayFit, fitness studio in CIDCO N4, Chhatrapati Sambhajinagar: </span>
            MOVE BETTER. <br />
            <span className="text-brand-terracotta-light">FEEL STRONGER.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-terracotta pl-4 py-1 max-w-xl">
            {HERO_DATA.subtext}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={onScrollToClasses}
              className="px-8 py-4 rounded-full bg-white text-brand-dark hover:bg-brand-cream text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 group"
            >
              <span>Explore Classes</span>
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onOpenBooking(null)}
              className="px-8 py-4 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group"
            >
              <span>Join a Batch</span>
              <Flame className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
