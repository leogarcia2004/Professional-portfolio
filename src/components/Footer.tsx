

const Footer = () => {
  return (
    <footer className='bg-black w-full md:px-12 px-6 py-8'>
        <div className='flex justify-between items-center max-w-[1440px]'>
            <ul className='flex items-center gap-4 md:gap-6'>              
                <li>
                  <a href="https://www.linkedin.com/in/leonardo-garcia-21a2852b0/" target='_blank' rel="noopener" title="LinkedIn">
                    <i className="fab fa-linkedin md:text-3xl text-2xl text-zinc-400 transform transition-transform duration-200 hover:scale-125" ></i>
                  </a>  
                </li>
                <li>
                  <a href="https://github.com/leogarcia2004" target='_blank' rel="noopener" title="GitHub">
                    <i className="fab fa-github md:text-3xl text-2xl text-zinc-400 transform transition-transform duration-200 hover:scale-125" ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/leogarcia_g/" target='_blank' rel="noopener" title="Instagram">
                    <i className="fab fa-instagram md:text-3xl text-2xl text-zinc-400 transform transition-transform duration-200 hover:scale-125" ></i>
                  </a>                 
                </li>
                <li>
                  <a href="https://wa.me/5516992278054" target="_blank" rel="noopener" title="WhatsApp">
                    <i className="fab fa-whatsapp md:text-3xl text-2xl text-gray-400 transform transition-transform duration-200 hover:scale-125" ></i>
                  </a>
                </li>
            </ul>
            <span className='text-white text-opacity-75 text-sm'>Copyright 2024</span>
        </div>           
    </footer>
  )
}

export default Footer