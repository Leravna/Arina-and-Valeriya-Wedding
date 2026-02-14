
import React from 'react';
import { UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface TravelNoticeProps {
  lang: Language;
}

const TravelNotice: React.FC<TravelNoticeProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="watercolour-sheet py-16 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FEFBF4] border-2 border-[#A8503A]/20 p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <p className="label-text text-[#A8503A] mb-4">{t.travelerNote}</p>
              <h2 className="text-3xl md:text-5xl font-titles text-stone-800 mb-6 leading-tight">
                {t.cashNoticeTitle}
              </h2>
              
              <div className="w-12 h-px bg-stone-200 mb-8" />
              
              <p className="text-stone-600 font-titles text-xl md:text-2xl italic leading-relaxed">
                {t.cashNoticeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelNotice;
