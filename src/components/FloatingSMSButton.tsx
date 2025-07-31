import React from 'react';

// SMS SVG Icon Component
const SMSIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
);

const FloatingSMSButton: React.FC = () => {
  const openSMS = () => {
    window.location.href = 'sms:+17867020403';
  };

  return (
    <div className="fixed bottom-[180px] right-6 z-50">
      <button
        onClick={openSMS}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Enviar SMS"
      >
        <SMSIcon className="h-7 w-7 mx-auto text-white" />
      </button>
    </div>
  );
};

export default FloatingSMSButton;