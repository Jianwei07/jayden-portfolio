import React from "react";
import AboutSection from "./AboutSection";
import FullStackImage from "../assets/fullstack.svg";
import CloudInfra from "../assets/cloudinfra.svg";
import uiux from "../assets/uiux.svg";
import DataScience from "../assets/datascience.svg";
import ReactIcon from "../assets/react.svg";
import MaterialUIIcon from "../assets/mui.svg";
import NodeJSIcon from "../assets/nodejs.svg";
import JavaScriptIcon from "../assets/javascript.svg";
import FlutterIcon from "../assets/flutter.svg";
import DartIcon from "../assets/dart.svg";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import ViteIcon from "../assets/vitejs.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import Python from "../assets/python.svg";
import Jupyter from "../assets/jupyter.svg";
import Pandas from "../assets/pandas.svg";
import Numpy from "../assets/numpy.svg";
import Chatbot from "../assets/chatterbot.svg";
import Seaborn from "../assets/seaborn.svg";
import AWSIcon from "../assets/aws.svg";
import Oracle from "../assets/oracle.svg";
import GoogleCloud from "../assets/googlecloud.svg";
import FireBaseIcon from "../assets/firebase.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import Springboot from "../assets/springboot.svg";

import Miro from "../assets/miro.svg";
import Figma from "../assets/figma.svg";
import Asana from "../assets/asana.svg";

function About() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <AboutSection
        title="Full Stack Development"
        description={[
          "Experienced in building responsive websites using ReactJS and UI components like MUI and TailwindCSS.",
          "Learning and developing mobile applications using Flutter and Dart using inhouse UI components.",
          "Experienced in creating robust application backends using technologies like Node.js, Firebase, and MongoDB..",
        ]}
        stackIcons={[
          { src: HtmlIcon, alt: "HTML" },
          { src: CssIcon, alt: "CSS" },
          { src: BootstrapIcon, alt: "Bootstrap" },
          { src: JavaScriptIcon, alt: "JavaScript" },
          { src: ReactIcon, alt: "React" },
          { src: MaterialUIIcon, alt: "Material UI" },
          { src: TailwindIcon, alt: "Tailwind CSS" },
          { src: NodeJSIcon, alt: "NodeJS" },
          { src: ViteIcon, alt: "Vite" },
          { src: Springboot, alt: "SpringBoot" },
          { src: FlutterIcon, alt: "Flutter" },
          { src: DartIcon, alt: "Dart" },
        ]}
        imageSrc={FullStackImage}
        altText="Full Stack Development Image"
      />
      <AboutSection
        title="Data Science, AI and Machine Learning"
        description={[
          "Proficient in using Jupyter Notebook for data cleaning and skilled in uncovering trends and generating insights from CSV data using Matplotlib, Seaborn, Plotly, and NumPy.",
          "Experienced in applying machine learning algorithms, including Linear Regression, Polynomial Regression, Decision Trees, and Random Forest. I have utilized these models to predict civil engineering risk.",
          "Geotechnical Engineering and Numerical Modeling: Applied Python to generate essential soil parameters within Plaxis 2D to analysis soil deformation.",
          "Self-explored the field of Natural Language Processing (NLP) and tinkered around chatbots using technologies like ChatterBot, TkinterBot, and spaCy.",
        ]}
        stackIcons={[
          { src: Python, alt: "Python" },
          { src: Jupyter, alt: "Jupyter" },
          { src: Pandas, alt: "Pandas" },
          { src: Seaborn, alt: "Seaborn" },
          { src: Numpy, alt: "Numpy" },
          { src: Chatbot, alt: "Chatbot" },
        ]}
        imageSrc={DataScience}
        altText="Cloud Intrastructure Image"
      />
      <AboutSection
        title="Cloud Infrastructure and DevOps"
        description={[
          "Hands-on experience with cloud platforms, including AWS and Oracle Cloud Infrastructure.",
          "Experience in deploying websites on virtual machines and seamlessly integrating them with databases.",
          "Hold certifications in AWS Cloud Practitioner, Oracle Cloud Infrastructure Foundations Associate, DevOps, and DevSecOps Associate.",
        ]}
        stackIcons={[
          { src: AWSIcon, alt: "AWS" },
          { src: Oracle, alt: "Oracle" },
          { src: GoogleCloud, alt: "Google Cloud" },
          { src: FireBaseIcon, alt: "Firebase" },
          { src: MongoDBIcon, alt: "MongoDB" },
        ]}
        imageSrc={CloudInfra}
        altText="Cloud Intrastructure Image"
      />
      <AboutSection
        title="UI/UX Design"
        description={[
          "Experienced in designing intuitive user interfaces for both mobile and web applications.",
          "Proficient in using collaborative design tools such as Figma, Mira, and Asana.",
          "Collaborative team player with a strong track record of working closely with developers, creating application flows, and designing wireframes.",
        ]}
        stackIcons={[
          { src: Figma, alt: "Figma" },
          { src: Miro, alt: "Miro" },
          { src: Asana, alt: "Asana" },
        ]}
        imageSrc={uiux}
        altText="UI/UX Image"
      />
    </div>
  );
}
export default About;
