
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre",
      contact: "Contato"
    },
    hero: {
      title: "Mr. Joe & Zé Handyman Miami",
      subtitle: "Serviços profissionais de reparo e manutenção residencial em Miami",
      cta: "Entre em Contato"
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para sua casa e negócio",
      laundryService: {
        title: "Lavagem Profissional para Salões, Spas e Negócios Locais",
        question1: "Tem salão de beleza, clínica estética, barbearia ou spa?",
        question2: "Ainda perde tempo lavando toalhas, lençóis ou roupões?",
        solution: "Pode deixar com a gente!",
        description: "A gente busca, lava e devolve tudo dobrado, limpo e pronto pro uso.",
        weHandleTitle: "Cuidamos de:",
        item1: "✔ Toalhas de salão, clínica ou estética",
        item2: "✔ Roupões, lençóis, fronhas e mantas",
        item3: "✔ Lavagem e dobra com padrão profissional",
        item4: "✔ Produtos de qualidade que cuidam dos tecidos",
        item5: "✔ Entrega pontual direto no seu estabelecimento",
        serviceType: "🚐 Serviço completo tipo wash and fold.",
        convenience: "Você não se preocupa com nada — é só usar e pronto.",
        footer: "Mr. Joe & Zé resolve — do jeitinho que seu negócio precisa!"
      },
      tvInstallation: {
        title: "Instalação de TV",
        description: "Instalação profissional de TVs na parede com suporte incluído",
        benefits: {
          title: "Benefícios:",
          items: [
            "Instalação segura e profissional",
            "Suporte incluído no serviço",
            "Organização dos cabos",
            "Garantia do serviço"
          ],
          footer: "Sua TV instalada do jeito certo!"
        }
      },
      smartLock: {
        title: "Fechadura Inteligente",
        description: "Instalação de fechaduras inteligentes para maior segurança",
        benefits: {
          title: "Vantagens:",
          items: [
            "Acesso por código ou aplicativo",
            "Maior segurança para sua casa",
            "Instalação profissional",
            "Suporte técnico incluído"
          ],
          footer: "Tecnologia e segurança em suas mãos!"
        }
      },
      furnitureAssembly: {
        title: "Montagem de Móveis",
        description: "Montamos seus móveis de forma rápida e eficiente.",
        benefits: {
          title: "Benefícios:",
          items: [
            "Montagem rápida e eficiente",
            "Profissionais qualificados",
            "Serviço com garantia",
            "Evite o estresse da montagem"
          ],
          footer: "Seus móveis montados sem complicação!"
        }
      },
      electricalRepair: {
        title: "Reparos Elétricos",
        description: "Serviços de reparo elétrico para sua casa ou empresa.",
        benefits: {
          title: "Benefícios:",
          items: [
            "Diagnóstico preciso",
            "Reparos seguros e eficientes",
            "Profissionais certificados",
            "Atendimento rápido"
          ],
          footer: "Seus problemas elétricos resolvidos!"
        }
      },
      plumbingRepair: {
        title: "Reparos Hidráulicos",
        description: "Serviços de reparo hidráulico para vazamentos e instalações.",
        benefits: {
          title: "Benefícios:",
          items: [
            "Detecção de vazamentos",
            "Reparos duráveis",
            "Instalações seguras",
            "Orçamento detalhado"
          ],
          footer: "Soluções para seus problemas hidráulicos!"
        }
      },
    },
    contact: {
      title: "Entre em Contato",
      description: "Estamos prontos para atender suas necessidades.",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        send: "Enviar"
      },
      successMessage: "Mensagem enviada com sucesso!",
      errorMessage: "Ocorreu um erro ao enviar a mensagem."
    },
    footer: {
      copyright: "© 2024 Mr. Joe & Zé Handyman Miami. Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Mr. Joe & Zé Handyman Miami",
      subtitle: "Professional home repair and maintenance services in Miami",
      cta: "Get in Touch"
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for your home and business",
      laundryService: {
        title: "Professional Laundry for Salons, Spas and Local Businesses",
        question1: "Do you have a beauty salon, aesthetic clinic, barbershop or spa?",
        question2: "Still wasting time washing towels, sheets or robes?",
        solution: "Leave it to us!",
        description: "We pick up, wash and return everything folded, clean and ready to use.",
        weHandleTitle: "We take care of:",
        item1: "✔ Salon, clinic or aesthetic towels",
        item2: "✔ Robes, sheets, pillowcases and blankets",
        item3: "✔ Professional standard washing and folding",
        item4: "✔ Quality products that care for fabrics",
        item5: "✔ Punctual delivery directly to your establishment",
        serviceType: "🚐 Complete wash and fold service.",
        convenience: "You don't worry about anything — just use and that's it.",
        footer: "Mr. Joe & Zé solves — just the way your business needs!"
      },
      tvInstallation: {
        title: "TV Installation",
        description: "Professional TV wall mounting with bracket included",
        benefits: {
          title: "Benefits:",
          items: [
            "Safe and professional installation",
            "Bracket included in service",
            "Cable management",
            "Service warranty"
          ],
          footer: "Your TV installed the right way!"
        }
      },
      smartLock: {
        title: "Smart Lock",
        description: "Smart lock installation for enhanced security",
        benefits: {
          title: "Advantages:",
          items: [
            "Access by code or app",
            "Enhanced home security",
            "Professional installation",
            "Technical support included"
          ],
          footer: "Technology and security in your hands!"
        }
      },
      furnitureAssembly: {
        title: "Furniture Assembly",
        description: "We assemble your furniture quickly and efficiently.",
        benefits: {
          title: "Benefits:",
          items: [
            "Fast and efficient assembly",
            "Qualified professionals",
            "Service with warranty",
            "Avoid the stress of assembly"
          ],
          footer: "Your furniture assembled without complication!"
        }
      },
      electricalRepair: {
        title: "Electrical Repairs",
        description: "Electrical repair services for your home or business.",
        benefits: {
          title: "Benefits:",
          items: [
            "Accurate diagnosis",
            "Safe and efficient repairs",
            "Certified professionals",
            "Fast service"
          ],
          footer: "Your electrical problems solved!"
        }
      },
      plumbingRepair: {
        title: "Plumbing Repairs",
        description: "Plumbing repair services for leaks and installations.",
        benefits: {
          title: "Benefits:",
          items: [
            "Leak detection",
            "Durable repairs",
            "Safe installations",
            "Detailed budget"
          ],
          footer: "Solutions to your plumbing problems!"
        }
      },
    },
    contact: {
      title: "Contact Us",
      description: "We are ready to meet your needs.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send"
      },
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred while sending the message."
    },
    footer: {
      copyright: "© 2024 Mr. Joe & Zé Handyman Miami. All rights reserved."
    }
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('pt');
  
  const t = translations[language as keyof typeof translations] || translations.pt;
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
