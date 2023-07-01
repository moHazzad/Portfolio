import React, { useEffect } from 'react'
import AOS from 'aos';

const Skill = () => {

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

<div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"className='w-[85%] mx-auto my-10 '>
        <img
            className="w-full"
            src="https://skillicons.dev/icons?i=git,aws,bootstrap,css,discord,express,figma,firebase,github,html,js,linux,md,materialui,mongodb,nextjs,nodejs,react,redux,tailwind,ts,vscode&perline=14"
          />
    </div>
    </section>
  )
}

export default Skill