import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar as CalendarIcon, 
  Users, 
  Home, 
  ChevronRight,
  ShieldCheck,
  Compass,
  Sparkles
} from 'lucide-react';
import { homestayInfo, roomsData, assetUrl } from '../data/homestayData';

export default function Hero({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('all');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onOpenBooking({
      checkIn,
      checkOut,
      guests,
      roomType: roomType === 'all' ? null : roomType
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Background Image with Cinematic Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(14, 32, 26, 0.55) 0%, rgba(14, 32, 26, 0.45) 40%, rgba(14, 32, 26, 0.88) 100%), url('${assetUrl('photos/exterior.jpg')}')`
        }}
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Floating pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-lg animate-fade-in">
          <span className="flex items-center text-amber-300">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="ml-1 font-semibold">{homestayInfo.stats.rating}</span>
          </span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1 text-earth-100">
            <Compass className="w-3.5 h-3.5 text-terracotta" />
            <span>Changanacherry–Thiruvalla, Kottayam</span>
          </span>
          <span className="text-white/40 hidden md:inline">|</span>
          <span className="hidden md:inline text-emerald-300 font-medium">
            🌴 Peaceful Kerala Homestay Retreat
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight sm:leading-none mb-6 drop-shadow-md">
          Experience Serenity at <br />
          <span className="italic font-normal text-earth-200">{homestayInfo.name}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-200 font-light leading-relaxed mb-10 drop-shadow">
          Unwind amidst swaying palms, warm Kerala hospitality, and modern comforts in Changanassery, Kottayam. Hosted personally by Binoy Mon.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-3.5 bg-terracotta hover:bg-terracotta-hover text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Book Your Stay with Binoy Mon</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#rooms"
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-full font-medium text-base transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-earth-200" />
            <span>Explore Rooms & Rates</span>
          </a>
        </div>
      </div>

      {/* Floating Quick Availability Bar */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-6">
        <form 
          onSubmit={handleQuickSearch}
          className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl sm:rounded-2xl shadow-2xl border border-earth-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-stone-800"
        >
          {/* Check-in */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-earth-50/70 border border-earth-200/50 hover:border-pine-400 transition-colors">
            <CalendarIcon className="w-5 h-5 text-pine-700 shrink-0" />
            <div className="text-left w-full">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-earth-50/70 border border-earth-200/50 hover:border-pine-400 transition-colors">
            <CalendarIcon className="w-5 h-5 text-pine-700 shrink-0" />
            <div className="text-left w-full">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Guests & Room */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-earth-50/70 border border-earth-200/50 hover:border-pine-400 transition-colors">
            <Users className="w-5 h-5 text-pine-700 shrink-0" />
            <div className="text-left w-full">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
              >
                <option value="1 Guest">1 Guest (Solo)</option>
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5+ Guests">5+ Guests (Family)</option>
              </select>
            </div>
          </div>

          {/* Submit Search */}
          <button
            type="submit"
            className="w-full bg-pine-800 hover:bg-pine-900 text-white rounded-xl font-medium text-sm px-4 py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span>Check Availability</span>
          </button>
        </form>

        {/* Small Trust Guarantees */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300 font-medium drop-shadow">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Best Price Direct Booking
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Kerala Breakfast Included
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Free Flexible Cancellation
          </span>
        </div>
      </div>
    </section>
  );
}
