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
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviços de handyman.";
  
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
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodriguez",
      location: "Aventura",
      rating: 5,
      comment: t.testimonials.reviews.carlos,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      location: "Doral",
      rating: 5,
      comment: t.testimonials.reviews.ana,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Santos",
      location: "Brickell",
      rating: 5,
      comment: t.testimonials.reviews.roberto,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lucia Pereira",
      location: "Coral Gables",
      rating: 5,
      comment: t.testimonials.reviews.lucia,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernando Lima",
      location: "Pembroke Pines",
      rating: 5,
      comment: t.testimonials.reviews.fernando,
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0b1c33]">
      {/* Header */}
      <header className={`bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-gray-100 transition-all duration-300 z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center h-24">
            {/* Centered Logo */}
            <div 
              className="w-80 h-60 md:w-96 md:h-72 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img 
                src="/lovable-uploads/557e5974-f1e0-4660-bb57-97f7347a0e34.png" 
                alt="Mr. Joe & Zé Handyman Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer when header is fixed */}
      {isScrolled && <div className="h-[100px]"></div>}

      {/* Hero Section */}
      <section 
        className="relative py-20 text-white overflow-hidden bg-contain bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 28, 51, 0.3), rgba(26, 42, 71, 0.3)), url('/lovable-uploads/234561c0-771c-4702-a7a2-ddafe172368f.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-pulse">Mr. Joe & Zé Handyman Services</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Gutter Cleaning Section - Text left, Image right */}
      <section className="py-20 bg-gradient-to-br from-[#1a2a47] to-[#0b1c33]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 animate-fade-in order-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Limpeza de Calhas</h3>
                <p className="text-lg text-yellow-100/90 leading-relaxed">
                  Na Mr. Joe & Zé, cuidamos da limpeza das suas calhas para evitar entupimentos, infiltrações e danos à sua casa.
                  Com ferramentas certas e atenção aos detalhes, removemos folhas, sujeira e tudo que atrapalha o fluxo da água.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Serviço seguro e rápido</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Equipe experiente e cuidadosa</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Atendimento com hora marcada</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                  <p className="text-xl font-semibold text-[#e7bc2d] text-center">
                    Chame a Mr. Joe & Zé e mantenha suas calhas limpas o ano todo
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-in animation-delay-300 order-2">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <img 
                    src="/lovable-uploads/cab8cc46-6838-40e3-a443-bcd9e64c5858.png" 
                    alt="Limpeza de Calhas - Mr. Joe & Zé"
                    className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Services Section - Image left, Text right */}
      <section className="py-20 bg-gradient-to-br from-[#1a2a47] to-[#0b1c33]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-1 animate-fade-in">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <img 
                    src="/lovable-uploads/b3f178d0-5e61-46eb-b629-bc67565836d6.png" 
                    alt="Serviços Elétricos - Mr. Joe & Zé"
                    className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="order-2 space-y-6 animate-fade-in animation-delay-300">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Serviços Elétricos</h3>
                <p className="text-lg text-yellow-100/90 leading-relaxed">
                  Vai instalar um ventilador de teto, trocar luminária ou fazer aquele ajuste elétrico que tá pendente faz tempo? A Mr. Joe & Zé faz isso pra você — com segurança, cuidado e capricho no acabamento.
                </p>
                
                <p className="text-lg text-yellow-100/90 leading-relaxed">
                  Seja pra deixar sua casa mais fresca ou pra melhorar a iluminação, pode contar com a gente pra resolver do jeito certo.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Instalação de ventiladores e luminárias</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Troca de tomadas e interruptores</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Ajustes elétricos e serviços rápidos</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Trabalho limpo, funcional e com atenção aos detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Services Section - Text left, Image right */}
      <section className="py-20 bg-gradient-to-br from-[#0b1c33] to-[#1a2a47]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 animate-fade-in order-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Mr. Joe & Zé – Deixa que a gente resolve!</h3>
                </div>
                
                <p className="text-lg text-yellow-100/90 leading-relaxed">
                  Tá precisando instalar prateleiras ou arrumar aquela torneira que não para de pingar?
                  A Mr. Joe & Zé cuida disso pra você — com cuidado, precisão e sem enrolação.
                </p>
                
                <p className="text-lg text-yellow-100/90 leading-relaxed">
                  Seja para dar um toque novo na sala ou fazer aquele conserto no banheiro, pode contar com a gente.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Prateleiras alinhadas e seguras</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Torneiras ajustadas e funcionando direitinho</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-yellow-100/90 text-lg">Serviço limpo, rápido e bem feito</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                  <p className="text-xl font-semibold text-[#e7bc2d] text-center">
                    Mr. Joe & Zé – Simples, prático e resolvido.
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-in animation-delay-300 order-2">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <img 
                    src="/lovable-uploads/7d32791e-976c-49c4-886a-14063006cbac.png" 
                    alt="Mr. Joe & Zé - Serviços Gerais"
                    className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2a47] to-[#0b1c33]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">{t.about.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in animation-delay-300">
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.quality.title}</h4>
                    <p className="text-yellow-100/80">{t.about.quality.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.fastService.title}</h4>
                    <p className="text-yellow-100/80">{t.about.fastService.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t.about.expertTeam.title}</h4>
                    <p className="text-yellow-100/80">{t.about.expertTeam.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in animation-delay-500">
                <div className="text-center space-y-8">
                  <h4 className="text-2xl font-bold text-gray-900">{t.about.whatsappTitle}</h4>
                  <p className="text-lg text-gray-700">
                    {t.about.whatsappSubtitle}
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-bold w-full py-3 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    {t.about.whatsappButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b1c33] to-[#1a2a47]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-6">{t.testimonials.title}</h3>
            <p className="text-xl text-yellow-100/80 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 bg-white/95 backdrop-blur-sm group animate-fade-in overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e7bc2d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <Avatar className="w-14 h-14 mr-4 ring-2 ring-[#e7bc2d] ring-offset-2 group-hover:ring-4 transition-all duration-300 shadow-lg">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
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
      <section className="py-20 bg-gradient-to-br from-[#1a2a47] to-[#0b1c33]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold text-white animate-fade-in">{t.coverage.title}</h3>
            <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e7bc2d] to-[#f5d76e] rounded-full flex items-center justify-center shadow-xl">
                <MapPin className="h-10 w-10 text-white animate-bounce" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white animate-fade-in animation-delay-500">{t.coverage.subtitle}</h4>
            <p className="text-lg text-yellow-100/80 max-w-2xl mx-auto animate-fade-in animation-delay-700">
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

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo and Title Section */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 animate-fade-in">
              <div 
                className="w-32 h-32 rounded-full p-4 shadow-3xl transform hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
                onClick={handleLogoClick}
              >
                <img 
                  src="/lovable-uploads/557e5974-f1e0-4660-bb57-97f7347a0e34.png" 
                  alt="Mr. Joe & Zé Handyman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold">{t.header.title}</h3>
                <p className="text-xl md:text-2xl text-[#e7bc2d]">{t.footer.subtitle}</p>
              </div>
            </div>
            
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in animation-delay-200">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                {t.footer.whatsapp}
              </Button>
              
              <Button 
                onClick={openInstagram}
                variant="outline"
                className="border-2 border-[#e7bc2d] text-[#e7bc2d] hover:bg-[#e7bc2d] hover:text-white font-bold px-6 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 w-full sm:w-auto"
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
