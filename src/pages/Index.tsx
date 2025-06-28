import { Phone, MapPin, Clock, CheckCircle, Users, Wrench, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

// WhatsApp SVG Icon Component - Now Green
const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const Index = () => {
  const { t } = useLanguage();
  const whatsappNumber = "+17865937841";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviços de handyman.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: "📺",
      title: t.services.tvInstallation.title,
      description: t.services.tvInstallation.description
    },
    {
      icon: "🛠️",
      title: t.services.furnitureAssembly.title,
      description: t.services.furnitureAssembly.description
    },
    {
      icon: "🏠",
      title: t.services.homeInstallations.title,
      description: t.services.homeInstallations.description
    },
    {
      icon: "🔧",
      title: t.services.repairs.title,
      description: t.services.repairs.description
    },
    {
      icon: "🔐",
      title: t.services.smartLock.title,
      description: t.services.smartLock.description
    }
  ];

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
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <div className="w-48 h-36 transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/947cde52-0a0b-4703-aab8-474e4da03e1b.png" 
                  alt="Mr. Joe & Zé Handyman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* WhatsApp Button - Center */}
            <div className="flex items-center justify-center">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{t.header.whatsappButton}</span>
                <span className="sm:hidden">WhatsApp</span>
              </Button>
            </div>
            
            {/* Language Selector - Right Side */}
            <div className="flex items-center justify-end">
              <div className="scale-75">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b1c33] via-[#1a2a47] to-[#0b1c33] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-pulse">Mr. Joe & Zé Handyman Services</span>
            </h2>
            
            <div className="flex justify-center animate-fade-in animation-delay-600">
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
              >
                <WhatsAppIcon className="h-5 w-5 mr-3" />
                {t.hero.phone}
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-yellow-100/80 animate-fade-in animation-delay-800">
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span>{t.hero.guaranteed}</span>
              </div>
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                <span>{t.hero.fastService}</span>
              </div>
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                <span>{t.hero.expertTeam}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b1c33] to-[#1a2a47]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-6">{t.services.title}</h3>
            <p className="text-xl text-yellow-100/80 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 bg-white/95 backdrop-blur-sm group animate-fade-in overflow-hidden" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e7bc2d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-4xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">{service.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#e7bc2d] transition-colors duration-300 relative z-10">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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
          
          <div className="text-center mt-12 animate-fade-in animation-delay-800">
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
            >
              <WhatsAppIcon className="h-5 w-5 mr-3" />
              {t.testimonials.callToAction}
            </Button>
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

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-6 animate-fade-in">
              <div className="w-36 h-36 rounded-full p-6 shadow-3xl transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/416ae531-d33e-435d-8775-0dee877b4113.png" 
                  alt="Mr. Joe & Zé Handyman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold">{t.header.title}</h3>
                <p className="text-2xl text-[#e7bc2d]">{t.footer.subtitle}</p>
              </div>
            </div>
            
            <div className="animate-fade-in animation-delay-300">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#e7bc2d] to-[#f5d76e] hover:from-[#d4a824] hover:to-[#e7bc2d] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2"
              >
                <WhatsAppIcon className="h-5 w-5 mr-3" />
                {t.footer.whatsapp}
              </Button>
            </div>
            
            <div className="border-t border-gray-700 pt-8 space-y-4 animate-fade-in animation-delay-500">
              <p className="text-gray-400">
                {t.footer.copyright}
              </p>
              <p className="text-gray-400">
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
