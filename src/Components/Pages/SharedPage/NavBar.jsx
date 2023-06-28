import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'} className="btnn   text-xl"><span style={{ fontSize: "0.75rem",color: "#F8F8F8" }}>Code by Hazzad</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      <li><Link to={'/work'} color="#F8F8F8" className="btnn">
              <span className="">work</span>
            </Link></li>
      <li tabIndex={0}>
      <Link to={'/aboutme'} color="#F8F8F8" className="btnn">
              <span>About</span>
            </Link>
      </li>
      <li><Link to={'/contact'} color="" className="btnn" style={{color:'#F8F8F8'}}>
              <span>Contact</span>
            </Link></li>
    </ul>
  </div>
  
</div>
</nav>



      {/* <Box sx={{ flexGrow: 1, }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent",   position:"absolute",zIndex:10 }}
        >
          <Toolbar sx={{color: '#F8F8F8'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a className="btn">
                <span style={{ fontSize: "0.75rem",color: "#F8F8F8" }}>Code by Hazzad</span>
                
              </a>
            </Typography>
            <a color="#F8F8F8" className="btn">
              <span className="">work</span>
            </a>
            <a color="#F8F8F8" className="btn">
              <span>About</span>
            </a>
            <a color="" className="btn" style={{color:'#F8F8F8'}}>
              <span>Contact</span>
            </a>
          </Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
};

export default NavBar;
