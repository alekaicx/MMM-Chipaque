import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TreePage from './pages/TreePage';
import BiblePage from './pages/BiblePage';
import DevotionalPage from './pages/DevotionalPage';
import AboutPage from './pages/AboutPage';
import { Tab, UserProgress } from './types';
import { getProgress, updateStreak } from './services/storageService';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.HOME);
  const [progress, setProgress] = useState<UserProgress>(getProgress());

  // Load progress on mount
  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleDevotionalRead = () => {
    // Only update streak if it's the first time today (logic handled inside updateStreak)
    const result = updateStreak();
    if (result.updated) {
        setProgress(result.newProgress);
        // Maybe trigger a confetti animation here in a real app
    } else {
        // Just refresh local state to catch up
        setProgress(getProgress());
    }
  };

  const renderContent = () => {
    switch (currentTab) {
      case Tab.HOME:
        return <Home progress={progress} setTab={setCurrentTab} />;
      case Tab.TREE:
        return <TreePage progress={progress} />;
      case Tab.BIBLE:
        return <BiblePage />;
      case Tab.DEVOTIONAL:
        return <DevotionalPage onReadComplete={handleDevotionalRead} />;
      case Tab.ABOUT:
        return <AboutPage />;
      default:
        return <Home progress={progress} setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-stone-800 font-sans selection:bg-gold-200">
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />
      
      {/* Main Content Area */}
      <main className="pt-20 md:pt-24 pb-20 md:pb-10 max-w-6xl mx-auto px-4 min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;