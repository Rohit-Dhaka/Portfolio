import React from "react";
import { DownArrow, Downloadicon, HeroEllipse } from "../common/icon";
import Header from "./Header";

const Hero = () => {
  return (
    <header className="bg-[#0B0B0B] h-screen flex items-center justify-center  relative overflow- h idden">
          <div className=" absolute bottom-[0] left-[50%] translate-x-[-50%] z-10">
            <a href="#myskills">
            <DownArrow/>
            </a>
          </div>
      <div className=" absolute top-0 w-full">
        <Header />
      </div>
      <div className="max-w-[1140px] mx-auto px-[16px] flex flex-col items-center text-center  relative z-[1]">
      <div className="top-[-60%] z-[-1] absolute ">
        
        <HeroEllipse  />        
    </div>
        <h1
          className=" font-rubik font-bold text-[52px] text-white "          
        >
          Hi, Myself Rohit Dhaka{" "}
          <span className="lg:inline-block">
            And I'm a <span className="text-[#6022EA]">Frontend Developer</span>
          </span>
        </h1>
        <p className=" text-[#FEFEFE] pt-[16px] max-w-[641px] font-poppins pb-[40px]">
          With a passion for transforming ideas into innovative digital
          solutions. I specialize in creating seamless and scalable applications
          with a strong focus on both front-end aesthetics and back-end
          functionality.
        </p>

        <button className=" text-white  font-poppins  flex items-center gap-[10px] bg-[#6022 EA]  bg-[#00003c] duration-300 ease-linear rounded-[50px] py-[16px] px-[32px]">
          Download CV
          <Downloadicon />
        </button> 
      </div>
    </header>
  );
};

export default Hero;
