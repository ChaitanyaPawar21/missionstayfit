import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/studioData';

export default function Schedule({ onBookBatch }) {
  const [filterType, setFilterType] = useState('All');

  const types = ['All', 'Yoga', 'Tabata', 'Zumba', 'Garba'];

  const filteredSchedule = filterType === 'All'
    ? SCHEDULE_DATA
    : SCHEDULE_DATA.filter((s) => s.type === filterType);

  return (
    <section
      id="schedule"
      className="py-24 md:py-36 bg-brand-cream text-brand-text relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-brand-border">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-terracotta mb-3 block flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              UPCOMING BATCH TIMETABLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-dark tracking-tight">
              STUDIO SCHEDULE
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 font-light">
              Explore our weekly batches below. Select any batch to reserve your trial pass.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  filterType === t
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'bg-white text-brand-muted hover:bg-brand-soft border border-brand-border'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSchedule.map((batch, index) => {
            const isComingSoon = batch.status === 'Coming Soon';
            const cardNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={batch.id}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border relative group ${
                  isComingSoon
                    ? 'bg-brand-soft/70 border-brand-border/80 opacity-90'
                    : 'bg-white border-brand-border hover:shadow-xl hover:-translate-y-1 hover:border-brand-terracotta/40'
                }`}
              >
                {/* Number Watermark */}
                <span className="absolute top-6 right-8 text-4xl font-display font-black text-brand-dark/10 group-hover:text-brand-terracotta/20 transition-colors">
                  {cardNumber}
                </span>

                <div className="space-y-6">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider uppercase">
                      {batch.type}
                    </span>
                    <span
                      className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        isComingSoon
                          ? 'bg-brand-dark text-white'
                          : batch.spotsLeft <= 3
                          ? 'bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/20'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {batch.status}
                    </span>
                  </div>

                  {/* Batch Title */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-display text-brand-dark group-hover:text-brand-terracotta transition-colors">
                      {batch.className}
                    </h3>
                    <p className="text-xs text-brand-muted">{batch.session}</p>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3 text-xs text-brand-muted pt-4 border-t border-brand-border/70">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-cream/60">
                      <Clock className="w-4 h-4 text-brand-terracotta shrink-0" />
                      <span className="font-bold text-brand-dark">{batch.time}</span>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-green/5">
                      <Calendar className="w-4 h-4 text-brand-green shrink-0" />
                      <span>{batch.days}</span>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-cream/60">
                      <User className="w-4 h-4 text-brand-muted shrink-0" />
                      <span>Instructor: <strong className="text-brand-dark">{batch.instructor}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-end">
                  <button
                    onClick={() => onBookBatch(batch.type.toLowerCase())}
                    disabled={isComingSoon}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-md ${
                      isComingSoon
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-brand-terracotta text-white hover:bg-brand-terracotta-light hover:shadow-lg'
                    }`}
                  >
                    <span>{isComingSoon ? 'Waitlist' : 'Book Batch'}</span>
                    {!isComingSoon && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Hint */}
        <div className="mt-12 text-center text-xs text-brand-muted flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-terracotta" />
          <span>All batches include certified instructor guidance and high-standard studio amenities.</span>
        </div>
      </div>
    </section>
  );
}
