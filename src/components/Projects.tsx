import { useState } from 'react';
import { projects } from './constantes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWidthContext } from "../context/WidthContext"
import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

const Projects = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const projects_per_page =  4
  const { windowWidth, itemVariants, containerVariants} = useWidthContext()
  const scrollDirection = useScrollDirection();

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
      <motion.section 
        id='projects' 
        className="bg-[#111111] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className='max-w-[1440px] flex flex-col px-12'
          variants={containerVariants}
          animate={scrollDirection === "down" ? "visible" : undefined}
        >
          <motion.h2 
            className="text-4xl font-semibold tracking-[0.1rem] self-center text-white border-b border-white pb-1 mt-44"
            variants={itemVariants}
          >
            PROJETOS
          </motion.h2>
          <motion.ul className='mt-32 flex flex-col gap-16'>
              {getVisibleProjects().map((project) => (
                (
                  project.id % 2 !== 0 ?
                  <motion.li 
                    key={project.id} 
                    className='flex md:flex-row flex-col items-center gap-10 '
                    variants={itemVariants}
                  >
                    <a href={project.link} target='_blank' rel='noreferrer'>
                      <img src={project.image} className="w-72 h-48 rounded-2xl transform transition-transform duration-300 hover:scale-110 " alt="Imagem Projeto" />
                    </a>
                    <div className='flex flex-col gap-4 max-w-[600px]'>
                      <h3 className='text-white md:text-start text-center text-3xl font-semibold'>{project.title}</h3>
                      <p className='text-gray-300 md:text-justify text-center '>{project.description}</p>
                      <ul className='flex flex-wrap gap-4 items-center'>
                        {project.Technologies.map((tech, index) => (
                          <li key={index} className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110'>{tech}</li>
                        ))
                        }
                      </ul>
                    </div>  
                  </motion.li>
                  :
                  <motion.li 
                    key={project.id} 
                    className='flex md:flex-row-reverse flex-col items-center self-end gap-10'
                    variants={itemVariants}
                  >
                    <a href={project.link} target='_blank' rel='noreferrer'>
                      <img src={project.image} className='w-72 h-48 rounded-2xl transform transition-transform duration-300 hover:scale-110' alt="Imagem Projeto" />
                    </a>
                    <div className='flex flex-col gap-4 max-w-[600px]'>
                      <h3 className='text-white text-3xl md:text-end text-center font-semibold'>{project.title}</h3>
                      <p className='text-gray-300 md:text-justify text-center'>{project.description}</p>
                      <ul className='flex flex-wrap gap-4 self-end items-center'>
                        {project.Technologies.map((tech, index) => (
                          <li key={index} className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110'>{tech}</li>
                        ))
                        }
                      </ul>
                    </div>    
                  </motion.li>
                )
              ))}
            </motion.ul>
            <div className="flex gap-6 justify-center mt-20 mb-12">
              {currentPage !== 1 && (
                <button
                  className="bg-gray-500 text-white text-opacity-75 px-4 rounded-md py-2 font-semibold"
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
                      currentPage === page ? "bg-gray-700 text-white" : ""
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
                className="bg-gray-500 text-white text-opacity-75 px-4 rounded-md py-2 font-semibold"
              >
              Next
              </button>
            </div>
        </motion.div>
      </motion.section>
    ) : (
      <motion.section 
        id='projects' 
        className="bg-[#111111] w-full"
        initial="hidden"
        whileInView="visible"     
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          animate={scrollDirection === "down" ? "visible" : undefined}
        >
          <motion.h2 
            className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mb-8 mt-36"
            variants={itemVariants}
          >
            PROJETOS
          </motion.h2>
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
                <motion.div 
                  key={project.id} 
                  className='flex md:flex-row flex-col items-center gap-10'
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  variants={itemVariants}     
                >
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src={project.image} className="w-72 h-48 rounded-2xl transform transition-transform duration-300 hover:scale-125" alt="Imagem Projeto" />
                  </a>
                  <div className='flex flex-col gap-4 max-w-[400px]'>
                    <h3 className='text-white text-center text-3xl font-semibold'>{project.title}</h3>
                    <p className='text-gray-300 text-center px-2'>{project.description}</p>
                    <ul className='flex flex-wrap gap-4 items-center justify-center'>
                      {project.Technologies.map((tech, index) => (
                        <li key={index} className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110'>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </motion.section>
    )
  )
}

export default Projects