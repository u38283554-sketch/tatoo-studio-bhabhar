import React, { useState } from 'react';
import { STUDIO_CONFIG, GalleryItem } from '../config';
import { X, ZoomIn, MessageSquare, Tag, Eye } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'gu';
}

export const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', labelEn: 'All Works', labelGu: 'બધા કામ' },
    { id: 'lettering', labelEn: 'Lettering & Script', labelGu: 'અક્ષરલેખન' },
    { id: 'realism', labelEn: 'Realism & Portraits', labelGu: 'રિયાલિઝમ પોટ્રેટ' },
    { id: 'minimal', labelEn: 'Minimal & Couple', labelGu: 'મિનિમલ & કપલ' },
    { id: 'memorial', labelEn: 'Devotional & Tributes', labelGu: 'ભક્તિમય & સ્મૃતિ' },
    { id: 'coverup', labelEn: 'Cover-Ups', labelGu: 'કવર-અપ' },
    { id: 'custom', labelEn: 'Custom Art', labelGu: 'કસ્ટમ આર્ટ' },
  ];

  const filteredItems = activeFilter === 'all'
    ? STUDIO_CONFIG.gallery
    : STUDIO_CONFIG.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Portfolio Showcase' : 'અમારું કામ'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Original Tattoo Works' : 'ઓરિજિનલ ટેટૂ ગેલેરી'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'Real ink crafted for our clients in Bhabhar and neighboring towns. Click any design to view full details.'
              : 'ભાભર અને આસપાસના ગ્રાહકો માટે બનાવેલ વાસ્તવિક ટેટૂ આર્ટ. વિગત જોવા માટે કોઈપણ ફોટો પર ક્લિક કરો.'}
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons with click handlers as per §1.A) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#b11226] text-white shadow-md shadow-red-950/40'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {language === 'en' ? tab.labelEn : tab.labelGu}
              </button>
            );
          })}
        </div>

        {/* Masonry / Bento Grid (12 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const title = language === 'en' ? item.titleEn : item.titleGu;
            const categoryLabel = language === 'en' ? item.categoryLabelEn : item.categoryLabelGu;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image slot with responsive aspect ratio and fallback */}
                <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.imageUrl}
                    alt={title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of external network interruption
                      (e.currentTarget as HTMLImageElement).src =
                        '/src/assets/images/tattoo_portrait_realism_1794472562330.jpg';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle darkening scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top-right zoom hint */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom title & unboxed category metadata */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold block mb-1">
                      {categoryLabel}
                    </span>
                    <h3 className="font-playfair text-base font-bold text-white leading-snug line-clamp-1">
                      {title}
                    </h3>
                    {item.sizeEstimate && (
                      <span className="text-[11px] text-zinc-400 font-mono mt-0.5 block">
                        {item.sizeEstimate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Replacement Hint / Notice */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          <p>
            {language === 'en'
              ? 'Note: All showcase images are easily customizable in src/config.ts. Real studio client photography.'
              : 'નોંધ: બધા ફોટોઝ src/config.ts માં સરળતાથી અપડેટ કરી શકાય છે.'}
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#121212] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image View */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-black">
                <img
                  src={selectedItem.imageUrl}
                  alt={language === 'en' ? selectedItem.titleEn : selectedItem.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Detail Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#b11226] uppercase mb-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>
                      {language === 'en'
                        ? selectedItem.categoryLabelEn
                        : selectedItem.categoryLabelGu}
                    </span>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                    {language === 'en' ? selectedItem.titleEn : selectedItem.titleGu}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {language === 'en'
                      ? selectedItem.descriptionEn
                      : selectedItem.descriptionGu}
                  </p>

                  {selectedItem.sizeEstimate && (
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6">
                      <span className="font-semibold text-zinc-300">
                        {language === 'en' ? 'Estimated Sizing: ' : 'અંદાજિત સાઇઝ: '}
                      </span>
                      <span className="font-mono text-white">{selectedItem.sizeEstimate}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <a
                    href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                      language === 'en'
                        ? `Hi Tattoo Studio Bhabhar! I would like to get a tattoo similar to this design: ${selectedItem.titleEn} (${selectedItem.categoryLabelEn}). Can we discuss pricing and sizing?`
                        : `નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મને ${selectedItem.titleGu} જેવો ટેટૂ કરાવવો છે. શું આપણે સાઇઝ અને કિંમત જાણી શકીએ?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#b11226] hover:bg-[#cf142f] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-red-950/40"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{language === 'en' ? 'Inquire on WhatsApp' : 'વોટ્સએપ પર પૂછપરછ કરો'}</span>
                  </a>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2 text-center text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Close Preview' : 'બંધ કરો'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
