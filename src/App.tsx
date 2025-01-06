

function App() {

  return (
    <>
        <header className="absolute top-0 z-10 bg-black bg-opacity-60 w-full flex justify-end px-8 py-4 shadow-lg">
          <nav>
            <ul className="flex justify-center gap-6 text-white text-sm ">
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">INICIO</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">SOBRE</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">HABILIDADES</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">PROJETOS</li>
              <li className="tracking-[0.1rem] opacity-50 hover:opacity-100 cursor-pointer">CONTATO</li>
            </ul>
          </nav>
        </header>
        <section className="bg-imagem_professional bg-cover bg-center h-screen flex justify-center items-center">
            <div className="flex flex-col items-center text-white">
              <h1 className="font-bold text-5xl">Oi, eu sou o Leonardo!</h1>
              <span className="text-lg tracking-[0.1rem] border-b border-white py-1">A PROFESSIONAL WEB DEVELOPER</span>
            </div>
        </section>
        <section>
            <h2>SOBRE MIM</h2>
            <div>
              <img src="" alt="Imagem Autor" />  
              <p>Meu nome é Leonardo, tenho 21 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Atualmente estou estudando desenvolvimento web e mobile. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, veritatis! Dolores quae ab nostrum eveniet laborum nisi architecto earum, mollitia nulla unde iusto dolorum quibusdam exercitationem velit. Quae, nobis magnam.</p>
            </div>         
        </section>
        <section>
            <h2>HABILIDADES</h2>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>TailwindCss</li>
                <li>PostgreSQL</li>
                <li>Python</li>
              </ul>
            </div>
        </section>
        <section>
            <h2>PROJETOS</h2>
            <div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 1</p>
              </div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 2</p>
              </div>
              <div>
                <img src="" alt="Imagem Projeto" />
                <h3></h3>
                <p>Projeto 3</p>
              </div>
            </div>
        </section>
    </>
  )
}

export default App
