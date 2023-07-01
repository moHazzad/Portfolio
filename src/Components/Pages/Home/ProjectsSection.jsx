import React, { useEffect, useState } from "react";
import proOne from "../../../assets/project1.jpg";
import proTwo from "../../../assets/project2.jpg";
import proThree from "../../../assets/project3.jpg";
import AOS from "aos";
import Skill from "./Skill";
// import './projects.css'

const ProjectsSection = () => {
  const [isImageVisible, setImageVisible] = useState(false);
  const [isSecondImageVisible, seSecondImageVisible] = useState(false);
  const [isThirdImageVisible, seThirdImageVisible] = useState(false);

  // fist project 
  const handleHover = () => {
    setImageVisible(true);
  };
  const handleMouseLeave = () => {
    setImageVisible(false);
  };

// 2nd project 

const handleHoverSecond = () => {
  seSecondImageVisible(true);
};
const handleMouseLeaveSecond = () => {
  seSecondImageVisible(false);
};
// 2nd project 

const handleHoverThird = () => {
  seThirdImageVisible(true);
};
const handleMouseLeaveThird = () => {
  seThirdImageVisible(false);
};

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
    <section className="bg-indigo-50">
      <section className="w-[85%] mx-auto  ">
      <div className="flex flex-col py-10 cursor-pointer">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h1>Recent Works</h1>
        </div>
        <div className="text-slate-500">
          <div className="divider"></div>

          {/* experimnet  */}

          <div
          data-aos="fade-up" data-aos-anchor-placement="center-bottom"
            className=" flex-col md:flex-row justify-between items-center uppercase md:py-6 hidden md:flex"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:flex items-center">
            {isImageVisible && (
          <img
          className={`md:w-56 transition-all ease-in-out duration-1000}`}
            src={proTwo}
            alt=""
          />
        )}
              <h1 className="text-2xl tracking-wider text-slate-500"> Blue Ocean waves</h1>
            </div>
            <div className="pt-5 md:pt-0 text-slate-500">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>


                      


          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col md:flex-row justify-between  uppercase md:py-12 md:hidden">
            <img className="md:hidden " src={proTwo} alt="" />
            <h1 className="text-2xl tracking-wider ">desert tressure hunt</h1>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>


{/* end  */}



          <div className="divider"></div>

          {/* 2nd project start  */}

          <div
          data-aos="fade-up" data-aos-anchor-placement="center-bottom"
            className=" flex-col md:flex-row justify-between items-center uppercase md:py-6 hidden md:flex"
            onMouseEnter={handleHoverSecond}
            onMouseLeave={handleMouseLeaveSecond}
          >
            <div className="md:flex items-center">
            {isSecondImageVisible && (
          <img
          className={`md:w-56 transition-all ease-in-out duration-1000 ${
            isSecondImageVisible ? 'opacity-100' : 'opacity-0'
          }`}
            src={proOne}
            alt=""
          />
        )}
              <h1 className="text-2xl tracking-wider text-slate-500"> desert tressure hunt</h1>
            </div>
            <div className="pt-5 md:pt-0 text-slate-500">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col md:flex-row justify-between  uppercase md:py-12 md:hidden ">
            <img className="md:hidden " src={proOne} alt="" />
            <h1 className="text-2xl tracking-wider ">desert tressure hunt</h1>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>

          {/* 2nd project end  */}

          <div className="divider "></div>
          {/* 3rd project start  */}
          <div
          data-aos="fade-up" data-aos-anchor-placement="center-bottom"
            className=" flex-col md:flex-row justify-between items-center uppercase md:py-6 hidden md:flex"
            onMouseEnter={handleHoverThird}
            onMouseLeave={handleMouseLeaveThird}
          >
            <div className="md:flex items-center">
            {isThirdImageVisible && (
          <img
          className={`md:w-56 transition-all ease-in-out duration-1000 ${
            isThirdImageVisible ? 'opacity-100' : 'opacity-0'
          }`}
            src={proOne}
            alt=""
          />
        )}
              <h1 className="text-2xl tracking-wider text-slate-500"> Bird eay shots</h1>
            </div>
            <div className="pt-5 md:pt-0 text-slate-500">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col md:flex-row justify-between  uppercase md:py-12 md:hidden">
            <img className="md:hidden" src={proThree} alt="" />
            <h1 className="text-2xl tracking-wider">Bird eay shots</h1>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>

          {/* 3rd project end  */}

          <div className="divider"></div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="text-center mt-10">
        <button className="px-10 py-4 rounded-3xl btn btn-ghost  justify-center ">
          More Works
        </button>
        </div>
        <Skill />
      </div>
    </section>
    </section>
  );
};

export default ProjectsSection;
