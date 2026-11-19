import React from 'react';
import { 
  Compass, 
  Clock, 
  Flame, 
  Trees, 
  Sparkles, 
  ArrowRight,
  Sun
} from 'lucide-react';
import { experiencesData } from '../data/homestayData';

export default function ExperiencesSection({ onOpenBooking }) {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
            <Compass className="w-3.5 h-3.5" />
            Curated Local Activities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
            Explore Central Kerala & Backwaters
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            More than just a place to sleep. Experience serene backwaters, heritage temples, and authentic Kerala flavors guided by your host Binoy Mon.
          </p>
        </div>

        {/* 2x2 Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="group bg-earth-50 rounded-3xl overflow-hidden border border-earth-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-pine-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {exp.tag}
                </div>

                {/* Difficulty */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                  {exp.difficulty}
                </div>

                {/* Duration & Timing Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-950/75 backdrop-blur-md text-white text-xs p-2.5 rounded-2xl flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-earth-300" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-earth-200">
                    <Sun className="w-3.5 h-3.5 text-amber-300" />
                    {exp.timing}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2.5">
                    {exp.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {exp.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-earth-200 flex items-center justify-between">
                  <span className="text-xs text-pine-700 font-semibold">Available for all guests</span>
                  <button
                    onClick={() => onOpenBooking()}
                    className="text-xs sm:text-sm font-semibold text-terracotta hover:text-terracotta-hover flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire for Stay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
