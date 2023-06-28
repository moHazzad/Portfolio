import React, { useEffect, useState } from "react";
import proOne from "../../../assets/project1.jpg";
import proTwo from "../../../assets/project2.jpg";
import proThree from "../../../assets/project3.jpg";

const ProjectsSection = () => {
  const [isImageVisible, setImageVisible] = useState(false);

  const handleHover = () => {
    setImageVisible(true);
  };

  const handleMouseLeave = () => {
    setImageVisible(false);
  };

  return (
    <section className="w-[85%] mx-auto  ">
      <div className="flex flex-col py-10">
        <div>
          <h1>Recent Works</h1>
        </div>
        <div>
          <div className="divider"></div>
          <div
            className="flex flex-col md:flex-row justify-between items-center uppercase md:py-6"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:flex items-center">
            {isImageVisible && (
          <img
          className={`md:w-56 transition-opacity duration-300 ${
            isImageVisible ? 'opacity-100' : 'opacity-0'
          }`}
            src={proTwo}
            alt=""
          />
        )}
              <h1 className="text-2xl tracking-wider"> Blue Ocean waves</h1>
            </div>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex flex-col md:flex-row justify-between  uppercase md:py-12">
            <img className="md:hidden" src={proOne} alt="" />
            <h1 className="text-2xl tracking-wider">desert tressure hunt</h1>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>
          <div className="divider "></div>
          <div className="flex flex-col md:flex-row justify-between  uppercase md:py-12">
            <img className="md:hidden" src={proThree} alt="" />
            <h1 className="text-2xl tracking-wider">bird eay shots</h1>
            <div className="pt-5 md:pt-0">
              <button>NATURE</button> <span>/</span> <button>TRAVEL</button>
            </div>
          </div>
          <div className="divider"></div>
        </div>
        <div className="text-center mt-10">
        <button className="px-10 py-4 rounded-3xl btn btn-ghost  justify-center ">
          More Works
        </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
