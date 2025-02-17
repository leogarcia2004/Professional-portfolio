import HTML from '../assets/images_icons_skills/html_icon.png';
import CSS from '../assets/images_icons_skills/css_icon.png';
import JavaScript from '../assets/images_icons_skills/JavaScript.png';
import TypeScript from '../assets/images_icons_skills/TypeScript.png';
import ReactJs from '../assets/images_icons_skills/ReactJs.png';
import NextJs from '../assets/images_icons_skills/nextjs_icon.png';
import PostgreSQL from '../assets/images_icons_skills/postgreSQL.png';
import Python from '../assets/images_icons_skills/python_icon.png';
import TailwindCss from '../assets/images_icons_skills/tailwindcss_icon.png';
import NodeJs from '../assets/images_icons_skills/nodejs.png';

import FinanceAi from '../assets/images_projects/FinanceAi.png'
import EcommerceFurniro from '../assets/images_projects/EcommerceFurniro.png'
import AplicationNotes from '../assets/images_projects/AplicationNotes.png'
import EcommerceClothes from '../assets/images_projects/EcommerceClothes.png'
import JogoDaVelha from '../assets/images_projects/JogoDaVelha.png'
import TesteConhecimento from '../assets/images_projects/TesteConhecimento.png'
import TaskerMaker from '../assets/images_projects/TaskerMaker.png'
import PetsAdoption from '../assets/images_projects/PetsAdoption.png'

export const skills = [
    { name: 'HTML', image: HTML, description: 'Linguagem responsável por definir o esqueleto de sites. Possuo amplo domínio.', alt: 'Icone Html' },
    { name: 'CSS', image: CSS, description: 'Linguagem responsável por definir o estilo dos sites. Possuo amplo domínio.', alt: 'Icone Css' },
    { name: 'JavaScript', image: JavaScript, description: 'Linguagem responsável por adicionar lógica aos sites. Possuo amplo domínio.', alt: 'Icone JavaScript' },
    { name: 'TypeScript', image: TypeScript, description: 'Linguagem fortemente tipada que se baseia em JavaScript, oferecendo melhores recursos. Possuo amplo domínio.', alt: 'Icone TypeScript' },
    { name: 'React', image: ReactJs, description: 'Biblioteca de código aberto JavaScript que permite criar interfaces de usuário para páginas web. Possuo amplo domínio.', alt: 'Icone ReactJs' },
    { name: 'NextJs', image: NextJs, description: 'Framework baseado no React que ajuda a criar aplicações web interativas e rápidas. Possuo amplo domínio.', alt: 'Icone NextJs' },
    { name: 'TailwindCss', image: TailwindCss, description: 'Framework de estilo CSS que permite estilizar páginas web de forma simplificada. Possuo amplo domínio.', alt: 'Icone TailwindCss' },
    { name: 'Python', image: Python, description: 'Linguagem amplamente usada em desenvolvimento de software, ciência de dados e machine learning. Possuo conhecimento intermediário.', alt: 'Icone Python' },
    { name: 'PostgreSQL', image: PostgreSQL, description: 'Banco de dados relacional de código aberto, que oferece suporte a consultas SQL e JSON. Possuo conhecimento básico.', alt: 'Icone PostgreSQL' },
    { name: 'NodeJs', image: NodeJs, description: 'Plataforma de software livre que permite executar código JavaScript no servidor. Possuo conhecimento básico.', alt: 'Icone NodeJs.' }
  ];

export const projects = [
      {
          title: 'Saas Gestão Financeira',
          image: FinanceAi,
          description: 'Este projeto é uma plataforma permite gerenciar finanças de maneira eficiente, além de proporcionar diversas opções de investimento, oferecendo flexibilidade para tomadas de decisão financeiras.',
          link_project: 'https://finance-ai-iota.vercel.app/login',
          link_github: 'https://github.com/leogarcia2004/Finance-Ai',
          Technologies: ['NextJs', 'TypeScript', 'TailwindCSS', 'NodeJS', 'PostgreSQL', 'CLerk', 'Stripe']
      },
      {
          title: 'Ecommerce Furniro',
          image: EcommerceFurniro,
          description: 'Este projeto é uma simulação de um e-commerce de móveis, onde os usuários podem explorar produtos, adicioná-los ao carrinho e finalizar suas compras. É necessário realizar login para acessar todas as funcionalidades, proporcionando uma experiência segura e personalizada. Atualmente este projeto está em desenvolvimento.',
          link_project: 'https://ecommerce-furniro.vercel.app/',
          link_github: 'https://github.com/leogarcia2004/ECOMMERCE-FURNIRO',
          Technologies: ['ReactJs', 'TypeScript', 'TailwindCSS', 'Firebase']
      },
      {
          title: 'Aplicação Web de notas',
          image: AplicationNotes,
          description: 'Este projeto permite criar e armazenar notas no local storage, garantindo sua preservação após recarregar a página. Inclui integração com áudio para gravação e transcrição de notas de voz.',
          link_project: 'https://aplicacao-web-notes.vercel.app/',
          link_github: 'https://github.com/leogarcia2004/AplicacaoWeb-notes',
          Technologies: ['ReactJs', 'TypeScript', 'TailwindCSS']
      },
      {
          title: 'Ecommerce Garcia Vendas',
          image: EcommerceClothes,
          description: 'Este projeto é um e-commerce de roupas que permite aos usuários selecionar produtos, adicioná-los ao carrinho. O cadastro com credenciais e informações de pagamento é necessário para finalizar a compra, e as compras são registradas em um histórico organizado.',
          link_project: 'https://pagina-e-commerce.vercel.app/',
          link_github: 'https://github.com/leogarcia2004/PAGINA-E-COMMERCE',
          Technologies: ['JavaScript', 'HTML', 'TailwindCSS']
      },
      {
        title: 'Site adoação de pets',
        image: PetsAdoption,
        description: 'Este projeto é um site de adoção de pets, onde o usuário pode visualizar os animais disponíveis para adoção, além de obter informações sobre cada um deles. O site obtém dois formulários para o preenchimento de dados caso o usuário resolva adotar.',
        link_project: 'https://pets-adoption-delta.vercel.app/',
        link_github: 'https://github.com/leogarcia2004/Pets_Adoption',
        Technologies: ['React', 'TypeScript', 'TailwindCSS']
      },
      {
        title: 'Marcador de tarefas',
        image: TaskerMaker,
        description: 'Este projeto é um marcador de tarefas, onde o usuário pode adicionar, editar e excluir tarefas, além de marcar como concluídas. A aplicação permite organizar as atividades diárias de forma eficiente e prática.',
        link_project: 'https://app-task-marker.vercel.app/',
        link_github: 'https://github.com/leogarcia2004/App-Task-Marker',
        Technologies: ['JavaScript', 'HTML', 'CSS']
      }, 
      {
        title: 'Jogo da Velha',
        image: JogoDaVelha,
        description: 'Este projeto é um jogo da velha interativo, onde o usuário pode optar por jogar contra outro jogador ou contra uma inteligência artificial (IA). A cada partida, a pontuação é atribuída ao vencedor, proporcionando uma experiência competitiva e dinâmica.',
        link_project: 'https://joga-da-velha-virid.vercel.app/',
        link_github: 'https://github.com/leogarcia2004/Joga-da-Velha',
        Technologies: ['JavaScript', 'HTML', 'CSS']
      },
      {
        title: 'Teste de conhecimento',
        image: TesteConhecimento,
        description: 'Este projeto consiste em um teste de conhecimento, onde o usuário pode responder perguntas de múltipla escolha e verificar o resultado ao final. O teste é composto por perguntas de diferentes níveis de dificuldade, proporcionando uma experiência educativa e desafiadora.',
        link_project: 'https://teste-conhecimento.vercel.app/',
        link_github: 'https://github.com/leogarcia2004/Teste-Conhecimento',
        Technologies: ['JavaScript', 'HTML', 'CSS']
      },
      {
        title: 'Análise de dados - Cancelamento de clientes',
        image: undefined,
        description: 'Este projeto consiste na análise de dados com o objetivo de identificar motivos que influenciam a decisão dos clientes de cancelar o serviço. A análise é realizada por meio de gráficos e tabelas, que facilitam a visualização e interpretação dos dados.',
        link_project: '',
        link_github: 'https://github.com/leogarcia2004/Analise-dados-cancelamento-clientes',
        Technologies: ['Python', 'Pandas']
      },
      {
        title: 'Automação - Envio de e-mails',
        image: undefined,
        description: 'Este projeto é um sistema de automação que permite o envio de e-mails personalizados para os clientes. A automação é realizada por meio de scripts, que facilitam o envio de mensagens em larga escala, de forma rápida e eficiente.',
        link_project: '',
        link_github: 'https://github.com/leogarcia2004/Automacao-de-e-mail-com-Python',
        Technologies: ['Python', 'Pandas']
      },
      {
        title: 'Inteligência Artificial - Previsões',
        image: undefined,
        description: 'Este projeto consiste analisar todos os clientes de um banco, e com base nessa análise, criar um modelo que consiga ler as informações do cliente e dizer automaticamente o score de crédito dele: Ruim, Ok, Bom.',
        link_project: '',
        link_github: 'https://github.com/leogarcia2004/Score-cliente-em-banco-IA-Python',
        Technologies: ['Python']
      },
      {
        title: 'Criação chat online',
        image: undefined,
        description: 'Este projeto consiste na criação de um chat online, que permite a interação entre os usuários por meio de mensagens.',
        link_project: '',
        link_github: 'https://github.com/leogarcia2004/Chat-online',
        Technologies: ['Python']
      }
    ]

export const sections = [
    {
      name: "Inicio",
      to: "home",
      offset: 0
    },
    {
      name: "Sobre",
      to: "about",
      offset: 50
    },
    {
      name: "Habilidades",
      to: "skills",
      offset: 100
    },
    {
      name: "Projetos",
      to: "projects",
      offset: 100
    },
    {
      name: "Contato",
      to: "contact",
      offset: 100
    }
]