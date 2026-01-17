
import React from 'react';
import { WEDDING_DATA } from '../constants';

const EventDetails: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 italic">The Celebration</h2>
          <div className="h-px w-20 bg-stone-300 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Ceremony & Reception */}
          <div className="space-y-12">
            <div className="border-l-2 border-stone-300 pl-8">
              <h3 className="text-2xl font-serif mb-2">The Ceremony</h3>
              <p className="text-stone-500 mb-1">{WEDDING_DATA.time}</p>
              <p className="font-medium text-stone-800">{WEDDING_DATA.location}</p>
              <p className="text-stone-500 italic text-sm">{WEDDING_DATA.address}</p>
            </div>
            
            <div className="border-l-2 border-stone-300 pl-8">
              <h3 className="text-2xl font-serif mb-2">The Reception</h3>
              <p className="text-stone-500 mb-1">6:30 PM</p>
              <p className="font-medium text-stone-800">{WEDDING_DATA.receptionLocation}</p>
              <p className="text-stone-500 italic text-sm">{WEDDING_DATA.receptionAddress}</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200">
              <h3 className="text-xl font-serif mb-4">Good to Know</h3>
              <ul className="space-y-4 text-stone-600 font-light">
                <li className="flex gap-3">
                  <span className="text-stone-400">👗</span>
                  <div>
                    <p className="font-medium text-stone-800">Dress Code</p>
                    <p className="text-sm">{WEDDING_DATA.dressCode}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-stone-400">🎁</span>
                  <div>
                    <p className="font-medium text-stone-800">Registry</p>
                    <a href={WEDDING_DATA.registryLink} target="_blank" className="text-sm underline hover:text-stone-900">Visit our registry</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-stone-50 p-10 rounded-sm shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="200" height="200" viewBox="0 0 100 100" className="fill-stone-900">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif mb-8 text-center italic">Event Schedule</h3>
            <div className="space-y-8 relative">
              {WEDDING_DATA.schedule.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="text-right w-24 shrink-0 font-serif text-stone-400 italic">
                    {item.time}
                  </div>
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-stone-300 mt-2" />
                    {index !== WEDDING_DATA.schedule.length - 1 && (
                      <div className="absolute top-4 left-[3px] w-[1px] h-full bg-stone-200" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 group-hover:text-stone-600 transition-colors">{item.event}</p>
                    <p className="text-sm text-stone-500 font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
