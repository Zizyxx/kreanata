'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';

export type Language = 'EN' | 'ID';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const LANGUAGE_EVENT = 'kreanata_lang_change';

function getClientLanguage(): Language {
  try {
    const saved = localStorage.getItem('kreanata_language');
    if (saved === 'EN' || saved === 'ID') return saved;

    const browserLang = (
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      ''
    ).toLowerCase();

    // Auto-detect Indonesian language codes: 'id', 'id-id', 'in', 'in-id'
    if (browserLang.startsWith('id') || browserLang.startsWith('in')) {
      return 'ID';
    }
  } catch {
    // fallback
  }
  return 'EN';
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(LANGUAGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}

function getServerLanguage(): Language {
  return 'EN';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribe,
    getClientLanguage,
    getServerLanguage
  );

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem('kreanata_language', lang);
      document.documentElement.lang = lang.toLowerCase();
      window.dispatchEvent(new Event(LANGUAGE_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'EN' ? 'ID' : 'EN');
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
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
