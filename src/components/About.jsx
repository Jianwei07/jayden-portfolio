import React from "react";
import AboutSection from "./AboutSection";
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

function About() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <AboutSection
        title="Full Stack Development"
        description={[
          "Building responsive websites using ReactJS.",
          "Developing mobile applications using Flutter and Dart.",
          "Creating application backend in Node, Firebase and MongoDB.",
        ]}
        stackIcons={[
          { src: HtmlIcon, alt: "HTML" },
          { src: CssIcon, alt: "CSS" },
        ]}
        imageSrc={ProjectImage}
        altText="Full Stack Development Image"
      />
      <AboutSection
        title="Cloud Infrastructure and DevOps"
        description={[
          "Experience working on AWS and Oracle Cloud Infrastructure.",
          "Experience in hoisting websites on virtual machines with integration with databases.",
          "Certified in AWS Cloud Practitioner, Oracle Cloud Infrastructure Foundations Associate, DevOps and DevSecOps Assosciate.",
        ]}
        stackIcons={[
          { src: HtmlIcon, alt: "HTML" },
          { src: CssIcon, alt: "CSS" },
        ]}
        imageSrc={ProjectImage}
        altText="Cloud Intrastructure Image"
      />
      <AboutSection
        title="UI/UX Design"
        description={[
          "Designing modern user interface for mobile and web applications.",
          "Experience in collaboration tools such as Figma, Mira and Asana.",
          "Team player with experience in working with developers, creating flow of application and wireframes.",
        ]}
        stackIcons={[
          { src: HtmlIcon, alt: "HTML" },
          { src: CssIcon, alt: "CSS" },
        ]}
        imageSrc={ProjectImage}
        altText="UI/UX Image"
      />
    </div>
  );
}
export default About;
