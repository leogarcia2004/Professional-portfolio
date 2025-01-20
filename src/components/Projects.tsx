import { useState, useEffect } from 'react';
import { projects } from './constantes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projects = () => {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projects_per_page =  4
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleProjects = () => {

    const startIndex = (currentPage - 1) * projects_per_page;
    return projects.slice(startIndex, startIndex + projects_per_page);
  };

  const totalPages = Math.ceil(
    projects.length / projects_per_page
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const setPage = (pageNum: number) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const getPageButtons = () => {
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
    
  return (
    
    windowWidth > 700 ? (
      <section id='projects' className="bg-[#111111] w-full">
        <div className='max-w-[1440px] flex flex-col px-12'>
          <h2 className="text-4xl font-semibold tracking-[0.1rem] self-center text-white border-b border-white pb-1 mt-44">PROJETOS</h2>
          <ul className='mt-32 flex flex-col gap-16'>
              {getVisibleProjects().map((project) => (
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
            <div className="flex gap-6 justify-center mt-8 mb-12">
              {currentPage !== 1 && (
                <button
                  className="text-white text-opacity-75 px-4 rounded-md py-2 font-semibold"
                  onClick={prevPage}
                >
                  Previous
                </button>
              )}
              <div className="flex gap-4">
                {getPageButtons().map((page) => (
                  <button
                    key={page}
                    className={`text-white text-opacity-75 px-4 rounded-md py-2 font-semibold ${
                      currentPage === page ? "bg-gray-600 text-white" : ""
                    }`}
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="text-white text-opacity-75 px-4 rounded-md py-2 font-semibold"
              >
              Next
              </button>
            </div>
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
              arrows: false,
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
                    <p className='text-gray-300 text-center max-w-[400px] px-2'>{project.description}</p>
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