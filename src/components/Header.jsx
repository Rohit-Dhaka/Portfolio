import React, { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="bg-[#0B0B0B]  relative z-10 ">
            <div className="max-w-[1140px] mx-auto px-[16px]">
                <div className="flex justify-between py-[22px] items-center">                    
                    <a href='/' className="text-[32px] font-bold text-[#6022EA] font-poppins  cursor-pointer">Portfolio</a>                    
                    <div
                        className={`flex gap-[45px] items-center max-md:absolute max-md:w-[90%] max-md:h-screen max-md:top-0 
                        max-md:bg-black max-md:items-start max-md:pl-[36px] max-md:pt-[110px] max-md:justify-start duration-300 max-md:flex-col ${
                            show ? "left-0" : "left-[-100%]"
                        }`} 
                    >
                        <ul className="flex gap-[36px] max-md:flex-col max-md:justify-center max-md:items-start">
                            <li>
                                <a
                                    href="#"
                                    className=" text-[16px] font-normal text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins" 
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className=" text-[16px] font-normal text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                                >
                                    Skill
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className=" text-[16px] font-normal  text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                                >
                                     Expertise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className=" text-[16px] font-normal  text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                                >
                                    Project
                                </a>
                            </li>
                           
                        </ul>
                        <button className='  text-white rounded-[32px] border-[1px] border-white py-[16px] px-[32px] max-md:block hidden font-poppins'>Contact me</button>
                    </div>
                        <button className='  text-white rounded-[32px] border-[1px] border-white py-[16px] px-[32px] max-md:hidden block font-poppins'>Contact me</button>

                    
                    <div
                        className="menuicon z-10 cursor-pointer max-md:block hidden"
                        onClick={() => setShow(!show)}
                    >
                        <span
                            className={`w-[25px] h-[2px] bg-[#6022EA] block transition-transform duration-300 ${
                                show ? "rotate-45 translate-y-[10px]" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-[25px] h-[2px] bg-[#6022EA] block my-2 transition-opacity duration-300 ${
                                show ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-[25px] h-[2px] bg-[#6022EA] block transition-transform duration-300 ${
                                show ? "-rotate-45 -translate-y-[10px]" : ""
                            }`}
                        ></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
