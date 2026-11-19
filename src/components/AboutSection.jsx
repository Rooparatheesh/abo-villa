import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Leaf, 
  Coffee, 
  Compass,
  CheckCircle2,
  MapPin,
  Home
} from 'lucide-react';
import { homestayInfo } from '../data/homestayData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-earth-50 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pine-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-light/60 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
            <Leaf className="w-3.5 h-3.5" />
            Welcome to Our Homestay
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight leading-tight mb-4">
            A Peaceful Haven in the Heart of Central Kerala
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {homestayInfo.name} was founded to offer travelers, families, and professionals a genuine home in Changanassery, Kottayam — where mornings greet you with tropical birdsong, days are peaceful and relaxing, and genuine Kerala hospitality makes every guest feel like cherished family.
          </p>
        </div>

        {/* 2-Column Story & Host Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/photos/exterior.jpg" 
                alt={`${homestayInfo.name} Front View`} 
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-earth-200">
                <span className="block text-xs uppercase tracking-wider text-pine-800 font-semibold">Location</span>
                <span className="font-serif text-lg font-bold text-stone-900">Between Changanacherry & Thiruvalla</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/photos/living-room.jpg" 
                  alt="Abo Villa Heritage Living Room" 
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/photos/kitchen.jpg" 
                  alt="Traditional Kerala Heritage Kitchen" 
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
                Not a commercial hotel. A welcoming home.
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {homestayInfo.description}
              </p>
              <p className="text-stone-600 leading-relaxed">
                Located in a calm, safe neighborhood just minutes from Changanassery railway station and the town center, Abo Villa combines the quiet serenity of Kerala's countryside with effortless connectivity to Kottayam, Alappuzha (Alleppey), and Kumarakom backwaters.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "279 m² private villa · 4 bedrooms · 4 bathrooms",
                "Traditional Kerala heritage kitchen & full amenities",
                "Free WiFi · AC · Flat-screen TV · Washing machine",
                "Private parking for 8–10 vehicles on-site",
                "River view · Garden view · Balcony & Terrace",
                "Personalized host care by Binoy Mon"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Meet The Hosts Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-earth-200 flex flex-col sm:flex-row items-center gap-4 mt-6">
              <img 
                src={homestayInfo.hosts.image} 
                alt={homestayInfo.hosts.names}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-pine-100 shrink-0" 
              />
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="font-serif font-bold text-stone-900 text-base">{homestayInfo.hosts.names}</h4>
                  <span className="text-xs bg-pine-100 text-pine-800 px-2 py-0.5 rounded-full font-medium">Owner & Host</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 italic">
                  "{homestayInfo.hosts.story}"
                </p>
                <div className="mt-2 flex items-center justify-center sm:justify-start gap-3 text-xs text-pine-800 font-semibold">
                  <span>Direct Contact: {homestayInfo.contact.phoneDisplay}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="bg-pine-900 text-earth-100 rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-pine-800">
          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
              {homestayInfo.stats.rating} <span className="text-amber-400 text-2xl">★</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-pine-300 font-medium">Guest Rating</p>
            <p className="text-[11px] text-pine-400 mt-1">From {homestayInfo.stats.reviewsCount}+ verified stays</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
              5 km
            </div>
            <p className="text-xs uppercase tracking-wider text-pine-300 font-medium">Changanacherry & Tiruvalla</p>
            <p className="text-[11px] text-pine-400 mt-1">Between two railway stations</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
              104 km
            </div>
            <p className="text-xs uppercase tracking-wider text-pine-300 font-medium">Cochin Airport (COK)</p>
            <p className="text-[11px] text-pine-400 mt-1">~2 hours via MC Road</p>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
              279 m²
            </div>
            <p className="text-xs uppercase tracking-wider text-pine-300 font-medium">Private Villa · 4 Bedrooms</p>
            <p className="text-[11px] text-pine-400 mt-1">7 beds · 4 bathrooms · Courtyard</p>
          </div>
        </div>

      </div>
    </section>
  );
}
