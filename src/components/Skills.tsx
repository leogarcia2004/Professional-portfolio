import { useState, useEffect } from 'react';
import { skills } from './constantes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    windowWidth > 700 ? (
      <section id='skills' className="bg-[#111111] flex flex-col items-center w-full">
        <div className="flex flex-col items-center max-w-[1440px]">
          <h2 className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-44">HABILIDADES</h2>
          <div className='mt-28'>
            <ul className='flex gap-8 flex-wrap justify-center'>
              {skills.map((skill, index) => (
                <li key={index} className='bg-[#202020] flex flex-col items-center justify-center w-72 h-64 rounded-2xl'>
                <img src={skill.image} alt={skill.alt} className='mb-3' />
                <span className='text-white font-semibold mb-4'>{skill.name}</span>
                <p className='text-gray-300 text-sm text-center w-52'>{skill.description}</p>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    ) : (
          
      <section className="bg-[#111111] w-full">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mb-8 mt-36">
            HABILIDADES
          </h2>
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              focus: 'center',
              arrows: false,
            }}
            className="splide w-full max-w-4xl"
          >
            {skills.map((skill, index) => (
              <SplideSlide key={index}>
                <div className="bg-[#202020] flex flex-col items-center justify-center w-72 h-64 mx-auto rounded-2xl shadow-lg">
                  <img src={skill.image} alt={skill.alt} className="mb-3 w-16 h-16" />
                  <span className="text-white font-semibold mb-4">{skill.name}</span>
                  <p className="text-gray-300 text-sm text-center w-52">{skill.description}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    )
  );
};

export default Skills;