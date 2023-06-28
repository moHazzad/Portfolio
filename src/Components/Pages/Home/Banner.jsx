import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import image from '../../../assets/picture.png'
const Banner = () => {
  return (
    <>
    <section className='bg-[#999D9E] h-screen relative overflow-hidden ' style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',backgroundPosition:'center'}} >
    <div className='flex w-[95%] mx-auto justify-end items-center h-full text-white mr-[20%]'>
        <div className='text-3xl font-semibold'>
          {/* <FaArrowDownLong /> */}
          
          <h1>Freelancer</h1>
          Designer & Developer
        </div>
        
      </div>
          <h2 className='absolute hidden bottom-20 left-10 lg:text-9xl md:text-6xl text-3xl  text-center font-bold  text-slate-200'>Mohammed Hazzad--</h2>
    </section>

    </>
  )
}

export default Banner