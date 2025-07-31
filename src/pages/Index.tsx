
import { Phone, MapPin, Clock, CheckCircle, Users, Wrench, Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import FloatingInstagramButton from '@/components/FloatingInstagramButton';
import FloatingSMSButton from '@/components/FloatingSMSButton';
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
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* Important Notice Dialog */}
      <ImportantNoticeDialog />
      
      {/* Header */}
      <header className={`bg-gradient-to-r from-secondary to-accent shadow-lg transition-all duration-300 z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center h-24">
            {/* Logo em tamanho harmônico com cabeçalho */}
            <div 
              className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] transform hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
              onClick={handleLogoClick}
            >
              <img 
                src="/lovable-uploads/b08d43d6-384b-464a-a60d-63cc3e248fdb.png" 
                alt="Mr. Joe & Zé Handyman Logo" 
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer when header is fixed */}
      {isScrolled && <div className="h-[112px]"></div>}

      {/* Hero Section - Imagem centralizada no desktop */}
      <section 
        className="relative py-8 md:py-16 text-primary-foreground overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center justify-center bg-background"
        style={{
          backgroundImage: `url('/lovable-uploads/42b96f00-74e2-4a30-a6cd-01e354d3d3d0.png')`,
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


      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-primary-foreground animate-fade-in">{t.services?.title}</h3>
            
            <div className="space-y-16">

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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.tvInstallation.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.tvInstallation.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.tvInstallation.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.tvInstallation.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.tvInstallation.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.smartLock.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.smartLock.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.smartLock.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.smartLock.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.smartLock.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services?.cameraInstallation?.title}</h4>
                  <p className="text-primary-foreground/90">
                    {t.services?.cameraInstallation?.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services?.cameraInstallation?.benefits?.title}:</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[0]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[1]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[2]}</li>
                      <li>✔ {t.services?.cameraInstallation?.benefits?.items?.[3]}</li>
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services?.cameraInstallation?.benefits?.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.foodDisposal.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.foodDisposal.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.foodDisposal.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.foodDisposal.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.foodDisposal.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.decoration.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.decoration.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.decoration.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.decoration.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.decoration.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.electrical.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.electrical.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.electrical.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.electrical.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.electrical.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.ceilingFan.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.ceilingFan.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.ceilingFan.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.ceilingFan.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.ceilingFan.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.plumbing.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.plumbing.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.plumbing.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.plumbing.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.plumbing.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.shelves.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.shelves.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.shelves.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.shelves.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.shelves.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.curtains.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.curtains.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.curtains.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.curtains.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.curtains.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.wallRepairs.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.wallRepairs.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.wallRepairs.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.wallRepairs.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.wallRepairs.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.doorRepairs.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.doorRepairs.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.doorRepairs.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.doorRepairs.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.doorRepairs.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.houseNumbers.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.houseNumbers.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.houseNumbers.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.houseNumbers.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.houseNumbers.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.mailbox.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.mailbox.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.mailbox.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.mailbox.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.mailbox.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.safetyDevices.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.safetyDevices.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.safetyDevices.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.safetyDevices.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.safetyDevices.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.gutterCleaning.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.gutterCleaning.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.gutterCleaning.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.gutterCleaning.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.gutterCleaning.benefits.footer}</p>
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
                  <h4 className="text-2xl font-bold text-primary-foreground">{t.services.pressureWashing.title}</h4>
                  <p className="text-primary-foreground/90">{t.services.pressureWashing.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary-foreground">{t.services.pressureWashing.benefits.title}</p>
                    <ul className="space-y-1 text-primary-foreground/80">
                      {t.services.pressureWashing.benefits.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-medium text-primary-foreground mt-4">{t.services.pressureWashing.benefits.footer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Moved after Services */}
      <section className="py-20 bg-gradient-to-br from-secondary via-accent to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-primary-foreground mb-12 text-center animate-fade-in">{t.about?.title || "Sobre Nós"}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
              <div className="space-y-8 animate-fade-in animation-delay-300">
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-foreground mb-2">{t.about?.quality?.title || "Qualidade Garantida"}</h4>
                    <p className="text-primary-foreground/80">{t.about?.quality?.description || "Trabalho profissional com garantia de qualidade em todos os serviços prestados."}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-foreground mb-2">{t.about?.fastService?.title || "Atendimento Rápido"}</h4>
                    <p className="text-primary-foreground/80">{t.about?.fastService?.description || "Serviço ágil e pontual, respeitando sempre o prazo combinado com o cliente."}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-foreground mb-2">{t.about?.expertTeam?.title || "Equipe Especializada"}</h4>
                    <p className="text-primary-foreground/80">{t.about?.expertTeam?.description || "Profissionais experientes e qualificados para atender todas as suas necessidades."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Only 3 comments with initials */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-primary-foreground mb-6">{t.testimonials?.title || "Depoimentos"}</h3>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              {t.testimonials?.subtitle || "Veja o que nossos clientes dizem sobre nosso trabalho"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 bg-card backdrop-blur-sm group animate-fade-in overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <Avatar className="w-14 h-14 mr-4 ring-2 ring-secondary ring-offset-2 group-hover:ring-4 transition-all duration-300 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-secondary to-accent text-primary-foreground font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 50}ms`}} />
                        ))}
                      </div>
                      <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic group-hover:text-card-foreground transition-colors duration-300 relative z-10">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-br from-secondary via-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold text-primary-foreground animate-fade-in">{t.coverage?.title || "Área de Atendimento"}</h3>
            <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                <MapPin className="h-10 w-10 text-primary-foreground animate-bounce" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-primary-foreground animate-fade-in animation-delay-500">{t.coverage?.subtitle || "Miami-Dade e Broward County"}</h4>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in animation-delay-700">
              {t.coverage?.description || "Atendemos toda a região metropolitana de Miami com qualidade e pontualidade."}
            </p>
          </div>
        </div>
      </section>

      {/* Floating Social Buttons */}
      <FloatingWhatsAppButton 
        phoneNumber={whatsappNumber}
        message={whatsappMessage}
      />
      <FloatingSMSButton />
      
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
