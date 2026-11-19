import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { homestayInfo } from '../data/homestayData';

export default function StickyMobileCTA({ onOpenBooking }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-earth-200 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${homestayInfo.contact.phone}`}
          className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center text-stone-800 border border-earth-200"
          aria-label="Call host"
        >
          <Phone className="w-4 h-4 text-terracotta" />
        </a>
        <a
          href={`https://wa.me/${homestayInfo.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 border border-emerald-200"
          aria-label="WhatsApp host"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
        </a>
      </div>

      <button
        onClick={() => onOpenBooking()}
        className="flex-1 bg-pine-800 hover:bg-pine-900 text-white py-2.5 px-4 rounded-full text-xs font-semibold shadow flex items-center justify-center gap-2"
      >
        <Calendar className="w-3.5 h-3.5 text-terracotta" />
        <span>Check Rates & Book</span>
      </button>
    </div>
  );
}
