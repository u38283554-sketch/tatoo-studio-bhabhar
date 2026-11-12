/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STUDIO_CONFIG } from './config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { BookingForm } from './components/BookingForm';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'gu'>('en');
  const [prefilledBookingIdea, setPrefilledBookingIdea] = useState<string>('');

  const handleBookNowScroll = () => {
    const bookingElement = document.getElementById('book');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledBookingIdea(`Inquiry for: ${serviceTitle}`);
    handleBookNowScroll();
  };

  const handleSelectTier = (tierName: string) => {
    setPrefilledBookingIdea(`Pricing inquiry for: ${tierName}`);
    handleBookNowScroll();
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-[#e5e5e5] relative selection:bg-[#b11226] selection:text-white ${language === 'gu' ? 'font-gujarati' : ''}`}>
      
      {/* Subtle Dark Ink Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none ink-grain-overlay opacity-40 z-30" />

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onBookClick={handleBookNowScroll}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          language={language}
          onBookClick={handleBookNowScroll}
        />

        {/* 3. About & Sterile Hygiene Promise */}
        <About language={language} />

        {/* 4. Tattoo Services & Disciplines */}
        <Services
          language={language}
          onSelectService={handleSelectService}
        />

        {/* 5. Original Works Gallery & Lightbox */}
        <Gallery language={language} />

        {/* 6. 4-Step Tattoo Journey Process */}
        <Process language={language} />

        {/* 7. Transparent Pricing & Size Tiers */}
        <Pricing
          language={language}
          onSelectTier={handleSelectTier}
        />

        {/* 8. Client Testimonials Slider */}
        <Testimonials language={language} />

        {/* 9. Instagram Community & Work Showcase */}
        <InstagramSection language={language} />

        {/* 10. Direct WhatsApp Booking Form */}
        <BookingForm
          language={language}
          prefilledIdea={prefilledBookingIdea}
        />

        {/* 11. Contact, Location & Google Maps */}
        <ContactLocation language={language} />
      </main>

      {/* 12. Studio Footer */}
      <Footer language={language} />

      {/* Extra: Floating WhatsApp & Mobile Sticky Bar */}
      <FloatingActions
        language={language}
        onBookClick={handleBookNowScroll}
      />

    </div>
  );
}
