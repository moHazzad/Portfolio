import React from 'react'
import hazzadImg from '../../../assets/hazzad.png'
import MagnaticButton from './MagnaticButton'
import { Link } from "react-router-dom";

const WorkTogether = () => {
  return (
    <section className='w-[85%] mx-auto md:my-20 my-10 '>
        <div className='flex items-center gap-4'>
            <img className='h-20 w-20 rounded-full' src={hazzadImg} alt="" />
            <h1 className='md:text-5xl text-3xl'>Lets Work Together</h1>
        </div>
        <div>
        <div className='my-28 relative'>
        <div className="divider "></div> 
        <div className='absolute right-10 -bottom-14 z-10 cursor-pointer'>
        <Link to={'/contact'}><MagnaticButton buttonName={'Get In Touch'}  /></Link>
        </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-6 gap-3 cursor-pointer'>
            <button className='btn btn-ghost'>hazzadmdap@gamil.com</button>
            <button className='btn btn-ghost tracking-widest'>+966494921</button>
        </div>
        </div>
    </section>
  )
}

export default WorkTogether