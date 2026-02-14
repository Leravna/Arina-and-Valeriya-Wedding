
import React, { useState } from 'react';
import { PANTRY_ITEMS, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ChaletPantryProps {
  lang: Language;
}

const ChaletPantry: React.FC<ChaletPantryProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const pantryItems = PANTRY_ITEMS[lang];
  const [dietaryNote, setDietaryNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveNote = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section id="pantry" className="relative overflow-hidden">
      <div className="watercolour-sheet py-20 px-6 md:px-12 border border-stone-200 rounded-sm shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t.pantry}</h2>
            <p className="section-subtitle mt-6">{t.pantrySub}</p>
            <div className="h-px w-12 bg-terracotta mx-auto mt-6"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-[#fdfbf7] p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl border border-stone-100 transform rotate-1 md:rotate-0">
              {/* Notebook Margin Line */}
              <div className="absolute left-8 md:left-12 lg:left-16 top-0 bottom-0 w-[2px] bg-red-100/60" />
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
                {pantryItems.map((item, idx) => (
                  <li key={idx} className="group relative border-b border-stone-100 py-5 flex items-center gap-6 pl-8 md:pl-10">
                    <div className="w-6 h-6 border border-stone-200 flex items-center justify-center shrink-0 rounded-sm bg-white shadow-sm">
                      <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col">
                        <span className="text-stone-800 font-titles text-2xl tracking-tight leading-none group-hover:text-terracotta transition-colors">
                          {item.name}
                        </span>
                        {item.desc && (
                          <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden flex -mb-2">
                 {[...Array(30)].map((_, i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-[#fdfbf7] -mt-4 border border-stone-100 shrink-0" />
                 ))}
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-3xl mx-auto">
            <div className="relative group border border-[#A8503A]/30 p-8 md:p-12 rounded-sm bg-[#FEFBF4]/50 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#A8503A]/20">
                  <svg className="w-6 h-6 text-[#A8503A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-titles text-stone-800">{t.dietary}</h3>
                  <p className="label-text text-stone-500">{t.dietaryHelp}</p>
                </div>
              </div>
              
              <textarea 
                value={dietaryNote}
                onChange={(e) => setDietaryNote(e.target.value)}
                placeholder={t.dietaryPlaceholder}
                className="w-full bg-white border border-stone-100 p-8 text-2xl font-titles italic focus:outline-none focus:border-[#A8503A] transition-colors rounded-sm min-h-[150px] shadow-inner placeholder-stone-300"
              />
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleSaveNote}
                  className={`px-12 py-4 label-text transition-all border shadow-lg rounded-sm ${
                    isSaved 
                    ? 'bg-green-50 border-green-200 text-green-600' 
                    : 'bg-[#A8503A] border-[#A8503A] text-white hover:bg-stone-900 hover:border-stone-900'
                  }`}
                >
                  {isSaved ? t.saved : t.updatePantry}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaletPantry;
