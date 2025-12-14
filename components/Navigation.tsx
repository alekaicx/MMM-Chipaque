import React from 'react';
import { Home, BookOpen, Heart, Info, Sprout } from 'lucide-react';
import { Tab } from '../types';

interface NavigationProps {
  currentTab: Tab;
  setTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, setTab }) => {
  const navItems = [
    { id: Tab.HOME, label: 'Inicio', icon: Home },
    { id: Tab.BIBLE, label: 'Biblia', icon: BookOpen },
    { id: Tab.TREE, label: 'Mi Árbol', icon: Sprout },
    { id: Tab.DEVOTIONAL, label: '40 Días', icon: Heart },
    { id: Tab.ABOUT, label: 'Iglesia', icon: Info },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-4 pb-safe pt-2 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex flex-col items-center p-2 transition-colors duration-300 ${
                  isActive ? 'text-gold-600 transform -translate-y-1' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-gold-700' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-stone-100 z-50 py-4 px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3" onClick={() => setTab(Tab.HOME)} role="button">
             {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              <Sprout size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-stone-900 tracking-tight leading-none">IGLESIA CHIPAQUÉ</span>
              <span className="text-xs text-gold-600 font-serif tracking-wider uppercase">Tierra de Canaán</span>
            </div>
          </div>
          
          <div className="flex gap-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-gold-50 text-gold-700 font-medium' 
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;