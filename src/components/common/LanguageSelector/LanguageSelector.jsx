import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import Icon from '../Icon/Icon';
import './LanguageSelector.css';

export const LanguageSelector = ({ compact = false, className = '' }) => {
  const { language, currentLangObj, supportedLanguages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`language-selector-wrap ${compact ? 'compact' : ''} ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`lang-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select website language"
        title="Change language / ভাষা পরিবর্তন"
      >
        <Icon name="globe" className="lang-globe-icon" />
        <span className="lang-current-label">{currentLangObj.nativeName}</span>
        <span className="lang-code-badge">{currentLangObj.code.toUpperCase()}</span>
        <Icon name="chevronDown" className={`lang-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="lang-dropdown-menu" role="listbox" aria-label="Languages">
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <li
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                className={`lang-dropdown-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <div className="lang-item-info">
                  <span className="lang-item-native">{lang.nativeName}</span>
                  <span className="lang-item-english">{lang.name}</span>
                </div>
                <span className="lang-item-code">{lang.code.toUpperCase()}</span>
                {isSelected && <span className="lang-item-check">✓</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
