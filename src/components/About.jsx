import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ABOUT_DATA } from '../data/studioData';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-brand-cream text-brand-text relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Subtitle */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-brand-terracotta" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-terracotta">
            {ABOUT_DATA.subtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-brand-dark leading-[1.12]">
              Wellness Is Not a Destination. <br />
              <span className="italic font-serif font-normal text-brand-green">
                It's a Lifestyle.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              {ABOUT_DATA.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-6 pt-4 border-t border-brand-border">
              {ABOUT_DATA.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-brand-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Pill */}
            <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center shrink-0 font-display font-bold">
                MS
              </div>
              <div>
                <p className="text-sm font-medium text-brand-dark italic">
                  "Improve strength, flexibility, energy, and confidence in a space built for your personal growth."
                </p>
                <p className="text-xs text-brand-muted font-semibold tracking-wider uppercase mt-1">
                  — Mission StayFit Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Image Grid Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Primary Large Image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group aspect-[16/10]">
                <img
                  src={ABOUT_DATA.images.main}
                  alt="Yoga Studio Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-brand-terracotta-light font-semibold">
                    Studio Sanctuary
                  </span>
                  <h4 className="text-lg font-bold font-display">Aesthetic Whitespace & Mindful Design</h4>
                </div>
              </div>

              {/* Secondary Image 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square">
                <img
                  src={ABOUT_DATA.images.secondary}
                  alt="Yoga posture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Secondary Image 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square bg-black">
                {ABOUT_DATA.images.tertiary.endsWith('.mp4') ? (
                  <video
                    src={ABOUT_DATA.images.tertiary}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={ABOUT_DATA.images.tertiary}
                    alt="Workout class"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </div>

            {/* Floating Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-brand-dark text-white shadow-2xl border border-white/10 animate-float">
              <Sparkles className="w-6 h-6 text-brand-terracotta" />
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Boutique Standard</p>
                <p className="text-sm font-bold font-display">Pure Wellness Environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
