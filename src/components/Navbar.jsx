import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
   
    <>
      <div className="w-full  z-10 absolute  ">
        <ul className="flex bg-white flex-row gap-10 text-lg font-light h-max w-full  fixed justify-end pr-10 top-0 pt-3 pb-3 text-black  shadow-sm">
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
        </ul>
      </div>
    </>
 
  );
};

export default NavBar;
