
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
import { AlertTriangle, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ImportantNoticeDialog = () => {
  const [open, setOpen] = useState(false);
  const { currentLanguage } = useLanguage();

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
      understood: "Entendi"
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
      understood: "Understood"
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
      understood: "Entendido"
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
      understood: "Compris"
    }
  };

  // Use language from useLanguage hook
  const currentNotice = notice[currentLanguage as keyof typeof notice] || notice.pt;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-lg mx-4 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 shadow-2xl">
        <AlertDialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          
          <AlertDialogTitle className="text-xl font-bold text-gray-900 leading-tight px-2">
            {currentNotice.title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        
        <AlertDialogDescription className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-center text-base">
            {currentNotice.description}
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
            <p className="font-semibold text-blue-900 flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              {currentNotice.priority}
            </p>
            <div className="space-y-2 text-blue-800">
              <p>{currentNotice.emergencies}</p>
              <p>{currentNotice.airbnb}</p>
            </div>
          </div>
          
          <div className="text-center space-y-2 pt-2">
            <p className="font-medium text-gray-800">
              {currentNotice.thanks}
            </p>
            <p className="text-gray-700">
              {currentNotice.working}
            </p>
            <p className="font-semibold text-orange-600 pt-2">
              {currentNotice.team}
            </p>
          </div>
        </AlertDialogDescription>
        
        <AlertDialogFooter className="flex justify-center pt-4">
          <AlertDialogAction 
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {currentNotice.understood}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImportantNoticeDialog;
