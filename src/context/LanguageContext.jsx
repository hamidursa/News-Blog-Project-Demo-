import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supportedLanguages, getLanguageByCode } from '../data/translations/languages';
import { uiTranslations, getTranslation } from '../data/translations/uiTranslations';
import { getTranslatedCategory } from '../data/translations/categoryTranslations';
import { getTranslatedArticle } from '../data/translations/articleTranslations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('news_portal_lang');
      if (saved && supportedLanguages.some(l => l.code === saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const currentLangObj = getLanguageByCode(language);
  const isRTL = currentLangObj.dir === 'rtl';

  useEffect(() => {
    try {
      localStorage.setItem('news_portal_lang', language);
    } catch {
      // Ignore
    }

    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    if (isRTL) {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [language, isRTL]);

  const changeLanguage = useCallback((code) => {
    if (supportedLanguages.some(l => l.code === code)) {
      setLanguage(code);
    }
  }, []);

  const t = useCallback((key) => {
    return getTranslation(language, key);
  }, [language]);

  const translateCategory = useCallback((slug) => {
    return getTranslatedCategory(slug, language);
  }, [language]);

  const translateArticle = useCallback((article) => {
    return getTranslatedArticle(article, language);
  }, [language]);

  const value = {
    language,
    currentLangObj,
    supportedLanguages,
    changeLanguage,
    t,
    translateCategory,
    translateArticle,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
