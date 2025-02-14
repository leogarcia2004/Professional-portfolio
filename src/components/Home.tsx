import FotoPerfil from '../assets/Foto_Perfil.jpeg'

const Home = () => {
  return (
    <section id='home' className="h-screen flex justify-center items-center">
      <img className="h-full w-full bg-cover bg-center" src={FotoPerfil} alt="Foto Leonardo" />
        <div className="absolute z-10 flex flex-col items-center text-white">
            <h1 className="font-bold text-center text-3xl md:text-5xl">Olá, eu sou o Leonardo!</h1>
            <span className="text-xs md:text-lg tracking-[0.1rem]  border-b border-white py-1">A PROFESSIONAL WEB DEVELOPER</span>
        </div>
    </section>
  )
}

export default Home