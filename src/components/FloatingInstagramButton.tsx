import React from 'react';
import { Instagram } from 'lucide-react';

interface FloatingInstagramButtonProps {
  instagramUrl: string;
}

const FloatingInstagramButton: React.FC<FloatingInstagramButtonProps> = ({ instagramUrl }) => {
  const openInstagram = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={openInstagram}
        className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Seguir no Instagram"
      >
        <Instagram className="h-7 w-7 mx-auto text-white" />
      </button>
    </div>
  );
};

export default FloatingInstagramButton;