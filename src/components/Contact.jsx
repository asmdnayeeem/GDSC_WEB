import React from "react";
import { Link } from "react-router-dom";
import {logoData}  from "../assests/logo.js";

const Contact = () => {
  return (
    <div className="relative top-20 flex flex-col justify-center items-center mt-10 pb-9" >
      <h1 className="text-black font-bold text-4xl">Contact Us</h1>
      <p className="font-light pt-5 pb-5 text-xl">
        We're very active on social media
      </p>
      <div className="  grid grid-cols-3 gap-9 justify-between top-3 ">

      {logoData.map((item) => {
      return(
        <Link to={item.link} target="_blank">

        <img className="w-14 h-14 box-border  bg-white p-1.5 rounded-full shadow-xl" src={item.logo} alt=" " />
        </Link>
 
    )
   })}
    </div>
    </div>
  );
};

export default Contact;
