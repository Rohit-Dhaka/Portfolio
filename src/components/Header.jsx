import React, { useState } from "react";
import { Logo } from "../common/icon";
import Spotlightright from "../assets/images/spotlightright.png";
import Spotlightleft from "../assets/images/spotlightleft.png";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-[#11071F]   relative z-10  ">
      <div className=" absolute top-0 right-0  z-[-1] ">
        
        <img src={Spotlightright} alt="Spotlightright" className="w-full" />
      </div>
      <div className=" absolute top-0 left-0 z-[-1]">
        
        <img src={Spotlightleft} alt="Spotlightleft" className="w-full" />
      </div>
      <div className="pt-[20px]">
        <div className="flex justify-between py-1 sm:px-8  px-4 items-center border-[1px] border-[#272A3C] rounded-lg relative  tracking-widest  transition-all duration-500 ease-in-out  lg:overflow-hidden">
          <a href="/" className="">
            <Logo />
          </a>
          <div
            className={`flex gap-[45px] items-center max-md:absolute max-md:w-[100%] max-md:h-screen max-md:top-[-20px] 
                        max-md:bg-[#11071F]  max-md:backdrop-blur-xl max-md:items-center  z-10  max-md:justify-center duration-300 max-md:flex-col ${
                          show ? "left-0" : "left-[-100%]"
                        }`}
          >
            <ul className="flex gap-[36px] max-md:flex-col max-md:justify-center max-md:items-center">
              <li>
                <a
                  href="#home"
                  className=" text-[16px] font-normal text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className=" text-[16px] font-normal text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className=" text-[16px] font-normal  text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className=" text-[16px] font-normal  text-white hover:text-[#A362FF] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#A362FF] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                >
                  Project
                </a>
              </li>
            </ul>
            <button className="  text-white rounded-[32px] border-[1px] border-white py-[16px] px-[32px] max-md:block hidden font-poppins">
              Contact me
            </button>
          </div>

          <div
            className="menuicon z-10 cursor-pointer max-md:block hidden"
            onClick={() => setShow(!show)}
          >
            <span
              className={`w-[25px] h-[2px] bg-[#A362FF] block transition-transform duration-300 ${
                show ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[2px] bg-[#A362FF] block my-2 transition-opacity duration-300 ${
                show ? "opacity-0 " : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[2px] bg-[#A362FF] block transition-transform duration-300 ${
                show ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </div>

          <span className="absolute top-0 left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent to-white animate-[btnAnim1_9s_linear_infinite]"></span>
          <span className="absolute top-[-100%] right-0 w-[1px] h-full bg-gradient-to-b from-transparent to-white animate-[btnAnim2_6s_linear_infinite] "></span>
          <span className="absolute bottom-0 right-[-100%] w-full h-[1px] bg-gradient-to-l from-transparent to-white animate-[btnAnim3_9s_linear_infinite] "></span>
          <span className="absolute bottom-[-100%] left-0 w-[1px] h-full bg-gradient-to-t from-transparent to-white animate-[btnAnim4_6s_linear_infinite] "></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
