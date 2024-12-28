import React from "react";

const Contant = () => {
  return (
    <section className="bg-black relative">
      <div className="max-w-[1140px] mx-auto px-[16px]">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-rubik text-[42px] font-semibold leading-[52px]   text-center pt-[100px] ">
            Contant<span className="text-[#6022EA]">Us</span>
          </h2>
          <h6 className="font-rubik  pt-[16px] text-white text-[18px]">
            Any question or remarks? Just write us a message!
          </h6>
        </div>
        <div className="flex flex-wrap-reverse flex-row mx-[-12px] pt-[32px] items-center pb-[100px]">
          <div className="sm:w-6/12 w-full  px-[12px] ">
            <form action="">
              <label className="text-white font-rubik  block ">
                First Name
              </label>
              <input
                type="text"
                className="bg-transparent text-white outline-none py-2 focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"
              />
              <label className="text-white font-rubik  block pt-[45px]">
                Your Email:-
              </label>
              <input
                type="email"
                className="bg-transparent text-white outline-none py-2 focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"
              />
              <label className="text-white font-rubik  block pt-[45px]">
                First Name
              </label>
              <textarea className="bg-transparent text-white outline-none py-2 resize-none focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"></textarea>

              <button className="text-white font-rubik font-semibold bg-[#6022EA] py-[9px] px-[25px] rounded-[80px] mt-[45px]">
                Send Massage
              </button>
            </form>
          </div>
          <div className="sm:w-6/12 px-[12px] ">
            <h5 className=" font-rubik text-white font-medium pb-[16px] max-w-[390px] capitalize text-[24px]">
              If you have any dream project in your mind, let’s make it happen
              together.
            </h5>
            <h6 className="font-rubik text-white ">feel free to reach out for inquiries or collaborations. I look forward to working together</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contant;
