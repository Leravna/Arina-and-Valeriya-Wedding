
import React from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface WelcomeMessageProps {
  lang: Language;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ lang }) => {
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="watercolour-sheet py-24 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-text text-terracotta mb-6">{t.noteFrom}</p>
          <h2 className="section-title mb-10">{t.welcome}</h2>
          <div className="h-px w-24 bg-stone-200 mx-auto mb-12" />
          
          <div className="relative">
            <div className="absolute -top-10 -left-4 text-9xl font-serif text-stone-100 opacity-50 pointer-events-none select-none">“</div>
            <p className="section-subtitle text-stone-700 max-w-3xl mx-auto relative z-10">
              {data.story}
            </p>
            <div className="absolute -bottom-20 -right-4 text-9xl font-serif text-stone-100 opacity-50 pointer-events-none select-none">”</div>
            
            {/* Small heart symbol at the bottom */}
            <div className="mt-12 flex justify-center items-center">
              <span className="text-terracotta text-2xl animate-pulse" style={{ opacity: 0.8 }}>♥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
