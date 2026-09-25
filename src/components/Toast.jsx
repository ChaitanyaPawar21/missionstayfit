import React from 'react';
import { Sparkles, CheckCircle, Bell, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-brand-dark text-white border border-white/20 shadow-2xl backdrop-blur-lg max-w-md">
        <div className="p-2 rounded-xl bg-brand-terracotta text-white shrink-0">
          {toast.type === 'waitlist' ? <Bell className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
        </div>
        <div className="text-xs">
          <p className="font-bold font-display text-white">{toast.title}</p>
          <p className="text-gray-300 font-light mt-0.5">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-gray-400 hover:text-white transition-colors ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
