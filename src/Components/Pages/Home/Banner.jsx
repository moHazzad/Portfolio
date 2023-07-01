import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
// import image from '../../../assets/picture.png'
// import AOS from 'aos';
import banner from '../../../assets/banner1.json'
import Lottie from 'lottie-react'
// import resume from '../../../assets/Resume.pdf'
// import { Link } from 'react-router-dom';

const Banner = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  //   AOS.refresh()
  // }, []);

 
  
  return (
    <>
    <section  className='bg-[#5356f0] h-screen flex flex-col md:flex-row items-center overflow-hidden  '  >
    <div className='flex  md:flex-row items-center'>
    <div className='w-1/2 hidden md:block'>
      <Lottie loop={true}  animationData={banner}  />
      </div>

    <div className='w-full md:w-1/2   justify-center pt-40 md:pt-0 '>
      
        <div className='md:text-5xl text-3xl font-semibold text-white'>
          {/* <FaArrowDownLong /> */}
          
          <h1>Freelancer</h1>
          Designer & Developer
        </div>
        <a href='../../../assets/Resume.pdf' download  className=' text-white text-3xl btn btn-ghost capitalize my-5'>
          <p>Resume</p>
        </a>
        {/* <Link to="../../../../public/Resume.pdf" target="_blank" download>Download</Link> */}
      </div>
    </div>
          {/* <h2 className='absolute hidden bottom-20 left-10 lg:text-9xl md:text-6xl text-3xl  text-center font-bold  text-slate-200'>Mohammed Hazzad--</h2> */}
    </section>

    </>
  )
}

export default Banner