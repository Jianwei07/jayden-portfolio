import React from "react";
import GitLogo from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import ReactIcon from "../assets/react.svg";
import JavascriptIcon from "../assets/javascript.svg";
import JavaIcon from "../assets/java.svg";
import FlutterIcon from "../assets/flutter.svg";
import LinuxIcon from "../assets/linux.svg";
import PythonIcon from "../assets/python.svg";
import DisplayPicture from "../assets/jayden_dp.png";

function Hero() {
  return (
    <div className="bg-amber-50 flex flex-col md:flex-row justify-center items-center h-screen p-4 md:px-8 lg:px-16">
      <div className="content md:text-left max-w-3xl lg:mr-16">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold font-public-sans mb-4">
          Aspiring Full-Stack Developer & Tech Enthusiast
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-base max-w-2xl mb-6 font-public-sans">
          👋 Hi there! I'm Jayden Liaw, a Singapore-based Full-Stack Software
          Engineer. Currently, I'm immersed in unraveling the complexities of
          Software Architectures, containerization, and networking. Seeking to
          understand not just the how, but the why behind technology. Podcasts
          are my window to the broader implications of tech - reminding me that
          beyond the code, it's about the impactful ideas and the social aspects
          of engineering. Let's explore and make sense of this ever-evolving
          tech landscape together!
        </p>
        <div className="flex gap-2 cursor-pointer mb-8">
          <img
            src={Linkedin}
            alt="Linkedin Logo"
            className="w-8 h-8"
            onClick={() =>
              window.open("https://www.linkedin.com/in/liawjianwei/", "_blank")
            }
          />
          <img
            src={GitLogo}
            alt="Github Logo"
            className="w-8 h-8"
            onClick={() =>
              window.open("https://github.com/Jianwei07", "_blank")
            }
          />
        </div>
        {/* Tech Stack */}
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8">
          <h3 className="text-lg font-semibold text-gray-800 md:mr-2 md:mb-0">
            Tech Stacks :
          </h3>
          <div className="flex gap-2">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center">
              <img
                src={ReactIcon}
                alt="React"
                title="React"
                className="w-7 h-7"
              />
            </div>

            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center mb-4">
              <img
                src={JavascriptIcon}
                alt="JavaScript"
                title="JavaScript"
                className="w-6 h-6"
              />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center">
              <img src={JavaIcon} alt="Java" title="Java" className="w-7 h-7" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center">
              <img
                src={FlutterIcon}
                alt="Flutter"
                title="Flutter Dart"
                className="w-7 h-7"
              />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center">
              <img
                src={LinuxIcon}
                alt="Linux"
                title="Linux OS"
                className="w-7 h-7"
              />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white bg-white shadow-md flex justify-center items-center">
              <img
                src={PythonIcon}
                alt="Python"
                title="Python"
                className="w-7 h-7"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Display Picture */}
      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0 rounded-full border-4 border-amber shadow-lg overflow-hidden sm:order-first md:order-last lg:order-last">
        <img
          src={DisplayPicture}
          alt="Display Picture"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
