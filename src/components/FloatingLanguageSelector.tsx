
import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const FloatingLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="w-14 h-14 bg-[#e7bc2d] hover:bg-[#d4a824] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Selecionar idioma"
          >
            <Globe className="h-7 w-7" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          side="top"
          className="w-48 bg-white/95 backdrop-blur-md border-2 border-[#e7bc2d]/20 shadow-xl rounded-xl mb-2"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="gap-3 cursor-pointer py-3 px-4 hover:bg-[#e7bc2d]/10 transition-colors duration-200 rounded-lg m-1"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium text-gray-700">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto w-2 h-2 bg-[#e7bc2d] rounded-full"></span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatingLanguageSelector;
