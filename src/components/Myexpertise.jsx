import React from "react";
import { Creative, Ellipse, PeakPerform, ProjectShowcase, Responsive, SEO, UserExperience } from "../common/icon";



const Myexpertise = () => {
  return (
    <section className="bg-[#11071F] relative overflow-hidden" id="expertise">
        <div className="absolute left-[50%] bottom-0  translate-x-[-50%]"> 
          <Ellipse/>
        </div>
      
      
      <div className="container max-w-custom">
        <div className="flex flex-col items-center">
          <h2 className=" font-Preahvihear text-white text-[42px]">
            My Expertise
          </h2>
          <h6 className=" font-Preahvihear text-white text-center  max-w-[640px] pt-4">
            As a full stack developer, I excel in creating responsive and
            SEO-optimized web applications that deliver outstanding user
            experiences. My focus on creative design ensures visually appealing
            interfaces..
          </h6>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-12  pb-10">
          
          <div className="md:w-6/12 w-full px-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className="h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="group-hover:scale-110 duration-300  " ><Creative/></div>
                <div className="flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">Creative Design</h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal  lg:text-start md:text-center sm:text-start text-center">Unique and eye catching design to Make your website stand out.
                  </h6>
                </div>                                            
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3 md:pt-0 pt-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className="h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="  group-hover:scale-110 duration-300  " ><Responsive/> </div>
                <div className=" flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">Responsive Layout
                  </h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal lg:text-start md:text-center sm:text-start text-center ">Ensuring your website looks great on all devices for a seamless user experience.


                  </h6>
                </div>                                            
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3 pt-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className="h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="group-hover:scale-110 duration-300  " ><SEO/> </div>
                <div className="flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">SEO Optimization</h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal  lg:text-start md:text-center sm:text-start text-center">implementing SEO best pratices to improve your websits’s visibility and ranking.


                  </h6>
                </div>                                            
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3  pt-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className=" h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="  group-hover:scale-110 duration-300  " ><PeakPerform/> </div>
                <div className=" flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">PeakPerform</h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal lg:text-start md:text-center sm:text-start text-center ">Delivering fast and efficient web applications
                  </h6>
                </div>                                            
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3 pt-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className="h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="group-hover:scale-110 duration-300  " > <UserExperience/> </div>
                <div className="flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">User Experience (UX)</h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal  lg:text-start md:text-center sm:text-start text-center">Designing user-centric interfaces for optimal engagement

                  </h6>
                </div>                                            
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3  pt-3 z-10">
            <div className="bg-[#4F228D] h-full rounded-2xl px-0 pt-1 hover:shadow-glow hover:bg-white duration-300  group">              
              <div className="h-full bg-[linear-gradient(120deg,#130428,#251043,#38126D,#261045,#190634)]  rounded-xl [14px] flex lg:flex-row md:flex-col sm:flex-row flex-col  items-center sm:gap-6 gap-4 sm:py-11 sm:px-[52px] py-8 px-6">
                <div className="  group-hover:scale-110 duration-300  " > <ProjectShowcase/> </div>
                <div className=" flex flex-col">
                  <h5 className="font-poppins text-white text-[28px] font-medium lg:text-start md:text-center sm:text-start text-center">Project Showcase </h5>
                  <h6 className="font-poppins text-white text-[14px] font-normal lg:text-start md:text-center sm:text-start text-center ">Demonstrating my full-stack development capabilities through real-world projects.                  </h6>
                </div>                                            
              </div>
            </div>
          </div>

     
                                  
        </div>
      </div>
    </section>
  );
};

export default Myexpertise;
