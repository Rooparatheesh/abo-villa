import React, { useState } from 'react';
import { 
  Users, 
  Bed, 
  Maximize2, 
  Star, 
  Eye, 
  ArrowRight, 
  Check, 
  Sparkles,
  Calendar
} from 'lucide-react';
import { roomsData } from '../data/homestayData';
import RoomModal from './RoomModal';

export default function RoomsSection({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [modalRoom, setModalRoom] = useState(null);

  const filters = [
    { label: 'All Rooms & Villa', value: 'all' },
    { label: 'Deluxe Suites', value: 'deluxe' },
    { label: 'Family Suite', value: 'family' },
    { label: 'Full Villa', value: 'villa' },
  ];

  const filteredRooms = roomsData.filter((room) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'deluxe') return room.type.toLowerCase().includes('suite') || room.title.toLowerCase().includes('deluxe');
    if (selectedFilter === 'family') return room.maxGuests >= 4 && !room.id.includes('entire');
    if (selectedFilter === 'villa') return room.id.includes('entire');
    return true;
  });

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
              Comfortable Kerala Villa Stays
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-xl">
              Each room and suite is fully air-conditioned, spotlessly maintained, and oriented towards peaceful garden verandas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedFilter === f.value
                    ? 'bg-pine-800 text-white shadow-md'
                    : 'bg-earth-100 text-stone-700 hover:bg-earth-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-earth-50/60 rounded-3xl overflow-hidden border border-earth-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Tag */}
                {room.tag && (
                  <div className="absolute top-4 left-4 bg-pine-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {room.tag}
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                  <span>{room.rating}</span>
                </div>

                {/* View Badge at bottom */}
                <div className="absolute bottom-4 left-4 bg-stone-950/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-xl flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-earth-300" />
                  <span>{room.view}</span>
                </div>
              </div>

              {/* Room Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-1">
                    {room.type}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-stone-600 text-sm line-clamp-2 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-earth-200/80 text-xs text-stone-600 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-pine-700" />
                      <span>{room.maxGuests} Guests</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-pine-700" />
                      <span className="truncate">{room.bedType.split('+')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-pine-700" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {room.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-pine-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-earth-200/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-stone-500 block uppercase font-medium">Starting from</span>
                    <div className="font-serif text-2xl font-bold text-pine-950">
                      {room.currency}{room.price.toLocaleString('en-IN')}
                      <span className="text-xs font-sans font-normal text-stone-500"> / night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalRoom(room)}
                      className="px-3.5 py-2.5 rounded-full border border-stone-300 hover:border-pine-800 text-stone-700 hover:text-pine-900 text-xs sm:text-sm font-medium transition-colors"
                      title="View full specs and images"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenBooking({ room })}
                      className="px-5 py-2.5 bg-pine-800 hover:bg-pine-900 text-white rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-terracotta" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Room Details Modal */}
      {modalRoom && (
        <RoomModal
          room={modalRoom}
          onClose={() => setModalRoom(null)}
          onBookNow={(r) => onOpenBooking({ room: r })}
        />
      )}
    </section>
  );
}
