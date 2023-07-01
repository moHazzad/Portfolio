import React from 'react'
import ColorButton from './ColorButton'

const TextGlove = () => {
  return (
    <section className='w-[85%] mx-auto md:pb-18 pb-15 pt-20'>
        <div className='flex items-center '>
            {/* <img className='h-20 w-20 rounded-full' src={hazzadImg} alt="" /> */}
            <div className='md:py-10 '>
            <h1 className='md:text-6xl lg:text-8xl text-3xl'>Helping brands thrive</h1>
            <h1 className='md:text-6xl lg:text-8xl text-3xl'> in the digital world</h1>
            </div>
        </div>
        <div>
        <div className='lg:my-28 md:my-24 my-20 relative'>
        <div className="divider "></div> 
        <div className='absolute right-10 -bottom-14 z-10 cursor-pointer'>
        <ColorButton   />
        </div>
        </div>
        </div>
    </section>
  )
}

export default TextGlove