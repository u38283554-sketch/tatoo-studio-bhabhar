import React from 'react';
import { STUDIO_CONFIG, Artist } from '../config';
import { ShieldCheck, Sparkles, Instagram, Droplets, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'gu';
}

export const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Craftsmanship & Integrity' : 'વિશ્વસનીયતા અને કળા'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Where Art Meets Skin' : 'જ્યાં કળા બને છે કાયમી સ્મૃતિ'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-normal leading-relaxed">
            {language === 'en'
              ? 'Tattoo Studio Bhabhar was founded with a singular conviction: every individual deserves custom body art that is aesthetically timeless, anatomically harmonious, and medically safe.'
              : 'ટેટૂ સ્ટુડિયો ભાભરની સ્થાપના એક જ સંકલ્પ સાથે થઈ છે: દરેક વ્યક્તિને સુરક્ષિત, હાઇજીનિક અને આજીવન યાદગાર રહે તેવું ઉચ્ચ ગુણવત્તાવાળું ટેટૂ મળે.'}
          </p>
        </div>

        {/* 2-Column Split: Studio Philosophy & Hygiene Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
          
          {/* Column 1: Studio Story & Heritage */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-4">
                <Sparkles className="w-4 h-4 text-[#b11226]" />
                <span>{language === 'en' ? 'Our Studio Philosophy' : 'અમારી કાર્યપદ્ધતિ'}</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
                {language === 'en'
                  ? 'More than ink on skin — it is your legacy in lines.'
                  : 'માત્ર શાહી નથી — આ તમારા જીવનની અનમોલ ઓળખ છે.'}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-3 mb-6">
                {language === 'en' ? (
                  <>
                    Located centrally on Vav Road in Bhabhar, near Labh Multi Hospital and Bharat Tools, we cater to ink enthusiasts across North Gujarat. Whether you seek your very first name script, a profound tribute to your parents, an elaborate portrait of Mahadev, or an intricate custom sleeve, we take time to hand-draw and refine every detail.
                  </>
                ) : (
                  <>
                    ભાભરમાં વાવ રોડ પર લાભ મલ્ટી હોસ્પિટલ અને ભારત ટૂલ્સ નજીક આવેલ અમારો સ્ટુડિયો સમગ્ર બનાસકાંઠામાં આધુનિક ટેટૂિંગ માટે જાણીતો છે. તમારા માતા-પિતાનું સ્મૃતિ ટેટૂ હોય, ભગવાન મહાદેવની રિયાલિસ્ટિક આર્ટ હોય કે નાજુક અક્ષરલેખન — અમે પૂરી એકાગ્રતાથી કામ કરીએ છીએ.
                  </>
                )}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">
                {language === 'en' ? 'Open Mon–Sun: 11 AM – 9 PM' : 'સોમવાર થી રવિવાર: સવારે ૧૧ થી રાત્રે ૯'}
              </span>
              <span className="text-[#b11226] font-semibold">
                {language === 'en' ? 'Walk-ins & Appointments' : 'વોક-ઇન & એપોઇન્ટમેન્ટ'}
              </span>
            </div>
          </div>

          {/* Column 2: 4 Pillars of Hygiene & Safety */}
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? '100% Sterile Medical Hygiene' : '૧૦૦% સ્ટેરિલાઇઝ્ડ અને સુરક્ષિત'}</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-6">
                {language === 'en' ? 'Your health & safety are non-negotiable.' : 'તમારી સુરક્ષા અને સ્વચ્છતા અમારો પ્રથમ ધર્મ છે.'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STUDIO_CONFIG.hygieneCommitments.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/60">
                    <div className="flex items-start gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#b11226] shrink-0 mt-0.5" />
                      <h4 className="text-sm font-semibold text-white">
                        {language === 'en' ? item.titleEn : item.titleGu}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                      {language === 'en' ? item.descEn : item.descGu}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                {language === 'en'
                  ? 'Sterile single-use disposable tubes, grips, and ink caps for every single customer.'
                  : 'દરેક ગ્રાહક માટે અલગ અને નવી ડિસ્પોઝેબલ કિટનો જ ઉપયોગ.'}
              </span>
            </div>
          </div>
        </div>

        {/* Master Artists Roster */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              {language === 'en' ? 'Meet The Craftsmen' : 'અમારા ટેટૂ આર્ટિસ્ટ્સ'}
            </p>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mt-1">
              {language === 'en' ? 'The Resident Artists' : 'અનુભવી ટેટૂ કલાકારો'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {STUDIO_CONFIG.artists.map((artist) => (
              <div
                key={artist.id}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <div className="relative w-32 h-32 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden border border-zinc-700">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-between mb-1">
                    <h4 className="font-playfair text-xl font-bold text-white">
                      {artist.name}
                    </h4>
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow ${artist.name} on Instagram`}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Instagram className="w-4 h-4 hover:text-[#b11226]" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#b11226] mb-2">
                    {language === 'en' ? artist.roleEn : artist.roleGu}
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                    {language === 'en' ? artist.specialityEn : artist.specialityGu}
                  </p>
                  <div className="text-[11px] text-zinc-500 font-medium">
                    <span>{language === 'en' ? artist.experienceEn : artist.experienceGu}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
