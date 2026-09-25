import React, { useRef, useState } from 'react';
import { Maximize2, Play, X, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/studioData';

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const previewRefs = useRef({});

  // Lightbox reels start with sound; Chrome blocks that until the user has
  // interacted with the origin, so fall back to a muted autoplay.
  const startPlayback = (video) => {
    if (!video) return;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
  };

  return (
    <section
      id="experience"
      className="py-24 md:py-36 bg-brand-dark text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-terracotta mb-3 block flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            VISUAL SANCTUARY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            STUDIO EXPERIENCE
          </h2>
        </div>

        {/* Three-row mosaic: wide, portrait reels, squares and a closing banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[230px]">
          {GALLERY_DATA.map((item) => {
            const isVideo = item.type === 'video';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg bg-black ${item.span}`}
              >
                {isVideo ? (
                  <video
                    ref={(el) => { previewRefs.current[item.id] = el; }}
                    src={item.video}
                    poster={item.image}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                )}


                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-terracotta-light font-bold">
                      {isVideo ? `${item.category} • Reel` : item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxItem(null)}
        >
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-brand-dark rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === 'video' ? (
              <video
                ref={startPlayback}
                src={lightboxItem.video}
                poster={lightboxItem.image}
                controls
                loop
                playsInline
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            ) : (
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            )}
            <div className="p-6 bg-brand-dark flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                  {lightboxItem.category}
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  {lightboxItem.title}
                </h3>
              </div>
              <span className="text-xs text-gray-400">Mission StayFit Gallery</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
