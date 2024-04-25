/* eslint-disable react/no-unescaped-entities */
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
    <div className="bg-amber-50 flex flex-col md:flex-row justify-center items-center md:h-screen md:py-8 lg:py-16 xl:py-24">
      <div className="text-left max-w-4xl mx-auto px-4 md:px-5">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold font-public-sans mb-4">
          Aspiring Software Engineer & Tech Enthusiast
        </h1>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-6 font-public-sans">
          Hello there 👋! I'm Jayden, Jian Wei, based in Singapore and
          navigating the tech space as a Full-Stack Software Engineer with a
          keen eye on roles spanning Product Management, System Analysis, and
          Software Engineering. My journey is marked by a deep dive into the
          realms of Software Architecture, DevOps practices, and networking
          essentials to bolster software excellence.
          <br />
          Seeking to understand not just the how, but the why behind technology.
          Podcasts are my window to the broader implications of tech - reminding
          me that beyond the code, it`s about the impactful ideas and the social
          aspects of engineering. Let`s explore and make sense of this
          ever-evolving tech landscape together!
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
          <h3 className="text-lg font-semibold text-gray-800 md:mr-2 md:mb-2">
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
      <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto flex-shrink-0 rounded-full border-4 border-amber shadow-lg overflow-hidden sm:order-first md:order-last lg:order-last">
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
