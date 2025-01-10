import Foto_perfil from './assets/Foto_Perfil.jpeg'
import HTML from './assets/images_icons_skills/html_icon.png'
import CSS from './assets/images_icons_skills/css_icon.png'
import JavaScript from './assets/images_icons_skills/JavaScript.png'
import TypeScript from './assets/images_icons_skills/TypeScript.png'
import ReactJs from './assets/images_icons_skills/ReactJs.png'
import NextJs from './assets/images_icons_skills/nextjs_icon.png'
import PostgreSQL from './assets/images_icons_skills/postgreSQL.png'
import Python from './assets/images_icons_skills/python_icon.png'
import TailwindCss from './assets/images_icons_skills/tailwindcss_icon.png'
import Projects from './components/Projects'

function App() {

  const skills = [
    {
      id: 1,
      name: 'HTML',
      image: HTML,
      description: 'Linguagem responsável por definir o esqueleto de sites. Possuo amplo domínio.',
      alt: 'Icone Html'
    },
    {
      id: 2,
      name: 'CSS',
      image: CSS,
      description: 'Linguagem responsável por definir o estilo dos sites. Possuo amplo domínio.',
      alt: 'Icone Css'
    },
    {
      id: 3,
      name: 'JavaScript',
      image: JavaScript,
      description: 'Linguagem responsável por adicionar lógica aos sites. Possuo amplo domínio.',
      alt: 'Icone JavaScript'
    },
    {
      id: 4,
      name: 'TypeScript',
      image: TypeScript,
      description: 'Linguagem fortemente tipada que se baseia em JavaScript, oferecendo melhores recursos. Possuo amplo domínio.',
      alt: 'Icone TypeScript'
    },
    {
      id: 5,
      name: 'React',
      image: ReactJs,
      description: 'Biblioteca de código aberto JavaScript que permite criar interfaces de usuário para páginas web. Possuo amplo domínio.',
      alt: 'Icone ReactJs'
    },
    {
      id: 6,
      name: 'NextJs',
      image: NextJs,
      description: 'Framework baseado no React que ajuda a criar aplicações web interativas e rápidas. Possuo amplo domínio.',
      alt: 'Icone NextJs'
    },
    {
      id: 7,
      name: 'TailwindCss',
      image: TailwindCss,
      description: 'Framework de estilo CSS que permite estilizar páginas web de forma simplificada. Possuo amplo domínio.',
      alt: 'Icone TailwindCss'
    },
    {
      id: 8,
      name: 'Python',
      image: Python,
      description: 'Linguagem amplamente usada em desenvolvimento de software, ciência de dados e machine learning. Possuo conhecimento intermediário.',
      alt: 'Icone Python'
    },
    {
      id: 9,
      name: 'PostgreSQL',
      image: PostgreSQL,
      description: 'Banco de dados relacional de código aberto, que oferece suporte a consultas SQL e JSON. Possuo conhecimento básico.',
      alt: 'Icone PostgreSQL'
    },
  ]

  return (
    <>
        <header className="fixed top-0 z-10 bg-black bg-opacity-60 w-full flex justify-end px-8 py-4 shadow-lg">
          <nav>
            <ul className="flex justify-center gap-6 text-white text-sm ">
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">INICIO</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">SOBRE</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">HABILIDADES</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">PROJETOS</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">CONTATO</li>
            </ul>
          </nav>
        </header>
        <section className="bg-imagem_professional bg-cover bg-center h-screen flex justify-center items-center">
            <div className="flex flex-col items-center text-white">
              <h1 className="font-bold text-5xl">Oi, eu sou o Leonardo!</h1>
              <span className="text-lg tracking-[0.1rem] border-b border-white py-1">A PROFESSIONAL WEB DEVELOPER</span>
            </div>
        </section>
        <section className="bg-[#111111] flex flex-col items-center w-full">
            <div className="flex flex-col items-center max-w-[1440px] px-16">
              <h2 className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-32">SOBRE MIM</h2>           
              <div className='flex flex-col md:flex-row items-center gap-12 mt-14'>
                <img src={Foto_perfil} alt="Imagem Autor" className='bg-cover w-80' />
                <p className="text-justify text-sm text-white leading-[2rem] ">
                   Meu nome é Leonardo, tenho 21 anos e curso Análise e Desenvolvimento de Sistemas. Atualmente estou estudando desenvolvimento web e mobile. Meu intuito é fazer parte de equipe de Desenvolvimento de Software, tendo o objetivo de evoluir profissionalmente para júnior e consequentemente para pleno e sênior. <br />
                Tive minha primeira oportunidade na área de desenvolvimento Web, trabalhando como estagiário na empresa <a href="https://compass.uol/pt/home/" target="_blank" rel="noopener noreferrer">Compass UOL</a>, no qual adquiri experiência com trabalho em equipe. Possuo conhecimento na área de infraestrutura de TI, atuando como suporte de TI na escola <a href="https://www.institutosamaritano.com.br" target="_blank" rel="noopener noreferrer">Instituto Samaritano de Ensino</a> e trabalhei como jovem aprendiz na Gráfica Cristal de Franca. Nesse período, consegui aprimorar meu perfil profissional para o mercado de trabalho.  <br />
                Tenho grande interesse na área de análise de dados e pretendo, futuramente, aprofundar meus estudos em Python, com o objetivo de me tornar um desenvolvedor Full Stack. Sou motivado por desafios, proativo e tenho um forte compromisso com a aquisição e expansão de conhecimentos. Trabalhando em equipe, almejo contribuir com inovação e impactar positivamente o ambiente, enquanto continuo a desenvolver minhas habilidades técnicas e interpessoais. <br />
                Atualmente, estou cursando inglês na escola KNN de Franca com o objetivo de ampliar minhas oportunidades no setor tecnológico e aprimorar minha qualificação na comunicação.
                </p>
              </div>
            </div>      
        </section>
        <section className="bg-[#111111] flex flex-col items-center w-full">
            <div className="flex flex-col items-center max-w-[1440px]">
              <h2 className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-44">HABILIDADES</h2>
              <div className='mt-28'>
                <ul className='flex gap-8 flex-wrap justify-center'>
                  {skills.map(skill => (
                    <li key={skill.id} className='bg-[#202020] flex flex-col items-center justify-center w-72 h-64 rounded-2xl'>
                      <img src={skill.image} alt={skill.alt} className='mb-3' />
                      <span className='text-white font-semibold mb-4'>{skill.name}</span>
                      <p className='text-gray-300 text-sm text-center w-52'>{skill.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </section>
        <Projects />
        
    </>
  )
}

export default App
