import React, { useState } from 'react';
import { 
  Flame, 
  Wifi, 
  Droplets, 
  Sparkles, 
  Utensils, 
  Coffee, 
  CookingPot, 
  Compass, 
  Trees, 
  HeartHandshake, 
  Car,
  CupSoda,
  CheckCircle2,
  Laptop
} from 'lucide-react';
import { amenitiesList } from '../data/homestayData';

const iconMap = {
  Flame,
  Wifi,
  Droplets,
  Sparkles,
  Utensils,
  Coffee,
  CookingPot,
  Compass,
  Trees,
  HeartHandshake,
  Car,
  CupSoda
};

export default function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-earth-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Comfort & Convenience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
            Thoughtful Touches For Your Stay
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Every comfort you need to immerse yourself in tranquility, whether you are unwinding on the garden veranda or working remotely.
          </p>
        </div>

        {/* Work from Villa Feature Banner */}
        <div className="mb-14 bg-gradient-to-r from-pine-900 via-pine-800 to-pine-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-pine-700">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
              <Laptop className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Work & Leisure Haven</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">High-Speed Workation Ready</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
                150+ Mbps dedicated dual-band fiber, ergonomic work spaces in each room, and inverter backup ensure you stay connected seamlessly.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-medium text-emerald-200 border border-white/15">
              ⚡ 24/7 Power Backup
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-medium text-emerald-200 border border-white/15">
              📶 150 Mbps Fiber
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-earth-200/80 p-1.5 rounded-full inline-flex gap-1 shadow-inner">
            {amenitiesList.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-pine-800 text-white shadow'
                    : 'text-stone-700 hover:text-pine-900'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList[activeTab].items.map((item, i) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-earth-200/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pine-50 group-hover:bg-pine-100 text-pine-800 flex items-center justify-center transition-colors mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-earth-100 flex items-center gap-1.5 text-xs text-pine-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Included with stay</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
