import React, { useState, useEffect } from 'react';
import { 
  Trees, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  MessageCircle,
} from 'lucide-react';
import { homestayInfo } from '../data/homestayData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About',       href: '#about' },
    { name: 'Rooms',       href: '#rooms' },
    { name: 'Amenities',   href: '#amenities' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery',     href: '#gallery' },
    { name: 'Reviews',     href: '#reviews' },
    { name: 'Location',    href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 shadow-sm border-b border-earth-200/60'
            : 'bg-gradient-to-b from-stone-950/80 via-stone-900/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Brand Logo ── */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-pine-800 text-earth-100' : 'bg-white/90 text-pine-900 group-hover:bg-white'
              }`}>
                <Trees className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className={`block font-serif text-lg font-bold tracking-tight whitespace-nowrap transition-colors ${
                  isScrolled ? 'text-pine-950' : 'text-white'
                }`}>
                  {homestayInfo.name}
                </span>
                <span className={`block text-[9px] uppercase tracking-widest font-medium whitespace-nowrap transition-colors ${
                  isScrolled ? 'text-pine-600' : 'text-earth-200'
                }`}>
                  Changanassery · Kottayam
                </span>
              </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <nav className="hidden xl:flex items-center gap-5 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium whitespace-nowrap tracking-wide transition-colors hover:text-terracotta ${
                    isScrolled ? 'text-stone-700' : 'text-stone-100/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ── Action Buttons ── */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${homestayInfo.contact.whatsapp}?text=Hi%20Binoy%20Mon,%20I'd%20like%20to%20inquire%20about%20a%20stay%20at%20Abo%20Villa!`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-pine-800 hover:bg-pine-100'
                    : 'text-white bg-white/10 hover:bg-white/20'
                }`}
                title="WhatsApp Binoy Mon"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-500" style={{ width: '18px', height: '18px' }} />
              </a>

              {/* Phone */}
              <a
                href={`tel:${homestayInfo.contact.phone}`}
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  isScrolled
                    ? 'text-stone-700 hover:bg-stone-100'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-3 h-3 text-terracotta shrink-0" />
                <span>{homestayInfo.contact.phoneDisplay}</span>
              </a>

              {/* Book CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-1.5 bg-pine-800 hover:bg-pine-900 text-earth-50 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>Book a Stay</span>
              </button>
            </div>

            {/* ── Tablet: show just icons + book ── */}
            <div className="hidden sm:flex lg:hidden items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/${homestayInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-pine-100' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <MessageCircle style={{ width: '18px', height: '18px' }} className="text-emerald-500" />
              </a>
              <a
                href={`tel:${homestayInfo.contact.phone}`}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-stone-100' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Phone style={{ width: '16px', height: '16px' }} className="text-terracotta" />
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="bg-pine-800 text-white text-xs px-3.5 py-2 rounded-full font-medium shadow whitespace-nowrap"
              >
                Book a Stay
              </button>
            </div>

            {/* ── Mobile hamburger ── */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="bg-pine-800 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-stone-800' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-earth-50/98 backdrop-blur-md border-b border-earth-200 px-6 py-5 text-stone-800 shadow-xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-800 hover:text-pine-800 py-1 border-b border-earth-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                  className="w-full flex items-center justify-center gap-2 bg-pine-800 text-white py-3 rounded-xl font-medium shadow"
                >
                  <Calendar className="w-4 h-4 text-terracotta" />
                  <span>Check Availability & Book</span>
                </button>
                <a
                  href={`https://wa.me/${homestayInfo.contact.whatsapp}`}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 py-2.5 rounded-xl font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${homestayInfo.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-stone-100 text-stone-800 border border-stone-200 py-2.5 rounded-xl font-medium"
                >
                  <Phone className="w-4 h-4 text-terracotta" />
                  <span>{homestayInfo.contact.phoneDisplay}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
