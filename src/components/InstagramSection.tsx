import React from 'react';
import { STUDIO_CONFIG } from '../config';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

interface InstagramSectionProps {
  language: 'en' | 'gu';
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ language }) => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
              <Instagram className="w-4 h-4" />
              <span>{language === 'en' ? 'Social Community' : 'ઇન્સ્ટાગ્રામ પરિવાર'}</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
              {language === 'en' ? 'Follow Our Journey' : 'અમારું નવું કામ જુઓ'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              {language === 'en'
                ? `Join 2,600+ ink lovers following @tattoo_studio_bhabhar for daily flash designs, behind-the-scenes, and fresh ink reels.`
                : `દરરોજ નવી ડિઝાઇન, ટેટૂ રીલ્સ અને ઓફર્સ માટે @tattoo_studio_bhabhar ફોલો કરો.`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <a
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#b11226] to-[#cf142f] hover:from-[#cf142f] hover:to-[#e11d48] transition-all shadow-md shadow-red-950/40"
            >
              <Instagram className="w-4 h-4" />
              <span>{language === 'en' ? 'Follow @tattoo_studio_bhabhar' : 'ઇન્સ્ટા પર ફોલો કરો'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={STUDIO_CONFIG.contact.ownerInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <span>{language === 'en' ? 'Artist: @mr_chetan_5557' : 'આર્ટિસ્ટ: @mr_chetan_5557'}</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* 6 Image Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STUDIO_CONFIG.instagramShowcase.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/src/assets/images/tattoo_lettering_showcase_1794472561283.jpg';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay with Instagram icon and caption on hover */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-white/90" />
                </div>
                <p className="text-[11px] text-zinc-200 line-clamp-3 leading-snug font-medium">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-current" /> Like
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> View
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
