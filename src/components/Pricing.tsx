import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { Check, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingProps {
  language: 'en' | 'gu';
  onSelectTier: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ language, onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Transparent Investment' : 'પારદર્શક ભાવપત્રક'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Pricing & Size Tiers' : 'ટેટૂ સાઇઝ અને કિંમત'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'Honest, upfront pricing with zero hidden charges. Every tattoo includes hospital-grade sterilization and aftercare support.'
              : 'કોઈપણ છૂપા ચાર્જ વગર ચોખ્ખા ભાવ. દરેક ટેટૂ સાથે ૧૦૦% હાઇજીન અને ફ્રી કન્સલ્ટેશન.'}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {STUDIO_CONFIG.pricingTiers.map((tier, idx) => {
            const name = language === 'en' ? tier.nameEn : tier.nameGu;
            const size = language === 'en' ? tier.sizeEn : tier.sizeGu;
            const desc = language === 'en' ? tier.descriptionEn : tier.descriptionGu;
            const features = language === 'en' ? tier.featuresEn : tier.featuresGu;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-zinc-900 border-2 border-[#b11226] shadow-xl shadow-red-950/20'
                    : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular label */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#b11226] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                    {language === 'en' ? 'Most Popular in Bhabhar' : 'સૌથી વધુ પસંદ કરાતું'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {size}
                    </span>
                    {tier.popular && <Sparkles className="w-4 h-4 text-[#b11226]" />}
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-xs text-zinc-400 font-medium">
                      {language === 'en' ? 'Starting at' : 'શરૂઆતી'}
                    </span>
                    <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wider tabular-nums">
                      {tier.startingAt}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {desc}
                  </p>

                  <div className="pt-6 border-t border-zinc-800 space-y-3 mb-8">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      {language === 'en' ? 'What’s Included:' : 'શું શામેલ છે:'}
                    </span>
                    {features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-[#b11226] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onSelectTier(name)}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      tier.popular
                        ? 'bg-[#b11226] hover:bg-[#cf142f] text-white shadow-md'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    {language === 'en' ? 'Book This Size' : 'આ સાઇઝ બુક કરો'}
                  </button>

                  <a
                    href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                      language === 'en'
                        ? `Hi Tattoo Studio Bhabhar! I would like to get a quote for the ${tier.nameEn} tier (${tier.sizeEn}, starting ${tier.startingAt}).`
                        : `નમસ્તે ટેટૂ સ્ટુડિયો ભાભર! મને ${tier.nameGu} (${tier.sizeGu}, ભાવ ${tier.startingAt}) માટે વધુ માહિતી જોઈએ છે.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 flex items-center justify-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                    <span>{language === 'en' ? 'Quick Inquiry on WhatsApp' : 'વોટ્સએપ પર પૂછો'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Note */}
        <div className="mt-12 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            {language === 'en'
              ? 'Final price is determined strictly by size and design complexity. No sudden surcharges.'
              : 'આખરી કિંમત ફક્ત સાઇઝ અને ડિઝાઇનની બારીકાઈ પર આધારિત છે. કોઈ વધારાનો ખર્ચ નહિ.'}
          </span>
        </div>

      </div>
    </section>
  );
};
