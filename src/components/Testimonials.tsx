import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../config';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  language: 'en' | 'gu';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = STUDIO_CONFIG.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-24 bg-[#0d0d0d] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Client Trust' : 'ગ્રાહકોનો વિશ્વાસ'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Stories From Our Clients' : 'અમારા ગ્રાહકોના અનુભવ'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'Read genuine reviews from clients who trusted us with their permanent memories in Bhabhar.'
              : 'ભાભર અને આસપાસના વિસ્તારના ગ્રાહકોના સાચા અને પ્રામાણિક પ્રતિસાદ.'}
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 relative shadow-2xl">
            <Quote className="w-12 h-12 text-[#b11226]/30 mb-6" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-semibold text-zinc-400 font-mono">5.0 / 5.0</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-playfair text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8 min-h-[100px]">
              “{language === 'en' ? current.quoteEn : current.quoteGu}”
            </blockquote>

            {/* Author info */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">
                    {language === 'en' ? current.nameEn : current.nameGu}
                  </h4>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Verified Client' : 'વેરિફાઇડ ગ્રાહક'}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  <span>{language === 'en' ? current.locationEn : current.locationGu}</span>
                  <span aria-hidden="true" className="mx-1.5 text-zinc-600">·</span>
                  <span className="text-red-400 font-medium">
                    {language === 'en' ? current.tattooTypeEn : current.tattooTypeGu}
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Review"
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="px-3 text-xs font-mono text-zinc-400">
                  {currentIndex + 1} / {reviews.length}
                </div>
                <button
                  onClick={handleNext}
                  aria-label="Next Review"
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#b11226]' : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
