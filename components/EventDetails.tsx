
import React from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface EventDetailsProps {
  onDressCodeClick: () => void;
  lang: Language;
}

const EventDetails: React.FC<EventDetailsProps> = ({ onDressCodeClick, lang }) => {
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="watercolour-sheet py-24 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title mb-4">{t.celebration}</h2>
            <div className="h-px w-24 bg-terracotta mx-auto mt-6" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-12">
              {data.schedule.map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-12 group">
                  <div className="text-right w-20 md:w-24 shrink-0 label-text pt-2 opacity-60">
                    {item.time}
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-terracotta mt-2 shadow-sm transition-transform group-hover:scale-125" />
                    {index !== data.schedule.length - 1 && (
                      <div className="absolute top-6 left-[5px] w-[2px] h-full bg-terracotta opacity-10" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-titles text-3xl md:text-4xl text-stone-800 mb-1 group-hover:text-terracotta transition-colors leading-tight">
                      {item.event}
                    </p>
                    <p className="body-text !text-stone-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <p className="label-text mb-4">{t.attire}</p>
            <button 
              onClick={onDressCodeClick}
              className="text-stone-800 font-titles text-2xl border-b border-terracotta hover:text-terracotta transition-colors"
            >
              {t.viewDressCode}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
