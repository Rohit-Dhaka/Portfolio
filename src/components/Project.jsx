import React from "react";
import { ExternalLink, Github, Githubmin, Screen } from "../common/icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

import Solana from "../assets/images/solana-business.webp";
import Digiency from "../assets/images/Digiency.webp";
import Laslesvpn from "../assets/images/Laslesvpn.webp";
import Digiencytwo from "../assets/images/Digiency-2.webp";
import SaintShiba from "../assets/images/SaintShiba.webp";
import Vipe from "../assets/images/Vipe.webp";
import Crappo from "../assets/images/Crappo.webp";
import Sports from "../assets/images/Sports.webp";
import Company from "../assets/images/Company.webp";
import Noblemind from "../assets/images/Noblemind.webp";
import Evergreen from "../assets/images/Evergreen.webp";
import Julian from "../assets/images/Julian.webp";
import Hustlin from "../assets/images/Hustlin.webp";
import Blandit from "../assets/images/Blandit.webp";
import Maitre from "../assets/images/Maitre.webp";

import Travel from "../assets/images/Travel.webp";
import CVHawk from "../assets/images/CVHawk.webp";
import Dashboard from "../assets/images/Dashboard.webp";
import IDox from "../assets/images/IDox.webp";
import Cybertise from "../assets/images/Cybertise.webp";
import Gardena from "../assets/images/Gardena.webp";
import SSolana from "../assets/images/S-Solana.webp";
import Exclusive from "../assets/images/Exclusive.webp";
import Ebook from "../assets/images/Ebook.webp";
import Atlantic from "../assets/images/Atlantic.webp";
import Gxxx from "../assets/images/Gxxx.webp";
import Ice from "../assets/images/Ice.webp";
import Sclair from "../assets/images/Sclair.webp";
import Marc from "../assets/images/Marc.webp";

import Grid from "../assets/images/Grid.webp";

import { Autoplay } from "swiper/modules";

const Project = () => {
  return (
    <section className="bg-[#0B0B0B] relative">
      <div className="w-[300px] h-[300px]  blur-[170px] bg-gradient-to-r from-[#FA00FF] to-[#6022EA] absolute bottom-[20%] z-10"></div>      
      <div className="w-[300px] h-[300px]  blur-[170px] bg-gradient-to-r from-[#FA00FF] to-[#6022EA] absolute right-0 top-[25%] z-10"></div>      
      <div className="max-w-[1140px] mx-auto px-[16px] sm:pb-[100px] pb-[80px] relative">
        <div className="flex flex-col items-center pb-[40px]">
          <h2 className="text-white font-rubik lg:text-[42px] text-[36px] font-semibold leading-[52px]   text-center sm:pt-[100px] pt-[80px] ">
            My <span className="text-[#6022EA]">Project</span>
          </h2>
          <h6 className="text-white pt-[16px] font-rubik  text-center max-w-[900px]">
            A variety of projects, ranging from dynamic web applications to
            complex e-commerce platforms. Each project highlights my ability to
            handle both frontend and backend challenges.
          </h6>
        </div>
        <div className="bg-[#121212] rounded-[12px] py-[60px] px-[30px]  relative overflow-hidden z-10">
          <div className="bg-[#6022EA] w-[200px] h-[200px] rounded-[50%] blur-[150px] absolute right-[-5%]"></div>
          <img
            src={Grid}
            alt="grid"
            className=" absolute sm:top-0 bottom-0 left-0"
          />
          <div className="flex flex-wrap flex-row mx-[-12px] ">
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center z-10">
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
        <div className="bg-[#121212] rounded-[12px] py-[60px] px-[30px] mt-[40px] relative overflow-hidden  z-10">
          <div className="bg-[#6022EA] w-[200px] h-[200px] rounded-[50%] blur-[150px] absolute left-[-5%]"></div>
          <img
            src={Grid}
            alt="grid"
            className=" absolute sm:top-0 bottom-0 left-0"
          />
          <div className="flex flex-wrap flex-row mx-[-12px] max-sm:flex-wrap-reverse">
            <div className="sm:w-6/12 w-full pt-[12px] sm:pt-0 px-[12px] flex items-center justify-center flex-col z-10 relative ">
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
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center z-10">
              <Screen />
            </div>
          </div>
        </div>

        <div className="bg-[#121212] rounded-[12px] py-[60px] px-[30px] mt-[40px]  overflow-hidden  z-20 relative">
          <div className="bg-[#6022EA] w-[200px] h-[200px] rounded-[50%] blur-[150px] absolute right-[-5%]"></div>
          <img
            src={Grid}
            alt="grid"
            className=" absolute sm:top-0 bottom-0 left-0"
          />
          <div className="flex flex-wrap flex-row mx-[-12px]">
            <div className="sm:w-6/12 w-full px-[12px] flex items-center justify-center z-10">
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
          <h2 className="text-white lg:text-[42px] text-[36px] font-rubik font-semibold leading-[52px]   text-center sm:pt-[100px] pt-[80px]">
            UI Design Gallery
          </h2>
          <h6 className="text-white  font-rubik text-center max-w-[900px] pt-2">
            Take a look at some of my best UI designs:
          </h6>
        </div>

        <div className="bg-[#1F1E1F]   rounded-[16px]  shadow-box-shadow  z-20 relative">
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
            direction="horizontal"
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                  href="https://velvety-puppy-8357f5.netlify.app/"
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <img src={Solana} alt="solana" className="w-full h-full" />
                </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://beamish-tartufo-ae7991.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Evergreen} alt="evergreen" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://dapper-lokum-cc1653.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={SaintShiba} alt="saintShiba" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://tourmaline-axolotl-cef99a.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Noblemind} alt="noblemind" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://starlit-zuccutto-00c7d4.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Digiency} alt="digiency" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://mellifluous-raindrop-e4e7e3.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Laslesvpn} alt="Laslesvpn" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://splendorous-kataifi-ae1817.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Digiencytwo} alt="Digiencytwo" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://brilliant-tulumba-d17089.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Vipe} alt="Vipe" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://bright-biscuit-25e953.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Crappo} alt="Crappo" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://jade-crepe-cc4218.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Sports} alt="Sports" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://starlit-belekoy-9b52ac.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Company} alt="Company" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://comfy-basbousa-62a0c3.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Julian} alt="Julian" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://fastidious-jelly-0a2dab.netlify.app/"
                    target="_blank"
                    className="  cursor-pointer"
                  >
                    
                <img src={Hustlin} alt="Hustlin" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://glistening-kulfi-0d85fe.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Blandit} alt="Blandit" className="w-full h-full" />
                  </a>
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
              <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
              <a
                    href="https://papaya-sopapillas-c561c0.netlify.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    
                <img src={Maitre} alt="Maitre" className="w-full h-full" />
                  </a>
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

          <div dir="rtl" className="mt-[-20px]">
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://helpful-zabaione-fb81ec.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                  <img src={Travel} alt="Travel" className="w-full h-full" />
                      
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://superlative-toffee-3a8715.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={CVHawk} alt="CVHawk" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://melodious-daifuku-2bc76c.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Dashboard} alt="Dashboard" className="w-full h-full" />
                    </a>
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
                <div className="rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://dapper-twilight-4523bd.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={IDox} alt="iDox" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://stirring-mooncake-ddb9e9.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Cybertise} alt="cybertise" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://bespoke-baklava-9603e6.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Gardena} alt="gardena" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://frabjous-gingersnap-228668.netlify.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={SSolana} alt="sSolana" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://exclusive-game-nine.vercel.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Exclusive} alt="exclusive" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a href="https://fitness-myths.vercel.app/" target="_blank" className=" cursor-pointer">
                      
                  <img src={Ebook} alt="ebook" className="w-full h-full" />
                    </a>
                  <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                    <a href="https://fitness-myths.vercel.app/" target="_blank">
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://atlantic-azure.vercel.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Atlantic} alt="atlantic" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://blockchain-eight-eta.vercel.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Gxxx} alt="gxxx" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a href="https://ice-blast.vercel.app/" target="_blank" className=" cursor-pointer">
                      
                  <img src={Ice} alt="ice" className="w-full h-full" />
                    </a>
                  <div className="absolute bottom-1 right-1 p-1 bg-white rounded-md  flex gap-1 opacity-0 group-hover:opacity-100 duration-300 ease-in">
                    <a href="https://ice-blast.vercel.app/" target="_blank">
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://sclair-q6g7fdthm-rohit-dhakas-projects.vercel.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Sclair} alt="sclair" className="w-full h-full" />
                    </a>
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
                <div className=" rounded-lg  overflow-hidden text-white text-center group   h-[150px] hover:scale-[1.06] opacity-80 hover:opacity-100  duration-300 relative">
                <a
                      href="https://hubrich-atzehdynj-rohit-dhakas-projects.vercel.app/"
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      
                  <img src={Marc} alt="marc" className="w-full h-full" />
                    </a>
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
      </div>
    </section>
  );
};

export default Project;
