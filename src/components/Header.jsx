import React, { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="bg-[#0B0B0B]  relative z-10 ">
            <div className="max-w-[1140px] mx-auto px-[16px]">
                <div className="flex justify-between py-4 items-center">                    
                    <a href='/' className="text-[32px] font-bold text-[#6022EA] font-rubik cursor-pointer">Portfolio</a>                    
                    <div
                        className={`flex gap-[45px] items-center max-lg:absolute max-lg:w-[90%] max-lg:h-screen max-lg:top-0 
                        max-lg:bg-black max-lg:items-start max-lg:pl-[36px] max-lg:pt-[110px] max-lg:justify-start duration-300 max-lg:flex-col ${
                            show ? "right-0" : "right-[-100%]"
                        }`} 
                    >
                        <ul className="flex gap-[36px] max-lg:flex-col max-lg:justify-center max-lg:items-start">
                            <li>
                                <a
                                    href="#"
                                    className="font-rubik text-[16px] font-normal text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px]"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-rubik text-[16px] font-normal text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px]"
                                >
                                    Skill
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-rubik text-[16px] font-normal  text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px]"
                                >
                                     Expertise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className=" font-rubiktext-[16px] font-normal  text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full after:rounded-[10px]"
                                >
                                    Project
                                </a>
                            </li>
                           
                        </ul>
                        <button className='bg-[#6022EA] text-white font-rubik rounded-[50px] py-[16px] px-[32px] duration-300 ease-linear hover:shadow-btn-shadow'>Contact me</button>
                    </div>

                    
                    <div
                        className="menuicon z-10 cursor-pointer max-lg:block hidden"
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
