export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface Devotional {
  day: number;
  title: string;
  scripture: string;
  content: string;
  prayer: string;
  application: string;
}

export interface UserProgress {
  streak: number;
  lastInteractionDate: string | null;
  totalDevotionalsRead: number;
  treeLevel: number; // 1 to 5
  completedDevotionals: number[]; // Array of day numbers completed
}

export interface ChurchGroup {
  id: string;
  name: string;
  description: string;
  imagePlaceholder: string;
  color: string;
}

export interface BibleBookData {
  name: string;
  chapters: number;
  apiName: string; // Name for the API query
}

export enum Tab {
  HOME = 'home',
  BIBLE = 'bible',
  TREE = 'tree',
  DEVOTIONAL = 'devotional',
  ABOUT = 'about'
}