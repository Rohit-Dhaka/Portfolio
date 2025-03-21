import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Done, DownloadIcon, Wating } from "../common/icon";
import Grid from '../assets/images/grid.png'
import { ArrowDown, Pause, Check } from "lucide-react";
const words = ["Frontend Developer", " Backend Developer", "Full Stack Developer"];



const Hero = () => {

  const [status, setStatus] = useState("idle");


  
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // Typing speed
  
    useEffect(() => {
      const currentWord = words[wordIndex];
      let timer;
  
      if (isDeleting) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, speed / 2);
      } else {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, speed);
      }
  
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    const handleDownload = () => {

      if (status === "idle") {
        setStatus("downloading");
        setTimeout(() => setStatus("done"), 2000);
      }
      setTimeout(() => {
        
      const pdfUrl = "/Rohit resume.pdf"; // The PDF file should be in the public folder
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Rohit Resume.pdf"; // Name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
        
      }, 3000);
    };


  return (
    <header className="bg-[#11071F] min-h-screen flex flex-col  relative overflow-hidden">
      
      
      
     
      <div className=" absolute bottom-0 left-[50%] translate-x-[-50%]  z-0">
        <img src={Grid} alt="Grid" />
      </div>

      
                 
      
      <div className="container max-w-custom">
      <Header  /> 
      </div>
      <div className="container max-w-custom  flex-grow flex items-center justify-center pt-[20px]" id="home">
      
        <div className="flex flex-col items-center text-center lg:z-10">
          <h1 className="font-poppins font-bold lg:text-[72px] sm:text-[40px] text-[32px] text-white">
            Hi, Myself Rohit Dhaka And I'm a <span className=" max-sm:block max-sm:text-nowrap max-sm:text-[28px] max-sm:h-[42px]">{text}</span>
          </h1>
          <p className=" font-poppins sm:font-medium font-normal leading-5 text-white max-w-2xl mt-4">
            With a passion for transforming ideas into innovative digital solutions. I specialize in creating seamless and scalable applications with a strong focus on both front-end aesthetics and back-end functionality.
          </p>
        
           
<button onClick={handleDownload}  className="font-poppins font-semibold text-white flex items-center gap-[10px] rounded-[32px] sm:py-4 py-3 sm:px-8 px-6 mt-6 bg-gradient-to-r from-[#693B93] via-[#502384] to-[#370C75] hover:via-[#693B93] hover:to-[#502384] hover:from-[#370C75] relative group    transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
  Download CV 
 
        <div className="absol ute right-0 top-[40px] text-white text-5xl transition-all duration-300">
          {status === "idle" && <DownloadIcon />}
          {status === "downloading" && <Wating className="text-blue-500  rotate-12 duration-500" />}
          {status === "done" && <Done className="text-white" />}
          
        </div> 
  <span className="w-5 h-5 z-[-1] absolute bg-white rounded-full bottom-2 right-2 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:bottom-[-20px] group-hover:right-[-40px] shadow-lg"></span>
  <span className="w-5 h-5 z-[-1] absolute bg-white rounded-full top-3 left-3 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:left-[-20px] group-hover:top-[-30px] shadow-lg"></span>
  <span className="w-4 h-4 z-[-1] absolute bg-white rounded-full bottom-3 left-2 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:bottom-[-25px] group-hover:left-[-40px] shadow-lg"></span>
  <span className="w-3 h-3 z-[-1] absolute bg-white rounded-full bottom-6 left-8 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:bottom-[-20px] group-hover:left-[-40px] shadow-lg"></span>  
  <span className="w-4 h-4 z-[-1]  absolute bg-white rounded-full top-4 right-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:top-[-30px] group-hover:right-[-40px] shadow-lg"></span>  
  <span className="w-3 h-3 z-[-1] absolute bg-white rounded-full top-5 right-10 transition-all duration-500 ease-linear group-hover:opacity-0 group-hover:top-[-30px] group-hover:right-[-40px]  shadow-lg"></span>  
  

 
</button>








          


        </div>
        
      </div>
    </header>
  );
};

export default Hero
