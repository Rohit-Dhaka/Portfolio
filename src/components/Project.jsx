import React from "react";
import { ExternalLink, GithubLink, LiveLink, Screen } from "../common/icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

import Projectimages from "../assets/images/projects.png";

import { Autoplay } from "swiper/modules";

const Project = () => {
  return (
    <section className="bg-[#11071F]" id="project">
      <div className="container max-w-custom">
        <div className="flex flex-col items-center pt-3 z-10 relative">
          <h2 className=" font-Preahvihear text-white text-[50px] font-semibold">
            My Project
          </h2>
          <h6 className=" font-Preahvihear text-white text-center max-w-[900px] pt-4">
            A variety of projects, ranging from dynamic web applications to
            complex e-commerce platforms. Each project highlights my ability to
            handle both frontend and backend challenges.
          </h6>
        </div>

        <div className="flex flex-row flex-wrap mx-[-12px] justify-end relative pt-24 items-center ">
          <div className=" absolute sm:left-[-5%] top-[-30%] ">
          <Screen className='w-full' />
          </div>
          <div className=" lg:absolute lg:start-0  md:w-6/12 w-full px-3 z-10">
            <img src={Projectimages} alt="Projectimages" className=" w-full" />
          </div>
          <div className="lg:w-7/12 md:w-6/12 px-3 flex md:justify-end z-10 md:pt-0 pt-3">
            <div className="flex flex-col md:items-end">
              <h6 className=" font-poppins text-[#9857D3] font-semibold">
                Featured Project
              </h6>
              <h4 className=" font-poppins text-white text-[34px] font-semibold sm:pb-7 pb-4">
                Example Project
              </h4>
              <div className=" rounded-[14px] bg-gradient-to-r from-[#342F4F] to-[#2B0B3A]  text-white  sm:py-8 sm:px-10 px-6 py-5">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>

              <div className="sm:pt-8 pt-6 flex gap-3">
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <LiveLink />
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      Live Link
                    </div>
                  </a>
                </div>
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <GithubLink/>
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      GitHub
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>



        <div className="flex flex-row  mx-[-12px] flex-wrap-reverse  relative pt-24 items-center ">
        <div className="lg:w-7/12 md:w-6/12 px-3 flex md:justify-start z-10 md:pt-0 pt-3 ">
            <div className="flex flex-col md:items-start">
              <h6 className=" font-poppins text-[#9857D3] font-semibold">
                Featured Project
              </h6>
              <h4 className=" font-poppins text-white text-[34px] font-semibold sm:pb-7 pb-4">
                Example Project
              </h4>
              <div className=" rounded-[14px] bg-gradient-to-r from-[#342F4F] to-[#2B0B3A]  text-white  sm:py-8 sm:px-10 px-6 py-5">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>

              <div className="sm:pt-8 pt-6 flex gap-3">
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <LiveLink />
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      Live Link
                    </div>
                  </a>
                </div>
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <GithubLink/>
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      GitHub
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          <div className=" absolute right-0 top-[-30%] ">
            <Screen className='w-full' />
          </div>
          <div className=" lg:absolute lg:end-0  md:w-6/12 w-full px-3 z-0">
            <img src={Projectimages} alt="Projectimages" className=" w-full" />
          </div>
         
        </div>





        <div className="flex flex-row flex-wrap mx-[-12px] justify-end relative pt-24 items-center ">
          <div className=" absolute sm:left-[-5%] top-[-30%] ">
          <Screen className='w-full' />
          </div>
          <div className=" lg:absolute lg:start-0  md:w-6/12 w-full px-3 z-10">
            <img src={Projectimages} alt="Projectimages" className=" w-full" />
          </div>
          <div className="lg:w-7/12 md:w-6/12 px-3 flex md:justify-end z-10 md:pt-0 pt-3">
            <div className="flex flex-col md:items-end">
              <h6 className=" font-poppins text-[#9857D3] font-semibold">
                Featured Project
              </h6>
              <h4 className=" font-poppins text-white text-[34px] font-semibold sm:pb-7 pb-4">
                Example Project
              </h4>
              <div className=" rounded-[14px] bg-gradient-to-r from-[#342F4F] to-[#2B0B3A]  text-white  sm:py-8 sm:px-10 px-6 py-5">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>

              <div className="sm:pt-8 pt-6 flex gap-3">
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <LiveLink />
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      Live Link
                    </div>
                  </a>
                </div>
                <div className=" w-[30px] h-[30px] rounded-md bg-white flex items-center justify-center relative group  text-white cursor-pointer">
                  
                  <a href="">
                    <GithubLink/>
                    <div className="absolute left-[50%] translate-x-[-50%] bottom-[-101%]  bg-white text-black rounded-sm font-poppins px-1 opacity-0 group-hover:opacity-100  text-nowrap duration-300 text-[12px]">
                      GitHub
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center  pt-32">
          <h2 className=" font-Preahvihear text-center text-white font-semibold text-[50px] ">
            UI Design Gallery
          </h2>
          <h6 className=" font-Preahvihear text-white text-center pt-3">
            Take a look at some of my best UI designs:
          </h6>
        </div>
        <div className="mt-10 bg-gradient-to-t to-[#494251] from-[#8262ae86]   rounded-2xl">
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
                  <img
                    src={Evergreen}
                    alt="evergreen"
                    className="w-full h-full"
                  />
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
                  <img
                    src={SaintShiba}
                    alt="saintShiba"
                    className="w-full h-full"
                  />
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
                  <img
                    src={Noblemind}
                    alt="noblemind"
                    className="w-full h-full"
                  />
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
                  <img
                    src={Digiency}
                    alt="digiency"
                    className="w-full h-full"
                  />
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
                  <img
                    src={Laslesvpn}
                    alt="Laslesvpn"
                    className="w-full h-full"
                  />
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
                  <img
                    src={Digiencytwo}
                    alt="Digiencytwo"
                    className="w-full h-full"
                  />
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
                    <img
                      src={Dashboard}
                      alt="Dashboard"
                      className="w-full h-full"
                    />
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
                    <img
                      src={Cybertise}
                      alt="cybertise"
                      className="w-full h-full"
                    />
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
                    <img
                      src={Gardena}
                      alt="gardena"
                      className="w-full h-full"
                    />
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
                    <img
                      src={SSolana}
                      alt="sSolana"
                      className="w-full h-full"
                    />
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
                    <img
                      src={Exclusive}
                      alt="exclusive"
                      className="w-full h-full"
                    />
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
                  <a
                    href="https://fitness-myths.vercel.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
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
                    <img
                      src={Atlantic}
                      alt="atlantic"
                      className="w-full h-full"
                    />
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
                  <a
                    href="https://ice-blast.vercel.app/"
                    target="_blank"
                    className=" cursor-pointer"
                  >
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
