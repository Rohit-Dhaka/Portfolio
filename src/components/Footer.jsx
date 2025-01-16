import React from 'react'
import { Emailicon, Github, Instagram, Linkedin, Location, Phoneicon, Twitter } from '../common/icon'

const Footer = () => {
    return (
        <footer className='bg-black overflow-hidden '>
            <div className="max-w-[1140px] px-[12px] mx-auto">
                <div className="flex flex-row flex-wrap mx-[-12px] py-[80px] ">
                    <div className="lg:w-5/12 md:w-4/12  w-full px-[12px]">
                        <h2 className='  text-[#6022EA]  text-[24px] font-bold'>Portfolio</h2>

                    </div>
                    <div className="lg:w-2/12 md:w-2/12 sm:w-3/12 w-full px-[12px] pt-[24px] md:pt-0">
                        <ul className='flex flex-col sm:gap-[18px] gap-[12px]'>
                            <li className='text-white   text-[18px]  '>Explore</li>
                            <li>
                                <a href="" className=" text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full ">Home</a>
                            </li>

                            <li>
                                <a href="" className=" text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full ">Skills</a>
                            </li>

                            <li>
                                <a href="" className=" text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full ">Project</a>
                            </li>



                            <li>
                                <a href="" className=" text-white hover:text-[#6022EA] duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:duration-300 after:bg-[#6022EA] after:hover:left-0 after:hover:translate-x-0 after:hover:w-full ">Contact Me</a>
                            </li>



                        </ul>

                    </div>
                    <div className="lg:w-3/12 md:w-4/12 sm:w-5/12 w-full px-[12px] pt-[24px] md:pt-0">
                        <ul className='flex flex-col sm:gap-[18px] gap-[12px]'>
                            <li className='text-white   text-[18px]  '>Contact Us</li>
                            <li className='flex gap-4 '>
                                <Location />
                                <a href="" className='text-white   '>Hansi ,Hisar</a>
                            </li>
                            <li className='flex gap-4'>
                                <div className="w-[24px]">
                                <Emailicon/>
                                </div>
                                <a href="mailto:rohitdhaka2110@gmail.com" className='text-white  '>rohitdhaka2110@gmail.com</a>
                                
                            </li>
                            <li className='flex gap-4 '>
                                <Phoneicon/>
                                <a href="tel:+8295817840" className='text-white  '>+8295817840</a>                                
                            </li>
                        </ul>

                    </div>
                    <div className="lg:w-2/12 md:w-2/12 sm:w-3/12 w-full px-[12px] pt-[24px] md:pt-0">



                    <ul className='flex flex-col sm:gap-[18px] gap-[14px]'>
                            <li className='text-white   text-[18px]  '>Follow Us</li>
                            {/* <li className='flex gap-4  '>
                                <Twitter/>
                                <a href=""  target='_blank' className='text-white  '>Twitter</a>
                            </li> */}

                            {/* <li className='flex gap-4  '>
                                <Instagram/>
                                <a href="" className='text-white  '>Instagram</a>
                            </li> */}


                            <li className='flex gap-4  '>
                                <Linkedin/>
                                <a href="https://www.linkedin.com/feed/"  target='_blank' className='text-white  '>Linkedin</a>
                            </li>

                            <li className='flex gap-4  '>
                                
                                <Github/>
                                <a href="https://github.com/Rohit-Dhaka" target='_blank' className='text-white   '>Github</a>
                            </li>
                           
                        </ul>

                    </div>

                </div>
            </div>


            <h6 className=' text-white py-4 border-t-[1px] border-solid border-[#6022EA] text-center font-inter '>Copyright @ 2024 | All Rights Reserved</h6>
        </footer>
    )
}

export default Footer