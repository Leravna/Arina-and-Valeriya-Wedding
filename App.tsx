
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import AIConcierge from './components/AIConcierge';
import MapSection from './components/MapSection';
import ChaletPantry from './components/ChaletPantry';
import MealInfo from './components/MealInfo';
import PackingGuide from './components/PackingGuide';
import DressCode from './components/DressCode';
import FlightInfo from './components/FlightInfo';
import WeekendActivities from './components/WeekendActivities';
import WelcomeMessage from './components/WelcomeMessage';
import { Language } from './types';

function App() {
  const [view, setView] = useState<'home' | 'dress-code'>('home');
  const [lang, setLang] = useState<Language>('en');
  const heroImageBg = "https://i.pinimg.com/736x/72/de/20/72de208ca2e25c2feafc6e865eb19d60.jpg";

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  if (view === 'dress-code') {
    return <DressCode lang={lang} onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen">
      {/* Language Toggle Fixed */}
      <button 
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-[60] bg-white/80 backdrop-blur-md border border-stone-200 px-4 py-2 rounded-full font-titles text-lg tracking-widest text-stone-600 hover:text-stone-900 shadow-lg transition-all"
      >
        {lang === 'en' ? 'EN / RU' : 'RU / EN'}
      </button>

      {/* 1. Title Page */}
      <Hero lang={lang} onDressCodeClick={() => setView('dress-code')} />
      
      {/* Scrollable Container with Fixed Background */}
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url('${heroImageBg}')` }}
        />
        <div className="fixed inset-0 bg-black/20 z-0" />

        {/* Main content with controlled gaps between sections */}
        <main className="relative z-10 py-6 md:py-12 px-4 md:px-8">
          <div className="max-w-screen-2xl mx-auto flex flex-col gap-6">
            {/* 2. Welcome message (Music Player nested inside here) */}
            <WelcomeMessage lang={lang} />

            {/* 3. Accommodation */}
            <MapSection lang={lang} />

            {/* 4. The Chalet Pantry */}
            <ChaletPantry lang={lang} />

            {/* 5. Meal Information */}
            <MealInfo lang={lang} />

            {/* 6. Packing Guide (Now includes integrated Cash Notice) */}
            <PackingGuide lang={lang} />

            {/* 7. Flight Recommendations */}
            <FlightInfo lang={lang} />

            {/* 8. Wedding Weekend activities */}
            <WeekendActivities lang={lang} />

            {/* 9. Celebration details */}
            <EventDetails lang={lang} onDressCodeClick={() => setView('dress-code')} />
            
            {/* 10. RSVP */}
            <RSVPForm lang={lang} />
          </div>
        </main>
      </div>

      {/* Interactive AI Element */}
      <AIConcierge lang={lang} />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
