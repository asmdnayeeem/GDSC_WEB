import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
   
    <>
      <div>
        
        <ul className="flex flex-row gap-10 text-lg font-light h-8 w-full  fixed justify-end right-10 top-2.5 text-black ">
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
