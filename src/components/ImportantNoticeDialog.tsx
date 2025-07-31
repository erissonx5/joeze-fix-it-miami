
import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle, Wrench, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ImportantNoticeDialog = () => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Show popup after 2 seconds of page load
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const notice = {
    pt: {
      title: "⚠ AVISO IMPORTANTE",
      description: "Devido à alta demanda, os atendimentos estão sendo realizados por ordem em que foram recebidos.",
      priority: "🚨 Damos prioridade apenas para:",
      emergencies: "• Emergências",
      airbnb: "• Airbnbs com hospedagem em andamento",
      thanks: "Agradecemos pela confiança!",
      working: "Estamos trabalhando com capricho para atender todos da melhor forma.",
      team: "— Equipe Mr. Joe & Zé Handyman",
      understood: "Entendi",
      contact: "Entre em contato:",
      whatsapp: "WhatsApp",
      sms: "SMS"
    },
    en: {
      title: "⚠ IMPORTANT NOTICE",
      description: "Due to high demand, services are being provided in the order they were received.",
      priority: "🚨 We give priority only to:",
      emergencies: "• Emergencies",
      airbnb: "• Airbnbs with ongoing hosting",
      thanks: "Thank you for your trust!",
      working: "We are working with care to serve everyone in the best way possible.",
      team: "— Mr. Joe & Zé Handyman Team",
      understood: "Understood",
      contact: "Contact us:",
      whatsapp: "WhatsApp",
      sms: "SMS"
    },
    es: {
      title: "⚠ AVISO IMPORTANTE",
      description: "Debido a la alta demanda, las atenciones se están realizando por orden en que fueron recibidas.",
      priority: "🚨 Damos prioridad solo a:",
      emergencies: "• Emergencias",
      airbnb: "• Airbnbs con hospedaje en curso",
      thanks: "¡Agradecemos la confianza!",
      working: "Estamos trabajando con esmero para atender a todos de la mejor manera.",
      team: "— Equipo Mr. Joe & Zé Handyman",
      understood: "Entendido",
      contact: "Contáctanos:",
      whatsapp: "WhatsApp",
      sms: "SMS"
    },
    fr: {
      title: "⚠ AVIS IMPORTANT",
      description: "En raison de la forte demande, les services sont fournis dans l'ordre où ils ont été reçus.",
      priority: "🚨 Nous donnons la priorité uniquement à:",
      emergencies: "• Urgences",
      airbnb: "• Airbnbs avec hébergement en cours",
      thanks: "Merci pour votre confiance!",
      working: "Nous travaillons avec soin pour servir tout le monde de la meilleure façon possible.",
      team: "— Équipe Mr. Joe & Zé Handyman",
      understood: "Compris",
      contact: "Contactez-nous:",
      whatsapp: "WhatsApp",
      sms: "SMS"
    }
  };

  // Use language from useLanguage hook
  const currentNotice = notice[language as keyof typeof notice] || notice.pt;

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send/?phone=17867020403&text&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  };

  const openSMS = () => {
    const phoneNumber = "+17867020403";
    const smsUrl = `sms:${phoneNumber}`;
    window.open(smsUrl, '_self');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="w-[calc(100vw-2rem)] max-w-lg mx-auto bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 shadow-2xl">
        <AlertDialogHeader className="text-center space-y-3 sm:space-y-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          
          <AlertDialogTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight px-1 sm:px-2">
            {currentNotice.title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        
        <AlertDialogDescription className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
          <p className="text-center text-sm sm:text-base px-1">
            {currentNotice.description}
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
            <p className="font-semibold text-blue-900 flex items-center gap-2 text-sm sm:text-base">
              <Wrench className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>{currentNotice.priority}</span>
            </p>
            <div className="space-y-1 sm:space-y-2 text-blue-800 text-sm sm:text-base">
              <p>{currentNotice.emergencies}</p>
              <p>{currentNotice.airbnb}</p>
            </div>
          </div>
          
          <div className="text-center space-y-2 pt-1 sm:pt-2">
            <p className="font-medium text-gray-800 text-sm sm:text-base">
              {currentNotice.thanks}
            </p>
            <p className="text-gray-700 text-sm sm:text-base px-1">
              {currentNotice.working}
            </p>
            <p className="font-semibold text-orange-600 pt-1 sm:pt-2 text-sm sm:text-base">
              {currentNotice.team}
            </p>
          </div>

          {/* Contact Buttons Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 space-y-3">
            <p className="font-semibold text-green-900 text-center text-sm sm:text-base">
              {currentNotice.contact}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={openWhatsApp}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                {currentNotice.whatsapp}
              </button>
              <button
                onClick={openSMS}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                {currentNotice.sms}
              </button>
            </div>
          </div>
        </AlertDialogDescription>
        
        <AlertDialogFooter className="flex justify-center pt-3 sm:pt-4">
          <AlertDialogAction 
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 sm:px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            {currentNotice.understood}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImportantNoticeDialog;
