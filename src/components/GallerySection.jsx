import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { galleryImages } from '../data/homestayData';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = ['All', 'Exterior', 'Rooms', 'Dining', 'Outdoors', 'Nature'];

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handlePrev = () => {
    setLightboxIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNext = () => {
    setLightboxIdx((prev) => (prev + 1) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-earth-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
              <Camera className="w-3.5 h-3.5" />
              Moments & Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
              A Glimpse into Serenity
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-xl">
              From dawn sunlight filtering through pine canopies to warm hearths and cozy attic corners.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-pine-800 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-earth-200 border border-earth-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIdx(idx)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-200"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-1">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {img.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-stone-300">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Pop-up */}
      {lightboxIdx !== null && (
        <LightboxModal
          images={filteredImages}
          currentIdx={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
