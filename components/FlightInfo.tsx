
import React, { useState } from 'react';
import { WEDDING_DATA, UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FlightInfoProps {
  lang: Language;
}

const FlightInfo: React.FC<FlightInfoProps> = ({ lang }) => {
  const [showCarHireInfo, setShowCarHireInfo] = useState(false);
  const data = WEDDING_DATA[lang];
  const t = UI_TRANSLATIONS[lang];
  const routeTGD = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185856.7720235948!2d19.01180862086111!3d43.15543666504547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d39699684347b%3A0x6b4904a0937c6883!2s%C5%BDabljak!5e0!3m2!1sen!2sme!4v1711200000000!5m2!1sen!2sme`;
  const routeTIV = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373248.60467332247!2d18.67503831777343!3d42.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d39699684347b%3A0x6b4904a0937c6883!2s%C5%BDabljak!5e0!3m2!1sen!2sme!4v1711200000000!5m2!1sen!2sme`;

  return (
    <section className="relative overflow-hidden">
      <div className="watercolour-sheet py-20 px-6 border border-stone-200 rounded-sm shadow-xl space-y-24">
        {/* Step 1: Flights */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-titles text-stone-800 mb-4">{t.journey}</h2>
            <div className="h-px w-12 bg-stone-200 mx-auto mt-6" />
          </div>

          <div className="text-center mb-12">
            <p className="text-[#A8503A] uppercase tracking-[0.4em] text-xs mb-4 font-bold">{t.step1}</p>
            <h3 className="text-3xl md:text-5xl font-titles mb-4 text-stone-800">{t.flights}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#FEFBF4] p-10 border border-[#A8503A]/20 rounded-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-stone-100 text-9xl font-titles opacity-20 pointer-events-none group-hover:text-[#A8503A]/10 transition-colors">LON</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="font-titles text-3xl text-stone-800">From London</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-xs font-bold text-[#A8503A]">01</div>
                    <div>
                      <p className="font-titles text-xl text-stone-800">Direct to Podgorica (TGD) - Sept 4th</p>
                      <p className="text-sm text-stone-500 leading-relaxed"><strong>Wizz Air</strong> operates a direct flight from Gatwick (LGW) on September 4th.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-xs font-bold text-[#A8503A]">02</div>
                    <div>
                      <p className="font-titles text-xl text-stone-800">Direct to Podgorica (TGD)</p>
                      <p className="text-sm text-stone-500 leading-relaxed"><strong>Ryanair</strong> typically operates frequent flights from Stansted (STN). This is the closest airport to the mountains.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FEFBF4] p-10 border border-[#A8503A]/20 rounded-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-stone-100 text-9xl font-titles opacity-20 pointer-events-none group-hover:text-[#A8503A]/10 transition-colors">TLL</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🇪🇪</span>
                  <h3 className="font-titles text-3xl text-stone-800">From Tallinn</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 text-xs font-bold text-[#A8503A]">01</div>
                    <div>
                      <p className="font-titles text-xl text-stone-800">Via Warsaw (WAW) to Podgorica (TGD)</p>
                      <p className="text-sm text-stone-500 leading-relaxed"><strong>LOT Polish Airlines</strong> operates flights from Tallinn (TLL) with a layover in Warsaw (WAW) reaching Podgorica (TGD).</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.skyscanner.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-[#A8503A] text-xs uppercase tracking-widest transition-colors font-bold"
            >
              Search Flights on Skyscanner
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        {/* Step 2: Ground Directions */}
        <div className="pt-24 border-t border-stone-100">
          <div className="text-center mb-16">
            <p className="text-[#A8503A] uppercase tracking-[0.4em] text-xs mb-4 font-bold">{t.step2}</p>
            <h3 className="text-3xl md:text-5xl font-titles mb-4 text-stone-800">{t.ground}</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-titles text-2xl text-stone-700">From Podgorica (TGD)</h3>
                <span className="text-sm uppercase tracking-widest text-stone-900 font-bold">{lang === 'en' ? '~2.5 Hours' : '~2.5 часа'}</span>
              </div>
              <div className="rounded-sm overflow-hidden shadow-xl border-8 border-white h-[400px] relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={routeTGD}
                  className="grayscale-[0.1] contrast-[1.05]"
                  title="Route from Podgorica"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-titles text-2xl text-stone-700">From Tivat (TIV)</h3>
                <span className="text-sm uppercase tracking-widest text-stone-900 font-bold">{lang === 'en' ? '~3 Hours' : '~3 часа'}</span>
              </div>
              <div className="rounded-sm overflow-hidden shadow-xl border-8 border-white h-[400px] relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={routeTIV}
                  className="grayscale-[0.1] contrast-[1.05]"
                  title="Route from Tivat"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-stone-900 text-white text-xs uppercase tracking-widest hover:bg-[#003152] transition-colors font-bold shadow-lg transform hover:-translate-y-1 w-full md:w-auto text-center"
              >
                {t.openMaps}
              </a>

              <button 
                onClick={() => setShowCarHireInfo(!showCarHireInfo)}
                className="px-8 py-4 border-2 border-[#A8503A] text-[#A8503A] text-xs uppercase tracking-widest hover:bg-[#A8503A] hover:text-white transition-all font-bold shadow-lg transform hover:-translate-y-1 w-full md:w-auto text-center"
              >
                {t.hireCarBtn}
              </button>
          </div>

          {showCarHireInfo && (
            <div className="mt-8 max-w-2xl mx-auto animate-slide-up">
              <div className="p-8 bg-[#A8503A]/5 border-l-4 border-[#A8503A] rounded-sm">
                <p className="font-titles text-xl md:text-2xl text-stone-800 leading-relaxed italic">
                  {t.hireCarContact}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlightInfo;
