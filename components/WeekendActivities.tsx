
import React from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface WeekendActivitiesProps {
  lang: Language;
}

const WeekendActivities: React.FC<WeekendActivitiesProps> = ({ lang }) => {
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="watercolour-sheet py-24 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#A8503A] uppercase tracking-[0.4em] text-xs mb-4 font-bold">{t.beyond}</p>
            <h2 className="text-5xl md:text-7xl font-titles mb-4 text-stone-800">{t.weekend}</h2>
            <div className="h-px w-24 bg-[#A8503A] opacity-30 mx-auto mt-6" />
          </div>

          <div className="space-y-12">
            {/* Access localized activities */}
            {data.weekendActivities.map((activity, index) => {
              const isBigDay = activity.title === (lang === 'en' ? 'The Big Day' : 'День Свадьбы');
              
              return (
                <div 
                  key={index} 
                  className="bg-[#FEFBF4] p-8 md:p-12 border border-[#A8503A]/30 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Date/Day Column */}
                  <div className="md:w-1/4 flex flex-col items-center md:items-start shrink-0 relative z-10">
                    <p className="text-[#A8503A] font-titles text-3xl mb-1 uppercase tracking-widest">{activity.day}</p>
                    <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">{activity.date}</p>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 text-center md:text-left relative z-10">
                    <h3 className="text-4xl md:text-5xl font-titles mb-6 text-stone-800 group-hover:text-[#A8503A] transition-colors leading-tight">
                      {activity.title}
                    </h3>
                    
                    <p className="text-stone-600 text-xl md:text-2xl font-titles leading-relaxed mb-8 italic">
                      {activity.description}
                    </p>
                    
                    {isBigDay && (
                      <div className="mb-10">
                        <a 
                          href="https://whc.unesco.org/en/list/100/gallery/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-3 border border-[#A8503A] text-[#A8503A] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#A8503A] hover:text-white transition-all shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {t.visitPark}
                        </a>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-stone-100 inline-block w-full md:auto">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-1">{t.heroLoc}</p>
                      <p className="text-stone-700 font-titles text-xl">{activity.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendActivities;
