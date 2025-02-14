
import { User } from '../types/user'
import { useForm } from 'react-hook-form'
import emailJs from '@emailjs/browser'

const Contact = () => {

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<User>();

      const onSubmit = (data: User, event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        console.log('Form data:', data);
        reset();

        const templateParams = {
          from_name: data.name,
          email: data.email,
          message: data.message
        }
        emailJs.send('service_6o2xfl6', 'template_tu7ijds', templateParams, "1wMwvGO64hwR0tdMM")
        .then((result) => {
            console.log("EMAIL ENVIADO!", result.text);
        }, (error) => {
            console.log(error.text);
        });
      };

  return (
    <section id='contact' className="bg-[#111111] w-full ">
        <div className="flex flex-col max-w-[1440px] ">
            <h2 className="md:text-4xl text-3xl font-semibold tracking-[0.1rem] self-center text-white border-b border-white pb-1 mt-44">Entre em contato           
            </h2>
            <form onSubmit={handleSubmit((data, event) => onSubmit(data, event!))} className='flex flex-col md:items-center mt-14 md:px-0 px-6'>
                <input className='bg-[#202020] text-neutral-300 rounded-xl mt-6 md:w-[500px] w-full h-12 pl-3 focus:border focus:border-neutral-500 focus:outline-0 focus:bg-neutral-800' type="text" id="name" placeholder='Seu nome'  {...register('name', {
                    required: 'Campo obrigatório',
                    minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
                    maxLength: { value: 40, message: 'Máximo de 40 caracteres' },
                    validate: (value) => value?.trim() !== '' || 'O nome não pode ser vazio',
                })} 
                />
                {errors?.name && (
                    <small className="text-xs text-red-500 mt-1">{errors.name.message}</small>
                )}
                <input className='bg-[#202020] text-neutral-300 rounded-xl mt-6 md:w-[500px] w-full h-12 pl-3 focus:border focus:border-neutral-500 focus:outline-0 focus:bg-neutral-800' type="email" id="email" placeholder='Seu e-mail'  
                {...register("email", {
                    required: "O e-mail é obrigatório",
                    pattern: {
                      value: emailRegex,
                      message: "O e-mail é inválido",
                    },
                    validate: (value) => value?.trim() !== '' || 'O email não pode ser vazio',
                  })}
                />
                {errors?.email && (
                    <small className="text-xs text-red-500 mt-1">{errors.email.message}</small>
                )}                
                <textarea className='bg-[#202020] text-neutral-300 rounded-xl mt-6 md:w-[500px] w-full pt-3 pl-3 focus:border focus:border-neutral-500 focus:outline-0 focus:bg-neutral-800 resize-none' id="message" rows={5} placeholder='Sua mensagem' {...register("message", {
                    required: "A mensagem é obrigatória",
                    validate: (value) => value?.trim() !== '' || 'A mensagem não pode ser vazia',
                 }
                    
                )} ></textarea>
                {errors?.message && (
                    <small className="text-xs text-red-500 mt-1">{errors.message.message}</small>
                )}
                <button type='submit' className='bg-black text-sm text-white font-semibold rounded-xl mt-6 md:w-[500px] w-full h-12 pl-3 cursor-pointer mb-40 transform transition-transform duration-300 hover:scale-110'>ENVIAR MENSAGEM <i className=" ml-1 fas fa-paper-plane"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Contact