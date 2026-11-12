import React from 'react';
import { STUDIO_CONFIG, ServiceItem } from '../config';
import {
  PenTool,
  HeartHandshake,
  Sparkles,
  Compass,
  Shield,
  RefreshCw,
  Flame,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'gu';
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#b11226]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#b11226]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#b11226]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#b11226]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#b11226]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#b11226]" />;
      case 'Flame':
      default:
        return <Flame className="w-5 h-5 text-[#b11226]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0d0d0d] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
              {language === 'en' ? 'Our Specialities' : 'અમારી મુખ્ય સેવાઓ'}
            </p>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
              {language === 'en' ? 'Tattoo Disciplines' : 'કસ્ટમ ટેટૂ કેટેગરીઝ'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              {language === 'en'
                ? 'From intricate regional script lettering to museum-level 3D realism portraits, every piece is custom-tailored to your skin.'
                : 'ગુજરાતી-હિન્દી કેલિગ્રાફીથી લઈને ૩ડી રિયાલિઝમ પોટ્રેટ સુધી, દરેક ટેટૂ તમારી પસંદગી મુજબ તૈયાર થાય છે.'}
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs text-zinc-400 font-medium">
              {language === 'en' ? 'Starting From' : 'શરૂઆતી કિંમત'}
            </span>
            <p className="font-bebas text-3xl sm:text-4xl text-white tracking-wider">
              {STUDIO_CONFIG.pricing.startingPriceText}
            </p>
          </div>
        </div>

        {/* Services Grid (7 items displayed in balanced responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_CONFIG.services.map((service) => {
            const title = language === 'en' ? service.titleEn : service.titleGu;
            const desc = language === 'en' ? service.descriptionEn : service.descriptionGu;
            const tag = language === 'en' ? service.tagEn : service.tagGu;

            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon and starting price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover:border-[#b11226]/50 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-zinc-300 font-mono tracking-tight bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Clean unboxed tag */}
                  <div className="text-[11px] font-medium text-zinc-400 tracking-wider uppercase mb-2">
                    {tag}
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {desc}
                  </p>
                </div>

                {/* Bottom Actions: Quick Book on WhatsApp & Select Form */}
                <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(title)}
                    className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Select & Book' : 'પસંદ કરો'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                      language === 'en'
                        ? `Hi Tattoo Studio Bhabhar! I am interested in booking: ${title}.`
                        : `નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મને ${title} ટેટૂ કરાવવામાં રસ છે.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
