
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your wedding concierge. Ask me anything about Evelyn & Alexander's special day!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await geminiService.sendMessage(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-stone-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 relative group"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a.5.5 0 01-1 0V5a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h3a.5.5 0 010 1H4a2 2 0 01-2-2V5zm12.933 10.23a.75.75 0 10-1.06-1.06l-2.622 2.621V12.75a.75.75 0 00-1.5 0v4.04l-2.621-2.622a.75.75 0 10-1.06 1.06l3.9 3.9a.75.75 0 001.06 0l3.9-3.9z" /><path d="M10 2a1 1 0 011 1v1.323l.395-.396a.75.75 0 111.06 1.06l-1.455 1.456V8a1 1 0 01-2 0V6.443L7.545 4.987a.75.75 0 111.06-1.06l.395.396V3a1 1 0 011-1z" /></svg>
        )}
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white text-stone-900 text-xs py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100 italic">
            Questions? Ask me!
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden animate-slide-up">
          <div className="bg-stone-900 p-4 text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs italic">AI</div>
            <div>
              <h3 className="text-sm font-serif italic">Wedding Concierge</h3>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Always here to help</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-br-none' 
                      : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about dress code, locations..."
                className="flex-1 border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-stone-400 font-light"
              />
              <button 
                onClick={handleSend}
                className="bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
              >
                <svg className="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConcierge;
