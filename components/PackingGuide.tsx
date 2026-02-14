
import React from 'react';
import { PACKING_CATEGORIES, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface PackingGuideProps {
  lang: Language;
}

const PackingGuide: React.FC<PackingGuideProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const categories = PACKING_CATEGORIES[lang];

  return (
    <section id="packing" className="relative overflow-hidden">
      <div className="watercolour-sheet py-24 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className={`${t.packingTip ? 'lg:w-1/2' : 'w-full max-w-4xl'} text-center lg:text-left`}>
              <h2 className="section-title mb-6">{t.packing}</h2>
              <p className="section-subtitle">
                {t.packingSub}
              </p>
            </div>
            {t.packingTip && (
              <div className="lg:w-1/2 flex items-center">
                <div className="p-8 bg-stone-50/80 border-l-4 border-stone-800 shadow-sm italic text-stone-600 font-titles text-xl">
                  {t.packingTip}
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {categories.map((cat, idx) => (
              <div key={idx} className="group">
                <div className="mb-6">
                  {/* Category label removed as per request */}
                  <h3 className="text-3xl font-titles text-stone-800 mb-4 group-hover:text-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <div className="h-px w-8 bg-stone-200" />
                </div>
                
                <ul className="space-y-3 mb-6">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 font-titles text-xl">
                      <span className="text-terracotta mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-stone-500 font-titles italic text-lg leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Integrated Cash Notice */}
          <div className="pt-16 border-t border-stone-100">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FEFBF4] border border-[#A8503A]/20 p-8 md:p-12 relative overflow-hidden shadow-sm rounded-sm">
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
        </div>
      </div>
    </section>
  );
};

export default PackingGuide;
