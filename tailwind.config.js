/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagem_professional': `url('/src/assets/Foto_Perfil.jpeg')`
      }
    },
  },
  plugins: [],
}


