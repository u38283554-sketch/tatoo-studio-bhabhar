import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { Instagram, Phone, MessageSquare, MapPin, Heart, Shield } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'gu';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#b11226] flex items-center justify-center font-bebas text-lg text-white">
                TS
              </div>
              <span className="font-bebas text-2xl text-white tracking-wider">
                TATTOO STUDIO BHABHAR
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {language === 'en'
                ? 'Your premier custom tattoo and sterile body art destination on Vav Road, Bhabhar, Gujarat. Crafted with precision, sterilized with care.'
                : 'વાવ રોડ, ભાભર ખાતે પ્રીમિયમ કસ્ટમ ટેટૂ સ્ટુડિયો. ૧૦૦% નવી સોય, આધુનિક ઇન્ક અને અનુભવી આર્ટિસ્ટ્સ.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>{language === 'en' ? 'Certified Sterile Studio' : 'પ્રમાણિત હાઇજીનિક સ્ટુડિયો'}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              {language === 'en' ? 'Studio Navigation' : 'ઝડપી લિંક્સ'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {language === 'en' ? 'About & Artists' : 'અમારા વિશે અને આર્ટિસ્ટ્સ'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Tattoo Services' : 'ટેટૂ સેવાઓ'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Client Gallery' : 'ફોટો ગેલેરી'}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {language === 'en' ? '4-Step Process' : 'ટેટૂ પદ્ધતિ'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Pricing Tiers' : 'ભાવ અને સાઇઝ'}
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-white transition-colors text-red-400 font-semibold">
                  {language === 'en' ? 'Book Appointment' : 'ઓનલાઇન બુકિંગ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Studio Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              {language === 'en' ? 'Timings & Location' : 'સમય અને સરનામું'}
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-medium">
                {language === 'en' ? STUDIO_CONFIG.timings.en : STUDIO_CONFIG.timings.gu}
              </p>
              <p className="text-emerald-400">
                {language === 'en' ? 'Walk-ins Welcome Every Day' : 'દરરોજ વોક-ઇન ખુલ્લું'}
              </p>
              <div className="pt-2 text-zinc-400">
                <p>{STUDIO_CONFIG.location.addressEn}</p>
                <p className="text-zinc-500 mt-1">Landmarks: Near Labh Hospital & Bharat Tools</p>
              </div>
            </div>
          </div>

          {/* Col 4: Connect & Owner */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              {language === 'en' ? 'Connect Online' : 'ઓનલાઇન જોડાઓ'}
            </h4>
            <div className="space-y-3">
              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#b11226]" />
                <span>{STUDIO_CONFIG.contact.instagramHandle} (2.6K+)</span>
              </a>

              <a
                href={STUDIO_CONFIG.contact.ownerInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-zinc-500" />
                <span>Lead Artist: {STUDIO_CONFIG.contact.ownerInstagramHandle}</span>
              </a>

              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-green-500" />
                <span>WhatsApp: {STUDIO_CONFIG.contact.phone}</span>
              </a>

              <a
                href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
                className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>Call: {STUDIO_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-400">Hygiene Standard</a>
            <a href="#pricing" className="hover:text-zinc-400">Price Guide</a>
            <a href={STUDIO_CONFIG.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
