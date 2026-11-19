import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Sparkles, 
  Check, 
  Flame, 
  Utensils, 
  Compass, 
  Car, 
  MessageCircle, 
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { roomsData, homestayInfo } from '../data/homestayData';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  if (!isOpen) return null;

  // Selected Room
  const defaultRoom = initialData.room || roomsData[0];
  const [selectedRoomId, setSelectedRoomId] = useState(defaultRoom.id);
  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];

  // Dates
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const tomorrowStr = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialData.checkIn || todayStr);
  const [checkOut, setCheckOut] = useState(initialData.checkOut || tomorrowStr);

  // Guests
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [hasPets, setHasPets] = useState(false);

  // Add-ons
  const [addons, setAddons] = useState({
    bonfire: false,
    dinner: false,
    trek: false,
    pickup: false
  });

  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Booking Complete state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();

  // Price calculations
  const roomBaseTotal = selectedRoom.price * nights;
  
  let addonTotal = 0;
  if (addons.dinner) addonTotal += 450 * adults * nights;
  if (addons.bonfire) addonTotal += 1500;
  if (addons.trek) addonTotal += 600;
  if (addons.pickup) addonTotal += 1200;

  const subtotal = roomBaseTotal + addonTotal;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + taxes;

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `🌴 *Booking Inquiry for Abo Villa Homestay, Changanassery*\n\n` +
      `*Host:* Binoy Mon (${homestayInfo.contact.phoneDisplay})\n` +
      `*Room / Villa:* ${selectedRoom.title}\n` +
      `*Dates:* ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `*Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''}${hasPets ? ', with Pet' : ''}\n` +
      `*Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `*Guest Name:* ${guestName || 'Guest'}\n` +
      `*Phone:* ${guestPhone || 'Provided in chat'}\n` +
      `*Notes:* ${specialRequests || 'None'}\n\n` +
      `Please let me know if these dates are available at Abo Villa!`
    );
    window.open(`https://wa.me/${homestayInfo.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    const ref = 'ABO-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-earth-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="sticky top-0 z-20 bg-pine-900 text-white px-6 py-4 rounded-t-3xl flex items-center justify-between border-b border-pine-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-terracotta" />
            <h3 className="font-serif text-lg sm:text-xl font-bold">
              Reserve Your Stay at Abo Villa
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 block mb-1">
                Inquiry Received Successfully
              </span>
              <h4 className="font-serif text-3xl font-bold text-stone-900">
                You're One Step Closer to Abo Villa!
              </h4>
              <p className="text-stone-600 text-sm max-w-lg mx-auto mt-2">
                Booking Reference: <strong className="text-pine-900 font-mono text-base">{bookingRef}</strong>
              </p>
            </div>

            {/* Stay Summary Card */}
            <div className="bg-earth-50 rounded-2xl p-6 text-left max-w-md mx-auto border border-earth-200 space-y-3 text-sm">
              <div className="flex justify-between border-b border-earth-200 pb-2">
                <span className="text-stone-500">Accommodation:</span>
                <span className="font-semibold text-stone-900">{selectedRoom.title}</span>
              </div>
              <div className="flex justify-between border-b border-earth-200 pb-2">
                <span className="text-stone-500">Dates:</span>
                <span className="font-semibold text-stone-900">{checkIn} to {checkOut} ({nights} nights)</span>
              </div>
              <div className="flex justify-between border-b border-earth-200 pb-2">
                <span className="text-stone-500">Guests:</span>
                <span className="font-semibold text-stone-900">{adults} Adults {children > 0 ? `, ${children} Children` : ''}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-1 text-pine-900">
                <span>Estimated Total:</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Our host Binoy Mon will reach out to you at <strong>{guestPhone || guestEmail}</strong> promptly to confirm your dates and share easy check-in directions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Confirmation on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Form */
          <form onSubmit={handleDirectSubmit} className="p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Room Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                1. Select Cottage or Suite
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roomsData.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex items-center gap-3.5 ${
                        isSelected 
                          ? 'border-pine-800 bg-pine-50/70 shadow-sm' 
                          : 'border-earth-200 bg-white hover:border-earth-300'
                      }`}
                    >
                      <img
                        src={room.images[0]}
                        alt={room.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-bold text-stone-900 text-sm truncate">
                            {room.title}
                          </h4>
                        </div>
                        <p className="text-xs text-stone-500">{room.type} · Up to {room.maxGuests} Guests</p>
                        <p className="text-xs font-semibold text-pine-900 mt-1">
                          ₹{room.price.toLocaleString('en-IN')} <span className="font-normal text-stone-500">/ night</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dates & Guests */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                2. Stay Dates & Party Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {/* Check-in */}
                <div className="bg-earth-50 p-3 rounded-2xl border border-earth-200">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Check-in</span>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-stone-800 mt-1 focus:outline-none cursor-pointer"
                  />
                </div>

                {/* Check-out */}
                <div className="bg-earth-50 p-3 rounded-2xl border border-earth-200">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Check-out ({nights} nights)</span>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-stone-800 mt-1 focus:outline-none cursor-pointer"
                  />
                </div>

                {/* Adults */}
                <div className="bg-earth-50 p-3 rounded-2xl border border-earth-200">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Adults (12+ yrs)</span>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-transparent text-sm font-semibold text-stone-800 mt-1 focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </select>
                </div>

                {/* Children & Pets */}
                <div className="bg-earth-50 p-3 rounded-2xl border border-earth-200 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-500">Traveling with pet?</span>
                    <span className="text-xs text-stone-600 font-medium">Pet-Friendly Stay</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasPets}
                    onChange={(e) => setHasPets(e.target.checked)}
                    className="w-5 h-5 accent-pine-800 cursor-pointer rounded"
                  />
                </div>

              </div>
            </div>

            {/* Step 3: Curated Add-on Experiences */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                3. Curated Add-on Experiences (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Dinner / Kerala Meal */}
                <label className={`cursor-pointer p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-colors ${
                  addons.dinner ? 'border-pine-700 bg-pine-50/50' : 'border-earth-200 bg-white hover:border-earth-300'
                }`}>
                  <input
                    type="checkbox"
                    checked={addons.dinner}
                    onChange={() => toggleAddon('dinner')}
                    className="w-4 h-4 mt-0.5 accent-pine-800"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-sm">
                      <Utensils className="w-4 h-4 text-terracotta" />
                      <span>Authentic Kerala Dinner</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">Central Kerala home-cooked dinner (+₹450/person/night)</p>
                  </div>
                </label>

                {/* Backwater Shikkara Tour */}
                <label className={`cursor-pointer p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-colors ${
                  addons.bonfire ? 'border-pine-700 bg-pine-50/50' : 'border-earth-200 bg-white hover:border-earth-300'
                }`}>
                  <input
                    type="checkbox"
                    checked={addons.bonfire}
                    onChange={() => toggleAddon('bonfire')}
                    className="w-4 h-4 mt-0.5 accent-pine-800"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-sm">
                      <Compass className="w-4 h-4 text-terracotta" />
                      <span>Alappuzha Shikkara Boat Cruise</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">2-hour private canal boat cruise (+₹1,500)</p>
                  </div>
                </label>

                {/* Heritage Walk */}
                <label className={`cursor-pointer p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-colors ${
                  addons.trek ? 'border-pine-700 bg-pine-50/50' : 'border-earth-200 bg-white hover:border-earth-300'
                }`}>
                  <input
                    type="checkbox"
                    checked={addons.trek}
                    onChange={() => toggleAddon('trek')}
                    className="w-4 h-4 mt-0.5 accent-pine-800"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-sm">
                      <Trees className="w-4 h-4 text-terracotta" />
                      <span>Heritage & Temple Walk</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">Thrikkodithanam & local heritage tour (+₹600)</p>
                  </div>
                </label>

                {/* Pickup */}
                <label className={`cursor-pointer p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-colors ${
                  addons.pickup ? 'border-pine-700 bg-pine-50/50' : 'border-earth-200 bg-white hover:border-earth-300'
                }`}>
                  <input
                    type="checkbox"
                    checked={addons.pickup}
                    onChange={() => toggleAddon('pickup')}
                    className="w-4 h-4 mt-0.5 accent-pine-800"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-sm">
                      <Car className="w-4 h-4 text-terracotta" />
                      <span>Railway / Airport Pickup</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">Changanassery station or Cochin airport transfer (+₹1,200)</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                4. Primary Guest Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2 rounded-xl border border-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-pine-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98472 00000"
                    className="w-full px-3.5 py-2 rounded-xl border border-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-pine-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-pine-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Special requests or dietary needs (Optional)</label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Vegetarian only, anniversary cake, late evening arrival..."
                  className="w-full px-3.5 py-2 rounded-xl border border-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-pine-700"
                />
              </div>
            </div>

            {/* Price Breakdown Card */}
            <div className="bg-earth-50 rounded-2xl p-5 border border-earth-200 space-y-2">
              <div className="flex justify-between text-xs text-stone-600">
                <span>{selectedRoom.title} (₹{selectedRoom.price.toLocaleString('en-IN')} × {nights} night{nights > 1 ? 's' : ''})</span>
                <span className="font-semibold text-stone-800">₹{roomBaseTotal.toLocaleString('en-IN')}</span>
              </div>
              {addonTotal > 0 && (
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Selected Add-on Experiences & Meals</span>
                  <span className="font-semibold text-stone-800">₹{addonTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-stone-600">
                <span>GST & Sustainable Valley Tourism Cess (5%)</span>
                <span className="font-semibold text-stone-800">₹{taxes.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-earth-200 pt-2 flex justify-between items-baseline font-bold">
                <span className="text-stone-900 text-sm">Estimated Total Amount:</span>
                <span className="text-xl sm:text-2xl font-serif text-pine-900">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                * To confirm, a 50% deposit is payable after host confirmation. Free cancellation up to 14 days prior.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Instantly on WhatsApp</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-700 font-medium text-xs sm:text-sm hover:bg-stone-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-7 py-3 rounded-full bg-pine-800 hover:bg-pine-900 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Submit Inquiry</span>
                  <ChevronRight className="w-4 h-4 text-terracotta" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
