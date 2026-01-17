
import React from 'react';
import { WEDDING_DATA } from '../constants';

const MapSection: React.FC = () => {
  // We use the ceremony address as the primary location for the map embed
  const encodedAddress = encodeURIComponent(WEDDING_DATA.address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=${encodedAddress}`;

  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 italic">Location & Directions</h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto">
            Our celebration takes place in the heart of the Hudson Valley. 
            The Glass House and The Grand Orchard are located within a short drive of each other.
          </p>
          <div className="h-px w-20 bg-stone-300 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-2xl border-4 border-white h-[450px] relative group">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapUrl}
              className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="space-y-8 bg-white p-8 rounded-lg shadow-sm border border-stone-100">
            <div>
              <h4 className="font-serif text-xl mb-4 italic">Travel Tips</h4>
              <ul className="space-y-4 text-sm text-stone-600 font-light">
                <li className="flex gap-3">
                  <span className="text-stone-400">🚗</span>
                  <span>Parking is available on-site at both venues. Valet service will be provided at the reception.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stone-400">🚂</span>
                  <span>The Metro-North Hudson Line stops nearby. Taxis and Ubers are readily available from the station.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stone-400">🏨</span>
                  <span>We have blocked rooms at The Hudson Valley Resort. Ask the AI concierge for more stay options!</span>
                </li>
              </ul>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
