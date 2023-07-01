import React, { useEffect } from 'react'
import MagnaticButton from './MagnaticButton'
import { Link } from 'react-router-dom'
import '../SharedPage/NavBar.css'
import AOS from 'aos';
import Button from '../Buttons/Button';


const About = () => {

useEffect(() => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh()
}, []);
  return (
    <section className='bg-indigo-50'>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-[85%] mx-auto pt-20 md:pt-0 '>
      
      <div className='h-72 flex flex-col md:flex-row  gap-4 items-center justify-center'>
          <div className='w-full'>
              <h1 className='fontish tracking-wider text-md md:text-2xl  text-slate-500 '>I am excited to continue to grow and challenge myself in the field of web development, and I am eager to bring my skills and experience to a new opportunity. If you're looking for a dedicated and driven full-stack web developer, please don't hesitate to reach out</h1>
          </div>
          <div className='w-full lg:pt-20'>
              <h2 className='text-md md:text-xl text-slate-500'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</h2>
              <div className='flex justify-end'>

      {/* <Link to={'/aboutme'}><MagnaticButton  buttonName={'About Me'} /></Link> */}
      <Link to={'/aboutme'}><Button  buttonName={'About Me'} /></Link>
      </div>
      
          </div>
      </div>
      
      
  </div>
    </section>
  )
}

export default About