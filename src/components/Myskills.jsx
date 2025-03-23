import React from "react";
import Html from '../assets/svg/Html.svg'
import Css from '../assets/svg/Css.svg'
import js from '../assets/svg/js.svg'
import Bootstrap from '../assets/svg/bootstrap.svg'
import Tailwindcssicon from '../assets/svg/Tailwindcss.svg'
import Nodejs  from '../assets/svg/Node.svg'
import ReactIcon  from '../assets/svg/React.svg'
import MongoDb from '../assets/svg/Mongodb.svg'
import Express  from '../assets/svg/Express.svg'
import Git  from '../assets/svg/Git.svg'
import GitHub  from '../assets/svg/Github.svg'
import Redux from '../assets/svg/Redux.svg'
import Next from '../assets/svg/Nextjs.svg'
import { CenterEllipese, LineFive, LineFour, LineOne, LineSix, LineThree, LineTwo } from "../common/icon";
const Myskills = () => {     
  return (
    <section className="bg-[#11071F]" id="skill">        
      <div className="container max-w-custom">
        <div className="flex flex-col items-center pb-12">
          <h2 className=" font-Preahvihear text-white text-[50px] font-semibold">My Skills</h2>
          <h6 className=" font-Preahvihear text-white text-center max-w-[900px]">
            I am proficient in building dynamic user interfaces with React,
            ensuring seamless user experiences . On the backend, I have
            expertise in Node.js, Express, and MongoDB, enabling me to create
            robust and scalable APIs.
          </h6>
        </div>
        <div className="flex sm:gap-8 gap-6 justify-center max-sm:flex-wrap max-sm:hidden">
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Html} alt="html" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Css} alt="css" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={js} alt="js" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Bootstrap} alt="bootstrap" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Tailwindcssicon} alt="tailwindcss" /> </div></div>

        </div>
        <div className="flex sm:gap-8 gap-6 justify-center max-sm:flex-wrap max-sm:pt-6  sm:pb-[300px] max-sm:hidden">
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[50%]   "><LineOne/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={MongoDb} alt="mongodb" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[50%]"><LineTwo/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Express} alt="express" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[72%] translate-x-[-50%] "> <LineThree/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={ReactIcon} alt="reacicon" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-6%]  "> <LineFour/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Nodejs} alt="nodejs" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-108%]  "> <LineFive/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Git} alt="git" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-221%] "> <LineSix/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={GitHub} alt="github" /> </div></div>

        </div>
        <div className="sm:hidden flex gap-6 flex-wrap justify-center">
        <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Html} alt="html" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Css} alt="css" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={js} alt="js" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Bootstrap} alt="bootstrap" /> </div></div>      
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Tailwindcssicon} alt="tailwindcss" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[50%]   "><LineOne/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={MongoDb} alt="mongodb" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[50%]"><LineTwo/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Express} alt="express" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[72%] translate-x-[-50%] "> <LineThree/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={ReactIcon} alt="reacticon" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-6%]  "> <LineFour/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Nodejs} alt="nodejs" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-108%]  "> <LineFive/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Git} alt="git" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group relative"> <div className=" absolute animate-pulse  max-sm:hidden top-[80px] left-[-221%] "> <LineSix/> </div><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={GitHub} alt="github" /> </div></div>
        </div>
      <div className=" flex justify-center sm:translate-y-[-100px] max-sm:my-[-50px] animate-pulse">
        <CenterEllipese/>
      </div>
        {/* <div className="flex gap-8 justify-center  pt-7">
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Redux} alt="redux" /> </div></div>
          <div className="bg-[#251C31] h-[80px] w-[80px] rounded-full flex justify-center items-center shadow-glow hover:shadow-neon duration-300 ease-in-out group"><div className=" group-hover:scale-105 duration-300 ease-linear"> <img src={Next} alt="next" /> </div></div>      
        </div> */}                     
      </div>
    </section>
  );
};

export default Myskills;
