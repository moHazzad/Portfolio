import React from 'react'

const IcanHelp = () => {
  return (
    <section className='w-[85%] mx-auto  '>
       <div className='flex flex-col  justify-center py-10 md:py-24'>
       <div>
            <h1 className='md:text-4xl lg:text-5xl text-3xl '>I can help you with ...</h1>
        </div>
        <div className=' flex gap-8 flex-col md:flex-row md:py-20 py-10'>
        <div>
            <p>01</p>
            <div className='divider'></div>
            <h2 className='md:text-3xl text-2xl pb-5'>Design</h2>
            <p>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.</p>
        </div>
        <div className='Development'>
            <p>02</p>
            <div className='divider'></div>
            <h2 className='md:text-3xl text-2xl pb-5'>Development</h2>
            <p>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.</p>
        </div>
        <div className='Development'>
            <p>03</p>
            <div className='divider'></div>
            <h2 className='md:text-3xl text-2xl pb-5'>The full package</h2>
            <p>A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.</p>
        </div>
        </div>
       </div>
    </section>
  )
}

export default IcanHelp