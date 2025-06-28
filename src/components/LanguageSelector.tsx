
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="h-12 px-4 bg-white/90 backdrop-blur-sm border-2 border-[#e7bc2d]/20 hover:border-[#e7bc2d] hover:bg-[#e7bc2d]/10 transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#e7bc2d] group-hover:text-[#d4a824] transition-colors duration-300" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {currentLanguage?.flag} {currentLanguage?.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white/95 backdrop-blur-md border-2 border-[#e7bc2d]/20 shadow-xl rounded-xl"
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
  );
};

export default LanguageSelector;
