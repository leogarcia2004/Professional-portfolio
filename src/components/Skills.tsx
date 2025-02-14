import { skills } from './constantes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWidthContext } from "../context/WidthContext"
import { motion } from "framer-motion";

const Skills = () => {

  const { windowWidth } = useWidthContext()

  return (
    windowWidth > 770 ? (
      <section
        id="skills"
        className="bg-[#111111] flex flex-col items-center w-full"

      >
        <motion.div
          className="flex flex-col items-center max-w-[1440px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}	
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2
            className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-44"
          >
            HABILIDADES
          </h2>
          <div className="mt-28">
            <ul className="flex gap-8 flex-wrap justify-center">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#202020] flex flex-col items-center justify-center w-72 h-64 rounded-2xl cursor-pointer"
                >
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="mb-3 transform transition-transform duration-300 hover:scale-125"
                  />
                  <span className="text-white font-semibold mb-4">{skill.name}</span>
                  <p className="text-gray-300 text-sm text-center w-52">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    ) : (    
      <section
        id="skills"
        className="bg-[#111111] w-full"
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}	
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2
            className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mb-8 mt-36"
          >
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
                <div
                  className="bg-[#202020] flex flex-col items-center justify-center w-72 h-64 mx-auto rounded-2xl shadow-lg cursor-pointer"
                >
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="mb-3 w-16 h-16 duration-300 hover:scale-125"
                  />
                  <span className="text-white font-semibold mb-4">{skill.name}</span>
                  <p className="text-gray-300 text-sm text-center w-52">{skill.description}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </section>
    )
  );
};

export default Skills;