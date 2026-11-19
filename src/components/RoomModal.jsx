import React, { useState } from 'react';
import { 
  X, 
  Users, 
  Maximize2, 
  Bed, 
  Eye, 
  Check, 
  Star, 
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { homestayInfo } from '../data/homestayData';

export default function RoomModal({ room, onClose, onBookNow }) {
  if (!room) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-earth-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-stone-900/60 hover:bg-stone-900 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery Carousel */}
        <div className="relative h-72 sm:h-96 w-full bg-stone-900">
          <img
            src={room.images[activeImageIdx]}
            alt={`${room.title} view ${activeImageIdx + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Prev/Next arrows if multiple images */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Thumbnail strip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-950/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                {room.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === activeImageIdx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/80'
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Badge */}
          {room.tag && (
            <div className="absolute top-4 left-4 bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {room.tag}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-earth-200 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-pine-700 font-semibold mb-1">
                <span>{room.type}</span>
                <span>•</span>
                <span className="flex items-center text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current mr-0.5" />
                  {room.rating} ({room.reviewsCount} reviews)
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{room.title}</h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-stone-500 block">Nightly Rate</span>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-pine-900">
                {room.currency}{room.price.toLocaleString('en-IN')}
                <span className="text-xs font-sans font-normal text-stone-500"> / night + taxes</span>
              </div>
            </div>
          </div>

          {/* Key Specs Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-earth-100/70 p-3 rounded-2xl flex items-center gap-3">
              <Users className="w-5 h-5 text-pine-700 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Capacity</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Up to {room.maxGuests} Guests</span>
              </div>
            </div>

            <div className="bg-earth-100/70 p-3 rounded-2xl flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-pine-700 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Floor Space</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{room.size}</span>
              </div>
            </div>

            <div className="bg-earth-100/70 p-3 rounded-2xl flex items-center gap-3">
              <Bed className="w-5 h-5 text-pine-700 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Beds</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{room.bedType}</span>
              </div>
            </div>

            <div className="bg-earth-100/70 p-3 rounded-2xl flex items-center gap-3">
              <Eye className="w-5 h-5 text-pine-700 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-stone-500">Outlook</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">About This Cottage</h4>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              {room.description}
            </p>
          </div>

          {/* Key Features & Amenities */}
          <div>
            <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">Room Highlights & Inclusions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-pine-100 text-pine-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* House Rules Note */}
          <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-2xl text-xs text-amber-900 space-y-1">
            <p className="font-semibold">🌿 Stay Notes & House Guidelines:</p>
            <p>Check-in: {homestayInfo.contact.checkInTime} · Check-out: {homestayInfo.contact.checkOutTime}. Non-smoking indoors. Free cancellation up to 14 days before arrival.</p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-earth-200">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="w-full sm:w-auto px-8 py-3 bg-terracotta hover:bg-terracotta-hover text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Cottage</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
