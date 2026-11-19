import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Compass, 
  Send, 
  Plane, 
  Train, 
  Car, 
  CloudSun,
  CheckCircle,
  ExternalLink,
  UserCheck
} from 'lucide-react';
import { homestayInfo } from '../data/homestayData';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp direct fallback
    const msg = encodeURIComponent(
      `🌴 *Inquiry for Abo Villa Homestay, Changanassery*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/${homestayInfo.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terracotta font-semibold tracking-wider text-xs sm:text-sm uppercase inline-flex items-center gap-1.5 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Find Your Way
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-pine-950 tracking-tight">
            Between Changanacherry & Thiruvalla
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Located 5 km between two railway stations in Kottayam District — a calm, green setting with quick access to Alleppey backwaters, MC Road, and major medical colleges.
          </p>
        </div>

        {/* 2-Column Grid: Directions & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Directions & Weather */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kerala Climate Snapshot Widget */}
            <div className="bg-gradient-to-r from-pine-900 to-pine-950 text-white p-6 rounded-3xl shadow-lg border border-pine-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
                  <CloudSun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block">Live Tropical Climate</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold">28°C</span>
                    <span className="text-xs text-stone-300">· Gentle Breeze & Coconut Palms</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block text-right text-xs text-stone-300">
                <span>District: Kottayam, Kerala</span>
                <span className="block text-emerald-300">Clean, Quiet Green Surroundings</span>
              </div>
            </div>

            {/* Address & Quick Map Card */}
            <div className="bg-earth-50 p-6 sm:p-7 rounded-3xl border border-earth-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-pine-100 text-pine-800 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-serif text-lg font-bold text-stone-900">Address & Location</h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pine-100 text-pine-800">
                      Changanassery, Kottayam
                    </span>
                  </div>
                  <p className="text-stone-700 text-sm font-medium">{homestayInfo.name}, {homestayInfo.location}</p>
                  
                  {/* Host Contact Badge */}
                  <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                    <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                      <UserCheck className="w-3.5 h-3.5 text-pine-700" />
                      Owner & Host: {homestayInfo.hosts.names}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                      <Phone className="w-3.5 h-3.5 text-terracotta" />
                      {homestayInfo.contact.phoneDisplay}
                    </span>
                  </div>
                  
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={homestayInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Open Location in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-earth-200 shadow-sm h-64 w-full relative">
              <iframe
                title="Abo Villa Location Map"
                src="https://maps.google.com/maps?q=Changanassery,%20Kottayam,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={homestayInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-pine-900 hover:text-terracotta flex items-center gap-1.5 border border-earth-200"
              >
                <span>View Exact Pin</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* How to Reach Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-earth-50 p-5 rounded-2xl border border-earth-200">
                <Train className="w-5 h-5 text-pine-700 mb-2" />
                <h5 className="font-semibold text-stone-900 text-sm mb-1">By Train</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Changanassery Station (CGY) 4.7 km · Tiruvalla Station (TRV) 5 km. Both well-connected to Kottayam & Ernakulam.
                </p>
              </div>

              <div className="bg-earth-50 p-5 rounded-2xl border border-earth-200">
                <Plane className="w-5 h-5 text-pine-700 mb-2" />
                <h5 className="font-semibold text-stone-900 text-sm mb-1">By Flight</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  104 km from Cochin International Airport (COK) — approx. 2 hours by cab/taxi via MC Road.
                </p>
              </div>

              <div className="bg-earth-50 p-5 rounded-2xl border border-earth-200">
                <Car className="w-5 h-5 text-pine-700 mb-2" />
                <h5 className="font-semibold text-stone-900 text-sm mb-1">By Road</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Direct connectivity along the Main Central (MC) Road with ample secure parking on premises.
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://wa.me/${homestayInfo.contact.whatsapp}?text=Hi%20Binoy%20Mon,%20I'd%20like%20to%20inquire%20about%20a%20stay%20at%20Abo%20Villa!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Binoy Mon</span>
              </a>

              <a
                href={`tel:${homestayInfo.contact.phone}`}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-medium shadow transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {homestayInfo.contact.phoneDisplay}</span>
              </a>

              <a
                href={homestayInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-earth-100 hover:bg-earth-200 text-stone-800 text-xs sm:text-sm font-medium transition-colors border border-earth-300"
              >
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Get Directions (GPS)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Send Inquiry Form */}
          <div className="lg:col-span-5 bg-earth-50/80 p-6 sm:p-8 rounded-3xl border border-earth-200/90 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send an Inquiry to Binoy Mon
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Have specific dates, wedding party inquiries, or group bookings in Changanassery/Kottayam? Send us a quick note and Binoy Mon will get back to you promptly.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold">Thank You! Inquiry Sent</h4>
                <p className="text-xs text-emerald-700">
                  Your message has been received and opened on WhatsApp for instant confirmation with Binoy Mon.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-emerald-800 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Thomas Mathew"
                    className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pine-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="thomas@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pine-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98470 00000"
                      className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pine-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                    Your Message / Dates / Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your expected check-in/out dates, number of guests, or if you need the full villa..."
                    className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pine-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-pine-800 hover:bg-pine-900 text-white rounded-xl font-medium text-sm shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-terracotta" />
                  <span>Send Inquiry to Binoy Mon</span>
                </button>
              </form>
            )}

            {/* Quick Host Details Box */}
            <div className="mt-6 pt-5 border-t border-earth-200 flex items-center justify-between text-xs text-stone-600">
              <div>
                <span className="block font-semibold text-stone-900">Owner & Host</span>
                <span>{homestayInfo.hosts.names}</span>
              </div>
              <div className="text-right">
                <span className="block font-semibold text-stone-900">Direct Phone</span>
                <a href={`tel:${homestayInfo.contact.phone}`} className="text-terracotta font-medium hover:underline">
                  {homestayInfo.contact.phoneDisplay}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
