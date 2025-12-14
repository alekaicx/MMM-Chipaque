import React, { useMemo } from 'react';
import { Share2, Bookmark } from 'lucide-react';
import { DAILY_VERSES } from '../constants';

const VerseOfTheDay = () => {
  // Select verse based on day of year
  const todaysVerse = useMemo(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Use modulo to cycle through verses if list is shorter than 365
    return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
  }, []);

  return (
    <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-400 bg-gold-400/10 px-2 py-1 rounded">Versículo del Día</span>
          <div className="flex gap-3">
             <button className="text-stone-400 hover:text-white transition-colors"><Bookmark size={18} /></button>
             <button className="text-stone-400 hover:text-white transition-colors"><Share2 size={18} /></button>
          </div>
        </div>
        
        <p className="font-serif text-lg md:text-xl leading-relaxed mb-4 text-stone-100">
          "{todaysVerse.text}"
        </p>
        
        <p className="text-right font-medium text-gold-400">{todaysVerse.ref}</p>
      </div>
    </div>
  );
};

export default VerseOfTheDay;