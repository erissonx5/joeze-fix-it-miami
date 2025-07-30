import { Phone, MapPin, Clock, CheckCircle, Users, Wrench, Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import FloatingInstagramButton from '@/components/FloatingInstagramButton';
import FloatingLanguageSelector from '@/components/FloatingLanguageSelector';
import ImportantNoticeDialog from '@/components/ImportantNoticeDialog';
import { useState, useEffect } from 'react';

// WhatsApp SVG Icon Component - Now Green
const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const Index = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "17867020403";
  const whatsappMessage = t.hero.phone || "Olá! Gostaria de solicitar um orçamento para serviços de handyman.";
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send/?phone=17867020403&text&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/mrjoeandzehandyman/', '_blank');
  };

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Miami Beach",
      rating: 5,
      comment: t.testimonials.reviews.maria,
      initials: "M"
    },
    {
      name: "Carlos Rodriguez",
      location: "Aventura",
      rating: 5,
      comment: t.testimonials.reviews.carlos,
      initials: "C"
    },
    {
      name: "Fernando Lima",
      location: "Pembroke Pines",
      rating: 5,
      comment: t.testimonials.reviews.fernando,
      initials: "F"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: '#8cbbc3' }}>
      {/* Important Notice Dialog */}
      <ImportantNoticeDialog />
      
      {/* Header */}
      <header className={`bg-[#8cbbc3] shadow-lg transition-all duration-300 z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center h-40 md:h-36">
            {/* Logo aumentada significativamente */}
            <div 
              className="w-[500px] h-36 sm:w-[650px] sm:h-44 md:w-[900px] md:h-52 lg:w-[1100px] lg:h-60 transform hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
              onClick={handleLogoClick}
            >
              <img 
                src="/lovable-uploads/c1e8c03d-3cd0-4452-bfb1-2df182bdd43f.png" 
                alt="Mr. Joe & Zé Handyman Logo" 
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer when header is fixed */}
      {isScrolled && <div className="h-[172px] md:h-[156px]"></div>}

      {/* Hero Section - Imagem centralizada no desktop */}
      <section 
        className="relative py-8 md:py-16 text-white overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(140, 187, 195, 0.2), rgba(149, 67, 12, 0.2)), url('/lovable-uploads/897b0615-1490-4b2f-a9ea-8ed93a5ff745.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Seção vazia - apenas imagem de fundo */}
          </div>
        </div>
      </section>

      {/* Segunda Imagem Hero - Airbnb com Fundo Gradiente */}
      <section 
        className="relative py-12 md:py-20 text-white overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #8cbbc3 0%, #95430c 50%, #2c3e50 100%)`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl border border-white/20">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Imagem */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                      src="/lovable-uploads/263824db-df10-49db-b77e-71662e66ef94.png" 
                      alt="Contact Information"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {t.airbnb.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8cbbc3] to-[#95430c] mx-auto lg:mx-0 rounded-full"></div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {t.airbnb.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{t.airbnb.quickService}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{t.airbnb.fiveStars}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      onClick={openWhatsApp}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <WhatsAppIcon className="h-6 w-6 mr-3" />
                      {t.airbnb.requestQuote}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #8cbbc3 0%, #95430c 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in">{t.services?.title}</h3>
            
            <div className="space-y-16">
              {/* Professional Laundry Service - NEW */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/e650dc1d-ebaf-4e75-b5f2-5b98c448d665.png" 
                    alt="Lavagem Profissional para Salões, Spas e Negócios Locais"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">🧼 {t.services?.laundryService?.title}</h4>
                  <div className="text-white/90 space-y-3">
                    <p>{t.services?.laundryService?.questions?.[0]}</p>
                    <p>{t.services?.laundryService?.questions?.[1]}</p>
                    <p className="font-semibold">{t.services?.laundryService?.solutions?.[0]}</p>
                    <p>{t.services?.laundryService?.solutions?.[1]}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services?.laundryService?.benefits?.title}:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ {t.services?.laundryService?.benefits?.items?.[0]}</li>
                      <li>✔ {t.services?.laundryService?.benefits?.items?.[1]}</li>
                      <li>✔ {t.services?.laundryService?.benefits?.items?.[2]}</li>
                      <li>✔ {t.services?.laundryService?.benefits?.items?.[3]}</li>
                      <li>✔ {t.services?.laundryService?.benefits?.items?.[4]}</li>
                    </ul>
                    <div className="mt-4 space-y-2 text-white/90">
                      <p>🚐 {t.services?.laundryService?.solutions?.[2]}</p>
                      <p>{t.services?.laundryService?.solutions?.[3]}</p>
                      <p className="font-medium text-white mt-4">{t.services?.laundryService?.solutions?.[4]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TV Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/98cc3b46-f328-407c-be77-d838ffd12341.png" 
                    alt={t.services.tvInstallation.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.tvInstallation.title}</h4>
                  <p className="text-white/90">{t.services.tvInstallation.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.tvInstallation.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.tvInstallation.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.tvInstallation.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Smart Lock */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-200">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/1092a322-1299-40fc-8c08-1e9e6b20428c.png" 
                    alt={t.services.smartLock.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.smartLock.title}</h4>
                  <p className="text-white/90">{t.services.smartLock.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.smartLock.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.smartLock.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.smartLock.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Security Camera Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-300">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/50c94986-939d-40b4-a295-d72bf635ffbc.png" 
                    alt="Instalação de Câmeras de Segurança"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services?.cameraInstallation?.title}</h4>
                  <p className="text-white/90">
                    {t.services?.cameraInstallation?.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services?.cameraInstallation?.benefits?.title}:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[0]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[1]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[2]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[3]}</li>
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services?.cameraInstallation?.benefits?.footer}</p>
                  </div>
                </div>
              </div>

              {/* Food Disposal Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-400">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/6a28c4d8-c515-44a8-9734-50222c0cc991.png" 
                    alt={t.services.foodDisposal.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.foodDisposal.title}</h4>
                  <p className="text-white/90">{t.services.foodDisposal.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.foodDisposal.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.foodDisposal.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.foodDisposal.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Decoration */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-500">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/a5d6d146-656b-459a-a38b-6019ec7c2556.png" 
                    alt={t.services.decoration.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.decoration.title}</h4>
                  <p className="text-white/90">{t.services.decoration.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.decoration.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.decoration.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.decoration.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Electrical Repairs */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-600">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/f19000d5-5bfc-4d03-8916-db223b89f76a.png" 
                    alt={t.services.electrical.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.electrical.title}</h4>
                  <p className="text-white/90">{t.services.electrical.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.electrical.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.electrical.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.electrical.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Ceiling Fan Installation */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-700">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/17e20262-a7c4-4674-9869-aa599595bd1f.png" 
                    alt={t.services.ceilingFan.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.ceilingFan.title}</h4>
                  <p className="text-white/90">{t.services.ceilingFan.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.ceilingFan.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.ceilingFan.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.ceilingFan.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Plumbing Repairs */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-800">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/8dfc4109-a3bb-4b25-a21e-6a98bbacaaaa.png" 
                    alt={t.services.plumbing.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.plumbing.title}</h4>
                  <p className="text-white/90">{t.services.plumbing.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.plumbing.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.plumbing.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.plumbing.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Shelves Installation */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/cd1a6d6c-9428-4d53-9251-d39814956814.png" 
                    alt={t.services.shelves.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.shelves.title}</h4>
                  <p className="text-white/90">{t.services.shelves.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.shelves.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.shelves.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.shelves.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Curtains Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-200">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/c178f191-bc1a-4458-82d8-fda327c94522.png" 
                    alt={t.services.curtains.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.curtains.title}</h4>
                  <p className="text-white/90">{t.services.curtains.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.curtains.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.curtains.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.curtains.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Wall Repairs and Painting */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-300">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/f8159c24-eccd-4242-be65-bad0e47a7e84.png" 
                    alt={t.services.wallRepairs.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.wallRepairs.title}</h4>
                  <p className="text-white/90">{t.services.wallRepairs.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.wallRepairs.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.wallRepairs.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.wallRepairs.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Door Repairs */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-400">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/414c64ad-9cc0-45bd-9961-a21ee20d7c63.png" 
                    alt={t.services.doorRepairs.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.doorRepairs.title}</h4>
                  <p className="text-white/90">{t.services.doorRepairs.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.doorRepairs.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.doorRepairs.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.doorRepairs.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* House Numbers */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-500">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/959fb1fd-674c-4ddd-a395-bf6d5ab4766f.png" 
                    alt={t.services.houseNumbers.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.houseNumbers.title}</h4>
                  <p className="text-white/90">{t.services.houseNumbers.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.houseNumbers.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.houseNumbers.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.houseNumbers.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Mailbox Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-600">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/d37cac64-4de4-43be-bc47-e1aed44d0749.png" 
                    alt={t.services.mailbox.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.mailbox.title}</h4>
                  <p className="text-white/90">{t.services.mailbox.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.mailbox.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.mailbox.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.mailbox.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Safety Devices */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-700">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/55b236dd-dd0e-4c37-8552-0da5e06c60e5.png" 
                    alt={t.services.safetyDevices.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.safetyDevices.title}</h4>
                  <p className="text-white/90">{t.services.safetyDevices.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.safetyDevices.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.safetyDevices.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.safetyDevices.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Gutter Cleaning */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-800">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/11826f76-fa7d-4411-91bf-7a6dec1746a8.png" 
                    alt={t.services.gutterCleaning.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.gutterCleaning.title}</h4>
                  <p className="text-white/90">{t.services.gutterCleaning.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.gutterCleaning.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.gutterCleaning.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.gutterCleaning.benefits.footer}</p>
                  </div>
                </div>
              </div>

              {/* Pressure Washing */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/1dcff3c4-6126-4109-89f6-c8509077ec91.png" 
                    alt={t.services.pressureWashing.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.pressureWashing.title}</h4>
                  <p className="text-white/90">{t.services.pressureWashing.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">{t.services.pressureWashing.benefits.title}</p>
                    <ul className="space-y-1 text-white/80">
                      {t.services.pressureWashing.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-white mt-4">{t.services.pressureWashing.benefits.footer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Moved after Services */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #95430c 0%, #8cbbc3 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">{t.about?.title || "Sobre Nós"}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
              <div className="space-y-8 animate-fade-in animation-delay-300">
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about?.quality?.title || "Qualidade Garantida"}</h4>
                    <p className="text-white/80">{t.about?.quality?.description || "Trabalho profissional com garantia de qualidade em todos os serviços prestados."}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about?.fastService?.title || "Atendimento Rápido"}</h4>
                    <p className="text-white/80">{t.about?.fastService?.description || "Serviço ágil e pontual, respeitando sempre o prazo combinado com o cliente."}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about?.expertTeam?.title || "Equipe Especializada"}</h4>
                    <p className="text-white/80">{t.about?.expertTeam?.description || "Profissionais experientes e qualificados para atender todas as suas necessidades."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Only 3 comments with initials */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #8cbbc3 0%, #95430c 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-6">{t.testimonials?.title || "Depoimentos"}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.testimonials?.subtitle || "Veja o que nossos clientes dizem sobre nosso trabalho"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 bg-white/95 backdrop-blur-sm group animate-fade-in overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#95430c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <Avatar className="w-14 h-14 mr-4 ring-2 ring-[#95430c] ring-offset-2 group-hover:ring-4 transition-all duration-300 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-[#95430c] to-orange-600 text-white font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 50}ms`}} />
                        ))}
                      </div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic group-hover:text-gray-900 transition-colors duration-300 relative z-10">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #95430c 0%, #8cbbc3 100%)` }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold text-white animate-fade-in">{t.coverage?.title || "Área de Atendimento"}</h3>
            <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center shadow-xl">
                <MapPin className="h-10 w-10 text-white animate-bounce" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white animate-fade-in animation-delay-500">{t.coverage?.subtitle || "Miami-Dade e Broward County"}</h4>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-700">
              {t.coverage?.description || "Atendemos toda a região metropolitana de Miami com qualidade e pontualidade."}
            </p>
          </div>
        </div>
      </section>

      {/* Floating Social Buttons */}
      <FloatingInstagramButton instagramUrl="https://www.instagram.com/mrjoeandzehandyman/" />
      <FloatingWhatsAppButton 
        phoneNumber={whatsappNumber}
        message={whatsappMessage}
      />
      
      <FloatingLanguageSelector />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Pre-Instagram Text */}
            <div className="animate-fade-in animation-delay-100">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {t.footer?.preInstagram}
              </p>
            </div>
            
            {/* Buttons Section - Only Instagram now */}
            <div className="flex justify-center items-center animate-fade-in animation-delay-200">
              <Button 
                onClick={openInstagram}
                variant="outline"
                className="border-2 border-[#95430c] text-[#95430c] hover:bg-[#95430c] hover:text-white font-bold px-6 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
              >
                <Instagram className="h-5 w-5 mr-2" />
                {t.footer?.instagram || "Instagram"}
              </Button>
            </div>
            
            {/* Footer Info */}
            <div className="border-t border-gray-700 pt-8 space-y-4 animate-fade-in animation-delay-500">
              <p className="text-gray-400 text-center">
                {t.footer?.copyright || "© 2024 Mr. Joe & Zé Handyman. Todos os direitos reservados."}
              </p>
              <p className="text-gray-400 text-center">
                {t.footer?.coverage || "Atendemos Miami-Dade e Broward County"}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
