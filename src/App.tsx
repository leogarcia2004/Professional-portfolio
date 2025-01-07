import Foto_perfil from './assets/Foto_Perfil_Compass.jpeg'

function App() {

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
        <section className="bg-[#111111] flex flex-col items-center px-32 w-full">
            <div className="flex flex-col items-center max-w-[1440px]">
              <h2 className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-32">SOBRE MIM</h2>           
              <div className='flex items-center gap-12 mt-14'>
                <img src={Foto_perfil} alt="Imagem Autor" className='bg-cover  w-80' />
                <p className="text-justify text-sm text-white leading-[2rem] "> Meu nome é Leonardo, tenho 21 anos e curso Análise e Desenvolvimento de Sistemas. Atualmente estou estudando desenvolvimento web e mobile. Meu intuito é fazer parte de equipe de Desenvolvimento de Software, tendo o objetivo de evoluir profissionalmente para júnior e consequentemente para pleno e sênior. <br />
                Tive minha primeira oportunidade na área de desenvolvimento Web, trabalhando como estagiário na empresa Compass UOL, no qual adquiri experiência com trabalho em equipe. Possuo conhecimento na área de infraestrutura de TI, atuando como suporte de TI na escola Instituto Samaritano e trabalhei como jovem aprendiz na Gráfica Cristal de Franca. Nesse período, consegui aprimorar meu perfil profissional para o mercado de trabalho.  <br />
                Tenho grande interesse na área de análise de dados e pretendo, futuramente, aprofundar meus estudos em Python, com o objetivo de me tornar um desenvolvedor Full Stack. Sou motivado por desafios, proativo e tenho um forte compromisso com a aquisição e expansão de conhecimentos. Trabalhando em equipe, almejo contribuir com inovação e impactar positivamente o ambiente, enquanto continuo a desenvolver minhas habilidades técnicas e interpessoais. <br />
                Atualmente, estou cursando inglês na escola KNN de Franca com o objetivo de ampliar minhas oportunidades no setor tecnológico e aprimorar minha qualificação na comunicação.
                </p>
              </div>
            </div>         
        </section>
        <section>
            <h2 className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-32">HABILIDADES</h2>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>TailwindCss</li>
                <li>PostgreSQL</li>
                <li>Python</li>
              </ul>
            </div>
        </section>
        <section>
            <h2>PROJETOS</h2>
            <div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 1</p>
              </div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 2</p>
              </div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 3</p>
              </div>
            </div>
        </section>
    </>
  )
}

export default App
