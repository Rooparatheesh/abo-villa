import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ images, currentIdx, onClose, onPrev, onNext }) {
  if (currentIdx === null || !images[currentIdx]) return null;

  const current = images[currentIdx];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Caption & Close */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white max-w-6xl mx-auto">
        <div className="bg-stone-900/70 px-4 py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm">
          <span className="font-semibold">{current.title}</span>
          <span className="text-stone-400 ml-2">({currentIdx + 1} of {images.length})</span>
        </div>
        <button
          onClick={onClose}
          className="bg-stone-900/70 hover:bg-stone-800 p-2.5 rounded-full text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-stone-900/70 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.url}
          alt={current.title}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain select-none"
        />
        <div className="mt-3 text-center text-stone-300 text-xs sm:text-sm">
          {current.title} · <span className="text-stone-400 capitalize">{current.category}</span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-stone-900/70 hover:bg-white/20 p-3 rounded-full text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
