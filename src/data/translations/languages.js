export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: 'EN', dir: 'ltr' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: 'বাং', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: 'हि', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: 'اردو', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: 'عرب', dir: 'rtl' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '日', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '한', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '中', dir: 'ltr' },
];

export const getLanguageByCode = (code) => {
  return supportedLanguages.find(l => l.code === code) || supportedLanguages[0];
};
