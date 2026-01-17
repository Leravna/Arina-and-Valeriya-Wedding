
import React from 'react';
import { WEDDING_DATA } from '../constants';

const Story: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-serif mb-12 italic">Our Story</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-stone-600 font-light">
            {WEDDING_DATA.story}
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/couple/800/1000" 
            alt="The Couple" 
            className="rounded-t-full w-full object-cover shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-stone-100 rounded-full flex items-center justify-center p-4 border border-stone-200">
            <span className="font-serif italic text-stone-400 text-sm">Est. 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
