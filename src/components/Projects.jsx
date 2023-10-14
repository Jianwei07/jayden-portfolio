import React from "react";
import ProjectItems from "./Project-items";
import ProjectData from "../data/Projects";
import ProjectImage from "../assets/projects-image.svg";
import ReactIcon from "../assets/react.svg";
import MaterialUIIcon from "../assets/mui.svg";
import NodeJSIcon from "../assets/nodejs.svg";
import JavaScriptIcon from "../assets/javascript.svg";
import FireBaseIcon from "../assets/firebase.svg";
import FlutterIcon from "../assets/flutter.svg";
import DartIcon from "../assets/dart.svg";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import ViteIcon from "../assets/vitejs.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import InnovPay from "../assets/Innovpay.png";
import PowershellIcon from "../assets/powershell.svg";
import JavaIcon from "../assets/java.svg";
import GithubIcon from "../assets/github.svg";
import OracleIcon from "../assets/oracle.svg";
import TellerIcon from "../assets/javaTeller.png";
import AndriodIcon from "../assets/android.svg";

const stackIcons = {
  ReactJS: ReactIcon,
  "Material UI": MaterialUIIcon,
  NodeJS: NodeJSIcon,
  Java: JavaIcon,
  JavaScript: JavaScriptIcon,
  FireBase: FireBaseIcon,
  Flutter: FlutterIcon,
  Dart: DartIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  Github: GithubIcon,
  Oracle: OracleIcon,
  Bootstrap: BootstrapIcon,
  Vite: ViteIcon,
  TailwindCSS: TailwindIcon,
  InnovPay: InnovPay,
  Powershell: PowershellIcon,
  Teller: TellerIcon,
  Andriod: AndriodIcon,
};

function Projects() {
  return (
    <div className="bg-amber-50 flex flex-col items-center justify-center md:p-16 lg:p-16">
      <div className="w-full text-center py-6">
        <div className="flex justify-center items-center">
          <h2
            style={{
              color: "#147EFB",
              fontSize: "2rem",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            My Portfolio
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <img
            src={ProjectImage}
            alt="Projects visual"
            className="w-full lg:w-2/5 h-auto lg:h-200 order-1 lg:order-1"
          />
          <div className="lg:ml-10 order-2 lg:order-2">
            <div className="lg:w-4/5">
              <h2 className="text-[36px] text-center md:text-left lg:text-left font-bold mb-2">
                Exploring Tech Horizons: My Development Endeavors
              </h2>
              <p className="text-gray-700 py-2 text-[17px] text-left font-public-sans">
                In my limited but promising journey, I've contributed to
                open-source projects. As a believer in growth through
                collaboration, each project is an invitation to learn and share.
                Be part of the progress by exploring the code, suggesting
                enhancements, and providing feedback. Let's nourish learning
                together and seek mentorship to expand our horizons!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectData.map((item) => (
          <ProjectItems
            title={item.title}
            imgUrl={item.imgUrl}
            stack={item.stack.map((stackName) => (
              <img
                key={stackName}
                src={stackIcons[stackName]}
                alt={stackName}
                className="w-7 h-7"
              />
            ))}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
