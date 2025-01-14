import { useState, useEffect } from 'react';
import FinanceAi from '../assets/images_projects/FinanceAi.png'
import EcommerceFurniro from '../assets/images_projects/EcommerceFurniro.png'
import AplicationNotes from '../assets/images_projects/AplicationNotes.png'
import EcommerceClothes from '../assets/images_projects/EcommerceClothes.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projects = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Saas Gestão Financeira',
            image: FinanceAi,
            description: 'Este projeto é um saas com a finalidade de ajudar o usuário a ter um controle financeiro de forma robusta e atualizada. O usário terá o poder de fazer investimento de várias formas.',
            link: 'https://github.com/leogarcia2004/Finance-Ai'
        },
        {
            id: 2,
            title: 'Ecommerce Furniro',
            image: EcommerceFurniro,
            description: 'Este projeto, é uma simulação de um ecommerce de móveis. O usuário pode escolher o produto, adicionar ao carrinho e finalizar a compra. Com a integração com firebase, o usuário precisará fazer o login para efetuar a compra livremente.',
            link: 'https://github.com/leogarcia2004/ECOMMERCE-FURNIRO'
        },
        {
            id: 3,
            title: 'Aplicação Web de notas',
            image: AplicationNotes,
            description: 'Este projeto possibilita o usuário de escrever notas e armazená-las no local storage sem perder-las ao recarregar a página. Uma aplicação bem desenvolvida com integração de áudio, que permite o usuário gravar notas de voz e transcrevelas.',
            link: 'https://github.com/leogarcia2004/AplicacaoWeb-notes'
        },
        {
            id: 4,
            title: 'Ecommerce de roupas',
            image: EcommerceClothes,
            description: 'Este projeto é um ecommerce de roupas, no qual o usuário pode escolher o produto, adicionar ao carrinho e finalizar a compra. Antes de finalização da compra do produto, o usuário terá que fazer um cadastro de suas credenciais, e informações do cartão. Logo após a finalização da compra, ficará um histórico salvo de todas as compras por data.',
            link: 'https://github.com/leogarcia2004/PAGINA-E-COMMERCE'
        },
        {
          id: 5,
          title: 'Site Apple Watch',
          image: EcommerceClothes,
          description: 'Este projeto é um ecommerce de Apple Watch, no qual o usuário pode escolher o produto, de acordo com o tamanho e cor.',
          link: 'https://github.com/leogarcia2004/Site-Apple-Watch'
        }
    ]
  return (
    
    windowWidth > 900 ? (
      <section className="bg-[#111111] w-full">
        <div className='max-w-[1440px] flex flex-col px-12'>
          <h2 className="text-4xl font-semibold tracking-[0.1rem] self-center text-white border-b border-white pb-1 mt-44">PROJETOS</h2>
          <ul className='mt-32 flex flex-col gap-16'>
              {projects.map((project) => (
                (
                  project.id % 2 !== 0 ?
                  <li key={project.id} className='flex md:flex-row flex-col items-center gap-10'>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                      <img src={project.image} className="w-72 h-48 rounded-2xl" alt="Imagem Projeto" />
                    </a>
                    <div className='flex flex-col gap-4'>
                      <h3 className='text-white md:text-start text-center text-3xl font-semibold'>{project.title}</h3>
                      <p className='text-gray-300 md:text-justify text-center max-w-[600px]'>{project.description}</p>
                    </div>
                  </li>
                  :
                  <li key={project.id} className='flex md:flex-row-reverse flex-col items-center self-end gap-10'>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                      <img src={project.image} className='w-72 h-48 rounded-2xl' alt="Imagem Projeto" />
                    </a>
                    <div className='flex flex-col gap-4'>
                      <h3 className='text-white text-3xl md:text-end text-center font-semibold'>{project.title}</h3>
                      <p className='text-gray-300 md:text-justify text-center max-w-[600px]'>{project.description}</p>
                    </div>    
                  </li>
                )
              ))}
            </ul>
        </div>
      </section>
    ) : (
      <section className="bg-[#111111] w-full">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mb-8 mt-36">
            PROJETOS
          </h2>
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              pagination: false,
            }}
            className="splide w-full max-w-4xl"
          >
            {projects.map((project, index) => (
              <SplideSlide key={index}>
                <div key={project.id} className='flex md:flex-row flex-col items-center gap-10'>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src={project.image} className="w-72 h-48 rounded-2xl" alt="Imagem Projeto" />
                  </a>
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-white text-center text-3xl font-semibold'>{project.title}</h3>
                    <p className='text-gray-300 text-center max-w-[400px]'>{project.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    )
    
  )
}

export default Projects