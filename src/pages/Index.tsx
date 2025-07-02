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
      <header className={`bg-[#8cbbc3] shadow-lg border-b-4 border-gray-100 transition-all duration-300 z-50 ${
        isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-start h-24">
            {/* Left-aligned Logo */}
            <div 
              className="w-[450px] h-20 md:w-[500px] md:h-22 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
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
      {isScrolled && <div className="h-[108px]"></div>}

      {/* Hero Section */}
      <section 
        className="relative py-20 text-white overflow-hidden bg-contain bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{
          background: `linear-gradient(rgba(140, 187, 195, 0.3), rgba(149, 67, 12, 0.3)), url('/lovable-uploads/234561c0-771c-4702-a7a2-ddafe172368f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8cbbc3]/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
              <span className="bg-gradient-to-r from-[#95430c] to-orange-600 bg-clip-text text-transparent animate-pulse">Mr. Joe & Zé Handyman Services</span>
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Footer - Logo removed */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Title Section - Logo removed */}
            <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold">{t.header.title}</h3>
                <p className="text-xl md:text-2xl text-[#95430c]">{t.footer.subtitle}</p>
              </div>
            </div>
            
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in animation-delay-200">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#95430c] to-orange-600 hover:from-[#7a350a] hover:to-[#95430c] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                {t.footer.whatsapp}
              </Button>
              
              <Button 
                onClick={openInstagram}
                variant="outline"
                className="border-2 border-[#95430c] text-[#95430c] hover:bg-[#95430c] hover:text-white font-bold px-6 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 w-full sm:w-auto"
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
