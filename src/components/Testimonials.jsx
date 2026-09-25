import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/studioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 bg-brand-dark text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-terracotta mb-3 block">
            MEMBER VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            STORIES OF TRANSFORMATION
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs text-gray-400 ml-2 font-medium">4.9/5 Average Rating</span>
          </div>
        </div>

        {/* Minimal Large Typography Quote Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-14 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative">
          <Quote className="w-12 h-12 text-brand-terracotta/30 absolute top-8 left-8" />

          <div className="relative z-10 space-y-8 text-center pt-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-light leading-relaxed text-brand-cream italic">
              "{current.quote}"
            </p>

            <div className="flex flex-col items-center gap-2 pt-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-brand-terracotta text-white font-display font-bold flex items-center justify-center text-base shadow-lg">
                {current.initials}
              </div>
              <h3 className="text-lg font-bold font-display text-white mt-1">
                {current.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-brand-terracotta-light">
                <span>{current.role}</span>
                <span>•</span>
                <span className="text-gray-400">{current.batch}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-brand-terracotta' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
                aria-label="Next quote"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
