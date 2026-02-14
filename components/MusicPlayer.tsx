
import React, { useState, useRef, useEffect } from 'react';
import { UI_TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface MusicPlayerProps {
  lang: Language;
}

const PLAYLIST = [
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    url: "https://image2url.com/r2/default/audio/1771072012388-9a30e693-0937-4f8e-84ee-65dc4441e7b7.mp3"
  },
  {
    title: "Ends of the Earth",
    artist: "Lord Huron",
    url: "https://image2url.com/r2/default/audio/1771072157156-341ecf11-cc9a-456b-ad2e-914a2d9e6e0e.mp3"
  },
  {
    title: "Motel 6",
    artist: "River Whyless",
    url: "https://image2url.com/r2/default/audio/1771072231467-50745a8a-aaee-42c1-8e23-7eb6373c66e5.mp3"
  }
];

const MusicPlayer: React.FC<MusicPlayerProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const t = UI_TRANSLATIONS[lang];

  const currentSong = PLAYLIST[currentSongIndex];

  // Handle song change effect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Playback error:", err));
      }
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log("Autoplay blocked or playback error:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <audio 
        ref={audioRef} 
        src={currentSong.url} 
        onEnded={nextSong}
      />
      
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-md border ${
            isPlaying 
              ? 'bg-[#A8503A] border-[#A8503A] text-white scale-105' 
              : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:text-white hover:border-white/40'
          }`}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-4">
              <div className="w-0.5 bg-white animate-[music-bar_0.8s_ease-in-out_infinite] h-full" />
              <div className="w-0.5 bg-white animate-[music-bar_1.2s_ease-in-out_infinite] h-2/3" />
              <div className="w-0.5 bg-white animate-[music-bar_1s_ease-in-out_infinite] h-1/2" />
              <div className="w-0.5 bg-white animate-[music-bar_0.6s_ease-in-out_infinite] h-3/4" />
            </div>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>

        {/* Dynamic Song Label */}
        <div className={`text-left transition-all duration-700 transform ${isPlaying ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
          <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/50 font-titles leading-tight">
            {t.nowPlaying}
          </p>
          <p className="text-[11px] text-white font-titles italic whitespace-nowrap">
            {currentSong.title}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
