import React from 'react'
import img from '../../../assets/tryme.jpg'

const MyImageDetails = () => {
  return (
    <section className='w-[85%] mx-auto '>
        <div className='flex flex-col-reverse  md:flex-row  items-center gap-4'>
        <div className='md:w-1/2 w-full '>
            <h1>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.My commitment to excellence extends beyond individual projects, as I actively seek out new challenges and stay updated on the latest industry trends to ensure I always provide cutting-edge solutions</h1>
        </div>
        <div className='md:w-1/2 w-full'>
            <img className='w-full ' src={img} alt="" />
        </div>
        </div>
    </section>
  )
}

export default MyImageDetails