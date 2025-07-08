
import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useLanguage } from '@/contexts/LanguageContext';

const ImportantNoticeDialog = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Show dialog after a short delay when component mounts
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-center text-[#95430c]">
            🚨 {t.importantNotice?.title || "Aviso Importante"}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center space-y-4">
            <span className="block text-lg font-semibold text-gray-800">
              {t.importantNotice?.subtitle || "Atendemos Miami-Dade e Broward County"}
            </span>
            <span className="block text-gray-700">
              {t.importantNotice?.description || "Para um atendimento mais rápido, entre em contato pelo WhatsApp clicando no botão flutuante."}
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction 
            onClick={handleClose}
            className="w-full bg-[#95430c] hover:bg-[#7a3409] text-white"
          >
            {t.importantNotice?.button || "Entendi"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImportantNoticeDialog;
