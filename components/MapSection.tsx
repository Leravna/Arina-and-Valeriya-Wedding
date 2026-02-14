
import React from 'react';
import { UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface MapSectionProps {
  lang: Language;
}

const MapSection: React.FC<MapSectionProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const bookingUrl = "https://www.booking.com/hotel/me/peaksview.html";
  const reelUrl = "https://www.instagram.com/reel/DKO4uk4I91h/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==/";
  const propertyHeroImage = "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2Mzk4MjExODg1MjYwNjMxMQ%3D%3D/original/fd9980c4-972c-44bf-9930-b4f1bcef9310.jpeg?im_w=1440";

  return (
    <section id="accommodation" className="relative overflow-hidden">
      <div className="watercolour-sheet overflow-hidden border border-stone-200 rounded-sm shadow-xl">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 lg:border-r border-stone-100">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="section-title mb-4">{t.accommodation}</h2>
              <p className="section-subtitle">{t.accommodationSub}</p>
              <div className="h-px w-12 bg-terracotta opacity-30 mt-6 mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-10">
              <p className="body-text">
                {t.provided}
              </p>

              <div className="py-6 border-t border-stone-100">
                <p className="label-text mb-6">{t.amenities}</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {t.amenitiesList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta opacity-40 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-stone-600 font-titles text-lg tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 label-text">
                  <span className="text-terracotta w-5">✓</span> {t.checkIn}
                </div>
                <div className="flex items-center gap-3 label-text">
                  <span className="text-terracotta w-5">✓</span> {t.checkOut}
                </div>
              </div>

              <div className="pt-6 text-center lg:text-left">
                <a 
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-terracotta text-white text-[10px] uppercase tracking-[0.2em] hover:bg-stone-900 transition-all font-bold shadow-lg transform hover:-translate-y-1"
                >
                  {t.viewProperty}
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-auto overflow-hidden bg-stone-100 order-2 min-h-[400px]">
            <a 
              href={reelUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative group cursor-pointer"
            >
              <img 
                src={propertyHeroImage} 
                alt="PeaksView Chalet Landscape" 
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-[1.05]" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 border border-stone-200 shadow-sm">
                  PeaksView Chalets
                </span>
                <span className="text-white text-[9px] uppercase tracking-[0.4em] font-bold drop-shadow-md group-hover:translate-x-[-5px] transition-transform">
                  {t.clickReel}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
