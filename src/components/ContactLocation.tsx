import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../config';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Instagram,
  ExternalLink,
  ChevronDown,
  Navigation,
  Building,
} from 'lucide-react';

interface ContactLocationProps {
  language: 'en' | 'gu';
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ language }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Visit In Person' : 'અમારો સંપર્ક કરો'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Studio & Location' : 'સ્ટુડિયો એડ્રેસ & વિગત'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'Conveniently located on Vav Road in Bhabhar, Banaskantha. Ample street parking available.'
              : 'વાવ રોડ, ભાભર ખાતે લાભ મલ્ટી હોસ્પિટલ અને ભારત ટૂલ્સ નજીક સરળતાથી પહોંચી શકાય તેવું લોકેશન.'}
          </p>
        </div>

        {/* 2-Column Split: Contact Details & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Details (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address & Landmark */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#b11226]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    {language === 'en' ? 'Studio Address' : 'સરનામું'}
                  </h3>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {language === 'en' ? STUDIO_CONFIG.location.addressEn : STUDIO_CONFIG.location.addressGu}
                  </p>
                  <div className="mt-2 text-xs text-red-400 font-medium flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>
                      {language === 'en'
                        ? STUDIO_CONFIG.location.landmarksEn
                        : STUDIO_CONFIG.location.landmarksGu}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-800/80">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#b11226]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    {language === 'en' ? 'Operating Hours' : 'સમય'}
                  </h3>
                  <p className="text-sm font-semibold text-white">
                    {language === 'en' ? STUDIO_CONFIG.timings.en : STUDIO_CONFIG.timings.gu}
                  </p>
                  <span className="text-xs text-emerald-400 font-medium">
                    {language === 'en' ? STUDIO_CONFIG.timings.daysEn : STUDIO_CONFIG.timings.daysGu}
                  </span>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-800/80">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#b11226]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    {language === 'en' ? 'Direct Hotline' : 'ફોન નંબર'}
                  </h3>
                  <a
                    href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
                    className="text-base font-bold text-white hover:text-red-400 transition-colors font-mono"
                  >
                    {STUDIO_CONFIG.contact.phone}
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {language === 'en' ? 'Available for calls & WhatsApp 7 days a week' : 'સાતેય દિવસ કૉલ અને વોટ્સએપ ઉપલબ્ધ'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
              <a
                href={STUDIO_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-zinc-700"
              >
                <Navigation className="w-4 h-4 text-[#b11226]" />
                <span>{language === 'en' ? 'Open in Maps' : 'મેપ્સમાં ખોલો'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-[#b11226] hover:bg-[#cf142f] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed / Preview Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col justify-between min-h-[380px]">
            {/* Real Google Map Embed Container */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-zinc-900">
              <iframe
                title="Tattoo Studio Bhabhar Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14552.179357424687!2d71.597723!3d24.103233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b058c4d293f0b%3A0x6bcfad449ff08ca3!2sBhabhar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay location pin card for immediate clarity */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-zinc-700 shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b11226] animate-pulse" />
                  <span className="font-bebas text-sm text-white tracking-wider">
                    TATTOO STUDIO BHABHAR
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-1">
                  Vav Road, near Labh Multi Hospital & Bharat Tools
                </p>
                <a
                  href={STUDIO_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[10px] text-red-400 font-bold uppercase hover:underline"
                >
                  <span>{language === 'en' ? 'Get Driving Directions →' : 'દિશા-નિર્દેશ મેળવો →'}</span>
                </a>
              </div>
            </div>

            {/* Bottom Bar on Map card */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Bhabhar, Banaskantha District, Gujarat 385320</span>
              <a
                href={STUDIO_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 font-semibold flex items-center gap-1"
              >
                <span>Google Maps link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* FAQs Accordion for First-Time Clients */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-zinc-800">
          <div className="text-center mb-8">
            <h3 className="font-bebas text-3xl text-white tracking-wider">
              {language === 'en' ? 'Frequently Asked Questions' : 'સામાન્ય પ્રશ્નો'}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {language === 'en'
                ? 'Everything you need to know before stepping into our studio.'
                : 'સ્ટુડિયો આવતા પહેલાં તમારા મનમાં ઉદ્ભવતા સવાલોના જવાબો.'}
            </p>
          </div>

          <div className="space-y-3">
            {STUDIO_CONFIG.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-red-400 transition-colors cursor-pointer"
                >
                  <span>{language === 'en' ? faq.questionEn : faq.questionGu}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 bg-zinc-950/40">
                    {language === 'en' ? faq.answerEn : faq.answerGu}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
