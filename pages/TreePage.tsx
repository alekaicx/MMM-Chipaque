import React from 'react';
import { UserProgress } from '../types';
import { Sprout, CloudRain, Sun, Wind } from 'lucide-react';

interface TreePageProps {
  progress: UserProgress;
}

const TreePage: React.FC<TreePageProps> = ({ progress }) => {
  // Determine tree stage text and visual complexity
  const getTreeStage = (level: number) => {
    switch (level) {
      case 1: return { text: "Semilla de Fe", desc: "Todo comienza con un pequeño paso." };
      case 2: return { text: "Brote Nuevo", desc: "Tus raíces comienzan a profundizar." };
      case 3: return { text: "Arbusto Fuerte", desc: "La constancia te hace resistir." };
      case 4: return { text: "Árbol Joven", desc: "Empiezas a dar sombra a otros." };
      case 5: return { text: "Roble de Justicia", desc: "Firme, plantado junto a corrientes de agua." };
      default: return { text: "Semilla", desc: "Comienza tu viaje." };
    }
  };

  const stage = getTreeStage(progress.treeLevel);

  return (
    <div className="min-h-[80vh] flex flex-col relative overflow-hidden animate-grow">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 text-gold-300 animate-pulse-slow">
        <Sun size={60} />
      </div>
      <div className="absolute top-20 right-20 text-blue-200 animate-float" style={{ animationDelay: '1s' }}>
        <CloudRain size={40} />
      </div>
      <div className="absolute top-40 left-1/4 text-stone-200 animate-float" style={{ animationDelay: '2s' }}>
        <Wind size={32} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center z-10 text-center px-6 mt-10">
        <h1 className="text-3xl font-serif text-stone-800 font-bold mb-2">{stage.text}</h1>
        <p className="text-stone-500 mb-8 max-w-xs mx-auto">{stage.desc}</p>

        {/* The Tree Visual */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-10">
            {/* Visual halo */}
            <div className={`absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20 transition-all duration-1000 transform ${progress.streak > 0 ? 'scale-100' : 'scale-50'}`}></div>
            
            {/* Icon representation scaling with level */}
            <Sprout 
                size={progress.treeLevel * 40 + 40} 
                className={`text-green-600 drop-shadow-lg transition-all duration-1000 ${progress.streak === 0 ? 'text-stone-400 grayscale' : ''}`}
                strokeWidth={1.5}
            />
        </div>

        {/* Stats Card */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl w-full max-w-sm border border-stone-100">
            <div className="flex justify-between items-center mb-4">
                <span className="text-stone-500 text-sm">Racha Actual</span>
                <span className="text-2xl font-bold text-orange-600">{progress.streak} Días</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-3 mb-2">
                <div 
                    className="bg-orange-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(progress.streak * 5, 100)}%` }}
                ></div>
            </div>
            <p className="text-xs text-stone-400 italic mt-2">
                {progress.streak === 0 
                    ? "¡Lee un devocional hoy para regar tu árbol!" 
                    : "Dios honra la constancia. ¡Sigue así!"}
            </p>
        </div>
      </div>

      <div className="p-6 text-center z-10">
        <p className="text-stone-400 text-xs font-serif italic">
            "Será como árbol plantado junto a corrientes de aguas, Que da su fruto en su tiempo, Y su hoja no cae..."
            <br/>Salmos 1:3
        </p>
      </div>
    </div>
  );
};

export default TreePage;