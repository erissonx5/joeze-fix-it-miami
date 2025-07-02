import { Phone, MapPin, Clock, CheckCircle, Users, Wrench, Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import FloatingLanguageSelector from '@/components/FloatingLanguageSelector';
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
  const whatsappNumber = "+17865937841";
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
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
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
      {/* Header */}
      <header className={`bg-[#8cbbc3] shadow-lg transition-all duration-300 z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center h-40 md:h-36">
            {/* Logo aumentada */}
            <div 
              className="w-[400px] h-28 sm:w-[500px] sm:h-32 md:w-[700px] md:h-40 lg:w-[800px] lg:h-44 transform hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
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

      {/* Hero Section com imagem ajustada */}
      <section 
        className="relative py-16 text-white overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center"
        style={{
          background: `linear-gradient(rgba(140, 187, 195, 0.4), rgba(149, 67, 12, 0.4)), url('/lovable-uploads/897b0615-1490-4b2f-a9ea-8ed93a5ff745.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8cbbc3]/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Title removed as requested */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #8cbbc3 0%, #95430c 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in">{t.services?.title || "Nossos Serviços"}</h3>
            
            <div className="space-y-16">
              {/* Foto 1m - TV Installation */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
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
                </div>
              </div>

              {/* Foto 2m - Smart Lock */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-200">
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
                </div>
              </div>

              {/* Foto 3m - Furniture Assembly */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-300">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/6a28c4d8-c515-44a8-9734-50222c0cc991.png" 
                    alt={t.services.furnitureAssembly.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.furnitureAssembly.title}</h4>
                  <p className="text-white/90">{t.services.furnitureAssembly.description}</p>
                </div>
              </div>

              {/* Foto 4m - Home Installations */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-400">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/a5d6d146-656b-459a-a38b-6019ec7c2556.png" 
                    alt={t.services.homeInstallations.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.homeInstallations.title}</h4>
                  <p className="text-white/90">{t.services.homeInstallations.description}</p>
                </div>
              </div>

              {/* Foto 5m - Electrical Repairs */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-500">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/f19000d5-5bfc-4d03-8916-db223b89f76a.png" 
                    alt={t.services.repairs.title}
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{t.services.repairs.title}</h4>
                  <p className="text-white/90">{t.services.repairs.description}</p>
                </div>
              </div>

              {/* Foto 6m - Ceiling Fan Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-600">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/17e20262-a7c4-4674-9869-aa599595bd1f.png" 
                    alt="Instalação de Ventilador de Teto"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Ventilador de Teto, Luminárias e Mais</h4>
                  <p className="text-white/90">
                    Instalamos ventiladores de teto, plafons, lustres e luminárias com segurança, nivelamento e aquele acabamento 
                    limpo que faz toda a diferença. Tudo funcionando certinho, sem barulho, sem balanço e com visual impecável.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Perfeito para quem precisa de:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Ventilador firme e bem alinhado</li>
                      <li>✔ Instalação elétrica segura</li>
                      <li>✔ Substituição de luminárias antigas</li>
                      <li>✔ Iluminação bem distribuída no ambiente</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Deixa que a gente sobe na escada por você! 💡🛠</p>
                  </div>
                </div>
              </div>

              {/* Foto 7m - Plumbing Repairs */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-700">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/8dfc4109-a3bb-4b25-a21e-6a98bbacaaaa.png" 
                    alt="Pequenos Reparos Hidráulicos"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Pequenos Reparos Hidráulicos (inclusive a querida duchinha!)</h4>
                  <p className="text-white/90">
                    Vazamento no chuveiro? Torneira pingando? Quer instalar aquela duchinha no vaso sanitário que brasileiro não vive sem? 
                    Pode deixar com a gente!
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Cuidamos de:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Troca de duchas e chuveiros</li>
                      <li>✔ Instalação de duchinha higiênica</li>
                      <li>✔ Vazamentos e pingos em pias ou tanques</li>
                      <li>✔ Ajustes rápidos em registros e sifões</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Serviço rápido, limpo e bem feito. Mr. Joe & Zé resolve — do jeitinho que você gosta!</p>
                  </div>
                </div>
              </div>

              {/* Foto 8m - Shelves Installation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-800">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/cd1a6d6c-9428-4d53-9251-d39814956814.png" 
                    alt="Instalação de Prateleiras"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Prateleiras, Nichos e Itens de Parede</h4>
                  <p className="text-white/90">
                    Instalamos prateleiras, nichos, suportes e pequenos armários com segurança e alinhamento perfeito. 
                    Serviço limpo, bem fixado e com acabamento profissional — seja em drywall, madeira ou alvenaria.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Ideal pra quem busca:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Organização com estilo</li>
                      <li>✔ Fixação firme e nivelada</li>
                      <li>✔ Ganho de espaço e funcionalidade</li>
                      <li>✔ Instalação sem bagunça</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Seu espaço do jeitinho que você imaginou — e fixado do jeito certo com Mr. Joe & Zé! 🛠📐</p>
                  </div>
                </div>
              </div>

              {/* Foto 9m - Curtains Installation */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/c178f191-bc1a-4458-82d8-fda327c94522.png" 
                    alt="Instalação de Cortinas"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Cortinas, Persianas e Acessórios de Janela</h4>
                  <p className="text-white/90">
                    Instalamos todos os tipos de cortinas e persianas com precisão e acabamento profissional. 
                    Nivelamos e fixamos com segurança, respeitando o tipo de parede e estrutura da janela.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Atendemos:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Cortinas de trilho ou varão</li>
                      <li>✔ Persianas rolô, horizontais ou verticais</li>
                      <li>✔ Instalação de suportes e trilhos</li>
                      <li>✔ Fixação em drywall, madeira ou alvenaria</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Visual bonito, nivelado e funcional? Pode chamar Mr. Joe & Zé! 🪟🔧</p>
                  </div>
                </div>
              </div>

              {/* Foto 10m - Wall Repairs and Painting */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-200">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/f8159c24-eccd-4242-be65-bad0e47a7e84.png" 
                    alt="Pequenos Reparos de Parede"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Pequenos Reparos de Parede e Pintura</h4>
                  <p className="text-white/90">
                    Fazemos aquele retoque que sua parede precisa: rachaduras, buracos de suporte antigo, manchas de umidade 
                    ou só uma pintura nova pra dar vida ao ambiente. Serviço limpo, bem feito e com acabamento caprichado.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Ideal pra:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Fechar buracos e imperfeições</li>
                      <li>✔ Corrigir danos em drywall ou alvenaria</li>
                      <li>✔ Pintura em cômodos ou áreas específicas</li>
                      <li>✔ Preparação antes de mudança ou vistoria</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Paredes lisinhas, pintura uniforme e zero bagunça. Com Mr. Joe & Zé é assim! 🎨🧱</p>
                  </div>
                </div>
              </div>

              {/* Foto 11m - Door Repairs */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-300">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/414c64ad-9cc0-45bd-9961-a21ee20d7c63.png" 
                    alt="Reparos em Portas"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Reparos em Portas, Dobradiças e Ajustes de Alinhamento</h4>
                  <p className="text-white/90">
                    Porta arrastando, fazendo barulho ou fora do prumo? A gente resolve! Realinhamos dobradiças, ajustamos fechaduras e deixamos sua porta funcionando lisinha como deve ser.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Serviço ideal para:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Alinhamento e nivelamento de portas</li>
                      <li>✔ Substituição ou fixação de dobradiças</li>
                      <li>✔ Portas que não fecham direito</li>
                      <li>✔ Reforço em parafusos soltos ou danificados</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Porta funcionando como nova, sem esforço, sem barulho e com o toque certo do Mr. Joe & Zé! 🚪🔩</p>
                  </div>
                </div>
              </div>

              {/* Foto 12m - House Numbers */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-400">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/959fb1fd-674c-4ddd-a395-bf6d5ab4766f.png" 
                    alt="Instalação de Número Residencial"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Número Residencial, Placas e Itens de Fachada</h4>
                  <p className="text-white/90">
                    Fixamos o número da casa, placas decorativas, sinalizações e outros itens externos com precisão e acabamento profissional — sempre respeitando o estilo da fachada e garantindo durabilidade.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Atendemos:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Instalação de números residenciais</li>
                      <li>✔ Placas de sinalização (entrada, private, etc.)</li>
                      <li>✔ Suportes de correspondência ou delivery</li>
                      <li>✔ Fixação nivelada e resistente ao tempo</li>
                    </ul>
                    <p className="font-medium text-white mt-4">A primeira impressão da sua casa começa na fachada — e com Mr. Joe & Zé, ela fica no capricho! 🏠🔩</p>
                  </div>
                </div>
              </div>

              {/* Foto 13m - Mailbox Installation */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-500">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/d37cac64-4de4-43be-bc47-e1aed44d0749.png" 
                    alt="Instalação de Caixa de Correio"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Caixa de Correio, Suportes Externos e Fixações no Solo</h4>
                  <p className="text-white/90">
                    Instalamos caixas de correio com base firme, nivelamento e acabamento limpo. Também fixamos outros itens no solo com segurança e durabilidade, seja em concreto, grama ou terra compactada.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Atendemos:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Instalação de mailbox com concreto</li>
                      <li>✔ Fixação de postes para cercas leves</li>
                      <li>✔ Suportes de jardim, sinalização ou iluminação solar</li>
                      <li>✔ Reforço de estruturas já existentes</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Tudo reto, bem fixado e pronto pra durar — pode confiar na dupla Mr. Joe & Zé! 📬🧱</p>
                  </div>
                </div>
              </div>

              {/* Foto 14m - Safety Devices */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-600">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/55b236dd-dd0e-4c37-8552-0da5e06c60e5.png" 
                    alt="Instalação de Detectores de Fumaça"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Instalação de Detectores de Fumaça, Sensores e Dispositivos de Segurança</h4>
                  <p className="text-white/90">
                    Instalamos detectores de fumaça, monóxido de carbono, sensores de presença, alarmes e outros dispositivos de segurança doméstica. Tudo com o posicionamento correto e fixação segura no teto ou parede.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Atendemos:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Instalação de smoke detectors e CO detectors</li>
                      <li>✔ Alarmes de segurança e campainhas inteligentes</li>
                      <li>✔ Sensores de movimento e iluminação automática</li>
                      <li>✔ Substituição e manutenção de unidades antigas</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Sua casa mais segura com instalação profissional e zero dor de cabeça. Mr. Joe & Zé cuidam disso pra você! 🔧🛡</p>
                  </div>
                </div>
              </div>

              {/* Foto 15m - Gutter Cleaning */}
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in animation-delay-700">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/11826f76-fa7d-4411-91bf-7a6dec1746a8.png" 
                    alt="Limpeza de Calhas"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Limpeza de Calhas (Gutters)</h4>
                  <p className="text-white/90">
                    Fazemos a limpeza completa das calhas e dutos de escoamento da sua casa. Removemos folhas, sujeira e obstruções para evitar infiltrações, danos à estrutura e acúmulo de água.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Benefícios do serviço:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Prevenção contra entupimentos e transbordamentos</li>
                      <li>✔ Evita danos ao telhado e infiltrações nas paredes</li>
                      <li>✔ Ideal antes do período de chuvas</li>
                      <li>✔ Serviço limpo, seguro e com descarte adequado dos resíduos</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Sua calha funcionando como deve ser — sem bagunça, sem riscos. Pode chamar Mr. Joe & Zé! 🍂🧤</p>
                  </div>
                </div>
              </div>

              {/* Foto 16m - Pressure Washing */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 animate-fade-in animation-delay-800">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/1dcff3c4-6126-4109-89f6-c8509077ec91.png" 
                    alt="Lavagem com Jato de Alta Pressão"
                    className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-bold text-white">Lavagem de Calçadas com Jato de Alta Pressão (Pressure Washing)</h4>
                  <p className="text-white/90">
                    Sua calçada tá encardida, cheia de limo ou com manchas difíceis? A gente resolve com lavagem de alta pressão! Removemos sujeira pesada, mofo, gordura e até aquelas marcas de pneu que parecem eternas.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Atendemos:</p>
                    <ul className="space-y-1 text-white/80">
                      <li>✔ Calçadas, varandas e entradas de garagem</li>
                      <li>✔ Pátios, muros e paredes externas</li>
                      <li>✔ Limpeza profunda sem produtos agressivos</li>
                      <li>✔ Equipamento profissional e resultado visível na hora</li>
                    </ul>
                    <p className="font-medium text-white mt-4">Sua área externa como nova — limpa, segura e com visual renovado. Com Mr. Joe & Zé, é pressão e perfeição! 💦🧼</p>
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
            <h3 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">{t.about.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
              <div className="space-y-8 animate-fade-in animation-delay-300">
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.quality.title}</h4>
                    <p className="text-white/80">{t.about.quality.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.fastService.title}</h4>
                    <p className="text-white/80">{t.about.fastService.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.expertTeam.title}</h4>
                    <p className="text-white/80">{t.about.expertTeam.description}</p>
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
            <h3 className="text-4xl font-bold text-white mb-6">{t.testimonials.title}</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
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
            <h3 className="text-4xl font-bold text-white animate-fade-in">{t.coverage.title}</h3>
            <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8cbbc3] to-teal-400 rounded-full flex items-center justify-center shadow-xl">
                <MapPin className="h-10 w-10 text-white animate-bounce" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white animate-fade-in animation-delay-500">{t.coverage.subtitle}</h4>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-700">
              {t.coverage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton 
        phoneNumber={whatsappNumber}
        message={whatsappMessage}
      />
      
      <FloatingLanguageSelector />

      {/* Footer - WhatsApp button removed */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Title Section */}
            <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold">{t.header.title}</h3>
                <p className="text-xl md:text-2xl text-[#95430c]">{t.footer.subtitle}</p>
              </div>
            </div>
            
            {/* Buttons Section - Only Instagram now */}
            <div className="flex justify-center items-center animate-fade-in animation-delay-200">
              <Button 
                onClick={openInstagram}
                variant="outline"
                className="border-2 border-[#95430c] text-[#95430c] hover:bg-[#95430c] hover:text-white font-bold px-6 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
            </div>
            
            {/* Footer Info */}
            <div className="border-t border-gray-700 pt-8 space-y-4 animate-fade-in animation-delay-500">
              <p className="text-gray-400 text-center">
                {t.footer.copyright}
              </p>
              <p className="text-gray-400 text-center">
                {t.footer.coverage}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
