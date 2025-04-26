import React from 'react'
import heroImg from '@/assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <div  style={{ backgroundImage: `url(${heroImg.src})` }}  className='h-screen w-full bg-cover bg-center'>
          <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to Hero Section</h1>
      </div>
    </div>
  )
}

export default HeroSection