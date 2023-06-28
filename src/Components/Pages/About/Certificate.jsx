import React from 'react'
import certificate from '../../../assets/certificate.jpg'
import hero from '../../../assets/programming-hero.png'


const Certificate = () => {
  return (
    <section className='w-[85%] mx-auto'>
        <div className='flex flex-col-reverse lg:flex-row gap-8 '>
            <div className='lg:w-1/2'>
                <img src={certificate} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <div className='w-32 h-32 rounded-full '>
                    <img src={hero} alt="" />
                </div>
                <div className='md:text-5xl text-3xl py-10'>
                <h1>Certification</h1>
                <p>2023</p>
                </div>
                <div>
                    <p>I am a proud member of the Programming Hero, where I learn the best websites in the world using my expertise as a designer and developer. Micro animations and transitions have my full attention and get me thrilled with every move.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certificate