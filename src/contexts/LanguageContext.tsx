
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

interface Translations {
  header: {
    title: string;
    subtitle: string;
    whatsappButton: string;
  };
  hero: {
    title: string;
    subtitle: string;
    phone: string;
    guaranteed: string;
    fastService: string;
    expertTeam: string;
  };
  services: {
    title: string;
    subtitle: string;
    tvInstallation: {
      title: string;
      description: string;
    };
    furnitureAssembly: {
      title: string;
      description: string;
    };
    homeInstallations: {
      title: string;
      description: string;
    };
    repairs: {
      title: string;
      description: string;
    };
    smartLock: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    quality: {
      title: string;
      description: string;
    };
    fastService: {
      title: string;
      description: string;
    };
    expertTeam: {
      title: string;
      description: string;
    };
    whatsappTitle: string;
    whatsappSubtitle: string;
    whatsappButton: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    callToAction: string;
    reviews: {
      maria: string;
      carlos: string;
      ana: string;
      roberto: string;
      lucia: string;
      fernando: string;
    };
  };
  coverage: {
    title: string;
    subtitle: string;
    description: string;
  };
  footer: {
    title: string;
    subtitle: string;
    whatsapp: string;
    copyright: string;
    coverage: string;
    instagram: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    header: {
      title: "Mr. Joe & Zé",
      subtitle: "Handyman Services",
      whatsappButton: "Chama no Zap"
    },
    hero: {
      title: "Um resolve, o outro garante",
      subtitle: "Serviços de handyman profissionais em Miami-Dade e Broward",
      phone: "WhatsApp: (786) 593-7841",
      guaranteed: "Serviço Garantido",
      fastService: "Atendimento Rápido",
      expertTeam: "Equipe Experiente"
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Oferecemos uma ampla gama de serviços de handyman para sua casa ou escritório",
      tvInstallation: {
        title: "Instalação de TVs",
        description: "Drywall, alvenaria, suporte articulado - instalação segura e profissional"
      },
      furnitureAssembly: {
        title: "Montagem de Móveis",
        description: "Montagem completa de móveis com precisão e cuidado"
      },
      homeInstallations: {
        title: "Instalações Residenciais",
        description: "Cortinas, prateleiras, luminárias e muito mais"
      },
      repairs: {
        title: "Reparos Elétricos/Hidráulicos",
        description: "Troca de torneiras, maçanetas e ajustes leves"
      },
      smartLock: {
        title: "Fechadura Eletrônica",
        description: "Instalação e configuração de fechaduras eletrônicas para maior segurança e praticidade em sua casa ou escritório."
      }
    },
    about: {
      title: "Por que escolher Mr. Joe & Zé?",
      quality: {
        title: "Qualidade Garantida",
        description: "Um resolve com expertise, o outro garante a qualidade do serviço."
      },
      fastService: {
        title: "Atendimento Rápido",
        description: "Resposta rápida no WhatsApp e agendamento flexível."
      },
      expertTeam: {
        title: "Equipe Experiente",
        description: "Anos de experiência em serviços residenciais e comerciais."
      },
      whatsappTitle: "👉 Chama no Zap",
      whatsappSubtitle: "Orçamento gratuito e atendimento personalizado via WhatsApp",
      whatsappButton: "(786) 593-7841"
    },
    testimonials: {
      title: "O que nossos clientes dizem",
      subtitle: "Veja os depoimentos de quem já confiou no nosso trabalho",
      callToAction: "Seja nosso próximo cliente satisfeito!",
      reviews: {
        maria: "Excelente serviço! Instalaram minha TV na parede com muito profissionalismo. Super recomendo!",
        carlos: "Montaram todos os móveis do meu apartamento. Trabalho impecável e preço justo.",
        ana: "Resolveram um problema elétrico que outros não conseguiram. Muito satisfeita com o atendimento!",
        roberto: "Pontualidade e qualidade. Fizeram a instalação das cortinas perfeitamente. Parabéns!",
        lucia: "Atendimento via WhatsApp muito rápido. Vieram no mesmo dia e resolveram tudo!",
        fernando: "Profissionais competentes e honestos. Já indiquei para vários amigos!"
      }
    },
    coverage: {
      title: "Área de Atendimento",
      subtitle: "Miami-Dade e Broward",
      description: "Atendemos toda a região de Miami-Dade e Broward com serviços de handyman profissionais e confiáveis."
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "Um resolve, o outro garante",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé Handyman. Todos os direitos reservados.",
      coverage: "Atendimento em Miami-Dade e Broward",
      instagram: "Instagram"
    }
  },
  en: {
    header: {
      title: "Mr. Joe & Zé",
      subtitle: "Handyman Services",
      whatsappButton: "Call on WhatsApp"
    },
    hero: {
      title: "One fixes, the other guarantees",
      subtitle: "Professional handyman services in Miami-Dade and Broward",
      phone: "WhatsApp: (786) 593-7841",
      guaranteed: "Guaranteed Service",
      fastService: "Fast Service",
      expertTeam: "Expert Team"
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a wide range of handyman services for your home or office",
      tvInstallation: {
        title: "TV Installation",
        description: "Drywall, masonry, articulated mount - safe and professional installation"
      },
      furnitureAssembly: {
        title: "Furniture Assembly",
        description: "Complete furniture assembly with precision and care"
      },
      homeInstallations: {
        title: "Home Installations",
        description: "Curtains, shelves, light fixtures and much more"
      },
      repairs: {
        title: "Electrical/Plumbing Repairs",
        description: "Faucet replacement, door handles and light adjustments"
      },
      smartLock: {
        title: "Smart Lock",
        description: "Installation and configuration of electronic locks for greater security and convenience in your home or office."
      }
    },
    about: {
      title: "Why choose Mr. Joe & Zé?",
      quality: {
        title: "Guaranteed Quality",
        description: "One fixes with expertise, the other guarantees the quality of service."
      },
      fastService: {
        title: "Fast Service",
        description: "Quick response on WhatsApp and flexible scheduling."
      },
      expertTeam: {
        title: "Expert Team",
        description: "Years of experience in residential and commercial services."
      },
      whatsappTitle: "👉 Call on WhatsApp",
      whatsappSubtitle: "Free quote and personalized service via WhatsApp",
      whatsappButton: "(786) 593-7841"
    },
    testimonials: {
      title: "What our clients say",
      subtitle: "See testimonials from those who have trusted our work",
      callToAction: "Be our next satisfied customer!",
      reviews: {
        maria: "Excellent service! They installed my TV on the wall very professionally. Highly recommend!",
        carlos: "They assembled all the furniture in my apartment. Impeccable work and fair price.",
        ana: "They solved an electrical problem that others couldn't. Very satisfied with the service!",
        roberto: "Punctuality and quality. They installed the curtains perfectly. Congratulations!",
        lucia: "Very fast WhatsApp service. They came the same day and solved everything!",
        fernando: "Competent and honest professionals. I've already recommended them to several friends!"
      }
    },
    coverage: {
      title: "Service Area",
      subtitle: "Miami-Dade and Broward",
      description: "We serve the entire Miami-Dade and Broward region with professional and reliable handyman services."
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "One fixes, the other guarantees",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé Handyman. All rights reserved.",
      coverage: "Serving Miami-Dade and Broward",
      instagram: "Instagram"
    }
  },
  es: {
    header: {
      title: "Mr. Joe & Zé",
      subtitle: "Servicios de Mantenimiento",
      whatsappButton: "Llama por WhatsApp"
    },
    hero: {
      title: "Uno resuelve, el otro garantiza",
      subtitle: "Servicios profesionales de mantenimiento en Miami-Dade y Broward",
      phone: "WhatsApp: (786) 593-7841",
      guaranteed: "Servicio Garantizado",
      fastService: "Servicio Rápido",
      expertTeam: "Equipo Experto"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Ofrecemos una amplia gama de servicios de mantenimiento para su hogar u oficina",
      tvInstallation: {
        title: "Instalación de TVs",
        description: "Drywall, mampostería, soporte articulado - instalación segura y profesional"
      },
      furnitureAssembly: {
        title: "Montaje de Muebles",
        description: "Montaje completo de muebles con precisión y cuidado"
      },
      homeInstallations: {
        title: "Instalaciones Residenciales",
        description: "Cortinas, estantes, luminarias y mucho más"
      },
      repairs: {
        title: "Reparaciones Eléctricas/Plomería",
        description: "Cambio de grifos, manijas y ajustes ligeros"
      },
      smartLock: {
        title: "Cerradura Electrónica",
        description: "Instalación y configuración de cerraduras electrónicas para mayor seguridad y practicidad en su hogar u oficina."
      }
    },
    about: {
      title: "¿Por qué elegir Mr. Joe & Zé?",
      quality: {
        title: "Calidad Garantizada",
        description: "Uno resuelve con experiencia, el otro garantiza la calidad del servicio."
      },
      fastService: {
        title: "Servicio Rápido",
        description: "Respuesta rápida en WhatsApp y programación flexible."
      },
      expertTeam: {
        title: "Equipo Experto",
        description: "Años de experiencia en servicios residenciales y comerciales."
      },
      whatsappTitle: "👉 Llama por WhatsApp",
      whatsappSubtitle: "Presupuesto gratuito y servicio personalizado vía WhatsApp",
      whatsappButton: "(786) 593-7841"
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "Ve los testimonios de quienes ya confiaron en nuestro trabajo",
      callToAction: "¡Sé nuestro próximo cliente satisfecho!",
      reviews: {
        maria: "¡Excelente servicio! Instalaron mi TV en la pared con mucho profesionalismo. ¡Super recomiendo!",
        carlos: "Montaron todos los muebles de mi apartamento. Trabajo impecable y precio justo.",
        ana: "Resolvieron un problema eléctrico que otros no pudieron. ¡Muy satisfecha con el servicio!",
        roberto: "Puntualidad y calidad. Hicieron la instalación de las cortinas perfectamente. ¡Felicitaciones!",
        lucia: "Servicio por WhatsApp muy rápido. ¡Vinieron el mismo día y resolvieron todo!",
        fernando: "Profesionales competentes y honestos. ¡Ya los he recomendado a varios amigos!"
      }
    },
    coverage: {
      title: "Área de Servicio",
      subtitle: "Miami-Dade y Broward",
      description: "Servimos toda la región de Miami-Dade y Broward con servicios de mantenimiento profesionales y confiables."
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "Uno resuelve, el otro garantiza",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé Handyman. Todos los derechos reservados.",
      coverage: "Servicio en Miami-Dade y Broward",
      instagram: "Instagram"
    }
  },
  fr: {
    header: {
      title: "Mr. Joe & Zé",
      subtitle: "Services de Bricolage",
      whatsappButton: "Appeler sur WhatsApp"
    },
    hero: {
      title: "L'un répare, l'autre garantit",
      subtitle: "Services professionnels de bricolage à Miami-Dade et Broward",
      phone: "WhatsApp: (786) 593-7841",
      guaranteed: "Service Garanti",
      fastService: "Service Rapide",
      expertTeam: "Équipe Experte"
    },
    services: {
      title: "Nos Services",
      subtitle: "Nous offrons une large gamme de services de bricolage pour votre maison ou bureau",
      tvInstallation: {
        title: "Installation de TV",
        description: "Cloison sèche, maçonnerie, support articulé - installation sûre et professionnelle"
      },
      furnitureAssembly: {
        title: "Montage de Meubles",
        description: "Montage complet de meubles avec précision et soin"
      },
      homeInstallations: {
        title: "Installations Résidentielles",
        description: "Rideaux, étagères, luminaires et bien plus"
      },
      repairs: {
        title: "Réparations Électriques/Plomberie",
        description: "Remplacement de robinets, poignées et ajustements légers"
      },
      smartLock: {
        title: "Serrure Électronique",
        description: "Installation et configuration de serrures électroniques pour plus de sécurité et de praticité dans votre maison ou bureau."
      }
    },
    about: {
      title: "Pourquoi choisir Mr. Joe & Zé?",
      quality: {
        title: "Qualité Garantie",
        description: "L'un répare avec expertise, l'autre garantit la qualité du service."
      },
      fastService: {
        title: "Service Rapide",
        description: "Réponse rapide sur WhatsApp et planification flexible."
      },
      expertTeam: {
        title: "Équipe Experte",
        description: "Années d'expérience dans les services résidentiels et commerciaux."
      },
      whatsappTitle: "👉 Appeler sur WhatsApp",
      whatsappSubtitle: "Devis gratuit et service personnalisé via WhatsApp",
      whatsappButton: "(786) 593-7841"
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Voir les témoignages de ceux qui ont fait confiance à notre travail",
      callToAction: "Soyez notre prochain client satisfait!",
      reviews: {
        maria: "Excellent service! Ils ont installé ma TV au mur avec beaucoup de professionnalisme. Je recommande vivement!",
        carlos: "Ils ont monté tous les meubles de mon appartement. Travail impeccable et prix juste.",
        ana: "Ils ont résolu un problème électrique que d'autres n'ont pas pu. Très satisfaite du service!",
        roberto: "Ponctualité et qualité. Ils ont fait l'installation des rideaux parfaitement. Félicitations!",
        lucia: "Service WhatsApp très rapide. Ils sont venus le même jour et ont tout résolu!",
        fernando: "Professionnels compétents et honnêtes. Je les ai déjà recommandés à plusieurs amis!"
      }
    },
    coverage: {
      title: "Zone de Service",
      subtitle: "Miami-Dade et Broward",
      description: "Nous servons toute la région de Miami-Dade et Broward avec des services de bricolage professionnels et fiables."
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "L'un répare, l'autre garantit",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé Handyman. Tous droits réservés.",
      coverage: "Service à Miami-Dade et Broward",
      instagram: "Instagram"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
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
