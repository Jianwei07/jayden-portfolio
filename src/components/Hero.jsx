import React from "react";
import GitLogo from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Hero() {
  return (
    // Content Left
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-left min h-screen p-4 md:p-16 lg:p-16">
      <div className="content text-left lg:text-left max-w-xl lg:mr-6">
        <h1 className="text-black text-4xl lg:text-5xl font-bold font-public-sans md:text-4xl lg:text-4xl">
          Front-End React and Flutter Mobile App Developer
        </h1>
        <p className="text-gray-500 py-5 text-sm md:text-base font-small font-public-sans md:text-lg lg:text-base max-w-lg">
          👋 Hey there! I'm Jayden Liaw, a Singapore-based software enthusiast
          on an exhilarating tech journey. Curiosity fuels me, and I thrive on
          teamwork. Currently exploring ReactJS and Flutter Mobile App to craft
          tools that redefine efficiency.
        </p>
        <div className="flex gap-2 cursor-pointer">
          <img
            src={Linkedin}
            alt="Linkedin Logo"
            className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
            onClick={() =>
              window.open("https://www.linkedin.com/in/liawjianwei/", "_blank")
            }
          />
          <img
            src={GitLogo}
            alt="Github Logo"
            className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
            onClick={() =>
              window.open("https://github.com/Jianwei07", "_blank")
            }
          />
        </div>
      </div>
      {/* //content right */}
      <div className="w-80 h-80 border-4 border-white rounded-full shadow-lg overflow-hidden">
        <img
          src="/path/to/display-picture.jpg"
          alt="Display Picture"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
export default Hero;
