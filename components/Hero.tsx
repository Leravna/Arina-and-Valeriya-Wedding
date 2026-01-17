
import React from 'react';
import { WEDDING_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/seed/wedding1/1920/1080')` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative text-center text-white p-6 z-10 animate-fade-in">
        <p className="uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-light">The Wedding Celebration of</p>
        <h1 className="text-5xl md:text-8xl mb-6 font-serif italic">{WEDDING_DATA.coupleNames}</h1>
        <div className="h-px w-24 bg-white/50 mx-auto mb-6" />
        <p className="text-xl md:text-2xl tracking-widest font-light">{WEDDING_DATA.date}</p>
        <p className="mt-2 text-lg font-light italic">Hudson Valley, New York</p>
        
        <div className="mt-12">
          <a 
            href="#rsvp" 
            className="px-8 py-3 border border-white hover:bg-white hover:text-stone-900 transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
          >
            RSVP Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
