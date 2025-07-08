
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
    importantNotice: {
      title: "Aviso Importante",
      subtitle: "Atendemos Miami-Dade e Broward County",
      description: "Para um atendimento mais rápido, entre em contato pelo WhatsApp clicando no botão flutuante.",
      button: "Entendi"
    },
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre Nós",
      contact: "Contato"
    },
    hero: {
      title: "Mr. Joe & Zé Handyman Miami",
      subtitle: "Serviços profissionais de reparo e manutenção residencial em Miami",
      cta: "Entre em Contato",
      phone: "Olá! Gostaria de solicitar um orçamento para serviços de handyman."
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
        title: "📺 Instalação de TV na Parede",
        description: "Instalação profissional de TVs na parede com suporte incluído. Deixe sua sala moderna e organizada.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Instalação segura e profissional",
            "✔ Suporte incluído no serviço",
            "✔ Organização dos cabos",
            "✔ Garantia do serviço"
          ],
          footer: "Sua TV instalada do jeito certo!"
        }
      },
      smartLock: {
        title: "🔐 Fechadura Inteligente",
        description: "Instalação de fechaduras inteligentes para maior segurança da sua casa ou negócio.",
        benefits: {
          title: "Vantagens:",
          items: [
            "✔ Acesso por código ou aplicativo",
            "✔ Maior segurança para sua casa",
            "✔ Instalação profissional",
            "✔ Suporte técnico incluído"
          ],
          footer: "Tecnologia e segurança em suas mãos!"
        }
      },
      foodDisposal: {
        title: "🗑️ Instalação de Triturador de Alimentos",
        description: "Instalação profissional de trituradores de alimentos para sua cozinha. Mais praticidade no dia a dia.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Maior praticidade na cozinha",
            "✔ Redução de resíduos orgânicos",
            "✔ Instalação segura e profissional",
            "✔ Manutenção incluída"
          ],
          footer: "Sua cozinha mais prática e limpa!"
        }
      },
      decoration: {
        title: "🎨 Decoração e Organização",
        description: "Serviços de decoração e organização para deixar sua casa mais bonita e funcional.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Ambiente mais organizado",
            "✔ Decoração personalizada",
            "✔ Otimização de espaços",
            "✔ Consultoria profissional"
          ],
          footer: "Sua casa mais bonita e organizada!"
        }
      },
      electrical: {
        title: "⚡ Reparos Elétricos",
        description: "Serviços completos de reparo e instalação elétrica com segurança e qualidade.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Diagnóstico preciso de problemas",
            "✔ Reparos seguros e duráveis",
            "✔ Profissionais certificados",
            "✔ Atendimento rápido e eficiente"
          ],
          footer: "Seus problemas elétricos resolvidos com segurança!"
        }
      },
      ceilingFan: {
        title: "💨 Instalação de Ventilador de Teto",
        description: "Instalação profissional de ventiladores de teto para maior conforto e economia.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Instalação segura e profissional",
            "✔ Melhora a circulação de ar",
            "✔ Reduz custos com ar condicionado",
            "✔ Garantia do serviço"
          ],
          footer: "Mais conforto e economia na sua casa!"
        }
      },
      plumbing: {
        title: "🔧 Reparos Hidráulicos",
        description: "Serviços completos de reparo e instalação hidráulica com materiais de qualidade.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Detecção precisa de vazamentos",
            "✔ Reparos duráveis e eficientes",
            "✔ Instalações seguras",
            "✔ Orçamento detalhado"
          ],
          footer: "Soluções completas para seus problemas hidráulicos!"
        }
      },
      shelves: {
        title: "📚 Instalação de Prateleiras",
        description: "Instalação de prateleiras para otimizar o espaço da sua casa com estilo.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Otimização de espaços",
            "✔ Instalação segura na parede",
            "✔ Diversos modelos disponíveis",
            "✔ Organização personalizada"
          ],
          footer: "Mais organização e aproveitamento de espaço!"
        }
      },
      curtains: {
        title: "🪟 Instalação de Cortinas",
        description: "Instalação profissional de cortinas e persianas para maior privacidade e elegância.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Instalação precisa e segura",
            "✔ Melhora a privacidade",
            "✔ Controle de luminosidade",
            "✔ Acabamento profissional"
          ],
          footer: "Sua casa mais privativa e elegante!"
        }
      },
      wallRepairs: {
        title: "🎨 Reparos de Parede e Pintura",
        description: "Serviços de reparo e pintura de paredes com acabamento profissional.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Reparo de buracos e rachaduras",
            "✔ Pintura profissional",
            "✔ Acabamento impecável",
            "✔ Materiais de qualidade"
          ],
          footer: "Suas paredes como novas!"
        }
      },
      doorRepairs: {
        title: "🚪 Reparos de Portas",
        description: "Serviços de reparo e ajuste de portas para perfeito funcionamento.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Ajuste de dobradiças",
            "✔ Reparo de fechaduras",
            "✔ Alinhamento de portas",
            "✔ Instalação de novos trincos"
          ],
          footer: "Suas portas funcionando perfeitamente!"
        }
      },
      houseNumbers: {
        title: "🏠 Instalação de Números Residenciais",
        description: "Instalação de números e placas de identificação residencial com estilo.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Fácil identificação da casa",
            "✔ Instalação segura",
            "✔ Diversos modelos disponíveis",
            "✔ Melhora o visual da fachada"
          ],
          footer: "Sua casa mais fácil de encontrar!"
        }
      },
      mailbox: {
        title: "📮 Instalação de Caixa de Correio",
        description: "Instalação de caixas de correio residenciais e comerciais com segurança.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Instalação segura e duradoura",
            "✔ Diversos modelos disponíveis",
            "✔ Proteção da correspondência",
            "✔ Cumprimento das normas postais"
          ],
          footer: "Sua correspondência sempre segura!"
        }
      },
      safetyDevices: {
        title: "🚨 Instalação de Dispositivos de Segurança",
        description: "Instalação de detectores de fumaça, alarmes e outros dispositivos de proteção.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Maior segurança para família",
            "✔ Detectores de fumaça e gás",
            "✔ Instalação profissional",
            "✔ Testes de funcionamento"
          ],
          footer: "Sua família mais protegida!"
        }
      },
      gutterCleaning: {
        title: "🏠 Limpeza de Calhas",
        description: "Serviços de limpeza e manutenção de calhas e rufos para proteção da sua casa.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Prevenção de entupimentos",
            "✔ Proteção contra infiltrações",
            "✔ Limpeza completa",
            "✔ Verificação de vazamentos"
          ],
          footer: "Suas calhas sempre limpas e funcionais!"
        }
      },
      pressureWashing: {
        title: "💧 Lavagem com Pressão",
        description: "Serviços de lavagem com pressão para áreas externas e fachadas.",
        benefits: {
          title: "Benefícios:",
          items: [
            "✔ Limpeza profunda de superfícies",
            "✔ Remove sujeira e mofo",
            "✔ Equipamentos profissionais",
            "✔ Renova a aparência"
          ],
          footer: "Sua casa com aparência renovada!"
        }
      }
    },
    about: {
      title: "Sobre Nós",
      quality: {
        title: "Qualidade Garantida",
        description: "Trabalho profissional com garantia de qualidade em todos os serviços prestados."
      },
      fastService: {
        title: "Atendimento Rápido",
        description: "Serviço ágil e pontual, respeitando sempre o prazo combinado com o cliente."
      },
      expertTeam: {
        title: "Equipe Especializada",
        description: "Profissionais experientes e qualificados para atender todas as suas necessidades."
      }
    },
    testimonials: {
      title: "Depoimentos",
      subtitle: "Veja o que nossos clientes dizem sobre nosso trabalho",
      reviews: {
        maria: "Excelente serviço! Muito profissionais e pontuais. Recomendo!",
        carlos: "Fizeram um trabalho perfeito na instalação da minha TV. Muito satisfeito!",
        fernando: "Equipe muito competente e preço justo. Voltarei a contratar com certeza!"
      }
    },
    coverage: {
      title: "Área de Atendimento",
      subtitle: "Miami-Dade e Broward County",
      description: "Atendemos toda a região metropolitana de Miami com qualidade e pontualidade."
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
      copyright: "© 2024 Mr. Joe & Zé Handyman Miami. Todos os direitos reservados.",
      coverage: "Atendemos Miami-Dade e Broward County",
      preInstagram: "Siga-nos no Instagram para ver nossos trabalhos:",
      instagram: "Instagram"
    }
  },
  en: {
    importantNotice: {
      title: "Important Notice",
      subtitle: "We serve Miami-Dade and Broward County",
      description: "For faster service, contact us via WhatsApp by clicking the floating button.",
      button: "Got it"
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact"
    },
    hero: {
      title: "Mr. Joe & Zé Handyman Miami",
      subtitle: "Professional home repair and maintenance services in Miami",
      cta: "Get in Touch",
      phone: "Hello! I would like to request a quote for handyman services."
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
        title: "📺 TV Wall Installation",
        description: "Professional TV wall mounting with bracket included. Make your living room modern and organized.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Safe and professional installation",
            "✔ Bracket included in service",
            "✔ Cable management",
            "✔ Service warranty"
          ],
          footer: "Your TV installed the right way!"
        }
      },
      smartLock: {
        title: "🔐 Smart Lock",
        description: "Smart lock installation for enhanced security of your home or business.",
        benefits: {
          title: "Advantages:",
          items: [
            "✔ Access by code or app",
            "✔ Enhanced home security",
            "✔ Professional installation",
            "✔ Technical support included"
          ],
          footer: "Technology and security in your hands!"
        }
      },
      foodDisposal: {
        title: "🗑️ Food Disposal Installation",
        description: "Professional food disposal installation for your kitchen. More convenience in daily life.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ More convenience in the kitchen",
            "✔ Reduction of organic waste",
            "✔ Safe and professional installation",
            "✔ Maintenance included"
          ],
          footer: "Your kitchen more practical and clean!"
        }
      },
      decoration: {
        title: "🎨 Decoration and Organization",
        description: "Decoration and organization services to make your home more beautiful and functional.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ More organized environment",
            "✔ Personalized decoration",
            "✔ Space optimization",
            "✔ Professional consulting"
          ],
          footer: "Your home more beautiful and organized!"
        }
      },
      electrical: {
        title: "⚡ Electrical Repairs",
        description: "Complete electrical repair and installation services with safety and quality.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Accurate problem diagnosis",
            "✔ Safe and durable repairs",
            "✔ Certified professionals",
            "✔ Fast and efficient service"
          ],
          footer: "Your electrical problems solved safely!"
        }
      },
      ceilingFan: {
        title: "💨 Ceiling Fan Installation",
        description: "Professional ceiling fan installation for greater comfort and savings.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Safe and professional installation",
            "✔ Improves air circulation",
            "✔ Reduces air conditioning costs",
            "✔ Service warranty"
          ],
          footer: "More comfort and savings in your home!"
        }
      },
      plumbing: {
        title: "🔧 Plumbing Repairs",
        description: "Complete plumbing repair and installation services with quality materials.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Accurate leak detection",
            "✔ Durable and efficient repairs",
            "✔ Safe installations",
            "✔ Detailed budget"
          ],
          footer: "Complete solutions to your plumbing problems!"
        }
      },
      shelves: {
        title: "📚 Shelves Installation",
        description: "Shelves installation to optimize your home space with style.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Space optimization",
            "✔ Safe wall installation",
            "✔ Various models available",
            "✔ Personalized organization"
          ],
          footer: "More organization and space utilization!"
        }
      },
      curtains: {
        title: "🪟 Curtains Installation",
        description: "Professional curtains and blinds installation for greater privacy and elegance.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Precise and safe installation",
            "✔ Improves privacy",
            "✔ Light control",
            "✔ Professional finish"
          ],
          footer: "Your home more private and elegant!"
        }
      },
      wallRepairs: {
        title: "🎨 Wall Repairs and Painting",
        description: "Wall repair and painting services with professional finish.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Repair holes and cracks",
            "✔ Professional painting",
            "✔ Impeccable finish",
            "✔ Quality materials"
          ],
          footer: "Your walls like new!"
        }
      },
      doorRepairs: {
        title: "🚪 Door Repairs",
        description: "Door repair and adjustment services for perfect functionality.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Hinge adjustment",
            "✔ Lock repair",
            "✔ Door alignment",
            "✔ New handle installation"
          ],
          footer: "Your doors working perfectly!"
        }
      },
      houseNumbers: {
        title: "🏠 House Numbers Installation",
        description: "Installation of house numbers and residential identification plates with style.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Easy house identification",
            "✔ Safe installation",
            "✔ Various models available",
            "✔ Improves facade appearance"
          ],
          footer: "Your house easier to find!"
        }
      },
      mailbox: {
        title: "📮 Mailbox Installation",
        description: "Installation of residential and commercial mailboxes with security.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Safe and durable installation",
            "✔ Various models available",
            "✔ Mail protection",
            "✔ Postal standards compliance"
          ],
          footer: "Your mail always safe!"
        }
      },
      safetyDevices: {
        title: "🚨 Safety Devices Installation",
        description: "Installation of smoke detectors, alarms and other protection devices.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Greater safety for family",
            "✔ Smoke and gas detectors",
            "✔ Professional installation",
            "✔ Functionality tests"
          ],
          footer: "Your family more protected!"
        }
      },
      gutterCleaning: {
        title: "🏠 Gutter Cleaning",
        description: "Gutter and downspout cleaning and maintenance services for home protection.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Prevents clogs",
            "✔ Protection against infiltration",
            "✔ Complete cleaning",
            "✔ Leak verification"
          ],
          footer: "Your gutters always clean and functional!"
        }
      },
      pressureWashing: {
        title: "💧 Pressure Washing",
        description: "Pressure washing services for outdoor areas and facades.",
        benefits: {
          title: "Benefits:",
          items: [
            "✔ Deep surface cleaning",
            "✔ Removes dirt and mold",
            "✔ Professional equipment",
            "✔ Renews appearance"
          ],
          footer: "Your home with renewed appearance!"
        }
      }
    },
    about: {
      title: "About Us",
      quality: {
        title: "Quality Guaranteed",
        description: "Professional work with quality guarantee in all services provided."
      },
      fastService: {
        title: "Fast Service",
        description: "Agile and punctual service, always respecting the agreed deadline with the client."
      },
      expertTeam: {
        title: "Expert Team",
        description: "Experienced and qualified professionals to meet all your needs."
      }
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "See what our clients say about our work",
      reviews: {
        maria: "Excellent service! Very professional and punctual. I recommend!",
        carlos: "They did a perfect job installing my TV. Very satisfied!",
        fernando: "Very competent team and fair price. I will definitely hire again!"
      }
    },
    coverage: {
      title: "Coverage Area",
      subtitle: "Miami-Dade and Broward County",
      description: "We serve the entire Miami metropolitan area with quality and punctuality."
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
      copyright: "© 2024 Mr. Joe & Zé Handyman Miami. All rights reserved.",
      coverage: "We serve Miami-Dade and Broward County",
      preInstagram: "Follow us on Instagram to see our work:",
      instagram: "Instagram"
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
