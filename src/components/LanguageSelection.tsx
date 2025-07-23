import React from 'react';
import { Volume2, Globe } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onLanguageSelect }) => {
  const languages = [
    { code: 'te' as Language, name: 'తెలుగు', englishName: 'Telugu', flag: '🏛️' },
    { code: 'hi' as Language, name: 'हिंदी', englishName: 'Hindi', flag: '🇮🇳' },
    { code: 'en' as Language, name: 'English', englishName: 'English', flag: '🌏' },
  ];

  const handleLanguageSelect = (language: Language) => {
    // Simulate voice feedback
    console.log(`Voice: Language ${language} selected`);
    onLanguageSelect(language);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Choose Your Language
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            अपनी भाषा चुनें
          </p>
          <p className="text-lg text-gray-600">
            మీ భాషను ఎంచుకోండి
          </p>
        </div>

        <div className="space-y-4">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className="w-full bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{language.flag}</span>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-800 group-hover:text-green-700">
                      {language.name}
                    </div>
                    <div className="text-lg text-gray-500">
                      {language.englishName}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Volume2 className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                  <div className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <Volume2 className="w-4 h-4" />
            <span>Voice assistance available in all languages</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;