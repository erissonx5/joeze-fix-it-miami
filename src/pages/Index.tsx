import { Phone, MapPin, Clock, CheckCircle, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const whatsappNumber = "+17865937841";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviços de handyman.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: "📺",
      title: "Instalação de TVs",
      description: "Drywall, alvenaria, suporte articulado - instalação segura e profissional"
    },
    {
      icon: "🛠️",
      title: "Montagem de Móveis",
      description: "Montagem completa de móveis com precisão e cuidado"
    },
    {
      icon: "🏠",
      title: "Instalações Residenciais",
      description: "Cortinas, prateleiras, luminárias e muito mais"
    },
    {
      icon: "🔧",
      title: "Reparos Elétricos/Hidráulicos",
      description: "Troca de torneiras, maçanetas e ajustes leves"
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#0b1c33'}}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[rgb(231,188,45)] rounded-lg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mr. Joe & Zé</h1>
                <p className="text-sm text-[#e7bc2d] font-medium">Handyman Services</p>
              </div>
            </div>
            <Button 
              onClick={openWhatsApp}
              className="bg-[rgb(231,188,45)] hover:bg-[#e7bc2d] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-4 w-4 mr-2" />
              Chama no Zap
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(231,188,45)] to-[#e7bc2d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Um resolve, o outro <span className="text-yellow-100">garante</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 font-light">
              Serviços de handyman profissionais em Miami-Dade e Broward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-white text-[rgb(231,188,45)] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                WhatsApp: (786) 593-7841
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-yellow-100">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Serviço Garantido</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Equipe Experiente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h3>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de handyman para sua casa ou escritório
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
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
            <h3 className="text-4xl font-bold text-white mb-8">Por que escolher Mr. Joe & Zé?</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Qualidade Garantida</h4>
                      <p className="text-yellow-100">Um resolve com expertise, o outro garante a qualidade do serviço.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Atendimento Rápido</h4>
                      <p className="text-yellow-100">Resposta rápida no WhatsApp e agendamento flexível.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-[rgb(231,188,45)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Equipe Experiente</h4>
                      <p className="text-yellow-100">Anos de experiência em serviços residenciais e comerciais.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-[rgb(231,188,45)]">
                <h4 className="text-2xl font-bold mb-4">👉 Chama no Zap</h4>
                <p className="text-lg mb-6 text-gray-700">
                  Orçamento gratuito e atendimento personalizado via WhatsApp
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-[rgb(231,188,45)] text-white hover:bg-[#e7bc2d] font-bold w-full py-3 text-lg rounded-lg transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (786) 593-7841
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20" style={{backgroundColor: '#0b1c33'}}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Área de Atendimento</h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Miami-Dade e Broward</h4>
            <p className="text-lg text-yellow-100 mb-8">
              Atendemos toda a região de Miami-Dade e Broward com serviços de handyman profissionais e confiáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-[rgb(231,188,45)] rounded-lg flex items-center justify-center">
                <Wrench className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mr. Joe & Zé Handyman</h3>
                <p className="text-[#e7bc2d]">Um resolve, o outro garante</p>
              </div>
            </div>
            
            <div className="mb-8">
              <Button 
                onClick={openWhatsApp}
                className="bg-[rgb(231,188,45)] hover:bg-[#e7bc2d] text-white font-bold px-8 py-3 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                WhatsApp: (786) 593-7841
              </Button>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Mr. Joe & Zé Handyman. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 mt-2">
                Atendimento em Miami-Dade e Broward
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
