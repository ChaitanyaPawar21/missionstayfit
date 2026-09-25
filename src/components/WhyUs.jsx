import React from 'react';
import { Target, Users, Zap, Sparkles } from 'lucide-react';
import { WHY_US_DATA } from '../data/studioData';

export default function WhyUs() {
  const getIcon = (id) => {
    switch (id) {
      case 'purpose': return <Target className="w-6 h-6 text-brand-terracotta" />;
      case 'everybody': return <Users className="w-6 h-6 text-brand-green" />;
      case 'community': return <Zap className="w-6 h-6 text-brand-terracotta" />;
      default: return <Sparkles className="w-6 h-6 text-brand-green" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-16 md:py-20 bg-brand-cream text-brand-text relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-terracotta mb-3 block">
            WHY JOIN US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-dark tracking-tight leading-tight">
            WHY MISSION STAYFIT?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted font-light mt-4">
            No crowded gym floors. Just small batches, friendly trainers and workouts that actually fit your day.
          </p>
        </div>

        {/* 4 Pillar Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-display font-extrabold text-brand-dark/20 group-hover:text-brand-terracotta transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-brand-cream group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.id)}
                  </div>
                </div>

                <h3 className="text-lg font-bold font-display text-brand-dark tracking-wide mb-3 uppercase">
                  {item.headline}
                </h3>

                <p className="text-sm text-brand-muted font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
