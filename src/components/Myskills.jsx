import React from "react";
import Html from "../assets/images/html.webp";
import Css from "../assets/images/css.webp";
import Js from "../assets/images/js.webp";
import Nextjs from "../assets/images/nextjs.webp";
import Mongodb from "../assets/images/mongodb.webp";
import Express from "../assets/images/express.webp";
import Nodejs from "../assets/images/nodejs.webp";
import Git from "../assets/images/git.webp";
import Github from "../assets/images/github.webp";
import Bootstrap from "../assets/images/bootstrap.webp";
import Tailwindcss from "../assets/images/tailwindcss.webp";
import ReactIcon from "../assets/images/react.webp";

const Myskills = () => {
  return (
    <section className="bg-[#0B0B0B] relative">      
      <div className="max-w-[1140px] mx-auto px-[16px]">
        <div className="flex flex-col items-center">
          <h2 className="font-rubik text-white lg:text-[42px] text-[36px] font-semibold lg:leading-[52px]  leading-[130%]  text-center sm:pt-[100px] pt-[80px]">
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
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[40px] sm:pb-[100px] pb-[80px]">
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] ">
           <div className="flex flex-col items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px] p-[20px] h-full group hover:rotate-6 duration-300 " >
              <img src={Html} alt="html"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>              
            </div>   
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Css} alt="css"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] sm:pt-0 pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Js} alt="js"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] md:pt-0 pt-[24px] ">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Bootstrap} alt="bootstrap"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px] lg:pt-0">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Tailwindcss} alt="tailwindcss"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px] lg:pt-0">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Nextjs} alt="nextjs"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Mongodb} alt="mongodb"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full w-full group hover:rotate-6 duration-300" >
              <img src={Express} alt="express"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={ReactIcon} alt="reacticon"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Js} alt="nodejs"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Git} alt="git"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
          <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12  px-[12px] pt-[24px]">
            <div className="flex items-center justify-center shadow-box-shadow rounded-[16px] min-h-[164px]  p-[20px] h-full group hover:rotate-6 duration-300" >
              <img src={Github} alt="github"  className='group-hover:scale-110 duration-300 ease-linear group-hover:rotate-5'/>
            </div>
          </div>
     
          
        </div>
      </div>
    </section>
  );
};

export default Myskills;
