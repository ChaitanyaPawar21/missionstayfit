import React from 'react';
import { Compass, Flame, Sparkles } from 'lucide-react';
import { HERO_DATA, HERO_BACKGROUND } from '../data/studioData';

export default function Hero({ onOpenBooking, onScrollToClasses }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brand-dark text-white selection:bg-brand-terracotta selection:text-white">
      {/* Dynamic Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_BACKGROUND}
          alt="Mission StayFit Studio Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 opacity-40 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 my-auto pt-8">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest uppercase text-brand-cream">
            <Sparkles className="w-3.5 h-3.5 text-brand-terracotta animate-pulse" />
            <span>{HERO_DATA.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
            MOVE BETTER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cream to-brand-terracotta-light">
              FEEL STRONGER.
            </span> <br />
            LIVE FULLY.
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

      {/* Stats Counter Ticker */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 mt-12">
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_DATA.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="z-10 text-center mt-6 flex justify-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group"
          aria-label="Scroll down to about section"
        >
          <span className="text-[10px] tracking-[0.3em]">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-brand-terracotta animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
