import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { MessageSquare, Phone, Instagram, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'gu';
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onBookClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden border-b border-zinc-800">
      {/* Background Image with Dark Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_tattoo_studio_1794472559662.jpg"
          alt="Tattoo Studio Bhabhar interior with master artist tattooing intricate sleeve"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Subtle location & trust marker (unboxed quiet metadata) */}
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 mb-4 font-medium">
            <span className="flex items-center gap-1.5 text-red-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Bhabhar, Gujarat' : 'ભાભર, ગુજરાત'}</span>
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{language === 'en' ? 'Vav Road' : 'વાવ રોડ'}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{language === 'en' ? 'Custom Tattoo Parlor' : 'કસ્ટમ ટેટૂ પાર્લર'}</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white leading-[0.95] mb-5 uppercase">
            {language === 'en' ? (
              <>
                Your Story. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b11226] via-red-500 to-[#e5e5e5]">
                  Inked Forever.
                </span>
              </>
            ) : (
              <>
                તમારી વાર્તા. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b11226] via-red-500 to-[#e5e5e5]">
                  કાયમ માટે અંકિત.
                </span>
              </>
            )}
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
            {language === 'en' ? STUDIO_CONFIG.sublineEn : STUDIO_CONFIG.sublineGu}
          </p>

          {/* Dual CTAs: WhatsApp + Call Now */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                language === 'en'
                  ? 'Hello Tattoo Studio Bhabhar! I would like to inquire about getting a custom tattoo.'
                  : 'નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મારે એક કસ્ટમ ટેટૂ માટે માહિતી મેળવવી છે.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider text-white bg-[#b11226] hover:bg-[#cf142f] transition-all duration-200 red-glow shadow-lg whitespace-nowrap active:scale-98"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{language === 'en' ? 'Book on WhatsApp' : 'વોટ્સએપ પર બુક કરો'}</span>
            </a>

            <a
              href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 whitespace-nowrap active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#b11226]" />
              <span>{language === 'en' ? 'Call Now: +91 96380 12558' : 'કૉલ કરો: ૯૬૩૮૦ ૧૨૫૫૮'}</span>
            </a>

            <button
              onClick={onBookClick}
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer sm:ml-2 py-1 text-center"
            >
              {language === 'en' ? 'Or Fill Quick Form' : 'અથવા ફોર્મ ભરો →'}
            </button>
          </div>

          {/* Micro trust note */}
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {language === 'en'
                ? 'Fresh sealed needles opened in front of you · Hospital-grade sterilization'
                : 'તમારી નજર સામે ખોલાતી નવી સોય · હોસ્પિટલ-ગ્રેડ સેનિટાઇઝેશન'}
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges Full-Width Strip (placed below hero text as specified by layout math) */}
      <div className="relative z-10 w-full border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {STUDIO_CONFIG.trustBadges.map((badge, idx) => (
              <div key={idx} className={`flex flex-col items-center justify-center ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <span className="font-bebas text-3xl sm:text-4xl text-white tracking-wider tabular-nums">
                  {badge.value}
                </span>
                <span className="text-xs text-zinc-400 font-medium tracking-wide">
                  {language === 'en' ? badge.labelEn : badge.labelGu}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
