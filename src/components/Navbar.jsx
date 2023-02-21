import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const expand = () => {
    if (isOpen) {
      document.querySelector('.navbar').classList.add('sm:hidden')
      document.querySelector('.navbar').classList.remove('sm:flex')
    } else {
      document.querySelector('.navbar ').classList.remove('sm:hidden')
      document.querySelector('.navbar ').classList.add('sm:flex')
    }
  }
  return (

    <>
      <div className="w-full h-18  bg-white  z-30  sm:fixed  shadow-sm  ">
         
        <ul>
          <div className="navbar  bg-white flex-row gap-10 text-lg font-light h-18 w-full z-20 fixed justify-end flex  text-black p-4  shadow-sm sm:hidden sm:items-center sm:flex-col duration-600 pt-6">

          <li>
            <Link className="hover:font-medium" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="/">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="/">
              Events
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="/Teams">
              Team
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="/Contact" >
              Contact Us
            </Link>
          </li>
          </div>
          <li className=" z-20 fixed top-0 right-5 pb-4 hidden sm:flex "><Hamburger toggled={isOpen} toggle={setOpen} onToggle={expand}/></li>
        </ul>
      </div>
    </>
 
  );
};

export default NavBar;
