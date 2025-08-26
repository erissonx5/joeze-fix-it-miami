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
  airbnb: {
    title: string;
    description: string;
    quickService: string;
    fiveStars: string;
    requestQuote: string;
  };
  services: {
    title: string;
    subtitle: string;
    tvInstallation: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    smartLock: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    foodDisposal: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    decoration: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    electrical: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    ceilingFan: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    plumbing: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    shelves: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    curtains: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    wallRepairs: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    doorRepairs: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    houseNumbers: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    mailbox: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    safetyDevices: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    gutterCleaning: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    pressureWashing: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    laundryService?: {
      title: string;
      questions: string[];
      solutions: string[];
      benefits: {
        title: string;
        items: string[];
      };
    };
    cameraInstallation?: {
      title: string;
      description: string;
      benefits: {
        title: string;
        items: string[];
        footer: string;
      };
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
    preInstagram: string;
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
        title: "Instalação de TV na Parede ou Painel",
        description: "Fixamos sua TV com segurança, precisão e acabamento impecável — seja direto na parede ou em painel. Utilizamos ferramentas adequadas e nivelamento a laser para garantir alinhamento perfeito.",
        benefits: {
          title: "Ideal para quem busca:",
          items: [
            "✔ Organização dos fios",
            "✔ Estética limpa e moderna",
            "✔ Segurança para crianças e pets",
            "✔ Aproveitamento de espaço"
          ],
          footer: "Chame quem entende do assunto e faz com capricho!"
        }
      },
      smartLock: {
        title: "Instalação e Reparo de Fechaduras (Convencionais ou Eletrônicas)",
        description: "Instalamos e reparamos todos os tipos de fechaduras — desde modelos tradicionais até fechaduras eletrônicas com senha ou biometria. Serviço rápido, discreto e com foco total na sua segurança.",
        benefits: {
          title: "Ideal para quem precisa de:",
          items: [
            "✔ Instalação de fechadura inteligente",
            "✔ Troca por motivo de segurança",
            "✔ Reparo em fechaduras danificadas",
            "✔ Atualização para controle de acesso moderno"
          ],
          footer: "Confiança, cuidado e experiência — pode deixar com o Mr. Joe & Zé!"
        }
      },
      foodDisposal: {
        title: "Instalação de Triturador de Alimentos",
        description: "Instalamos trituradores de alimentos de forma segura, eficiente e com todos os cuidados necessários para o bom funcionamento da sua pia. Serviço feito com atenção aos detalhes e seguindo as recomendações do fabricante.",
        benefits: {
          title: "Ideal para quem busca:",
          items: [
            "✔ Praticidade na rotina da cozinha",
            "✔ Fim do mau cheiro na pia",
            "✔ Instalação correta sem riscos de vazamentos",
            "✔ Funcionamento silencioso e seguro"
          ],
          footer: "Seu triturador instalado com qualidade é com Mr. Joe & Zé!"
        }
      },
      decoration: {
        title: "Fixação de Quadros, Espelhos, Esculturas e Decoração",
        description: "Deixe sua casa ou escritório com tudo no lugar certo! Fazemos a fixação de quadros, espelhos, prateleiras leves, esculturas e peças decorativas com alinhamento preciso e acabamento limpo. Tudo fixado com segurança e sem danificar suas paredes.",
        benefits: {
          title: "Ideal para quem valoriza:",
          items: [
            "✔ Nivelamento perfeito com laser",
            "✔ Fixação segura em drywall, alvenaria ou madeira",
            "✔ Harmonia na decoração",
            "✔ Instalação sem sujeira nem bagunça"
          ],
          footer: "Capricho nos detalhes é com o Mr. Joe & Zé!"
        }
      },
      electrical: {
        title: "Pequenos Reparos Elétricos",
        description: "Tomada queimada? Interruptor com mau contato? A gente resolve! Fazemos pequenos reparos elétricos com segurança, agilidade e aquele capricho que você já conhece.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Troca de tomadas e interruptores",
            "✔ Solução de curtos e fios soltos",
            "✔ Instalação de dimmers e sensores",
            "✔ Ajustes em pontos de luz"
          ],
          footer: "Serviço feito do jeito certo, sem enrolação. É com a dupla que resolve!"
        }
      },
      ceilingFan: {
        title: "Instalação de Ventilador de Teto, Luminárias e Mais",
        description: "Instalamos ventiladores de teto, plafons, lustres e luminárias com segurança, nivelamento e aquele acabamento limpo que faz toda a diferença. Tudo funcionando certinho, sem barulho, sem balanço e com visual impecável.",
        benefits: {
          title: "Perfeito para quem precisa de:",
          items: [
            "✔ Ventilador firme e bem alinhado",
            "✔ Instalação elétrica segura",
            "✔ Substituição de luminárias antigas",
            "✔ Iluminação bem distribuída no ambiente"
          ],
          footer: "Deixa que a gente sobe na escada por você! 💡🛠"
        }
      },
      plumbing: {
        title: "Pequenos Reparos Hidráulicos (inclusive a querida duchinha!)",
        description: "Vazamento no chuveiro? Torneira pingando? Quer instalar aquela duchinha no vaso sanitário que brasileiro não vive sem? Pode deixar com a gente!",
        benefits: {
          title: "Cuidamos de:",
          items: [
            "✔ Troca de duchas e chuveiros",
            "✔ Instalação de duchinha higiênica",
            "✔ Vazamentos e pingos em pias ou tanques",
            "✔ Ajustes rápidos em registros e sifões"
          ],
          footer: "Serviço rápido, limpo e bem feito. Mr. Joe & Zé resolve — do jeitinho que você gosta!"
        }
      },
      shelves: {
        title: "Instalação de Prateleiras, Nichos e Itens de Parede",
        description: "Instalamos prateleiras, nichos, suportes e pequenos armários com segurança e alinhamento perfeito. Serviço limpo, bem fixado e com acabamento profissional — seja em drywall, madeira ou alvenaria.",
        benefits: {
          title: "Ideal pra quem busca:",
          items: [
            "✔ Organização com estilo",
            "✔ Fixação firme e nivelada",
            "✔ Ganho de espaço e funcionalidade",
            "✔ Instalação sem bagunça"
          ],
          footer: "Seu espaço do jeitinho que você imaginou — e fixado do jeito certo com Mr. Joe & Zé! 🛠📐"
        }
      },
      curtains: {
        title: "Instalação de Cortinas, Persianas e Acessórios de Janela",
        description: "Instalamos todos os tipos de cortinas e persianas com precisão e acabamento profissional. Nivelamos e fixamos com segurança, respeitando o tipo de parede e estrutura da janela.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Cortinas de trilho ou varão",
            "✔ Persianas rolô, horizontais ou verticais",
            "✔ Instalação de suportes e trilhos",
            "✔ Fixação em drywall, madeira ou alvenaria"
          ],
          footer: "Visual bonito, nivelado e funcional? Pode chamar Mr. Joe & Zé! 🪟🔧"
        }
      },
      wallRepairs: {
        title: "Pequenos Reparos de Parede e Pintura",
        description: "Fazemos aquele retoque que sua parede precisa: rachaduras, buracos de suporte antigo, manchas de umidade ou só uma pintura nova pra dar vida ao ambiente. Serviço limpo, bem feito e com acabamento caprichado.",
        benefits: {
          title: "Ideal pra:",
          items: [
            "✔ Fechar buracos e imperfeições",
            "✔ Corrigir danos em drywall ou alvenaria",
            "✔ Pintura em cômodos ou áreas específicas",
            "✔ Preparação antes de mudança ou vistoria"
          ],
          footer: "Paredes lisinhas, pintura uniforme e zero bagunça. Com Mr. Joe & Zé é assim! 🎨🧱"
        }
      },
      doorRepairs: {
        title: "Reparos em Portas, Dobradiças e Ajustes de Alinhamento",
        description: "Porta arrastando, fazendo barulho ou fora do prumo? A gente resolve! Realinhamos dobradiças, ajustamos fechaduras e deixamos sua porta funcionando lisinha como deve ser.",
        benefits: {
          title: "Serviço ideal para:",
          items: [
            "✔ Alinhamento e nivelamento de portas",
            "✔ Substituição ou fixação de dobradiças",
            "✔ Portas que não fecham direito",
            "✔ Reforço em parafusos soltos ou danificados"
          ],
          footer: "Porta funcionando como nova, sem esforço, sem barulho e com o toque certo do Mr. Joe & Zé! 🚪🔩"
        }
      },
      houseNumbers: {
        title: "Instalação de Número Residencial, Placas e Itens de Fachada",
        description: "Fixamos o número da casa, placas decorativas, sinalizações e outros itens externos com precisão e acabado profissional — sempre respeitando o estilo da fachada e garantindo durabilidade.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalação de números residenciais",
            "✔ Placas de sinalização (entrada, private, etc.)",
            "✔ Suportes de correspondência ou delivery",
            "✔ Fixação nivelada e resistente ao tempo"
          ],
          footer: "A primeira impressão da sua casa começa na fachada — e com Mr. Joe & Zé, ela fica no capricho! 🏠🔩"
        }
      },
      mailbox: {
        title: "Instalação de Caixa de Correio, Suportes Externos e Fixações no Solo",
        description: "Instalamos caixas de correio com base firme, nivelamento e acabado limpo. Também fixamos outros itens no solo com segurança e durabilidade, seja em concreto, grama ou terra compactada.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalação de mailbox com concreto",
            "✔ Fixação de postes para cercas leves",
            "✔ Suportes de jardim, sinalização ou iluminação solar",
            "✔ Reforço de estruturas já existentes"
          ],
          footer: "Tudo reto, bem fixado e pronto pra durar — pode confiar na dupla Mr. Joe & Zé! 📬🧱"
        }
      },
      safetyDevices: {
        title: "Instalação de Detectores de Fumaça, Sensores e Dispositivos de Segurança",
        description: "Instalamos detectores de fumaça, monóxido de carbono, sensores de presença, alarmes e outros dispositivos de segurança doméstica. Tudo com o posicionamento correto e fixação segura no teto ou parede.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalação de smoke detectors e CO detectors",
            "✔ Alarmes de segurança e campainhas inteligentes",
            "✔ Sensores de movimento e iluminação automática",
            "✔ Substituição e manutenção de unidades antigas"
          ],
          footer: "Sua casa mais segura com instalação profissional e zero dor de cabeça. Mr. Joe & Zé cuidam disso pra você! 🔧🛡"
        }
      },
      gutterCleaning: {
        title: "Limpeza de Calhas (Gutters)",
        description: "Fazemos a limpeza completa das calhas e dutos de escoamento da sua casa. Removemos folhas, sujeira e obstruções para evitar infiltrações, danos à estrutura e acúmulo de água.",
        benefits: {
          title: "Benefícios do serviço:",
          items: [
            "✔ Prevenção contra entupimentos e transbordamentos",
            "✔ Evita danos ao telhado e infiltrações nas paredes",
            "✔ Ideal antes do período de chuvas",
            "✔ Serviço limpo, seguro e com descarte adequado dos resíduos"
          ],
          footer: "Sua calha funcionando como deve ser — sem bagunça, sem riscos. Pode chamar Mr. Joe & Zé! 🍂🧤"
        }
      },
      pressureWashing: {
        title: "Lavagem de Calçadas com Jato de Alta Pressão (Pressure Washing)",
        description: "Sua calçada tá encardida, cheia de limo ou com manchas difíceis? A gente resolve com lavagem de alta pressão! Removemos sujeira pesada, mofo, gordura e até aquelas marcas de pneu que parecem eternas.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Calçadas, varandas e entradas de garagem",
            "✔ Pátios, muros e paredes externas",
            "✔ Limpeza profunda sem produtos agressivos",
            "✔ Equipamento profissional e resultado visível na hora"
          ],
          footer: "Sua área externa como nova — limpa, segura e com visual renovado. Com Mr. Joe & Zé, é pressão e perfeição! 💦🧼"
        }
      },
      laundryService: {
        title: "Lavagem Profissional para Salões, Spas e Negócios Locais",
        questions: [
          "Tem salão de beleza, clínica estética, barbearia ou spa?",
          "Ainda perde tempo lavando toalhas, lençóis ou roupões?"
        ],
        solutions: [
          "Pode deixar com a gente!",
          "A gente busca, lava e devolve tudo dobrado, limpo e pronto pro uso.",
          "Serviço completo tipo wash and fold.",
          "Você não se preocupa com nada — é só usar e pronto.",
          "Mr. Joe & Zé resolve — do jeitinho que seu negócio precisa!"
        ],
        benefits: {
          title: "Cuidamos de",
          items: [
            "Toalhas de salão, clínica ou estética",
            "Roupões, lençóis, fronhas e mantas",
            "Lavagem e dobra com padrão profissional",
            "Produtos de qualidade que cuidam dos tecidos",
            "Entrega pontual direto no seu estabelecimento"
          ]
        }
      },
      cameraInstallation: {
        title: "Instalação de Câmeras de Segurança (Residenciais ou Comerciais)",
        description: "Proteja sua casa ou comércio com a instalação profissional de câmeras de segurança. Trabalhamos com sistemas modernos — com acesso por aplicativo, visão noturna e gravação em nuvem. Serviço limpo, discreto e funcional.",
        benefits: {
          title: "Ideal para quem precisa de",
          items: [
            "Monitoramento remoto em tempo real",
            "Instalar câmeras com gravação por movimento",
            "Aumentar a segurança de áreas externas e internas",
            "Ter mais controle e tranquilidade no dia a dia"
          ],
          footer: "Segurança e tecnologia na medida certa — com Mr. Joe & Zé!"
        }
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
    airbnb: {
      title: "Especialistas em Airbnb",
      description: "Transformamos seu espaço em uma hospedagem perfeita. Instalações, reparos e melhorias que impressionam seus hóspedes.",
      quickService: "Serviço Rápido",
      fiveStars: "5 Estrelas",
      requestQuote: "Solicitar Orçamento"
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "Um resolve, o outro garante",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé – SOLUTIONS A2 CORP. Todos os direitos reservados.",
      coverage: "Atendimento em Miami-Dade e Broward",
      instagram: "Instagram",
      preInstagram: "Mr. Joe & Zé — um resolve, o outro garante."
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
        title: "TV Installation on Wall or Panel",
        description: "We mount your TV safely, precisely and with impeccable finish — either directly on the wall or on a panel. We use appropriate tools and laser leveling to ensure perfect alignment.",
        benefits: {
          title: "Ideal for those seeking:",
          items: [
            "✔ Wire organization",
            "✔ Clean and modern aesthetics",
            "✔ Safety for children and pets",
            "✔ Space optimization"
          ],
          footer: "Call those who understand the subject and do it with care!"
        }
      },
      smartLock: {
        title: "Installation and Repair of Locks (Conventional or Electronic)",
        description: "We install and repair all types of locks — from traditional models to electronic locks with password or biometry. Fast, discreet service with total focus on your security.",
        benefits: {
          title: "Ideal for those who need:",
          items: [
            "✔ Smart lock installation",
            "✔ Replacement for security reasons",
            "✔ Repair of damaged locks",
            "✔ Upgrade to modern access control"
          ],
          footer: "Trust, care and experience — you can count on Mr. Joe & Zé!"
        }
      },
      foodDisposal: {
        title: "Food Disposal Installation",
        description: "We install food disposals safely, efficiently and with all necessary care for proper functioning of your sink. Service done with attention to detail and following manufacturer recommendations.",
        benefits: {
          title: "Ideal for those seeking:",
          items: [
            "✔ Practicality in kitchen routine",
            "✔ End of bad sink odors",
            "✔ Correct installation without leak risks",
            "✔ Silent and safe operation"
          ],
          footer: "Your disposal installed with quality is with Mr. Joe & Zé!"
        }
      },
      decoration: {
        title: "Mounting Pictures, Mirrors, Sculptures and Decoration",
        description: "Leave your home or office with everything in the right place! We mount pictures, mirrors, light shelves, sculptures and decorative pieces with precise alignment and clean finish. Everything securely mounted without damaging your walls.",
        benefits: {
          title: "Ideal for those who value:",
          items: [
            "✔ Perfect leveling with laser",
            "✔ Secure mounting on drywall, masonry or wood",
            "✔ Harmony in decoration",
            "✔ Installation without mess or clutter"
          ],
          footer: "Attention to detail is with Mr. Joe & Zé!"
        }
      },
      electrical: {
        title: "Small Electrical Repairs",
        description: "Burned outlet? Switch with poor contact? We solve it! We do small electrical repairs with safety, agility and that care you already know.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ Outlet and switch replacement",
            "✔ Short circuit and loose wire solutions",
            "✔ Dimmer and sensor installation",
            "✔ Light point adjustments"
          ],
          footer: "Service done the right way, no nonsense. It's with the duo that solves!"
        }
      },
      ceilingFan: {
        title: "Ceiling Fan, Fixtures and More Installation",
        description: "We install ceiling fans, ceiling lights, chandeliers and fixtures with safety, leveling and that clean finish that makes all the difference. Everything working perfectly, without noise, without wobbling and with impeccable appearance.",
        benefits: {
          title: "Perfect for those who need:",
          items: [
            "✔ Firm and well-aligned fan",
            "✔ Safe electrical installation",
            "✔ Replacement of old fixtures",
            "✔ Well-distributed lighting in the environment"
          ],
          footer: "Let us climb the ladder for you! 💡🛠"
        }
      },
      plumbing: {
        title: "Small Plumbing Repairs (including the beloved bidet!)",
        description: "Shower leak? Dripping faucet? Want to install that bidet on the toilet that Brazilians can't live without? Leave it to us!",
        benefits: {
          title: "We take care of:",
          items: [
            "✔ Shower and showerhead replacement",
            "✔ Hygienic shower installation",
            "✔ Leaks and drips in sinks or tanks",
            "✔ Quick adjustments to valves and siphons"
          ],
          footer: "Fast, clean and well-done service. Mr. Joe & Zé solves — just the way you like it!"
        }
      },
      shelves: {
        title: "Installation of Shelves, Niches and Wall Items",
        description: "We install shelves, niches, supports and small cabinets with safety and perfect alignment. Clean service, well-mounted and with professional finish — whether on drywall, wood or masonry.",
        benefits: {
          title: "Ideal for those seeking:",
          items: [
            "✔ Organization with style",
            "✔ Firm and level mounting",
            "✔ Space and functionality gain",
            "✔ Installation without mess"
          ],
          footer: "Your space just as you imagined — and mounted the right way with Mr. Joe & Zé! 🛠📐"
        }
      },
      curtains: {
        title: "Installation of Curtains, Blinds and Window Accessories",
        description: "We install all types of curtains and blinds with precision and professional finish. We level and mount safely, respecting the wall type and window structure.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ Track or rod curtains",
            "✔ Roller, horizontal or vertical blinds",
            "✔ Support and track installation",
            "✔ Mounting on drywall, wood or masonry"
          ],
          footer: "Beautiful, level and functional appearance? Call Mr. Joe & Zé! 🪟🔧"
        }
      },
      wallRepairs: {
        title: "Small Wall Repairs and Painting",
        description: "We do that touch-up your wall needs: cracks, old support holes, moisture stains or just new paint to bring life to the environment. Clean, well-done service with careful finish.",
        benefits: {
          title: "Ideal for:",
          items: [
            "✔ Closing holes and imperfections",
            "✔ Correcting drywall or masonry damage",
            "✔ Painting rooms or specific areas",
            "✔ Preparation before moving or inspection"
          ],
          footer: "Smooth walls, uniform paint and zero mess. With Mr. Joe & Zé it's like this! 🎨🧱"
        }
      },
      doorRepairs: {
        title: "Door, Hinge Repairs and Alignment Adjustments",
        description: "Door dragging, making noise or out of alignment? We solve it! We realign hinges, adjust locks and leave your door working smoothly as it should be.",
        benefits: {
          title: "Ideal service for:",
          items: [
            "✔ Door alignment and leveling",
            "✔ Hinge replacement or fixing",
            "✔ Doors that don't close properly",
            "✔ Reinforcement of loose or damaged screws"
          ],
          footer: "Door working like new, effortless, quiet and with the right touch from Mr. Joe & Zé! 🚪🔩"
        }
      },
      houseNumbers: {
        title: "Installation of House Numbers, Signs and Facade Items",
        description: "We mount house numbers, decorative signs, signage and other external items with precision and professional finish — always respecting the facade style and ensuring durability.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ House number installation",
            "✔ Signage plates (entrance, private, etc.)",
            "✔ Mail or delivery supports",
            "✔ Level and weather-resistant mounting"
          ],
          footer: "Your home's first impression starts at the facade — and with Mr. Joe & Zé, it stays perfect! 🏠🔩"
        }
      },
      mailbox: {
        title: "Mailbox Installation, External Supports and Ground Mountings",
        description: "We install mailboxes with firm base, leveling and clean finish. We also mount other ground items safely and durably, whether in concrete, grass or compacted earth.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ Mailbox installation with concrete",
            "✔ Light fence post mounting",
            "✔ Garden, signage or solar lighting supports",
            "✔ Existing structure reinforcement"
          ],
          footer: "Everything straight, well-mounted and ready to last — you can trust the Mr. Joe & Zé duo! 📬🧱"
        }
      },
      safetyDevices: {
        title: "Installation of Smoke Detectors, Sensors and Security Devices",
        description: "We install smoke detectors, carbon monoxide, motion sensors, alarms and other home security devices. Everything with correct positioning and secure mounting on ceiling or wall.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ Smoke detector and CO detector installation",
            "✔ Security alarms and smart doorbells",
            "✔ Motion sensors and automatic lighting",
            "✔ Replacement and maintenance of old units"
          ],
          footer: "Your home safer with professional installation and zero headache. Mr. Joe & Zé take care of it for you! 🔧🛡"
        }
      },
      gutterCleaning: {
        title: "Gutter Cleaning",
        description: "We do complete cleaning of gutters and drainage ducts of your house. We remove leaves, dirt and obstructions to prevent infiltrations, structural damage and water accumulation.",
        benefits: {
          title: "Service benefits:",
          items: [
            "✔ Prevention against clogs and overflows",
            "✔ Prevents roof damage and wall infiltrations",
            "✔ Ideal before rainy season",
            "✔ Clean, safe service with proper waste disposal"
          ],
          footer: "Your gutter working as it should — no mess, no risks. Call Mr. Joe & Zé! 🍂🧤"
        }
      },
      pressureWashing: {
        title: "Sidewalk Pressure Washing",
        description: "Is your sidewalk dirty, full of slime or difficult stains? We solve it with pressure washing! We remove heavy dirt, mold, grease and even those tire marks that seem eternal.",
        benefits: {
          title: "We handle:",
          items: [
            "✔ Sidewalks, porches and garage entrances",
            "✔ Patios, walls and external walls",
            "✔ Deep cleaning without aggressive products",
            "✔ Professional equipment and visible results immediately"
          ],
          footer: "Your external area like new — clean, safe and with renewed appearance. With Mr. Joe & Zé, it's pressure and perfection! 💦🧼"
        }
      },
      laundryService: {
        title: "Professional Laundry for Salons, Spas and Local Businesses",
        questions: [
          "Do you have a beauty salon, aesthetic clinic, barbershop or spa?",
          "Still wasting time washing towels, sheets or robes?"
        ],
        solutions: [
          "Leave it to us!",
          "We pick up, wash and return everything folded, clean and ready to use.",
          "Complete wash and fold service.",
          "You don't worry about anything — just use and that's it.",
          "Mr. Joe & Zé solves — just the way your business needs!"
        ],
        benefits: {
          title: "We take care of",
          items: [
            "Salon, clinic or aesthetic towels",
            "Robes, sheets, pillowcases and blankets",
            "Washing and folding with professional standards",
            "Quality products that care for fabrics",
            "Punctual delivery directly to your establishment"
          ]
        }
      },
      cameraInstallation: {
        title: "Security Camera Installation (Residential or Commercial)",
        description: "Protect your home or business with professional security camera installation. We work with modern systems — with app access, night vision and cloud recording. Clean, discreet and functional service.",
        benefits: {
          title: "Ideal for those who need",
          items: [
            "Real-time remote monitoring",
            "Install cameras with motion recording",
            "Increase security in external and internal areas",
            "Have more control and peace of mind in daily life"
          ],
          footer: "Security and technology in the right measure — with Mr. Joe & Zé!"
        }
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
    airbnb: {
      title: "Airbnb Specialists",
      description: "We transform your space into a perfect accommodation. Installations, repairs and improvements that impress your guests.",
      quickService: "Fast Service",
      fiveStars: "5 Stars",
      requestQuote: "Request Quote"
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "One fixes, the other guarantees",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé – SOLUTIONS A2 CORP. All rights reserved.",
      coverage: "Serving Miami-Dade and Broward",
      instagram: "Instagram",
      preInstagram: "Mr. Joe & Zé — one fixes, the other guarantees."
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
        title: "Instalación de TV en Pared o Panel",
        description: "Montamos su TV con seguridad, precisión y acabado impecable — ya sea directamente en la pared o en panel. Utilizamos herramientas adecuadas y nivelación láser para garantizar alineación perfecta.",
        benefits: {
          title: "Ideal para quienes buscan:",
          items: [
            "✔ Organización de cables",
            "✔ Estética limpia y moderna",
            "✔ Seguridad para niños y mascotas",
            "✔ Aprovechamiento de espacio"
          ],
          footer: "¡Llame a quienes entienden del tema y lo hacen con esmero!"
        }
      },
      smartLock: {
        title: "Instalación y Reparación de Cerraduras (Convencionales o Electrónicas)",
        description: "Instalamos y reparamos todos los tipos de cerraduras — desde modelos tradicionales hasta cerraduras electrónicas con contraseña o biometría. Servicio rápido, discreto y con enfoque total en su seguridad.",
        benefits: {
          title: "Ideal para quienes necesitan:",
          items: [
            "✔ Instalación de cerradura inteligente",
            "✔ Cambio por motivos de seguridad",
            "✔ Reparación de cerraduras dañadas",
            "✔ Actualización a control de acceso moderno"
          ],
          footer: "¡Confianza, cuidado y experiencia — puede confiar en Mr. Joe & Zé!"
        }
      },
      foodDisposal: {
        title: "Instalación de Triturador de Alimentos",
        description: "Instalamos trituradores de alimentos de forma segura, eficiente y con todos los cuidados necesarios para el buen funcionamiento de su fregadero. Servicio hecho con atención a los detalles y siguiendo las recomendaciones del fabricante.",
        benefits: {
          title: "Ideal para quienes buscan:",
          items: [
            "✔ Practicidad en la rutina de cocina",
            "✔ Fin del mal olor en el fregadero",
            "✔ Instalación correcta sin riesgos de fugas",
            "✔ Funcionamiento silencioso y seguro"
          ],
          footer: "¡Su triturador instalado con calidad es con Mr. Joe & Zé!"
        }
      },
      decoration: {
        title: "Fijación de Cuadros, Espejos, Esculturas y Decoración",
        description: "¡Deje su casa u oficina con todo en el lugar correcto! Hacemos la fijación de cuadros, espejos, estantes ligeros, esculturas y piezas decorativas con alineación precisa y acabado limpio. Todo fijado con seguridad y sin dañar sus paredes.",
        benefits: {
          title: "Ideal para quienes valoran:",
          items: [
            "✔ Nivelación perfecta con láser",
            "✔ Fijación segura en drywall, mampostería o madera",
            "✔ Armonía en la decoración",
            "✔ Instalación sin suciedad ni desorden"
          ],
          footer: "¡El esmero en los detalles es con Mr. Joe & Zé!"
        }
      },
      electrical: {
        title: "Pequeñas Reparaciones Eléctricas",
        description: "¿Tomacorriente quemado? ¿Interruptor con mal contacto? ¡Nosotros lo resolvemos! Hacemos pequeñas reparaciones eléctricas con seguridad, agilidad y ese esmero que ya conoce.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Cambio de tomacorrientes e interruptores",
            "✔ Solución de cortocircuitos y cables sueltos",
            "✔ Instalación de dimmers y sensores",
            "✔ Ajustes en puntos de luz"
          ],
          footer: "¡Servicio hecho de la manera correcta, sin rodeos. Es con el dúo que resuelve!"
        }
      },
      ceilingFan: {
        title: "Instalación de Ventilador de Techo, Luminarias y Más",
        description: "Instalamos ventiladores de techo, plafones, lámparas y luminarias con seguridad, nivelación y ese acabado limpio que hace toda la diferencia. Todo funcionando perfectamente, sin ruido, sin balanceo y con aspecto impecable.",
        benefits: {
          title: "Perfecto para quienes necesitan:",
          items: [
            "✔ Ventilador firme y bien alineado",
            "✔ Instalación eléctrica segura",
            "✔ Sustitución de luminarias antiguas",
            "✔ Iluminación bien distribuida en el ambiente"
          ],
          footer: "¡Deja que nosotros subamos la escalera por ti! 💡🛠"
        }
      },
      plumbing: {
        title: "Pequeñas Reparaciones de Plomería (¡incluyendo el querido bidé!)",
        description: "¿Fuga en la ducha? ¿Grifo goteando? ¿Quiere instalar ese bidé en el inodoro que los brasileños no pueden vivir sin? ¡Déjelo con nosotros!",
        benefits: {
          title: "Cuidamos de:",
          items: [
            "✔ Cambio de duchas y regaderas",
            "✔ Instalación de ducha higiénica",
            "✔ Fugas y goteos en fregaderos o tanques",
            "✔ Ajustes rápidos en registros y sifones"
          ],
          footer: "¡Servicio rápido, limpio y bien hecho. Mr. Joe & Zé resuelve — de la manera que te gusta!"
        }
      },
      shelves: {
        title: "Instalación de Estantes, Nichos y Elementos de Pared",
        description: "Instalamos estantes, nichos, soportes y pequeños armarios con seguridad y alineación perfecta. Servicio limpio, bien fijado y con acabado profesional — ya sea en drywall, madera o mampostería.",
        benefits: {
          title: "Ideal para quienes buscan:",
          items: [
            "✔ Organización con estilo",
            "✔ Fijación firme y nivelada",
            "✔ Ganancia de espacio y funcionalidad",
            "✔ Instalación sin desorden"
          ],
          footer: "¡Su espacio tal como lo imaginó — y fijado de la manera correcta con Mr. Joe & Zé! 🛠📐"
        }
      },
      curtains: {
        title: "Instalación de Cortinas, Persianas y Accesorios de Ventana",
        description: "Instalamos todos los tipos de cortinas y persianas con precisión y acabado profesional. Nivelamos y fijamos con seguridad, respetando el tipo de pared y estructura de la ventana.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Cortinas de riel o barra",
            "✔ Persianas enrollables, horizontales o verticales",
            "✔ Instalación de soportes y rieles",
            "✔ Fijación en drywall, madera o mampostería"
          ],
          footer: "¿Aspecto bonito, nivelado y funcional? ¡Llame a Mr. Joe & Zé! 🪟🔧"
        }
      },
      wallRepairs: {
        title: "Pequeñas Reparaciones de Pared y Pintura",
        description: "Hacemos ese retoque que su pared necesita: grietas, agujeros de soporte antiguo, manchas de humedad o solo una pintura nueva para dar vida al ambiente. Servicio limpio, bien hecho y con acabado esmerado.",
        benefits: {
          title: "Ideal para:",
          items: [
            "✔ Cerrar agujeros e imperfecciones",
            "✔ Corregir daños en drywall o mampostería",
            "✔ Pintura en habitaciones o áreas específicas",
            "✔ Preparación antes de mudanza o inspección"
          ],
          footer: "¡Paredes lisas, pintura uniforme y cero desorden. Con Mr. Joe & Zé es así! 🎨🧱"
        }
      },
      doorRepairs: {
        title: "Reparaciones de Puertas, Bisagras y Ajustes de Alineación",
        description: "¿Puerta arrastrando, haciendo ruido o fuera de plomo? ¡Nosotros lo resolvemos! Realineamos bisagras, ajustamos cerraduras y dejamos su puerta funcionando suavemente como debe ser.",
        benefits: {
          title: "Servicio ideal para:",
          items: [
            "✔ Alineación y nivelación de puertas",
            "✔ Sustitución o fijación de bisagras",
            "✔ Puertas que no cierran bien",
            "✔ Refuerzo de tornillos sueltos o dañados"
          ],
          footer: "¡Puerta funcionando como nueva, sin esfuerzo, sin ruido y con el toque correcto de Mr. Joe & Zé! 🚪🔩"
        }
      },
      houseNumbers: {
        title: "Instalación de Número Residencial, Placas y Elementos de Fachada",
        description: "Fijamos el número de la casa, placas decorativas, señalizaciones y otros elementos externos con precisión y acabado profesional — siempre respetando el estilo de la fachada y garantizando durabilidad.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalación de números residenciales",
            "✔ Placas de señalización (entrada, privado, etc.)",
            "✔ Soportes de correspondencia o delivery",
            "✔ Fijación nivelada y resistente al tiempo"
          ],
          footer: "¡La primera impresión de su casa comienza en la fachada — y con Mr. Joe & Zé, queda perfecta! 🏠🔩"
        }
      },
      mailbox: {
        title: "Instalación de Buzón, Soportes Externos y Fijaciones en el Suelo",
        description: "Instalamos buzones con base firme, nivelación y acabado limpio. También fijamos otros elementos en el suelo con seguridad y durabilidad, ya sea en concreto, césped o tierra compactada.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalación de buzón con concreto",
            "✔ Fijación de postes para cercas ligeras",
            "✔ Soportes de jardín, señalización o iluminación solar",
            "✔ Refuerzo de estructuras ya existentes"
          ],
          footer: "¡Todo recto, bien fijado y listo para durar — puede confiar en el dúo Mr. Joe & Zé! 📬🧱"
        }
      },
      safetyDevices: {
        title: "Instalación de Detectores de Humo, Sensores y Dispositivos de Seguridad",
        description: "Instalamos detectores de humo, monóxido de carbono, sensores de presencia, alarmas y otros dispositivos de seguridad doméstica. Todo con el posicionamiento correcto y fijación segura en techo o pared.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Instalación de detectores de humo y CO",
            "✔ Alarmas de seguridad y timbres inteligentes",
            "✔ Sensores de movimiento e iluminación automática",
            "✔ Sustitución y mantenimiento de unidades antiguas"
          ],
          footer: "¡Su casa más segura con instalación profesional y cero dolor de cabeza. Mr. Joe & Zé se encargan de eso por usted! 🔧🛡"
        }
      },
      gutterCleaning: {
        title: "Limpieza de Canaletas (Gutters)",
        description: "Hacemos la limpieza completa de las canaletas y ductos de drenaje de su casa. Removemos hojas, suciedad y obstrucciones para evitar infiltraciones, daños a la estructura y acumulación de agua.",
        benefits: {
          title: "Beneficios del servicio:",
          items: [
            "✔ Prevención contra atascos y desbordamientos",
            "✔ Evita daños al techo e infiltraciones en las paredes",
            "✔ Ideal antes del período de lluvias",
            "✔ Servicio limpio, seguro y con descarte adecuado de residuos"
          ],
          footer: "¡Su canaleta funcionando como debe ser — sin desorden, sin riesgos. Puede llamar a Mr. Joe & Zé! 🍂🧤"
        }
      },
      pressureWashing: {
        title: "Lavado de Aceras con Chorro de Alta Presión (Pressure Washing)",
        description: "¿Su acera está sucia, llena de limo o con manchas difíciles? ¡Nosotros lo resolvemos con lavado de alta presión! Removemos suciedad pesada, moho, grasa e incluso esas marcas de neumáticos que parecen eternas.",
        benefits: {
          title: "Atendemos:",
          items: [
            "✔ Aceras, terrazas y entradas de garaje",
            "✔ Patios, muros y paredes externas",
            "✔ Limpieza profunda sin productos agresivos",
            "✔ Equipo profesional y resultado visible al instante"
          ],
          footer: "¡Su área externa como nueva — limpia, segura y con aspecto renovado. Con Mr. Joe & Zé, es presión y perfección! 💦🧼"
        }
      },
      laundryService: {
        title: "Lavandería Profesional para Salones, Spas y Negocios Locales",
        questions: [
          "¿Tienes un salón de belleza, clínica estética, barbería o spa?",
          "¿Aún pierdes tiempo lavando toallas, sábanas o batas?"
        ],
        solutions: [
          "¡Déjalo en nuestras manos!",
          "Recogemos, lavamos y devolvemos todo doblado, limpio y listo para usar.",
          "Servicio completo tipo wash and fold.",
          "No te preocupas por nada — solo usar y listo.",
          "¡Mr. Joe & Zé resuelve — de la manera que tu negocio necesita!"
        ],
        benefits: {
          title: "Cuidamos de",
          items: [
            "Toallas de salón, clínica o estética",
            "Batas, sábanas, fundas y mantas",
            "Lavado y doblado con estándar profesional",
            "Productos de calidad que cuidan los tejidos",
            "Entrega puntual directamente en tu establecimiento"
          ]
        }
      },
      cameraInstallation: {
        title: "Instalación de Cámaras de Seguridad (Residenciales o Comerciales)",
        description: "Protege tu casa o comercio con la instalación profesional de cámaras de seguridad. Trabajamos con sistemas modernos — con acceso por aplicación, visión nocturna y grabación en la nube. Servicio limpio, discreto y funcional.",
        benefits: {
          title: "Ideal para quien necesita",
          items: [
            "Monitoreo remoto en tiempo real",
            "Instalar cámaras con grabación por movimiento",
            "Aumentar la seguridad de áreas externas e internas",
            "Tener más control y tranquilidad en el día a día"
          ],
          footer: "¡Seguridad y tecnología en la medida exacta — con Mr. Joe & Zé!"
        }
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
    airbnb: {
      title: "Especialistas en Airbnb",
      description: "Transformamos tu espacio en un alojamiento perfecto. Instalaciones, reparaciones y mejoras que impresionan a tus huéspedes.",
      quickService: "Servicio Rápido",
      fiveStars: "5 Estrellas",
      requestQuote: "Solicitar Presupuesto"
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "Uno resuelve, el otro garantiza",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé – SOLUTIONS A2 CORP. Todos los derechos reservados.",
      coverage: "Servicio en Miami-Dade y Broward",
      instagram: "Instagram",
      preInstagram: "Mr. Joe & Zé — uno resuelve, el otro garantiza."
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
        title: "Installation de TV au Mur ou Panneau",
        description: "Nous montons votre TV en toute sécurité, avec précision et finition impeccable — soit directement au mur ou sur panneau. Nous utilisons des outils appropriés et nivellement laser pour garantir un alignement parfait.",
        benefits: {
          title: "Idéal pour ceux qui cherchent:",
          items: [
            "✔ Organisation des câbles",
            "✔ Esthétique propre et moderne",
            "✔ Sécurité pour enfants et animaux",
            "✔ Optimisation de l'espace"
          ],
          footer: "Appelez ceux qui s'y connaissent et le font avec soin!"
        }
      },
      smartLock: {
        title: "Installation et Réparation de Serrures (Conventionnelles ou Électroniques)",
        description: "Nous installons et réparons tous types de serrures — des modèles traditionnels aux serrures électroniques avec mot de passe ou biométrie. Service rapide, discret et avec focus total sur votre sécurité.",
        benefits: {
          title: "Idéal pour ceux qui ont besoin de:",
          items: [
            "✔ Installation de serrure intelligente",
            "✔ Remplacement pour raisons de sécurité",
            "✔ Réparation de serrures endommagées",
            "✔ Mise à jour vers contrôle d'accès moderne"
          ],
          footer: "Confiance, soin et expérience — vous pouvez compter sur Mr. Joe & Zé!"
        }
      },
      foodDisposal: {
        title: "Installation de Broyeur d'Aliments",
        description: "Nous installons les broyeurs d'aliments de manière sûre, efficace et avec tous les soins nécessaires pour le bon fonctionnement de votre évier. Service fait avec attention aux détails et suivant les recommandations du fabricant.",
        benefits: {
          title: "Idéal pour ceux qui cherchent:",
          items: [
            "✔ Praticité dans la routine de cuisine",
            "✔ Fin des mauvaises odeurs dans l'évier",
            "✔ Installation correcte sans risques de fuites",
            "✔ Fonctionnement silencieux et sûr"
          ],
          footer: "Votre broyeur installé avec qualité c'est avec Mr. Joe & Zé!"
        }
      },
      decoration: {
        title: "Fixation de Tableaux, Miroirs, Sculptures et Décoration",
        description: "Laissez votre maison ou bureau avec tout à la bonne place! Nous faisons la fixation de tableaux, miroirs, étagères légères, sculptures et pièces décoratives avec alignement précis et finition propre. Tout fixé en sécurité sans endommager vos murs.",
        benefits: {
          title: "Idéal pour ceux qui valorisent:",
          items: [
            "✔ Nivellement parfait avec laser",
            "✔ Fixation sûre sur cloison sèche, maçonnerie ou bois",
            "✔ Harmonie dans la décoration",
            "✔ Installation sans saleté ni désordre"
          ],
          footer: "L'attention aux détails c'est avec Mr. Joe & Zé!"
        }
      },
      electrical: {
        title: "Petites Réparations Électriques",
        description: "Prise brûlée? Interrupteur avec mauvais contact? Nous résolvons! Nous faisons de petites réparations électriques avec sécurité, agilité et ce soin que vous connaissez déjà.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Remplacement de prises et interrupteurs",
            "✔ Solution de courts-circuits et fils lâches",
            "✔ Installation de gradateurs et capteurs",
            "✔ Ajustements de points d'éclairage"
          ],
          footer: "Service fait de la bonne manière, sans détour. C'est avec le duo qui résout!"
        }
      },
      ceilingFan: {
        title: "Installation de Ventilateur de Plafond, Luminaires et Plus",
        description: "Nous installons ventilateurs de plafond, plafonniers, lustres et luminaires avec sécurité, nivellement et cette finition propre qui fait toute la différence. Tout fonctionne parfaitement, sans bruit, sans oscillation et avec apparence impeccable.",
        benefits: {
          title: "Parfait pour ceux qui ont besoin de:",
          items: [
            "✔ Ventilateur ferme et bien aligné",
            "✔ Installation électrique sûre",
            "✔ Remplacement de luminaires anciens",
            "✔ Éclairage bien distribué dans l'environnement"
          ],
          footer: "Laissez-nous monter l'échelle pour vous! 💡🛠"
        }
      },
      plumbing: {
        title: "Petites Réparations de Plomberie (y compris le cher bidet!)",
        description: "Fuite dans la douche? Robinet qui goutte? Vous voulez installer ce bidet sur les toilettes dont les Brésiliens ne peuvent pas vivre sans? Laissez-nous faire!",
        benefits: {
          title: "Nous nous occupons de:",
          items: [
            "✔ Remplacement de douches et pommeaux",
            "✔ Installation de douche hygiénique",
            "✔ Fuites et gouttes dans éviers ou réservoirs",
            "✔ Ajustements rapides des vannes et siphons"
          ],
          footer: "Service rapide, propre et bien fait. Mr. Joe & Zé résout — exactement comme vous l'aimez!"
        }
      },
      shelves: {
        title: "Installation d'Étagères, Niches et Éléments Muraux",
        description: "Nous installons étagères, niches, supports et petites armoires avec sécurité et alignement parfait. Service propre, bien fixé et avec finition professionnelle — que ce soit sur cloison sèche, bois ou maçonnerie.",
        benefits: {
          title: "Idéal pour ceux qui cherchent:",
          items: [
            "✔ Organisation avec style",
            "✔ Fixation ferme et de niveau",
            "✔ Gain d'espace et de fonctionnalité",
            "✔ Installation sans désordre"
          ],
          footer: "Votre espace exactement comme vous l'avez imaginé — et fixé de la bonne manière avec Mr. Joe & Zé! 🛠📐"
        }
      },
      curtains: {
        title: "Installation de Rideaux, Stores et Accessoires de Fenêtre",
        description: "Nous installons tous types de rideaux et stores avec précision et finition professionnelle. Nous nivelons et fixons en sécurité, en respectant le type de mur et la structure de la fenêtre.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Rideaux à rail ou tringle",
            "✔ Stores enrouleurs, horizontaux ou verticaux",
            "✔ Installation de supports et rails",
            "✔ Fixation sur cloison sèche, bois ou maçonnerie"
          ],
          footer: "Apparence belle, de niveau et fonctionnelle? Appelez Mr. Joe & Zé! 🪟🔧"
        }
      },
      wallRepairs: {
        title: "Petites Réparations de Mur et Peinture",
        description: "Nous faisons cette retouche dont votre mur a besoin: fissures, trous de support ancien, taches d'humidité ou juste une nouvelle peinture pour donner vie à l'environnement. Service propre, bien fait et avec finition soignée.",
        benefits: {
          title: "Idéal pour:",
          items: [
            "✔ Fermer trous et imperfections",
            "✔ Corriger dommages cloison sèche ou maçonnerie",
            "✔ Peinture de pièces ou zones spécifiques",
            "✔ Préparation avant déménagement ou inspection"
          ],
          footer: "Murs lisses, peinture uniforme et zéro désordre. Avec Mr. Joe & Zé c'est comme ça! 🎨🧱"
        }
      },
      doorRepairs: {
        title: "Réparations de Portes, Charnières et Ajustements d'Alignement",
        description: "Porte qui traîne, fait du bruit ou hors d'aplomb? Nous résolvons! Nous réalignons charnières, ajustons serrures et laissons votre porte fonctionner en douceur comme elle devrait.",
        benefits: {
          title: "Service idéal pour:",
          items: [
            "✔ Alignement et nivellement de portes",
            "✔ Remplacement ou fixation de charnières",
            "✔ Portes qui ne ferment pas bien",
            "✔ Renforcement de vis lâches ou endommagées"
          ],
          footer: "Porte fonctionnant comme neuve, sans effort, sans bruit et avec la touche correcte de Mr. Joe & Zé! 🚪🔩"
        }
      },
      houseNumbers: {
        title: "Installation de Numéro Résidentiel, Plaques et Éléments de Façade",
        description: "Nous fixons le numéro de maison, plaques décoratives, signalisations et autres éléments externes avec précision et finition professionnelle — toujours en respectant le style de façade et garantissant durabilité.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Installation de numéros résidentiels",
            "✔ Plaques de signalisation (entrée, privé, etc.)",
            "✔ Supports de correspondance ou livraison",
            "✔ Fixation de niveau et résistante aux intempéries"
          ],
          footer: "La première impression de votre maison commence à la façade — et avec Mr. Joe & Zé, elle reste parfaite! 🏠🔩"
        }
      },
      mailbox: {
        title: "Installation de Boîte aux Lettres, Supports Externes et Fixations au Sol",
        description: "Nous installons boîtes aux lettres avec base ferme, nivellement et finition propre. Nous fixons aussi autres éléments au sol avec sécurité et durabilité, que ce soit dans béton, herbe ou terre compactée.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Installation de boîte aux lettres avec béton",
            "✔ Fixation de poteaux pour clôtures légères",
            "✔ Supports de jardin, signalisation ou éclairage solaire",
            "✔ Renforcement de structures déjà existantes"
          ],
          footer: "Tout droit, bien fixé et prêt à durer — vous pouvez faire confiance au duo Mr. Joe & Zé! 📬🧱"
        }
      },
      safetyDevices: {
        title: "Installation de Détecteurs de Fumée, Capteurs et Dispositifs de Sécurité",
        description: "Nous installons détecteurs de fumée, monoxyde de carbone, capteurs de présence, alarmes et autres dispositifs de sécurité domestique. Tout avec positionnement correct et fixation sûre au plafond ou mur.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Installation de détecteurs de fumée et CO",
            "✔ Alarmes de sécurité et sonnettes intelligentes",
            "✔ Capteurs de mouvement et éclairage automatique",
            "✔ Remplacement et maintenance d'unités anciennes"
          ],
          footer: "Votre maison plus sûre avec installation professionnelle et zéro mal de tête. Mr. Joe & Zé s'en occupent pour vous! 🔧🛡"
        }
      },
      gutterCleaning: {
        title: "Nettoyage de Gouttières",
        description: "Nous faisons le nettoyage complet des gouttières et conduits d'évacuation de votre maison. Nous enlevons feuilles, saleté et obstructions pour éviter infiltrations, dommages à la structure et accumulation d'eau.",
        benefits: {
          title: "Bénéfices du service:",
          items: [
            "✔ Prévention contre bouchons et débordements",
            "✔ Évite dommages au toit et infiltrations dans murs",
            "✔ Idéal avant période de pluies",
            "✔ Service propre, sûr et avec évacuation appropriée des déchets"
          ],
          footer: "Votre gouttière fonctionnant comme elle devrait — sans désordre, sans risques. Appelez Mr. Joe & Zé! 🍂🧤"
        }
      },
      pressureWashing: {
        title: "Lavage de Trottoirs au Jet Haute Pression",
        description: "Votre trottoir est sale, plein de mousse ou avec taches difficiles? Nous résolvons avec lavage haute pression! Nous enlevons saleté lourde, moisissure, graisse et même ces marques de pneus qui semblent éternelles.",
        benefits: {
          title: "Nous traitons:",
          items: [
            "✔ Trottoirs, terrasses et entrées de garage",
            "✔ Patios, murs et parois externes",
            "✔ Nettoyage profond sans produits agressifs",
            "✔ Équipement professionnel et résultat visible immédiatement"
          ],
          footer: "Votre zone externe comme neuve — propre, sûre et avec apparence renouvelée. Avec Mr. Joe & Zé, c'est pression et perfection! 💦🧼"
        }
      },
      laundryService: {
        title: "Blanchisserie Professionnelle pour Salons, Spas et Entreprises Locales",
        questions: [
          "Avez-vous un salon de beauté, une clinique esthétique, un barbier ou un spa?",
          "Perdez-vous encore du temps à laver les serviettes, draps ou peignoirs?"
        ],
        solutions: [
          "Laissez-nous faire!",
          "Nous ramassons, lavons et ramenons tout plié, propre et prêt à utiliser.",
          "Service complet type wash and fold.",
          "Vous ne vous souciez de rien — juste utiliser et c'est tout.",
          "Mr. Joe & Zé résout — de la façon dont votre entreprise a besoin!"
        ],
        benefits: {
          title: "Nous nous occupons de",
          items: [
            "Serviettes de salon, clinique ou esthétique",
            "Peignoirs, draps, taies d'oreiller et couvertures",
            "Lavage et pliage avec standard professionnel",
            "Produits de qualité qui prennent soin des tissus",
            "Livraison ponctuelle directement à votre établissement"
          ]
        }
      },
      cameraInstallation: {
        title: "Installation de Caméras de Sécurité (Résidentielles ou Commerciales)",
        description: "Protégez votre maison ou commerce avec l'installation professionnelle de caméras de sécurité. Nous travaillons avec des systèmes modernes — avec accès par application, vision nocturne et enregistrement dans le nuage. Service propre, discret et fonctionnel.",
        benefits: {
          title: "Idéal pour ceux qui ont besoin de",
          items: [
            "Surveillance à distance en temps réel",
            "Installer des caméras avec enregistrement par mouvement",
            "Augmenter la sécurité des zones externes et internes",
            "Avoir plus de contrôle et tranquillité au quotidien"
          ],
          footer: "Sécurité et technologie dans la bonne mesure — avec Mr. Joe & Zé!"
        }
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
    airbnb: {
      title: "Spécialistes Airbnb",
      description: "Nous transformons votre espace en un hébergement parfait. Installations, réparations et améliorations qui impressionnent vos invités.",
      quickService: "Service Rapide",
      fiveStars: "5 Étoiles",
      requestQuote: "Demander un Devis"
    },
    footer: {
      title: "Mr. Joe & Zé – SOLUTIONS A2 CORP.",
      subtitle: "L'un répare, l'autre garantit",
      whatsapp: "WhatsApp: (786) 593-7841",
      copyright: "© 2024 Mr. Joe & Zé – SOLUTIONS A2 CORP. Tous droits réservés.",
      coverage: "Service à Miami-Dade et Broward",
      instagram: "Instagram",
      preInstagram: "Mr. Joe & Zé — l'un répare, l'autre garantit."
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
