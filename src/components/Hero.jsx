import React from "react";
import GitLogo from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Hero() {
  return (
    <div className="wrapper flex flex-col lg:flex-row justify-center items-center lg:items-left min h-screen px-6 lg:px-20">
      <div className="content text-left lg:text-left max-w-xl lg:mr-6">
        <h1 className="text-black text-4xl lg:text-5xl font-bold font-public-sans">
          Front-End React and Flutter Mobile App Developer
        </h1>
        <p className="text-grey py-4 text-sm md:text-base font-medium max-w-lg">
          👋 Hey there! I'm Jayden Liaw, a Singapore-based software enthusiast
          on an exhilarating tech journey. Curiosity fuels me, and I thrive on
          teamwork. Currently exploring ReactJS and Flutter Mobile App to craft
          tools that redefine efficiency.
        </p>
        <div className="flex gap-2 cursor-pointer">
          <img
            src={Linkedin}
            alt="Linkedin Logo"
            onClick={() =>
              window.open("https://www.linkedin.com/in/liawjianwei/", "_blank")
            }
          />
          <img
            src={GitLogo}
            alt="Github Logo"
            onClick={() =>
              window.open("https://github.com/Jianwei07", "_blank")
            }
          />
        </div>
      </div>
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
