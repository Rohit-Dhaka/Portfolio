import React from "react";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Nextjs from "../assets/images/nextjs.png";
import Mongodb from "../assets/images/mongodb.png";
import Express from "../assets/images/express.png";
import Nodejs from "../assets/images/nodejs.png";
import Git from "../assets/images/git.png";
import Github from "../assets/images/github.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Tailwindcss from "../assets/images/tailwindcss.png";
import ReactIcon from "../assets/images/react.png";

const Myskills = () => {
  return (
    <section className="bg-[#0B0B0B]">
      <div className="max-w-[1140px] mx-auto px-[16px]">
        <div className="flex flex-col items-center">
          <h2 className="font-rubik text-white text-[42px] font-semibold leading-[52px]   text-center pt-[100px] ">
            My
            <span className="text-[#6022EA]">Skills</span>
          </h2>
          <h6 className="text-white  pt-[16px]  text-center max-w-[900px]">
            I am proficient in building dynamic user interfaces with React,
            ensuring seamless user experiences . On the backend, I have
            expertise in Node.js, Express, and MongoDB, enabling me to create
            robust and scalable APIs.
          </h6>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[40px] pb-[100px]">
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px] p-[20px] h-full">
              <img src={Html} alt="html"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Css} alt="css"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] sm:pt-0 pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Js} alt="js"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] md:pt-0 pt-[12px] ">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Bootstrap} alt="bootstrap"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px] lg:pt-0">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Tailwindcss} alt="tailwindcss"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px] lg:pt-0">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Nextjs} alt="nextjs"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Mongodb} alt="mongodb"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full w-full">
              <img src={Express} alt="express"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={ReactIcon} alt="reacticon"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Js} alt="nodejs"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Git} alt="git"  className='w -full'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full">
              <img src={Github} alt="github"  className='w -full'/>
            </div>
          </div>
     
          
        </div>
      </div>
    </section>
  );
};

export default Myskills;
