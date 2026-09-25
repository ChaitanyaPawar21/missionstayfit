import React from 'react';
import { Sparkles, Flame, ArrowUpRight } from 'lucide-react';

export default function CallToAction({ onOpenBooking }) {
  return (
    <section className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-[2.5rem] bg-brand-dark text-white p-10 sm:p-16 md:p-24 overflow-hidden border border-white/15 shadow-2xl text-center">
          {/* Dynamic Glow Accents */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-terracotta/25 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-green/25 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-brand-cream border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>START TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight text-white">
              YOUR WELLNESS JOURNEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cream to-brand-terracotta-light">
                STARTS HERE.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
              One class can become a habit. One habit can change everything.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking(null)}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 group"
              >
                <span>JOIN MISSION STAYFIT</span>
                <Flame className="w-4 h-4 group-hover:scale-125 transition-transform" />
              </button>

              <a
                href="#classes"
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all border border-white/15 flex items-center justify-center gap-2"
              >
                <span>Explore All Batches</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
