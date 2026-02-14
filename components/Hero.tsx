
import React from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';
import MusicPlayer from './MusicPlayer';

interface HeroProps {
  onDressCodeClick: () => void;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ onDressCodeClick, lang }) => {
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out transform scale-110"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/736x/72/de/20/72de208ca2e25c2feafc6e865eb19d60.jpg')`,
          filter: 'brightness(0.6)'
        }}
      />

      {/* Music Player in the bottom left of the Hero section */}
      <div className="absolute bottom-10 left-6 md:left-10 z-20">
        <MusicPlayer lang={lang} />
      </div>

      <div className="relative text-center text-white p-6 z-10 animate-fade-in">
        <div className="mb-6">
          <span className="uppercase tracking-[0.5em] text-sm md:text-base font-bold text-white inline-block drop-shadow-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t.heroSub}
          </span>
        </div>

        <h1 className="text-5xl md:text-[7rem] lg:text-[9rem] mb-10 font-titles tracking-tight leading-none drop-shadow-2xl whitespace-nowrap">
          {data.coupleNames}
        </h1>
        
        <div className="h-px w-32 bg-white/40 mx-auto mb-10" />
        
        <div className="mb-12">
          <p className="text-4xl md:text-7xl tracking-wide font-titles mb-3 drop-shadow-lg">
            {data.date}
          </p>
          <p className="text-xl md:text-2xl font-titles text-stone-300 tracking-[0.2em] uppercase drop-shadow-md">
            {t.heroLoc}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onDressCodeClick}
            className="px-10 py-4 bg-[#A8503A] border-2 border-[#A8503A] hover:bg-[#8f4431] hover:border-[#8f4431] transition-all duration-300 text-xs tracking-[0.3em] uppercase font-bold text-white shadow-xl transform hover:-translate-y-1"
          >
            {t.dressCodeBtn}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-16 bg-white/60" />
      </div>
    </section>
  );
};

export default Hero;
