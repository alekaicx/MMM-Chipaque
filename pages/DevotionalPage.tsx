import React, { useState } from 'react';
import { CAMPAIGN_DEVOTIONALS } from '../constants';
import { getProgress, markDevotionalComplete, updateStreak } from '../services/storageService';
import { Heart, Share2, CheckCircle, ChevronLeft, Lock } from 'lucide-react';
import { Devotional } from '../types';

interface DevotionalPageProps {
  onReadComplete: () => void;
}

const DevotionalPage: React.FC<DevotionalPageProps> = ({ onReadComplete }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [progress, setProgress] = useState(getProgress());
  const [reading, setReading] = useState<Devotional | null>(null);

  const handleDaySelect = (day: number) => {
    // Logic: Can only read current day + previous days? Or any day?
    // Let's allow reading any, but we highlight completed ones.
    const dev = CAMPAIGN_DEVOTIONALS.find(d => d.day === day);
    if (dev) {
        setSelectedDay(day);
        setReading(dev);
    }
  };

  const handleBack = () => {
    setSelectedDay(null);
    setReading(null);
    setProgress(getProgress()); // Refresh progress to show checkmarks
  };

  const handleComplete = () => {
    if (reading) {
        markDevotionalComplete(reading.day);
        // Also verify daily streak
        updateStreak();
        onReadComplete();
        // Don't close immediately, show success state
        setProgress(getProgress());
    }
  };

  // -- VIEW: READING A SPECIFIC DEVOTIONAL --
  if (selectedDay && reading) {
      const isCompleted = progress.completedDevotionals.includes(reading.day);

      return (
        <div className="pb-24 max-w-2xl mx-auto animate-grow">
            <button onClick={handleBack} className="mb-4 flex items-center text-stone-500 hover:text-gold-600 font-medium">
                <ChevronLeft size={20} /> Volver a los 40 Días
            </button>

            {/* Header Image */}
            <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
                <img 
                    src={`https://picsum.photos/800/600?nature=${reading.day}`} 
                    alt="Devocional Nature" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                    <div>
                        <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1 block">Día {reading.day} de 40</span>
                        <h1 className="text-2xl sm:text-3xl text-white font-serif font-bold">{reading.title}</h1>
                    </div>
                </div>
            </div>

            <div className="px-2 sm:px-6">
                {/* Scripture */}
                <div className="bg-white border-l-4 border-gold-500 p-4 rounded-r-lg shadow-sm mb-8">
                    <p className="font-serif italic text-lg text-stone-700 mb-2">"{reading.content.substring(0, 50)}..."</p>
                    <p className="text-right font-bold text-gold-600 text-sm">{reading.scripture}</p>
                </div>

                {/* Content */}
                <div className="prose prose-stone mb-8">
                    <h3 className="text-lg font-bold text-stone-800 mb-2">Reflexión</h3>
                    <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">
                        {reading.content}
                    </p>
                </div>

                {/* Prayer */}
                <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
                    <h3 className="text-gold-700 font-bold mb-2 flex items-center gap-2">
                        <Heart size={18} className="fill-gold-700" /> Oración
                    </h3>
                    <p className="text-stone-600 italic">"{reading.prayer}"</p>
                </div>

                {/* Application */}
                 <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
                    <h3 className="text-blue-700 font-bold mb-2 text-sm uppercase tracking-wide">Acción Práctica</h3>
                    <p className="text-stone-600 text-sm">{reading.application}</p>
                </div>

                {/* Action Button */}
                <button 
                    onClick={handleComplete}
                    disabled={isCompleted}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                        isCompleted 
                        ? 'bg-green-100 text-green-700 cursor-default' 
                        : 'bg-gold-500 text-white hover:bg-gold-600 hover:scale-[1.02]'
                    }`}
                >
                    {isCompleted ? (
                        <> <CheckCircle size={24} /> Completado </>
                    ) : (
                        "Marcar como Leído"
                    )}
                </button>
            </div>
        </div>
      );
  }

  // -- VIEW: LIST OF 40 DAYS --
  return (
    <div className="pb-24 animate-grow">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">40 Días con Jesús</h1>
            <p className="text-stone-500 max-w-md mx-auto">Un viaje espiritual hacia el avivamiento. "La constancia rompe la piedra".</p>
            
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gold-50 text-gold-700 rounded-full text-sm font-bold border border-gold-200">
                <span className="text-xl">{progress.completedDevotionals.length}</span> / 40 Completados
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CAMPAIGN_DEVOTIONALS.map((dev) => {
                const isCompleted = progress.completedDevotionals.includes(dev.day);
                // Lock future days logic (optional - currently allowing all, but visually distinctive)
                // const isLocked = dev.day > (Math.max(...progress.completedDevotionals, 0) + 1) && dev.day !== 1;
                const isLocked = false; 

                return (
                    <button
                        key={dev.day}
                        onClick={() => !isLocked && handleDaySelect(dev.day)}
                        className={`relative p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all h-32
                            ${isCompleted 
                                ? 'bg-green-50 border-green-200 text-green-800' 
                                : isLocked 
                                    ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
                                    : 'bg-white border-stone-100 hover:border-gold-300 hover:shadow-md text-stone-700'
                            }
                        `}
                    >
                        {isCompleted && (
                            <div className="absolute top-2 right-2 text-green-600">
                                <CheckCircle size={16} />
                            </div>
                        )}
                        {isLocked && (
                             <div className="absolute top-2 right-2 text-stone-400">
                                <Lock size={16} />
                            </div>
                        )}

                        <span className={`text-2xl font-bold font-serif ${isCompleted ? 'text-green-700' : 'text-gold-500'}`}>
                            {dev.day}
                        </span>
                        <span className="text-[10px] leading-tight font-medium opacity-80 line-clamp-2">
                            {dev.title.replace(`Día ${dev.day}: `, '')}
                        </span>
                    </button>
                );
            })}
        </div>
    </div>
  );
};

export default DevotionalPage;