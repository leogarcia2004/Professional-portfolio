import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

interface PropsWidth {
    children: React.ReactNode;
}

interface WidthContextData {
    windowWidth: number;
    handleNavBar?: () => void;
    navBarOpen?: boolean;
    itemVariants?: {
        hidden: { opacity: number; x: number };
        visible: { opacity: number; x: number; transition: { duration: number } };
    };
    containerVariants?: {
        hidden: { opacity: number };
        visible: { opacity: number; transition: { staggerChildren: number } };
    };
}

const WidthContext = createContext( {} as WidthContextData );

const WidthContextProvider:React.FC<PropsWidth> = ({children}) => {
    
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
      
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const handleNavBar = () => {
        setNavBarOpen(!navBarOpen)
      }

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
     
            staggerChildren: 0.3, 
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      };

    return (
        <WidthContext.Provider value={{windowWidth, handleNavBar, navBarOpen, itemVariants, containerVariants}}>
            {children}
        </WidthContext.Provider>
    )
}

export function useWidthContext() {
    const data = useContext(WidthContext);
    if (!data) {
        throw new Error("Cannot use useAuth outside a ThemeProvider");
    }

    return data;
}

export default WidthContextProvider;

