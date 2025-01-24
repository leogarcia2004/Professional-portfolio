import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useWidthContext } from "../context/WidthContext";
import { useState, useRef } from "react";
import { sections } from "../components/constantes";

const Navbar = () => {

  const { windowWidth } = useWidthContext();

  return (
    <header className="fixed top-0 z-10 bg-black bg-opacity-60 w-full shadow-lg">
      <div className="flex justify-center py-5">
        {windowWidth <= 768 ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </header>
  );
};

const MobileNavbar = () => {
  const { handleNavBar, navBarOpen } = useWidthContext();

  return (
    <div className="flex justify-between items-center md:px-8 w-full">
      <h2 className="text-white text-2xl font-semibold ml-4">Portfólio</h2>
      <i
        onClick={handleNavBar}
        className="fas fa-bars text-white text-xl cursor-pointer mr-4"
      ></i>
      {navBarOpen && (
        <nav className="fixed top-0 w-full h-screen flex flex-col items-center justify-center backdrop-blur-md bg-black/30">
          <i
            onClick={handleNavBar}
            className="fas fa-times absolute top-3 left-3 text-white opacity-50 cursor-pointer"
          ></i>
          <ul className="flex flex-col items-center gap-10 text-white text-4xl">
            {sections.map(
              (section, index) => (
                <li
                  key={index}
                  onClick={handleNavBar}
                  className="tracking-[0.1rem] opacity-70 hover:text-white cursor-pointer"
                >
                  <Link to={section.to.toLocaleLowerCase()} smooth={true} duration={500} offset={section.offset} onClick={handleNavBar}>
                    {section.name.toUpperCase()}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

const DesktopNavbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="flex"
    >
      {sections.map((section, index) => (
        <Tab key={index} setPosition={setPosition} to={section.to.toLowerCase()} offset={section.offset}>
          {section.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
  to: string;
  offset: number;
}


const Tab = ({ children, setPosition, to, offset }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="z-10 cursor-pointer text-xs uppercase text-white md:px-5 md:text-base"
    >
      <Link to={to} smooth={true} duration={500} offset={offset}>
        {children}
      </Link>
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute top-4 z-0 rounded-full bg-zinc-700 md:h-8"
    />
  );
};

export default Navbar;