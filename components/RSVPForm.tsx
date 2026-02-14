
import React, { useState } from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface RSVPFormProps {
  lang: Language;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const renderContent = () => {
    if (submitted) {
      return (
        <div className="text-center py-24">
          <div className="text-4xl mb-8">✨</div>
          <h2 className="section-title mb-6">{t.thankYou}</h2>
          <p className="body-text max-w-md mx-auto">{t.received}</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-12 label-text hover:text-stone-900 border-b border-stone-200 hover:border-stone-900 transition-all pb-1"
          >
            {t.submitAnother}
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-xl mx-auto py-12">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t.rsvp}</h2>
          <p className="section-subtitle">{t.respondBy} {data.rsvpDeadline}</p>
          <div className="h-px w-20 bg-stone-100 mx-auto mt-8 mb-8" />
          <div className="bg-[#A8503A]/5 border border-[#A8503A]/20 p-6 rounded-sm">
            <p className="font-titles text-xl md:text-2xl text-stone-800 italic leading-relaxed">
              {t.rsvpNote}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block label-text mb-4">{t.yourName}</label>
            <input 
              required
              type="text" 
              className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent font-titles text-2xl italic text-stone-800"
              placeholder={t.yourName}
            />
          </div>
          
          <div>
            <label className="block label-text mb-4">{t.attending}</label>
            <div className="flex flex-col sm:flex-row gap-8 py-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" value="yes" required className="accent-terracotta w-4 h-4" />
                <span className="font-titles text-2xl italic group-hover:text-terracotta transition-colors text-stone-700">{t.accepts}</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" value="no" className="accent-stone-400 w-4 h-4" />
                <span className="font-titles text-2xl italic group-hover:text-stone-500 transition-colors text-stone-500">{t.declines}</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block label-text mb-4">{t.dietaryLabel}</label>
            <textarea 
              rows={3}
              className="w-full border border-stone-100 p-6 focus:outline-none focus:border-terracotta transition-colors bg-stone-50/30 rounded-sm font-titles text-2xl italic text-stone-700 placeholder-stone-300"
              placeholder={t.dietaryRSVPPlaceholder}
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#A8503A] text-white py-5 label-text tracking-[0.5em] hover:bg-stone-900 transition-all disabled:bg-stone-300 shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              {loading ? t.sending : t.sendRSVP}
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <section id="rsvp" className="relative overflow-hidden">
      <div className="watercolour-sheet px-6 border border-stone-200 rounded-sm shadow-xl">
        {renderContent()}
      </div>
    </section>
  );
};

export default RSVPForm;
