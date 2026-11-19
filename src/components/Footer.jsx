import React, { useState } from 'react';
import { 
  Trees, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Send, 
  Instagram, 
  Facebook, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { homestayInfo, roomsData } from '../data/homestayData';

export default function Footer({ onOpenBooking }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-pine-950 text-earth-100 pt-16 pb-24 sm:pb-16 border-t border-pine-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-pine-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-100 border border-white/15">
                <Trees className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  {homestayInfo.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-pine-400 font-medium">
                  {homestayInfo.subname}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              A serene villa homestay in Changanassery, Kottayam committed to heartfelt Kerala hospitality, authentic home-cooked flavors, and peaceful living.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Homestay</a></li>
              <li><a href="#rooms" className="hover:text-emerald-400 transition-colors">Cottages & Suites</a></li>
              <li><a href="#amenities" className="hover:text-emerald-400 transition-colors">Amenities & Wi-Fi</a></li>
              <li><a href="#experiences" className="hover:text-emerald-400 transition-colors">Curated Treks</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Accommodations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              {roomsData.map((room) => (
                <li key={room.id}>
                  <button
                    onClick={() => onOpenBooking({ room })}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {room.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="text-terracotta text-xs font-semibold hover:underline"
                >
                  Check All Availability →
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Special Kerala Offers */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Kerala Stay Updates
            </h4>
            <p className="text-xs text-stone-300">
              Receive seasonal festive packages, backwater tour alerts, and exclusive direct booking invitations.
            </p>

            {subscribed ? (
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to Abo Villa updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-pine-700 bg-pine-900/60 focus-within:border-emerald-500">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent px-3 py-2 text-xs text-white placeholder-stone-400 focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="bg-terracotta hover:bg-terracotta-hover text-white px-3 flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-stone-400 block">No spam. Only seasonal getaway reflections.</span>
              </form>
            )}

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-terracotta" />
                <span>{homestayInfo.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-terracotta" />
                <span>{homestayInfo.contact.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {homestayInfo.name}. All rights reserved. Crafted with care for slow living.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-200 transition-colors">House Guidelines</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-200 transition-colors">Cancellation Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
