import { skills } from './constantes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWidthContext } from "../context/WidthContext"
import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

const Skills = () => {

  const { windowWidth, containerVariants, itemVariants } = useWidthContext()
  const scrollDirection = useScrollDirection();

  return (
    windowWidth > 700 ? (
      <motion.section
        id="skills"
        className="bg-[#111111] flex flex-col items-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center max-w-[1440px]"
          variants={containerVariants}
          animate={scrollDirection === "down" ? "visible" : undefined}
        >
          <motion.h2
            className="text-4xl font-semibold tracking-[0.1rem] text-white border-b border-white pb-1 mt-44"
            variants={itemVariants}
          >
            HABILIDADES
          </motion.h2>
          <motion.div className="mt-28" variants={containerVariants}>
            <motion.ul className="flex gap-8 flex-wrap justify-center">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="bg-[#202020] flex flex-col items-center justify-center w-72 h-64 rounded-2xl cursor-pointer"
                  variants={itemVariants}
                >
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="mb-3 transform transition-transform duration-300 hover:scale-125"
                  />
                  <span className="text-white font-semibold mb-4">{skill.name}</span>
                  <p className="text-gray-300 text-sm text-center w-52">{skill.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>
    ) : (    
      <motion.section
        id="skills"
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
            HABILIDADES
          </motion.h2>
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
                <motion.div
                  className="bg-[#202020] flex flex-col items-center justify-center w-72 h-64 mx-auto rounded-2xl shadow-lg cursor-pointer"
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  variants={itemVariants}
                >
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="mb-3 w-16 h-16 duration-300 hover:scale-125"
                  />
                  <span className="text-white font-semibold mb-4">{skill.name}</span>
                  <p className="text-gray-300 text-sm text-center w-52">{skill.description}</p>
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </motion.section>
    )
  );
};

export default Skills;