import React, { useState } from 'react'
import proOne from '../../../assets/project1.jpg'
import proTwo from '../../../assets/project2.jpg'
import proThree from '../../../assets/project3.jpg'
import ProjectsSection from '../Home/ProjectsSection'

const Work = () => {

    const [isImageVisible, setImageVisible] = useState(false);

    const handleHover = () => {
      setImageVisible(true);
    };
  
    const handleMouseLeave = () => {
      setImageVisible(false);
    };
  

  return (
   <section className='bg-indigo-50'>
     <div className='w-[85%] mx-auto '>
        <div className="flex flex-col py-10">
        <div className='text-3xl md:text-5xl lg:text-8xl py-10'>
          <h1>Creating next level</h1>
            <h1> digital products</h1>
        </div>
        
        <div>
          <ProjectsSection />
        </div>
        
      </div>
    </div>
   </section>
  )
}

export default Work