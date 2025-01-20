import Foto_perfil from './assets/Foto_Perfil.jpeg'
import Projects from './components/Projects'
import Skills from './components/Skills'
import email from './assets/images_icons_footer/email.png'
import linkedin from './assets/images_icons_footer/linkedin.png'
import instagram from './assets/images_icons_footer/instagram.png'

function App() {

  return (
    <>
        <header className="fixed top-0 z-10 bg-black bg-opacity-60 w-full flex justify-end px-8 py-4 shadow-lg">
          <nav>
            <ul className="flex justify-center gap-6 text-white text-sm">
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">
                <a href="">INICIO</a>
              </li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">
                <a href="#about-me">SOBRE</a></li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">
                <a href="#skills">HABILIDADES</a>
              </li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">
                <a href="#projects">PROJETOS</a>
              </li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">
                <a href="#contact">CONTATO</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="bg-imagem_professional bg-cover bg-center h-screen flex justify-center items-center">
            <div className="flex flex-col items-center text-white">
              <h1 className="font-bold text-center text-5xl">Oi, eu sou o Leonardo!</h1>
              <span className="text-lg tracking-[0.1rem] border-b border-white py-1">A PROFESSIONAL WEB DEVELOPER</span>
            </div>
        </section>
        <section id='about-me' className="bg-[#111111] flex flex-col items-center w-full">
            <div className="flex flex-col items-center max-w-[1440px] px-16">
              <h2 className="text-4xl font-semibold tracking-[0.1rem] text-center text-white border-b border-white pb-1 mt-32">SOBRE MIM</h2>           
              <div className='flex flex-col md:flex-row items-center gap-12 mt-14'>
                <img src={Foto_perfil} alt="Imagem Autor" className='bg-cover w-80' />
                <p className="text-justify text-sm text-white leading-[2rem] ">
                   Meu nome é Leonardo Garcia Andrade, tenho 21 anos e curso Análise e Desenvolvimento de Sistemas. Atualmente estou estudando desenvolvimento web. Meu intuito é fazer parte da equipe de Desenvolvimento de Software, tendo o objetivo de evoluir profissionalmente para júnior e consequentemente para pleno e sênior. <br />
                Tive minha primeira oportunidade na área de desenvolvimento Web, trabalhando como estagiário na empresa <a href="https://compass.uol/pt/home/" target="_blank" rel="noopener noreferrer"><strong className='text-gray-500 hover:border-b hover:border-gray-500'>Compass UOL</strong></a>, no qual adquiri experiência com trabalho em equipe. Possuo conhecimento na área de infraestrutura de TI, atuando como suporte de TI na escola <a href="https://www.institutosamaritano.com.br" target="_blank" rel="noopener noreferrer"><strong className='text-gray-500 hover:border-b hover:border-gray-500'>Instituto Samaritano de Ensino</strong></a> e trabalhei como jovem aprendiz na Gráfica Cristal de Franca. Nesse período, consegui aprimorar meu perfil profissional para o mercado de trabalho.  <br />
                Tenho grande interesse na área de análise de dados e pretendo, futuramente, aprofundar meus estudos em Python, com o objetivo de me tornar um desenvolvedor Full Stack. Sou motivado por desafios, proativo e tenho um forte compromisso com a aquisição e expansão de conhecimentos. Trabalhando em equipe, almejo contribuir com inovação e impactar positivamente o ambiente, enquanto continuo a desenvolver minhas habilidades técnicas e interpessoais. <br />
                Atualmente, estou cursando inglês na escola KNN de Franca com o objetivo de ampliar minhas oportunidades no setor tecnológico e aprimorar minha qualificação na comunicação.
                </p>
              </div>
            </div>      
        </section>
        <Skills />
        <Projects />
        <section id='contact' className="bg-[#111111] w-full ">
            <div className="flex flex-col max-w-[1440px] ">
              <h2 className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] self-center text-white border-b border-white pb-1 mt-44">Entre em contato</h2>
              <form className='flex flex-col md:items-center gap-6 mt-20 md:px-0 px-6' action="">
                  <input className='bg-[#202020] text-neutral-300 rounded-xl md:w-[500px] w-full h-12 pl-3 focus:border-neutral-300 appearance-none' type="text" name="name" id="name" placeholder='Seu nome' />
                  <input className='bg-[#202020] text-neutral-300 rounded-xl md:w-[500px] w-full h-12 pl-3 focus:border-neutral-300 appearance-none' type="email" name="email" id="email" placeholder='Seu e-mail' />
                  <textarea className='bg-[#202020] text-neutral-300 rounded-xl md:w-[500px] w-full pt-3 pl-3 focus:border-neutral-300 resize-none' name="message" id="message" rows={5} placeholder='Sua mensagem'></textarea>
                  <button type='submit' className='bg-black text-sm text-white font-semibold rounded-xl md:w-[500px] w-full h-12 pl-3 cursor-pointer mb-40'>ENVIAR</button>
              </form>
            </div>=
        </section>
        <footer className='bg-black w-full md:px-12 px-6 py-8'>
            <div className='flex justify-between max-w-[1440px]'>
              <ul className='flex items-center gap-6'>
                <li>
                  <a href="mailto:leonardogarcia1914@hotmail.com"><img src={email} alt="Icone Email" /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/leonardo-garcia-21a2852b0/" target='_blank' rel="noopener"><img src={linkedin} alt="Icone LinkedIn" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/leogarcia_g/" target='_blank' rel="noopener"><img src={instagram} alt="Icone Instagram" /></a>
                </li>
              </ul>
              <span className='text-white text-opacity-75 text-sm'>Copyright 2024</span>
            </div>
        </footer>
    </>
  )
}

export default App
