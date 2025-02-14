import Selfie_perfil from '../assets/selfie_portfolio.png'

const AboutMe = () => {
  return (
    <section id='about' className="bg-[#111111] flex flex-col items-center w-full">
        <div className="flex flex-col items-center max-w-[1440px] px-8 md:px-16">
            <h2 className="text-4xl font-semibold tracking-[0.1rem] text-center text-white border-b border-white pb-1 mt-32">SOBRE MIM</h2>           
            <div className='flex flex-col lg:flex-row items-center gap-12 mt-14'>
                <img src={Selfie_perfil} alt="Imagem Autor" className='bg-cover w-80' />
                <p className="text-center md:text-justify text-sm text-white leading-[2rem] ">
                Meu nome é Leonardo Garcia Andrade, tenho 21 anos e atualmente sou aluno do curso de Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web. Minha trajetória profissional iniciou-se com a oportunidade de estágio na empresa <a href="https://compass.uol/pt/home/" target="_blank" rel="noopener noreferrer"><strong className='text-gray-500 hover:border-b hover:border-gray-500'>Compass UOL</strong></a>, no qual adquiri habilidades no trabalho colaborativo. Além disso, possuo conhecimentos na área de infraestrutura de TI, tendo atuado como suporte técnico no <a href="https://www.institutosamaritano.com.br" target="_blank" rel="noopener noreferrer"><strong className='text-gray-500 hover:border-b hover:border-gray-500'>Instituto Samaritano de Ensino</strong></a>. Também desempenhei a função de jovem aprendiz na Gráfica Cristal de Franca. Todas essas experiências contribuiram significativamente para o aprimoramento do meu perfil profissional. <br />
                Tenho grande interesse na área de análise de dados e pretendo me aprofundar em Python no futuro, com o objetivo de me tornar um analista de dados e desenvolvedor Full Stack sênior. Sou motivado por desafios, proativo e tenho um forte compromisso com a aprendizagem contínua. Tenho como meta contribuir para a inovação em equipe e impactar positivamente o ambiente de trabalho, ao mesmo tempo em que continuo a desenvolver minhas habilidades técnicas e interpessoais. <br />
                Atualmente, estou cursando inglês na escola KNN de Franca para ampliar minhas oportunidades no setor tecnológico e aprimorar minha comunicação.
                </p>
            </div>
        </div>      
    </section>
  )
}

export default AboutMe