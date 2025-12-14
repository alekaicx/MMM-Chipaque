import React, { useState, useEffect } from 'react';
import { BIBLE_BOOKS_DATA } from '../constants';
import { Search, ChevronLeft, ChevronRight, Moon, Sun, Loader2 } from 'lucide-react';

interface VerseData {
  text: string;
  verse: number;
}

const BiblePage: React.FC = () => {
  const [selectedBookIndex, setSelectedBookIndex] = useState<number>(0);
  const [chapter, setChapter] = useState<number>(1);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [verses, setVerses] = useState<VerseData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const currentBook = BIBLE_BOOKS_DATA[selectedBookIndex];

  // Fetch Bible Data
  useEffect(() => {
    const fetchChapter = async () => {
      setLoading(true);
      setError('');
      try {
        // Fix: Use correct translation "reina-valera-1909" which is public. "rvr" often fails on free endpoints.
        // Fix: Ensure spaces in book names (like "1 Samuel") are URL encoded.
        const apiBookName = encodeURIComponent(currentBook.apiName);
        const url = `https://bible-api.com/${apiBookName}+${chapter}?translation=reina-valera-1909`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: No se pudo cargar el texto.`);
        }
        
        const data = await response.json();
        
        if (data.verses) {
           setVerses(data.verses.map((v: any) => ({
             verse: v.verse,
             text: v.text
           })));
        } else if (data.text) {
           setVerses([{ verse: 1, text: data.text }]);
        } else {
           throw new Error("Formato de respuesta desconocido");
        }
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar el capítulo. Verifica tu conexión a internet.');
      } finally {
        setLoading(false);
      }
    };

    fetchChapter();
  }, [selectedBookIndex, chapter, currentBook.apiName]);

  const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBookIndex(Number(e.target.value));
    setChapter(1); // Reset to chapter 1 on book change
  };

  const nextChapter = () => {
    if (chapter < currentBook.chapters) {
      setChapter(chapter + 1);
    }
  };

  const prevChapter = () => {
    if (chapter > 1) {
      setChapter(chapter - 1);
    }
  };

  return (
    <div className={`flex flex-col h-full transition-colors duration-500 ${darkMode ? 'bg-stone-900 text-stone-300' : 'bg-white text-stone-800'}`}>
      
      {/* Bible Header / Controls */}
      <div className={`p-4 border-b flex justify-between items-center sticky top-0 z-20 ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-100'}`}>
        <div className="flex flex-wrap items-center gap-2">
            <select 
                value={selectedBookIndex}
                onChange={handleBookChange}
                className={`font-serif font-bold text-lg bg-transparent outline-none cursor-pointer max-w-[150px] ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}
            >
                {BIBLE_BOOKS_DATA.map((book, index) => (
                  <option key={book.name} value={index}>{book.name}</option>
                ))}
            </select>
            <span className="text-stone-400">|</span>
            <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Cap.</span>
                <select 
                  value={chapter}
                  onChange={(e) => setChapter(Number(e.target.value))}
                  className={`p-1 rounded font-bold bg-transparent outline-none cursor-pointer ${darkMode ? 'text-white' : 'text-stone-900'}`}
                >
                   {Array.from({length: currentBook.chapters}, (_, i) => i + 1).map(num => (
                     <option key={num} value={num}>{num}</option>
                   ))}
                </select>
            </div>
        </div>
        
        <div className="flex gap-3">
             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-stone-200/20 transition-colors">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button className="p-2 rounded-full hover:bg-stone-200/20 transition-colors">
                <Search size={20} />
             </button>
        </div>
      </div>

      {/* Bible Content */}
      <div className="flex-1 overflow-y-auto p-6 max-w-3xl mx-auto w-full animate-grow scroll-smooth">
         <h2 className="text-3xl font-serif font-bold mb-6 text-center">{currentBook.name} {chapter}</h2>
         
         {loading ? (
           <div className="flex justify-center items-center h-64">
             <Loader2 size={40} className="animate-spin text-gold-500" />
           </div>
         ) : error ? (
           <div className="text-center text-red-500 p-10 bg-red-50 rounded-xl">
             <p>{error}</p>
             <button onClick={() => window.location.reload()} className="mt-4 text-sm font-bold underline">Reintentar</button>
           </div>
         ) : (
           <div className="space-y-4">
               {verses.map((v) => (
                   <div key={v.verse} className="group relative pl-4 hover:bg-stone-500/5 rounded-lg p-2 transition-colors">
                       <span className="absolute left-0 top-3 text-xs font-bold text-stone-400 w-4 text-right select-none">{v.verse}</span>
                       <p className={`text-lg leading-relaxed font-serif ${darkMode ? 'text-stone-300' : 'text-stone-800'}`}>
                           {v.text}
                       </p>
                   </div>
               ))}
           </div>
         )}
      </div>

      {/* Chapter Navigation Footer */}
      <div className={`p-4 border-t flex justify-between ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-100'}`}>
          <button 
            onClick={prevChapter}
            className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-gold-600 disabled:opacity-50"
            disabled={chapter <= 1}
          >
              <ChevronLeft size={16} /> Anterior
          </button>
          <button 
             onClick={nextChapter}
             className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-gold-600 disabled:opacity-50"
             disabled={chapter >= currentBook.chapters}
          >
              Siguiente <ChevronRight size={16} />
          </button>
      </div>
    </div>
  );
};

export default BiblePage;