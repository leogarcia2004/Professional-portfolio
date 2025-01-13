import HTML from '../assets/images_icons_skills/html_icon.png'
import CSS from '../assets/images_icons_skills/css_icon.png'
import JavaScript from '../assets/images_icons_skills/JavaScript.png'
import TypeScript from '../assets/images_icons_skills/TypeScript.png'
import ReactJs from '../assets/images_icons_skills/ReactJs.png'
import NextJs from '../assets/images_icons_skills/nextjs_icon.png'
import PostgreSQL from '../assets/images_icons_skills/postgreSQL.png'
import Python from '../assets/images_icons_skills/python_icon.png'
import TailwindCss from '../assets/images_icons_skills/tailwindcss_icon.png'

const Skills = () => {

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
  )
}

export default Skills