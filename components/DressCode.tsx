
import React from 'react';
import { DRESS_CODE_PALETTE, FABRIC_PALETTE, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface DressCodeProps {
  onBack: () => void;
  lang: Language;
}

const DressCode: React.FC<DressCodeProps> = ({ onBack, lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const heroImageBg = "https://i.pinimg.com/736x/72/de/20/72de208ca2e25c2feafc6e865eb19d60.jpg";

  return (
    <div className="min-h-screen relative p-4 md:p-8 lg:p-12 overflow-hidden animate-fade-in">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url('${heroImageBg}')` }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 watercolour-sheet py-12 px-6 md:py-20 md:px-12 border border-white/20 max-w-screen-2xl mx-auto min-h-full">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={onBack}
            className="mb-12 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-[0.2em] text-xs font-titles"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.backToInv}
          </button>

          <div className="text-center mb-20">
            <p className="text-[#A8503A] uppercase tracking-[0.4em] text-sm mb-4 font-bold">{t.theme}</p>
            <h1 className="text-5xl md:text-8xl font-titles mb-6 text-stone-800">{t.slumberTitle}</h1>
            <div className="h-px w-32 bg-[#A8503A]/30 mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-stone-600 leading-relaxed font-titles text-xl italic">
              {t.slumberDesc}
            </p>
          </div>

          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-titles text-stone-800">{t.colorPalette}</h2>
              <div className="flex-1 h-px bg-stone-100" />
            </div>
            {/* Colors: 3 per row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {DRESS_CODE_PALETTE.map((color: any) => (
                <div key={color.name} className="space-y-4 group text-center">
                  <div 
                    className="aspect-square rounded-sm shadow-sm transition-transform group-hover:scale-105 border overflow-hidden mx-auto max-w-[280px] w-full"
                    style={{ 
                      backgroundColor: color.hex,
                      borderColor: color.borderColor || '#f5f5f4' 
                    }}
                  >
                    {color.image && (
                      <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div>
                    <p className="text-[12px] font-titles uppercase tracking-[0.2em] text-stone-600 font-bold">{color.name}</p>
                    <p className="text-[11px] text-stone-300 font-titles tracking-widest">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-titles text-stone-800">{t.textureTitle}</h2>
              <div className="flex-1 h-px bg-stone-100" />
            </div>
            {/* Textures: 3 per row on desktop, aspect-square */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {FABRIC_PALETTE.map((fabric) => (
                <div key={fabric.name} className="space-y-6 group">
                  <div className="aspect-square overflow-hidden rounded-sm border border-stone-100 shadow-lg bg-stone-50">
                    <img 
                      src={fabric.image} 
                      alt={fabric.name}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-titles text-3xl text-stone-800 group-hover:text-[#A8503A] transition-colors">{fabric.name}</h3>
                    <p className="text-lg text-stone-500 font-titles leading-snug italic">{fabric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center pt-16 border-t border-stone-50">
            <p className="text-stone-400 text-xs uppercase tracking-[0.3em] font-bold">
              {t.moodboardNote}
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#A8503A]" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
