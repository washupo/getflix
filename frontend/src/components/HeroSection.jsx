import React from 'react'
import background from '../assets/banner.webp'
import logo from '../assets/logo.webp'
import {
  Link
} from "react-router-dom"

const HeroSection = () => {
  return (


    <div
    className="hero min-h-screen"
    style={{
        backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
{/*image de fond*/}

{/*contenu principal*/}
<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>

    <img src={logo} className='mb-4 mx-auto'/>


{/*buttons*/}
<Link to='signin' className= 'bg-blue-500 text-white px-4 py-2 mr-4'>S'INSCRIRE</Link>
<Link to='login' className= 'bg-gray-500 text-gray-700 px-4 py-2'>SE CONNECTER</Link>
</div>


    </div>
  )
}

export default HeroSection