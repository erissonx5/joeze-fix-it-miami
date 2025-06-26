
import { Phone, MapPin, Clock, CheckCircle, Users, Wrench, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

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
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Miami Beach",
      rating: 5,
      comment: t.testimonials.reviews.maria
    },
    {
      name: "Carlos Rodriguez",
      location: "Aventura",
      rating: 5,
      comment: t.testimonials.reviews.carlos
    },
    {
      name: "Ana Costa",
      location: "Doral",
      rating: 5,
      comment: t.testimonials.reviews.ana
    },
    {
      name: "Roberto Santos",
      location: "Brickell",
      rating: 5,
      comment: t.testimonials.reviews.roberto
    },
    {
      name: "Lucia Pereira",
      location: "Coral Gables",
      rating: 5,
      comment: t.testimonials.reviews.lucia
    },
    {
      name: "Fernando Lima",
      location: "Pembroke Pines",
      rating: 5,
      comment: t.testimonials.reviews.fernando
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#0b1c33'}}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/e380062f-fcc2-43b7-9586-49b26657ad05.png" 
                  alt="Mr. Joe & Zé Handyman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t.header.title}</h1>
                <p className="text-sm text-[#e7bc2d] font-medium">{t.header.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <LanguageSelector />
              <Button 
                onClick={openWhatsApp}
                className="bg-[rgb(231,188,45)] hover:bg-[#e7bc2d] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Phone className="h-4 w-4 mr-2" />
                {t.header.whatsappButton}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{backgroundColor: '#0b1c33'}} className="text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="text-yellow-300 animate-pulse">{t.hero.title}</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 font-light animate-fade-in animation-delay-300">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in animation-delay-500">
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-[rgb(231,188,45)] text-white hover:bg-[#e7bc2d] font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2"
              >
                <Phone className="h-5 w-5 mr-3" />
                {t.hero.phone}
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-yellow-100 animate-fade-in animation-delay-700">
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{t.hero.guaranteed}</span>
              </div>
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <Clock className="h-5 w-5 mr-2" />
                <span>{t.hero.fastService}</span>
              </div>
              <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
                <Users className="h-5 w-5 mr-2" />
                <span>{t.hero.expertTeam}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-4">{t.services.title}</h3>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{service.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e7bc2d] transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-8 animate-fade-in">{t.about.title}</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in animation-delay-300">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CheckCircle className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{t.about.quality.title}</h4>
                      <p className="text-yellow-100">{t.about.quality.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Clock className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{t.about.fastService.title}</h4>
                      <p className="text-yellow-100">{t.about.fastService.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Users className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{t.about.expertTeam.title}</h4>
                      <p className="text-yellow-100">{t.about.expertTeam.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-[rgb(231,188,45)] shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in animation-delay-500">
                <h4 className="text-2xl font-bold mb-4">{t.about.whatsappTitle}</h4>
                <p className="text-lg mb-6 text-gray-700">
                  {t.about.whatsappSubtitle}
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-[rgb(231,188,45)] text-white hover:bg-[#e7bc2d] font-bold w-full py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t.about.whatsappButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-white mb-4">{t.testimonials.title}</h3>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 50}ms`}} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic group-hover:text-gray-900 transition-colors duration-300">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in animation-delay-800">
            <Button 
              onClick={openWhatsApp}
              className="bg-[rgb(231,188,45)] hover:bg-[#e7bc2d] text-white font-bold px-8 py-3 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2"
            >
              <Phone className="h-5 w-5 mr-3" />
              {t.testimonials.callToAction}
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-8 animate-fade-in">{t.coverage.title}</h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-fade-in animation-delay-300">
              <MapPin className="h-12 w-12 text-white animate-bounce" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4 animate-fade-in animation-delay-500">{t.coverage.subtitle}</h4>
            <p className="text-lg text-yellow-100 mb-8 animate-fade-in animation-delay-700">
              {t.coverage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/e380062f-fcc2-43b7-9586-49b26657ad05.png" 
                  alt="Mr. Joe & Zé Handyman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.header.title} Handyman</h3>
                <p className="text-[#e7bc2d]">{t.footer.subtitle}</p>
              </div>
            </div>
            
            <div className="mb-8 animate-fade-in animation-delay-300">
              <Button 
                onClick={openWhatsApp}
                className="bg-[rgb(231,188,45)] hover:bg-[#e7bc2d] text-white font-bold px-8 py-3 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2"
              >
                <Phone className="h-5 w-5 mr-3" />
                {t.footer.whatsapp}
              </Button>
            </div>
            
            <div className="border-t border-gray-700 pt-8 animate-fade-in animation-delay-500">
              <p className="text-gray-400">
                {t.footer.copyright}
              </p>
              <p className="text-gray-400 mt-2">
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
