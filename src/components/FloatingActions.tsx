import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  language: 'en' | 'gu';
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ language, onBookClick }) => {
  return (
    <>
      {/* 1. Desktop & Tablet Floating WhatsApp Icon (Bottom-Right) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
            language === 'en'
              ? 'Hello Tattoo Studio Bhabhar! I would like to book a tattoo appointment.'
              : 'નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મારે ટેટૂ માટે સમય બુક કરવો છે.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Tattoo Studio Bhabhar on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75" />
          
          <MessageSquare className="w-7 h-7 fill-current" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
            {language === 'en' ? 'Chat on WhatsApp' : 'વોટ્સએપ પર વાત કરો'}
          </span>
        </a>
      </aside>

      {/* 2. Mobile Sticky Action Bar (strictly capped under 15% viewport height: ~52px) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 flex items-center gap-2">
        <a
          href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#b11226]" />
          <span>{language === 'en' ? 'Call Now' : 'કૉલ કરો'}</span>
        </a>

        <a
          href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
            language === 'en'
              ? 'Hello Tattoo Studio Bhabhar! I would like to inquire about a tattoo.'
              : 'નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મારે ટેટૂ માટે માહિતી જોઈએ છે.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#b11226] text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all shadow-md shadow-red-950/40"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookClick}
          aria-label="Book appointment"
          className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 active:scale-95"
        >
          <Calendar className="w-4 h-4 text-zinc-200" />
        </button>
      </nav>
    </>
  );
};
