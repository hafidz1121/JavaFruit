'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../content/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id'); // Default to Indonesian

  useEffect(() => {
    try {
      const saved = localStorage.getItem('javafruit_lang');
      if (saved && (saved === 'id' || saved === 'en')) {
        setLang(saved);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (newLang === 'id' || newLang === 'en') {
      setLang(newLang);
      try {
        localStorage.setItem('javafruit_lang', newLang);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const t = translations[lang] || translations.id;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLanguage: changeLanguage,
        toggleLanguage: () => changeLanguage(lang === 'en' ? 'id' : 'en'),
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
