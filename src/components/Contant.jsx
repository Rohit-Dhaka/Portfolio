import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contant = () => {
  const form = useRef();
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const email = formData.get("from_name");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm('service_rvrdz6z', 'template_pjeq2yc', form.current, {
        publicKey: 'C6NIoC6x1YM3TUzDy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setError('');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="bg-[#0B0B0B] relative">
      <div className="max-w-[1140px] mx-auto px-[16px]">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-rubik text-[42px] font-semibold leading-[52px] text-center sm:pt-[100px] pt-[80px]">
            Contant<span className="text-[#6022EA]">Us</span>
          </h2>
          <h6 className="font-rubik pt-[16px] text-white text-[18px]">
            Any question or remarks? Just write us a message!
          </h6>
        </div>
        <div className="flex flex-wrap-reverse flex-row mx-[-12px] pt-[32px] items-center sm:pb-[100px] pb-[80px]">
          <div className="sm:w-6/12 w-full px-[12px] sm:pt-0 pt-[24px]">
            <form ref={form} onSubmit={sendEmail}>
              <label className="text-white font-rubik block">First Name</label>
              <input
                type="text"
                name="to_name"
                className="bg-transparent text-white outline-none py-2 focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"
              />
              <label className="text-white font-rubik block pt-[45px]">
                Your Email:
              </label>
              <input
                type="email"
                name="from_name"
                className="bg-transparent text-white outline-none py-2 focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"
              />
              {error && <p className="text-red-500 text-sm pt-[10px]">{error}</p>}
              <label className="text-white font-rubik block pt-[45px]">
                Message
              </label>
              <textarea
                name="message"
                className="bg-transparent text-white outline-none py-2 resize-none focus:not-italic border-b-[1px] border-solid border-[#FFFFFF] w-full sm:max-w-[400px]"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="text-white cursor-pointer font-rubik font-semibold bg-[#6022EA] py-[9px] px-[25px] rounded-[80px] mt-[45px]"
              />
            </form>
          </div>
          <div className="sm:w-6/12 px-[12px] ">
            <h5 className="font-rubik text-white font-medium pb-[16px] max-w-[390px] capitalize text-[24px]">
              If you have any dream project in your mind, let’s make it happen
              together.
            </h5>
            <h6 className="font-rubik text-white">
              Feel free to reach out for inquiries or collaborations. I look
              forward to working together.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contant;
