import { UserProgress } from '../types';

const STORAGE_KEY = 'iglesia_chipaque_progress_v2';

const DEFAULT_PROGRESS: UserProgress = {
  streak: 0,
  lastInteractionDate: null,
  totalDevotionalsRead: 0,
  treeLevel: 1,
  completedDevotionals: []
};

export const getProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : DEFAULT_PROGRESS;
};

export const saveProgress = (progress: UserProgress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const markDevotionalComplete = (day: number): UserProgress => {
  const current = getProgress();
  
  if (current.completedDevotionals.includes(day)) {
    return current;
  }

  const updatedProgress = {
    ...current,
    completedDevotionals: [...current.completedDevotionals, day],
    totalDevotionalsRead: current.totalDevotionalsRead + 1
  };
  
  saveProgress(updatedProgress);
  return updatedProgress;
};

export const updateStreak = (): { updated: boolean, newProgress: UserProgress } => {
  const current = getProgress();
  const today = new Date().toISOString().split('T')[0];
  
  if (current.lastInteractionDate === today) {
    return { updated: false, newProgress: current };
  }

  const lastDate = current.lastInteractionDate ? new Date(current.lastInteractionDate) : null;
  const yesterDate = new Date();
  yesterDate.setDate(yesterDate.getDate() - 1);
  const yesterday = yesterDate.toISOString().split('T')[0];

  let newStreak = current.streak;

  if (lastDate && current.lastInteractionDate === yesterday) {
    newStreak += 1;
  } else if (!lastDate || current.lastInteractionDate !== yesterday) {
    newStreak = 1; 
  }

  // Calculate Tree Level based on streak
  let newLevel = 1;
  if (newStreak >= 40) newLevel = 5; // Updated for 40 days
  else if (newStreak >= 20) newLevel = 4;
  else if (newStreak >= 10) newLevel = 3;
  else if (newStreak >= 3) newLevel = 2;

  const newProgress: UserProgress = {
    ...current,
    streak: newStreak,
    lastInteractionDate: today,
    treeLevel: newLevel
  };

  saveProgress(newProgress);
  return { updated: true, newProgress };
};