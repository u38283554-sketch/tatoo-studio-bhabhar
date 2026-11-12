import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../config';
import { Menu, X, Phone, MessageSquare, Globe } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'gu';
  setLanguage: (lang: 'en' | 'gu') => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelEn: 'About', labelGu: 'અમારા વિશે' },
    { href: '#services', labelEn: 'Services', labelGu: 'સેવાઓ' },
    { href: '#gallery', labelEn: 'Gallery', labelGu: 'ગેલેરી' },
    { href: '#process', labelEn: 'Process', labelGu: 'પદ્ધતિ' },
    { href: '#pricing', labelEn: 'Pricing', labelGu: 'કિંમત' },
    { href: '#contact', labelEn: 'Contact', labelGu: 'સંપર્ક' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gu' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark (One-line clean brand element) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#b11226] to-[#600914] flex items-center justify-center font-bebas text-xl text-white tracking-wider red-glow-subtle transition-transform duration-200 group-hover:scale-105">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl sm:text-2xl tracking-wider text-white whitespace-nowrap">
                TATTOO STUDIO BHABHAR
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 -mt-1 font-medium uppercase">
                {language === 'en' ? 'Bhabhar, Gujarat' : 'ભાભર, ગુજરાત'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-150 hover:text-white hover:text-red-400 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b11226] hover:after:w-full after:transition-all"
              >
                {language === 'en' ? link.labelEn : link.labelGu}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language toggle + Primary Book CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language between English and Gujarati"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-[#b11226]" />
              <span>{language === 'en' ? 'ગુજરાતી' : 'English'}</span>
            </button>

            {/* Primary Book CTA */}
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#b11226] hover:bg-[#cf142f] rounded-md transition-all duration-150 shadow-md shadow-red-950/40 whitespace-nowrap cursor-pointer active:scale-95"
            >
              {language === 'en' ? 'Book Now' : 'બુક કરો'}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-zinc-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white hover:text-red-400 py-1 transition-colors"
              >
                {language === 'en' ? link.labelEn : link.labelGu}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#b11226] hover:bg-[#cf142f] rounded-md transition-all shadow-md"
            >
              {language === 'en' ? 'Book Tattoo Session' : 'ટેટૂ સેશન બુક કરો'}
            </button>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
              <span>{STUDIO_CONFIG.contact.phone}</span>
              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
