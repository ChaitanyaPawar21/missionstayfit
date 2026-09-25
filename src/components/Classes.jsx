import React from 'react';
import { Clock, Flame, BellRing, Calendar, User } from 'lucide-react';
import { CLASSES_DATA, SCHEDULE_DATA } from '../data/studioData';

export default function Classes({ onSelectClass, onJoinWaitlist, onOpenBooking }) {
  return (
    <section
      id="classes"
      className="py-16 md:py-20 bg-brand-dark text-white relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-terracotta mb-3 block">
              CLASSES & BATCH TIMINGS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white">
              OUR CLASSES
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Pick a class and a batch time that suits you. Every batch runs in small groups with a trainer guiding you throughout.
          </p>
        </div>

        {/* Classes Layout */}
        <div className="space-y-8 md:space-y-10">
          {CLASSES_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-5 md:p-8 rounded-3xl transition-all duration-700 bg-gradient-to-br ${
                  item.isComingSoon
                    ? 'from-white/5 to-white/[0.02] border border-white/15'
                    : 'from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Visual Image Side */}
                <div
                  className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} class at Mission StayFit, Chhatrapati Sambhajinagar`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.bgGradient}`} />

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold tracking-wider text-white border border-white/10">
                      {item.tag}
                    </span>

                    {item.isComingSoon && (
                      <span className="px-3 py-1 rounded-full bg-brand-terracotta text-white text-xs font-bold tracking-widest uppercase animate-pulse shadow-lg">
                        COMING SOON
                      </span>
                    )}
                  </div>

                  {!item.isComingSoon && (
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center text-xs text-gray-200 bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-terracotta-light" />
                        {item.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand-terracotta-light font-semibold block mb-2">
                      {item.intensity}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-lg sm:text-xl font-medium text-brand-cream italic border-l-2 border-brand-terracotta pl-4">
                    "{item.tagline}"
                  </p>

                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Batch Timings */}
                  <div className="space-y-2 pt-2">
                    {SCHEDULE_DATA.filter((b) => b.type.toLowerCase() === item.id).map((batch) => (
                      <div
                        key={batch.id}
                        className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        <span className="flex items-center gap-1.5 font-semibold text-white">
                          <Clock className="w-3.5 h-3.5 text-brand-terracotta-light" />
                          {batch.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-brand-terracotta-light" />
                          {batch.days}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-brand-terracotta-light" />
                          {batch.instructor}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {!item.isComingSoon ? (
                      <>
                        <button
                          onClick={() => onOpenBooking(item.id)}
                          className="px-6 py-3 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                        >
                          Book Batch
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onJoinWaitlist(item.title)}
                        className="px-8 py-3.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xl flex items-center gap-2 group/btn"
                      >
                        <BellRing className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        <span>Join Dance Waitlist</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
