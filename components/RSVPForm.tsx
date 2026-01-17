
import React, { useState } from 'react';
import { WEDDING_DATA } from '../constants';

const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-white text-center px-6">
        <div className="max-w-xl mx-auto py-16 border border-stone-100 rounded-lg shadow-sm">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-3xl font-serif mb-4">Thank You!</h2>
          <p className="text-stone-600 font-light">We have received your response. We can't wait to celebrate with you!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            Submit another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-white px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 italic">RSVP</h2>
          <p className="text-stone-500 font-light">Kindly respond by {WEDDING_DATA.rsvpDeadline}</p>
          <div className="h-px w-20 bg-stone-200 mx-auto mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Your Name</label>
            <input 
              required
              type="text" 
              className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors bg-transparent font-light"
              placeholder="Full name"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Number of Guests</label>
              <select className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors bg-transparent font-light">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Attending?</label>
              <div className="flex gap-4 py-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="yes" required className="accent-stone-900" />
                  <span className="text-sm font-light">Joyfully Accepts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" value="no" className="accent-stone-900" />
                  <span className="text-sm font-light">Regretfully Declines</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Dietary Restrictions</label>
            <textarea 
              rows={3}
              className="w-full border border-stone-200 p-3 focus:outline-none focus:border-stone-900 transition-colors bg-transparent font-light rounded-sm"
              placeholder="Please let us know if you have any allergies..."
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-stone-900 text-white py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-stone-800 transition-all disabled:bg-stone-400"
          >
            {loading ? 'Sending...' : 'Send RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
