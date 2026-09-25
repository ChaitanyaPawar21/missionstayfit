import React from 'react';
import { ABOUT_DATA } from '../data/studioData';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-brand-cream text-brand-text relative overflow-hidden"
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
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-brand-dark leading-[1.12]">
              Fitness That Fits <br />
              <span className="text-brand-green">Your Everyday Life.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              {ABOUT_DATA.description}
            </p>
          </div>

          {/* Editorial Image Grid Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Primary Large Image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group aspect-[16/10]">
                <img
                  src={ABOUT_DATA.images.main}
                  alt="Inside the Mission StayFit studio hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-brand-terracotta-light font-semibold">
                    Our Studio
                  </span>
                  <h4 className="text-lg font-bold font-display">Where Our Batches Train</h4>
                </div>
              </div>

              {/* Secondary Image 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square">
                <img
                  src={ABOUT_DATA.images.secondary}
                  alt="Members training at Mission StayFit"
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
          </div>
        </div>
      </div>
    </section>
  );
}
