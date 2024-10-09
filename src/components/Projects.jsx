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
import PowershellIcon from "../assets/powershell.svg";
import JavaIcon from "../assets/java.svg";
import GithubIcon from "../assets/github.svg";
import OracleIcon from "../assets/oracle.svg";
import AndriodIcon from "../assets/android.svg";
import SpringbootIcon from "../assets/springboot.svg";
import MongoIcon from "../assets/mongodb.svg";
import ExpressJS from "../assets/expressjs.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import Flask from "../assets/flask.svg";
import NextJS from "../assets/next-js.svg";
import Vercel from "../assets/vercel.svg";
import AWS from "../assets/aws.svg";
import StyledComponentIcon from "../assets/styled-components.svg";
import ProjectItems from "./Project-items";

const stackIcons = {
  AWS: AWS,
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
  Powershell: PowershellIcon,
  AndriodStudio: AndriodIcon,
  Springboot: SpringbootIcon,
  Mongo: MongoIcon,
  Express: ExpressJS,
  NextJS: NextJS,
  Flask: Flask,
  Vercel: Vercel,
  TypeScript: TypeScriptIcon,
  StyledComponent: StyledComponentIcon,
};

function Projects() {
  return (
    <div className="bg-amber-50 flex flex-col items-center justify-center md:p-16 lg:p-16">
      <div className="w-full text-center py-4">
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
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <img
            src={ProjectImage}
            alt="Projects visual"
            className="hidden lg:block w-full lg:w-2/5 h-auto lg:h-200 order-1 lg:order-1"
          />
          <div className="p-2 order-2 lg:order-2">
            <div className="lg:w">
              <h2 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold font-public-sans mb-4">
                Exploring Tech Horizons: My Development Endeavors
              </h2>
              <p className="text-gray-700 text-left text-xs md:text-sm lg:text-base mb-6 font-public-sans">
                In my limited but promising journey, I`ve contributed to
                open-source projects. As a believer in growth through
                collaboration, each project is an invitation to learn and share.
                Be part of the progress by exploring the code, suggesting
                enhancements, and providing feedback. Let`s nourish learning
                together and seek mentorship to expand our horizons!
                <br />
                <br />
                <p>
                  Following are the projects that I have worked on, I have
                  included links to projects that are up and running for
                  awaiting deployment projects, videos and github repo links are
                  provided. Click to find out more, please feel free to reach me
                  if you need any information.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectData.map((item, index) => (
          <ProjectItems
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            stack={item.stack.map((stackName, stackIndex) => (
              <div key={stackIndex} className="relative group">
                <img
                  src={stackIcons[stackName]}
                  alt={stackName}
                  className="w-7 h-7 group-hover:opacity-50"
                />
                <span className="hidden group-hover:block absolute top-0 right-0 bg-black text-white p-2 rounded mt-8 transform translate-x-2 -translate-y-20">
                  {stackName}
                </span>
              </div>
            ))}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
