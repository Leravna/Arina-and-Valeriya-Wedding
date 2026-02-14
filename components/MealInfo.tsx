
import React from 'react';
import { UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface MealInfoProps {
  lang: Language;
}

const MealInfo: React.FC<MealInfoProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];

  const mealCards = [
    {
      title: lang === 'en' ? "Mornings in the Chalet" : "Утро в шале",
      description: lang === 'en' 
        ? "Slow mornings are the best mornings. Each house features a fully equipped kitchen and a pantry stocked with local staples for you to enjoy a self-served breakfast at your own pace."
        : "Ленивое утро — самое лучшее. В каждом доме есть полностью оборудованная кухня с местными продуктами, чтобы вы могли насладиться завтраком в своем темпе.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      )
    },
    {
      title: lang === 'en' ? "Friday Welcome BBQ" : "Приветственный BBQ в пятницу",
      description: lang === 'en'
        ? "To kick off our weekend, we’ll grill a festive BBQ dinner together on Friday evening. Local meat, vegetables and cold drinks provided."
        : "В пятницу вечером мы вместе устроим праздничное BBQ. Местное мясо, овощи и холодные напитки включены.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: lang === 'en' ? "The Wedding Feast" : "Свадебный пир",
      description: lang === 'en'
        ? "The grand wedding feast on Saturday will be provided by us. A wide selection of Balkan salads, traditional apetisers and homecooked mains awaits, designed to celebrate our love for the culinary specialties of the region."
        : "Торжественный свадебный пир в субботу организуем мы. Вас ждет большой выбор балканских салатов, традиционных закусок и домашних основных блюд. Все то, что мы так любим в местной кухне.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 3v4a2 2 0 104 0V3M6 10v11M4 3v1M6 3v1M8 3v1M14 3v18c0-4 6-4 6-8V3h-6z" />
        </svg>
      )
    },
    {
      title: lang === 'en' ? "Saturday Park Lunch" : "Обед в парке в субботу",
      description: lang === 'en'
        ? "During our excursion to Durmitor Park on Saturday, we’ll pause for lunch at a local restaurant. Please note that this meal will be an individual cost for each guest."
        : "Во время прогулки в парк Дурмитор в субботу мы остановимся на обед в местном ресторане. Обратите внимание, что этот обед оплачивается каждым гостем самостоятельно.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="meals" className="relative overflow-hidden">
      <div className="watercolour-sheet py-24 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title mb-4">{t.mealsNote}</h2>
            <p className="section-subtitle">{t.mealsSub}</p>
            <div className="h-px w-16 bg-terracotta mx-auto mt-8 opacity-40"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {mealCards.map((meal, index) => (
              <div 
                key={index} 
                className="bg-[#FEFBF4] p-10 border border-[#A8503A]/30 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#A8503A]/10 text-terracotta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {meal.icon}
                </div>
                <h3 className="font-titles text-3xl text-stone-800 mb-4">{meal.title}</h3>
                <p className="text-stone-600 leading-relaxed font-titles text-2xl italic opacity-90">
                  {meal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealInfo;
