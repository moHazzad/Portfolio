import React, { useEffect } from "react";
import WorkTogether from "../Home/WorkTogether";
import AOS from 'aos';

const Footer = () => {
  const date = new Date();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  }, []);
  // console.log(date);
  return ( 
    <> 
    <WorkTogether />
    <section className="w-[90%] mx-auto ">
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center">

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex gap-8 justify-between">
          <div >
            <p className="uppercase">Version</p>
            <p className="uppercase text-sm md:text-md text-white">
              2023 <span>&#169;</span> edition
            </p>
          </div>
          <div>
            <p className="uppercase">Local Time </p>
            <p className="uppercase text-sm md:text-md text-white">
              {date.toTimeString()}
            </p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <p className="uppercase">Socials </p>
          <div className="flex gap-4 md:py-5 py-3 text-sm md:text-md">
            <a
              href="https://www.linkedin.com/in/mohammedhazzad/"
              className=" font-semibold text-white"
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/Mohammedhazzadh"
              className=" font-semibold text-white"
            >
              Facebook
            </a>
            <a
              href="https://github.com/moHazzad"
              className=" font-semibold text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
