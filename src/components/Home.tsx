
import { useWidthContext } from "../context/WidthContext";
import Foto_perfil from '../assets/foto_perfil.jpeg';
const Home = () => {

  const { navBarOpen } = useWidthContext();

  return (
    <section id='home' className="bg-imagem_professional bg-cover bg-center h-screen flex justify-center items-center">
        <div className={`absolute ${navBarOpen ? 'z-0' : 'z-10'} flex flex-col items-center text-white`}>
            <h1 className="font-bold text-center text-3xl md:text-5xl">Olá, eu sou o Leonardo!</h1>
            <span className="text-xs md:text-lg tracking-[0.1rem]  border-b border-white py-1">A PROFESSIONAL WEB DEVELOPER</span>
        </div>
    </section>
  )
}

export default Home