import React from 'react';
import { Downloadicon } from '../common/icon';
import Header from './Header';


const Hero = () => {
  return (
    <header className="bg-[#0B0B0B] h-screen flex items-center justify-center  relative overflow-hidden" >
      <div className=" absolute top-0 w-full">
      <Header/>
      </div>
      <div className="max-w-[1140px] mx-auto px-[16px] flex flex-col items-center text-center">
        <h1 className=" font-rubik text-[64px] font-bold text-white  max-w-[940px]">
          Hi, Myself Rohit Dhaka <span className="inline-block">And I'm a <span className="text-[#6022EA]">Frontend Developer</span></span>
        </h1>
        <p className="text-white pt-[16px]  pb-[36px] max-w-[641px] font-rubik">
          with a passion for transforming ideas into innovative digital solutions.
          I specialize in creating seamless and scalable applications with a strong focus
          on both front-end aesthetics and back-end functionality.
        </p>

        <button className=" text-white  font-rubik flex items-center gap-[10px] bg-[#6022EA] rounded-[50px] py-[16px] px-[32px]">
          Download CV
          <Downloadicon />
        </button>



      </div>
    </header>
  );
};

export default Hero;
