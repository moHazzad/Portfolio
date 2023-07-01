import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
// import resume from '../../../assets/Resume.pdf'

const NavBar = () => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btnn");

    btns.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.children[0].style.transform = `translate(${x * 0.3}px, ${
          y * 0.5
        }px)`;
      });
    });

    btns.forEach((btn) => {
      btn.addEventListener("mouseout", () => {
        btn.children[0].style.transform = "translate(0px, 0px)";
      });
    });
  }, []);


  // const handleDownload = () => {
    
  //   const pdfUrl = resume ;
  //   const link = document.createElement('a');
  //   link.href = pdfUrl;
  //   link.download = 'Resume'; // Set the desired filename for the downloaded file
  //   link.target = '_blank';
  //   link.style.display = 'none';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  
  return (
    <>
    <nav >
    <div className="navbar bg-transparent absolute z-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={'/work'} className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span className="">work</span>
            </NavLink></li>
      <li tabIndex={0}>
      <NavLink to={'/aboutme'}  className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span>About</span>
            </NavLink>
      </li>
      <li><NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span>Contact</span>
            </NavLink></li>
      </ul>
    </div>
    <Link to={'/'} className="btnn   text-xl"><span style={{ fontSize: "0.75rem",color: "#F8F8F8" }}>Code by Hazzad</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      <li><NavLink to={'/work'} color="#F8F8F8"  className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span className="">work</span>
            </NavLink></li>
      <li tabIndex={0}>
      <NavLink to={'/aboutme'}   className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span>About</span>
            </NavLink>
      </li>
      <li><NavLink to={'/contact'} color=""  className={({ isActive }) => (isActive ? 'blackbtn btnn' : ' btnn')}>
              <span >Contact</span>
            </NavLink></li>
      {/* <li><NavLink  onClick={handleDownload}  className={({ isActive }) => (isActive ? ' btnn' : ' btnn')}>
              <span  >Resume</span>
            </NavLink></li> */}
            {/* <a href={resume} download={"resume"} >Resume </a> */}
    </ul>
  </div>
  
</div>
</nav>



    
    </>
  );
};

export default NavBar;
