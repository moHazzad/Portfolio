import React from 'react'
import img from '../../../assets/300517202_184478310705199_7371093599200910139_n.jpg'

const MyImageDetails = () => {
  return (
    <section className='w-[85%] mx-auto '>
        <div className='flex flex-col md:flex-row  gap-4'>
        <div className='md:w-1/2 w-full'>
            <h1>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</h1>
        </div>
        <div className='md:w-1/2 w-full'>
            <img className='w-full ' src={img} alt="" />
        </div>
        </div>
    </section>
  )
}

export default MyImageDetails