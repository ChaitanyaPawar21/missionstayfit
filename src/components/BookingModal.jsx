import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Phone, MessageCircle, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { isMobileDevice } from '../utils/deviceDetection';

export default function BookingModal({ isOpen, onClose }) {
  const modalCardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  // GSAP animation on modal entrance
  useEffect(() => {
    if (isOpen && modalCardRef.current) {
      gsap.fromTo(
        modalCardRef.current,
        { scale: 0.92, opacity: 0, y: 25 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappNum = import.meta.env.VITE_WHATSAPP_NUMBER || '918208536490';
  
  // Format the number for display (e.g. +91 82085 36490)
  const formatNumber = (num) => {
    if (num.startsWith('91') && num.length === 12) {
      return `+91 ${num.slice(2, 7)} ${num.slice(7)}`;
    }
    return `+${num}`;
  };

  const formattedNum = formatNumber(whatsappNum);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalCardRef}
        className="max-w-md w-full bg-brand-dark text-white rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative my-8"
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

        {/* Modal Header */}
        <div className="space-y-2 mb-8 text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-terracotta/20 border border-brand-terracotta/30 text-brand-terracotta-light text-[10px] font-bold tracking-widest uppercase mb-2">
            <Sparkles className="w-3 h-3" />
            <span>JOIN THE TRIBE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
            BOOK YOUR BATCH
          </h2>

          <p className="text-sm text-gray-400 font-light max-w-xs mx-auto pt-2">
            Choose how you'd like to proceed with your booking.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQUg-izMnTv-Tce1baC8LceO-ygL_08_nHKGU40vx_xbRgYA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-light text-white font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-3 group"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Fill Booking Form</span>
          </a>

          {isMobile ? (
            <a
              href={`tel:+${whatsappNum}`}
              className="w-full p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call Us Now</span>
            </a>
          ) : (
            <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold text-sm">WhatsApp Us</span>
              </div>
              <p className="text-xl font-display font-bold tracking-wider text-white">
                {formattedNum}
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
                Save this number to chat with us
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
