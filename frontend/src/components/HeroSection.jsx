import React from 'react'
import background from '../assets/banner.webp'
import logo from '../assets/logo.webp'

const HeroSection = () => {
  return (


   <div
  className="hero min-h-screen flex flex-col items-center justify-center space-y-4"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Contenu principal */}
  <img src={logo} className="w-25 h-25" />

  <div className="text-center text-white">
    <h1 className="font-dhurjati text-2xl lg:text-3xl xl:text-4xl mx-auto mt-8 shadow-neon">
      Films et séries en illimité, et bien plus<br />
      Où que vous soyez.
    </h1>
    <p className="font-dhurjati mx-auto mt-4 shadow-neon">Annulez à tout moment.</p>

    {/* Boutons avec espace en haut et en bas */}
    <div className="py-4 items-center justify-center space-y-4">
      <button className="px-7 py-2 mx-auto text-3xl rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/50 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-500">
        S'INSCRIRE
      </button>

      <button className="px-7 py-2 mx-auto text-3xl rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/50 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-500">
        CONNECTION
      </button>
    </div>
  </div>
</div>
 
   



    
  )
}

export default HeroSection