
import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import AIConcierge from './components/AIConcierge';
import MapSection from './components/MapSection';
import { WEDDING_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <main>
        <Story />
        
        {/* Simple Gallery Divider */}
        <section className="h-[400px] md:h-[600px] w-full relative">
          <div 
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url('https://picsum.photos/seed/wed_nature/1920/1200')` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        <EventDetails />
        
        <MapSection />
        
        <RSVPForm />
      </main>

      <footer className="py-20 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6 italic">{WEDDING_DATA.coupleNames}</h2>
          <p className="text-stone-400 font-light tracking-widest uppercase text-sm mb-12">See you there!</p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-stone-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors">Hashtag</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-[10px] text-stone-600 uppercase tracking-widest">
            Made with Love • 2025
          </p>
        </div>
      </footer>

      {/* Interactive AI Element */}
      <AIConcierge />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
