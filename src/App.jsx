import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});

  const handleOpenBooking = (data = {}) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingInitialData({});
  };

  return (
    <div className="min-h-screen bg-earth-50 text-stone-800 flex flex-col font-sans selection:bg-pine-200 selection:text-pine-900">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero with Mountain Background & Quick Booking Bar */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Story, Philosophy & Host Introduction */}
        <AboutSection />

        {/* Accommodations, Filter & Room Modals */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* Thoughtful Amenities & Remote Work Haven */}
        <AmenitiesSection />

        {/* Curated Local Mountain Experiences */}
        <ExperiencesSection onOpenBooking={handleOpenBooking} />

        {/* Photo Gallery & Interactive Lightbox */}
        <GallerySection />

        {/* Verified Reviews & Ratings */}
        <ReviewsSection />

        {/* Practical FAQs */}
        <FAQSection />

        {/* Location, How To Reach & Send Inquiry */}
        <LocationContact />
      </main>

      {/* Rich Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Bottom Sticky Action Bar for Mobile Viewers */}
      <StickyMobileCTA onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & WhatsApp Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />
    </div>
  );
}
