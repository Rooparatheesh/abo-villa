import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle, 
  Heart, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { reviewsData, homestayInfo } from '../data/homestayData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
            <Heart className="w-3.5 h-3.5" />
            Guest Love & Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
            Memories Made at Abo Villa
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Read what our wonderful guests have to say about their slow stays, peaceful mornings, and culinary experiences with us.
          </p>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="bg-earth-50 rounded-3xl p-6 sm:p-10 border border-earth-200/80 mb-14 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 text-center md:text-left md:border-r border-earth-200/80 md:pr-8">
            <div className="font-serif text-5xl sm:text-6xl font-bold text-pine-900 leading-none">
              {homestayInfo.stats.rating}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 my-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Exceptional Experience
            </p>
            <p className="text-xs text-stone-600 mt-1">
              Based on {homestayInfo.stats.reviewsCount}+ verified Airbnb & direct reviews
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs text-stone-500 font-medium block">Hospitality</span>
              <span className="font-serif text-2xl font-bold text-stone-900">5.0 / 5</span>
              <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-pine-700 h-full w-[100%]" />
              </div>
            </div>

            <div>
              <span className="text-xs text-stone-500 font-medium block">Cleanliness</span>
              <span className="font-serif text-2xl font-bold text-stone-900">4.98 / 5</span>
              <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-pine-700 h-full w-[99%]" />
              </div>
            </div>

            <div>
              <span className="text-xs text-stone-500 font-medium block">Scenic Location</span>
              <span className="font-serif text-2xl font-bold text-stone-900">4.97 / 5</span>
              <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-pine-700 h-full w-[98%]" />
              </div>
            </div>

            <div>
              <span className="text-xs text-stone-500 font-medium block">Home Cuisine</span>
              <span className="font-serif text-2xl font-bold text-stone-900">4.96 / 5</span>
              <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-pine-700 h-full w-[97%]" />
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-earth-50/70 p-7 rounded-3xl border border-earth-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Guest Profile */}
              <div className="pt-4 border-t border-earth-200/80 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-pine-200 shrink-0"
                />
                <div>
                  <h5 className="font-semibold text-stone-900 text-sm">{rev.author}</h5>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3 h-3 text-terracotta" />
                    <span>{rev.location}</span>
                    <span>•</span>
                    <span>{rev.stayDate}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
