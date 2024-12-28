import React from "react";
import {
  Creative,
  EllipseOne,
  Optimization,
  Responsive,
  Sec,
  Showcase,
  Twocircles,
  Ux,
} from "../common/icon";

const Myexpertise = () => {
  return (
    <section className="bg-black relative">
      <div className="max-w-[1140px] mx-auto px-[16px]">
        <div className="flex flex-col items-center">
          <h2 className="font-rubik text-white text-[42px] font-semibold leading-[52px]  text-center pt-[100px] ">
            My <span className="text-[#6022EA]">Expertise</span>
          </h2>
          <h6 className=" font-rubik text-white  pt-[16px]  text-center max-w-[900px]">
            As a full stack developer, I excel in creating responsive and
            SEO-optimized web applications that deliver outstanding user
            experiences. My focus on creative design ensures visually appealing
            interfaces..
          </h6>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[40px] pb-[100px]">
          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className=" bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                  <Twocircles />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                  <Creative />
                </div>
                <h5 className="font-rubik text-white text-[24px]  font-normal pt-[16px]">
                  Creative Design
                </h5>
                <h6 className="font-rubik pt-[16px] text-white  text-center ">
                  Unique and eye catching design to Make your website stand out.
                </h6>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px] sm:pt-0 pt-[24px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className="card  bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                  <Twocircles />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                <Responsive />
                </div>
                <h5 className="text-white text-[24px] font-rubik  font-normal pt-[16px]">
                Responsive Layout
                </h5>
                <h6 className="pt-[16px] text-white  text-center  font-rubik">
                Ensuring your website looks great on all devices for a seamless user experience.
                </h6>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px] lg:pt-0 pt-[24px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className="card  bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                  <Twocircles />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                <Sec />
                </div>
                <h5 className="text-white text-[24px]  font-normal pt-[16px] font-rubik">
                SEO Optimization
                </h5>
                <h6 className="pt-[16px] text-white  text-center font-rubik ">
                implementing SEO best pratices to improve your websits’s
                visibility and ranking.
                </h6>
              </div>
            </div>
          </div>
          
          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px] pt-[24px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className="card  bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                  <Twocircles />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                <Optimization />
                </div>
                <h5 className="text-white text-[24px]  font-normal pt-[16px] font-rubik">
                Performance Optimization
                </h5>
                <h6 className="pt-[16px] text-white  text-center font-rubik ">
                Delivering fast and efficient web applications
                </h6>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px] pt-[24px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className="card  bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                  <Twocircles />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                <Ux />
                </div>
                <h5 className="text-white text-[24px]  font-normal pt-[16px] font-rubik">
                User Experience (UX)
                </h5>
                <h6 className="pt-[16px] text-white  text-center  font-rubik">
                Designing user-centric interfaces for optimal engagement
                </h6>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12 w-full  px-[12px] pt-[24px]">
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] h-full rounded-[16px] p-[2px] group relative overflow-hidden">
              <div className="card  bg-black duration-300 ease-linear group-hover:bg-transparent rounded-[14px] h-full  flex items-center justify-center flex-col p-[20px]">
                <div className=" absolute bottom-0 right-0 hidden group-hover:block">
                <Showcase />
                </div>
                <div className="w-[125px] h-[125px] rounded-[50%] bg-gradient-to-b from-[#FFFFFF] to-[#6022EA] group-hover:from-[#FFFFFF] group-hover:to-[#FFFFFF] duration-300 flex items-center justify-center ease-out">
                <Ux />
                </div>
                <h5 className="text-white text-[24px]  font-normal pt-[16px] font-rubik">
                Project Showcase
                </h5>
                <h6 className="pt-[16px] text-white  text-center  font-rubik">
                Demonstrating my full-stack development capabilities through
                real-world projects.
                </h6>
              </div>
            </div>
          </div>
                                  
        </div>
      </div>
    </section>
  );
};

export default Myexpertise;
