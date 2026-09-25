import React from 'react';
import { X, Clock, Flame, User, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ClassDetailModal({ selectedClass, onClose, onBookNow }) {
  if (!selectedClass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-dark text-white rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-10 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/8] group">
            <img
              src={selectedClass.image}
              alt={selectedClass.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-brand-terracotta text-white text-xs font-bold tracking-widest uppercase mb-2 inline-block">
                {selectedClass.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {selectedClass.title}
              </h3>
            </div>
          </div>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Duration</p>
              <p className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-4 h-4 text-brand-terracotta-light" />
                {selectedClass.duration}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Est. Calories</p>
              <p className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Flame className="w-4 h-4 text-brand-terracotta-light" />
                {selectedClass.calories}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Instructor</p>
              <p className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <User className="w-4 h-4 text-brand-terracotta-light" />
                {selectedClass.instructor}
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-terracotta-light">
              Class Overview
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {selectedClass.description}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-terracotta-light">
              What You Will Experience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedClass.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green-light flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-brand-terracotta-light" />
              <span>Includes 1-Day Trial Pass & Mat Equipment</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookNow(selectedClass.id);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Book Trial Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
