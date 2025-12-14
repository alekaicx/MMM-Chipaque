import React from 'react';
import { UserProgress, Tab } from '../types';
import VerseOfTheDay from '../components/VerseOfTheDay';
import { ArrowRight, PlayCircle, Calendar, Users, Flame } from 'lucide-react';

interface HomeProps {
  progress: UserProgress;
  setTab: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ progress, setTab }) => {
  return (
    <div className="space-y-8 animate-grow">
      {/* Header / Greeting */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 font-serif">Bendiciones</h1>
          <p className="text-stone-500 text-sm">Bienvenido a casa, Tierra de Canaán.</p>
        </div>
        <div 
          onClick={() => setTab(Tab.TREE)}
          className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-stone-100 cursor-pointer hover:shadow-md transition-shadow"
        >
          <Flame size={16} className="text-orange-500 fill-orange-500" />
          <span className="text-sm font-bold text-stone-800">{progress.streak} días</span>
        </div>
      </header>

      {/* Verse of the Day Card */}
      <VerseOfTheDay />

      {/* Interactive Tree Teaser */}
      <section 
        className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 cursor-pointer group"
        onClick={() => setTab(Tab.TREE)}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-stone-800">Tu Árbol Espiritual</h2>
          <ArrowRight size={18} className="text-stone-400 group-hover:text-gold-600 transition-colors" />
        </div>
        <p className="text-sm text-stone-500 mb-4">
          {progress.streak > 0 
            ? "Tu fe está creciendo. ¡Sigue así!" 
            : "Un día sin palabra es un árbol que no crece."}
        </p>
        <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-1000"
            style={{ width: `${Math.min((progress.streak / 40) * 100, 100)}%` }}
          ></div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="grid grid-cols-2 gap-4">
        <div 
          onClick={() => setTab(Tab.DEVOTIONAL)}
          className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-100 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-sm">
            <Users size={20} />
          </div>
          <span className="font-bold text-stone-800 text-sm">40 Días</span>
          <span className="text-xs text-stone-500">Campaña Espiritual</span>
        </div>

        <div 
          onClick={() => setTab(Tab.ABOUT)}
          className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-600 shadow-sm">
            <Calendar size={20} />
          </div>
          <span className="font-bold text-stone-800 text-sm">Servicios</span>
          <span className="text-xs text-stone-500">Horarios</span>
        </div>
      </section>

      {/* Featured Video / Live (Mock) */}
      <section className="relative rounded-2xl overflow-hidden aspect-video shadow-lg group cursor-pointer">
        <img 
          src="https://picsum.photos/800/450?grayscale" 
          alt="Servicio en vivo" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
             <PlayCircle size={40} className="text-white fill-white/20" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-bold text-sm">Último Mensaje: Pentecostés</p>
          <p className="text-white/80 text-xs">Pastor Manuel Ruiz</p>
        </div>
      </section>
    </div>
  );
};

export default Home;