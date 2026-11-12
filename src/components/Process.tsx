import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { Palette, Ruler, ShieldCheck, HeartPulse } from 'lucide-react';

interface ProcessProps {
  language: 'en' | 'gu';
}

export const Process: React.FC<ProcessProps> = ({ language }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Palette className="w-5 h-5 text-[#b11226]" />;
      case 1:
        return <Ruler className="w-5 h-5 text-[#b11226]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#b11226]" />;
      case 3:
      default:
        return <HeartPulse className="w-5 h-5 text-[#b11226]" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#0d0d0d] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Seamless Experience' : 'સરળ અને સુરક્ષિત પદ્ધતિ'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'The Tattoo Journey' : '૪ સરળ તબક્કા'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'From initial inspiration to fully healed ink, we ensure total transparency, meticulous comfort, and sterile safety.'
              : 'ડિઝાઇન વિચારથી લઈને સંપૂર્ણ રૂઝ આવવા સુધી, દરેક પગલે અમારી મદદ અને માર્ગદર્શન.'}
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STUDIO_CONFIG.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-bebas text-3xl text-zinc-600 font-bold tabular-nums">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {language === 'en' ? step.titleEn : step.titleGu}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {language === 'en' ? step.descriptionEn : step.descriptionGu}
                </p>
              </div>

              {/* Progress connection indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>{language === 'en' ? `Phase 0${idx + 1}` : `પગલું ૦${idx + 1}`}</span>
                <span className="text-zinc-600">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* First-Timer Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white mb-1">
              {language === 'en' ? 'First Time Getting a Tattoo?' : 'પહેલી વાર ટેટૂ કરાવો છો?'}
            </h4>
            <p className="text-xs text-zinc-400">
              {language === 'en'
                ? 'Don’t worry! We explain needle depth, pain perception, and test stencils first at zero pressure.'
                : 'ચિંતા ન કરશો! અમે ડિઝાઇન સ્ટેન્સિલ મૂકીને બતાવીશું અને બહુ હળવા હાથે ટેટૂ બનાવીશું.'}
            </p>
          </div>
          <a
            href={STUDIO_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors shrink-0"
          >
            {language === 'en' ? 'Ask Us Anything' : 'સવાલ પૂછો'}
          </a>
        </div>

      </div>
    </section>
  );
};
