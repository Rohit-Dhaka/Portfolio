import React from "react";
import { ExternalLink, Github, Githubmin, Screen } from "../common/icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

import Solana from "../assets/images/solana-business.png";
import Digiency from "../assets/images/Digiency.png";
import Laslesvpn from "../assets/images/Laslesvpn.png"
import Digiencytwo from "../assets/images/Digiency-2.png"
import SaintShiba from "../assets/images/SaintShiba.png"
import Vipe from "../assets/images/Vipe.png"
import Crappo from "../assets/images/Crappo.png"
import Sports from "../assets/images/Sports.png"
import Company from "../assets/images/Company.png"
import Noblemind from "../assets/images/Noblemind.png"
import Evergreen from '../assets/images/Evergreen.png'
import Julian from "../assets/images/Julian.png"
import Hustlin from "../assets/images/Hustlin.png"
import Blandit from "../assets/images/Blandit.png"
import Maitre from "../assets/images/Maitre.png"


import Travel from "../assets/images/Travel.png"
import CVHawk from "../assets/images/CVHawk.png"
import Dashboard from "../assets/images/Dashboard.png"
import IDox from "../assets/images/IDox.png"
import Cybertise from "../assets/images/Cybertise.png"
import Gardena from "../assets/images/Gardena.png"
import SSolana from "../assets/images/S-Solana.png"
import Exclusive from "../assets/images/Exclusive.png"
import Ebook from "../assets/images/Ebook.png"
import Atlantic from "../assets/images/Atlantic.png"
import Gxxx from "../assets/images/Gxxx.png"
import Ice from "../assets/images/Ice.png"
import Sclair from "../assets/images/Sclair.png"
import Marc from "../assets/images/Marc.png"


import Grid from '../assets/images/Grid.png'


import { Autoplay } from "swiper/modules";

const Project = () => {
  return (
    <section className="bg-[#0B0B0B]">
      <div className="max-w-[1140px] mx-auto px-[16px] pb-[100px] relative">
        <div className="flex flex-col items-center pb-[40px]">
          <h2 className="text-white font-rubik text-[42px] font-semibold leading-[52px]   text-center pt-[100px] ">
            My <span className="text-[#6022EA]">Project</span>
          </h2>
          <h6 className="text-white pt-[16px] font-rubik  text-center max-w-[900px]">
            A variety of projects, ranging from dynamic web applications to
            complex e-commerce platforms. Each project highlights my ability to
            handle both frontend and backend challenges.
          </h6>
        </div>
        <div className="bg-[#121212] rounded-[12px] py-[60px] px-[30px]  relative overflow-hidden">
          <div className="bg-[#6022EA] w-[200px] h-[200px] rounded-[50%] blur-[150px] absolute right-[-5%]"></div>
        <img src={Grid} alt="" className=" absolute top-0" />
          <div className="flex flex-wrap flex-row mx-[-12px]">
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center">
              <Screen />
            </div>
            <div className="sm:w-6/12 w-full px-[12px] pt-[12px] sm:pt-0 flex items-center justify-center flex-col">
              <div className="max-w-[400px]">
                <h3 className="text-white font-rubik text-[32px] font-semibold max-sm:text-center">
                  Project Title
                </h3>
                <h6 className="text-white text-[16px] font-rubik  font-normal pt-[16px] max-sm:text-center">
                  Click the three dots icon (...) next to the Stroke settings to
                  expand the Stroke Options.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF02] rounded-[12px] py-[60px] px-[30px] mt-[40px] relative overflow-hidden  ">
          <img src={Grid} alt="" className=" absolute top-0" />
          <div className="flex flex-wrap flex-row mx-[-12px] max-sm:flex-wrap-reverse">
            <div className="sm:w-6/12 w-full pt-[12px] sm:pt-0 px-[12px] flex items-center justify-center flex-col">
              <div className="max-w-[400px]">
                <h3 className="text-white font-rubik text-[32px] font-semibold max-sm:text-center ">
                  Project Title
                </h3>
                <h6 className="text-white font-rubik text-[16px] font-normal pt-[16px] max-sm:text-center">
                  Click the three dots icon (...) next to the Stroke settings to
                  expand the Stroke Options.
                </h6>
              </div>
            </div>
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center">
              <Screen />
            </div>
          </div>
        </div>

        <div className="bg-[#121212] rounded-[12px] py-[60px] px-[30px] mt-[40px] relative overflow-hidden ">
        <img src={Grid} alt="" className=" absolute top-0" />
          <div className="flex flex-wrap flex-row mx-[-12px]">
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center">
              <Screen />
            </div>
            <div className="sm:w-6/12 w-full pt-[12px] sm:pt-0 px-[12px] flex items-center justify-center flex-col">
              <div className="max-w-[400px]">
                <h3 className="text-white font-rubik text-[32px] font-semibold max-sm:text-center">
                  Project Title
                </h3>
                <h6 className="text-white  font-rubik text-[16px] font-normal pt-[16px] max-sm:text-center">
                  Click the three dots icon (...) next to the Stroke settings to
                  expand the Stroke Options.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-[60px] ">
          <h2 className="text-white text-[42px] font-rubik font-semibold leading-[52px]   text-center pt-[100px] ">
            UI Design Gallery
          </h2>
          <h6 className="text-white  font-rubik text-center max-w-[900px] pt-2">
            Take a look at some of my best UI designs:
          </h6>
        </div>

        <div className="bg-[#1F1E1F]   rounded-[16px]  shadow-box-shadow ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={9000}            
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              575: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
          > 
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Solana} alt="solana" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://velvety-puppy-8357f5.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Evergreen} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://beamish-tartufo-ae7991.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={SaintShiba} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://dapper-lokum-cc1653.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Noblemind} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://tourmaline-axolotl-cef99a.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Digiency} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://starlit-zuccutto-00c7d4.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Laslesvpn} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://mellifluous-raindrop-e4e7e3.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Digiencytwo} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://splendorous-kataifi-ae1817.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Vipe} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://brilliant-tulumba-d17089.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Crappo} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://bright-biscuit-25e953.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Sports} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://jade-crepe-cc4218.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Company} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://starlit-belekoy-9b52ac.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            

          

            
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Julian} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://comfy-basbousa-62a0c3.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>


         

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Hustlin} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://fastidious-jelly-0a2dab.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Blandit} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://glistening-kulfi-0d85fe.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Maitre} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://papaya-sopapillas-c561c0.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
           <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={9000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            
            allowTouchMove={false}            
            breakpoints={{
              575: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
            className="mt-[-20px]"
          > 
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Travel} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://helpful-zabaione-fb81ec.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={CVHawk} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://superlative-toffee-3a8715.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Dashboard} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://melodious-daifuku-2bc76c.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={IDox} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://dapper-twilight-4523bd.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Cybertise} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://stirring-mooncake-ddb9e9.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Gardena} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://bespoke-baklava-9603e6.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={SSolana} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://frabjous-gingersnap-228668.netlify.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Exclusive} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://exclusive-game-nine.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Ebook} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://fitness-myths.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Atlantic} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://atlantic-azure.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Gxxx} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://blockchain-eight-eta.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Ice} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://ice-blast.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Sclair} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://sclair-q6g7fdthm-rohit-dhakas-projects.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="bg-green-500 rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <img src={Marc} alt="" className="w-full h-full" />
                <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                  <a
                    href="https://hubrich-atzehdynj-rohit-dhakas-projects.vercel.app/"
                    target="_blank"                    
                  >
                    <ExternalLink />
                  </a>                 
                </div>
              </div>
            </SwiperSlide>

            
           


            

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
