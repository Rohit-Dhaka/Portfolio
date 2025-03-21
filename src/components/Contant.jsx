import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Emailicon, Location, Phoneicon } from "../common/icon";
import Illustration from '../assets/images/Illustration.png'

const Contant = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.from_name)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("service_rvrdz6z", "template_pjeq2yc", form.current, {
        publicKey: "C6NIoC6x1YM3TUzDy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setError("");
          setFormData({ to_name: "", from_name: "", message: "" }); // Reset form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className=" bg-[#11071F]  relative ">
      <div className=" absolute  sm:bottom-[-10%] sm:right-0 bottom-0 ">
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="container max-w-custom ">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-Preahvihear  text-[50px] font-semibold sm:pt-24 pt-16">
            Contact Us
          </h2>
          <h6 className="text-white font-Preahvihear text-center pb-[80px] ">
            Any question or remarks? Just write us a message!
          </h6>
        </div>
        <div className="max-w-[886px] mx-auto  pb-36 lg:px-0 px-3 ">
          <div className="flex flex-wrap flex-row mx-[-12px] bg-[#ffffff19] py-3  rounded-lg items-center z-10 relative">
            <div className="sm:w-6/12 w-full px-3">
              <div className="bg-[#11071F]  rounded-lg sm:p-[40px] p-5">
                <h5 className=" font-poppins text-white text-[28px]  font-medium max-sm:text-center">
                  Contact Information
                </h5>
                <h6 className=" font-poppins text-white text-[18px] max-sm:text-center ">
                  Say something to start a live chat!
                </h6>
                <div className="flex gap-4 sm:pt-[100px] pt-10">
                  <div className=" cursor-pointer  hover:animate-bounce">
                    <Phoneicon />
                  </div>
                  <a
                    href="tel:+8295817840"
                    className="text-white  font-poppins hover:text-[#A362FF] duration-300 ease-linear"
                  >
                    +8295817840
                  </a>
                </div>
                <div className="flex gap-4 sm:pt-[50px] pt-10">
                  <div className="w-[24px]  cursor-pointer hover:animate-bounce">
                    <Emailicon />
                  </div>
                  <a
                    href="mailto:rohitdhaka2110@gmail.com"
                    className="text-white font-poppins  hover:text-[#A362FF] duration-300 ease-linear"
                  >
                    rohitdhaka2110@gmail.com
                  </a>
                </div>
                <div className="flex gap-4 sm:pt-[50px] pt-10  sm:pb-[85px] pb-10">
                  <div className=" cursor-pointer hover:animate-bounce">
                    <Location />
                  </div>
                  <a
                    href=""
                    className="text-white  font-poppins hover:text-[#A362FF] duration-300 ease-linear "
                  >
                    Hansi, Hisar
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-6/12 w-full px-3 sm:pt-0 pt-6 max-sm:pb-5">
              <form ref={form} onSubmit={sendEmail}>
                <label className=" font-poppins text-[#8D8D8D] block">
                  First Name
                </label>
                <input
                  type="text"
                  name="to_name"
                  value={formData.to_name}
                  onChange={handleChange}
                  className="bg-transparent  text-white outline-none sm:py-[12px] py-2 focus:not-italic border-b-[1px] border-solid  w-full"
                />
                <label className=" font-poppins text-[#8D8D8D] block sm:pt-[45px] pt-8">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="bg-transparent text-white outline-none sm:py-[12px] py-2 focus:not-italic border-b-[1px] border-solid w-full sm:max-w-[400px]"
                />
                {error && <p className="text-red-500 text-sm pt-[10px]">{error}</p>}
                <label className=" font-poppins text-[#8D8D8D] block sm:pt-[30px] pt-8">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message.."
                  className="bg-transparent text-white outline-none py-[12px] resize-none focus:not-italic border-b-[1px] border-solid w-full sm:max-w-[400px]"
                ></textarea>
                <input
                  type="submit"
                  value="Send Message"
                  className="flex py-3 cursor-pointer px-6 justify-center items-center mt-6 font-poppins font-medium text-center text-[16px] text-white no-underline border border-transparent rounded-[100px] transition-all duration-300 bg-gradient-to-r from-[#370C75] via-[#A362FF] to-[#370C75] bg-[length:200%_auto] hover:bg-[position:right_bottom] hover:shadow-glow"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Contant;
