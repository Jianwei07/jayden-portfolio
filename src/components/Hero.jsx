/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import GitLogo from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import ReactIcon from "../assets/react.svg";
import JavascriptIcon from "../assets/javascript.svg";
import JavaIcon from "../assets/java.svg";
import FlutterIcon from "../assets/flutter.svg";
import LinuxIcon from "../assets/linux.svg";
import PythonIcon from "../assets/python.svg";
import DisplayPicture from "../assets/jayden_dp.png";

const Hero = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/liawjianwei/",
      alt: "LinkedIn Profile",
    },
    {
      icon: GitLogo,
      url: "https://github.com/Jianwei07",
      alt: "GitHub Profile",
    },
  ];

  const techStacks = [
    { icon: ReactIcon, name: "React" },
    { icon: JavascriptIcon, name: "JavaScript" },
    { icon: JavaIcon, name: "Java" },
    { icon: FlutterIcon, name: "Flutter" },
    { icon: LinuxIcon, name: "Linux" },
    { icon: PythonIcon, name: "Python" },
  ];

  return (
    <div className="bg-amber-50 min-h-screen px-4 sm:px-6 py-8 lg:py-0">
      <div className="max-w-6xl mx-auto lg:min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-public-sans leading-tight"
          >
            Aspiring Software Engineer & Tech Enthusiast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-sm sm:text-base lg:text-lg font-public-sans leading-relaxed"
          >
            Hello there 👋! I'm Jayden, Jian Wei, based in Singapore and
            navigating the tech space as a Full-Stack Software Engineer with a
            keen eye on roles spanning Product Management, System Analysis, and
            Software Engineering. My journey is marked by a deep dive into the
            realms of Software Architecture, DevOps practices, and networking
            essentials to bolster software excellence.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((link, index) => (
              <img
                key={index}
                src={link.icon}
                alt={link.alt}
                className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => window.open(link.url, "_blank")}
              />
            ))}
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <h3 className="text-base font-medium text-gray-800">Tech Stack:</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex-shrink-0"
        >
          <img
            src={DisplayPicture}
            alt="Display Picture"
            className="w-full h-full rounded-full border-2 border-amber shadow-md object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
