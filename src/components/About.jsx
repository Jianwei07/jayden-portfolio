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
import Salesfunnel from "../assets/salesfunnel.svg";
import GoogleAds from "../assets/googleads.svg";
import GoogleAnalytics from "../assets/google-analytics.svg";
import GoogleMarket from "../assets/googlemarket.svg";

import Miro from "../assets/miro.svg";
import Figma from "../assets/figma.svg";
import Asana from "../assets/asana.svg";

function About() {
  return (
    <div className="bg-amber-50 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center items-center">
        <h2
          style={{
            color: "#147EFB",
            fontSize: "2rem",
            margin: "0",
            fontWeight: "bold",
          }}
        >
          My Tech Journey
        </h2>
      </div>
      <AboutSection
        title="Full Stack Development"
        description={[
          "Experienced in building responsive websites using ReactJS with UI components like MUI and TailwindCSS.",
          "Learning and developing mobile applications using Flutter and Dart using inhouse UI components.",
          "Experienced in creating robust application backends using technologies like Node.js, Firebase, and MongoDB.",
        ]}
        stackIcons={[
          { src: HtmlIcon, alt: "HTML", title: "HTML" },
          { src: CssIcon, alt: "CSS", title: "CSS" },
          { src: BootstrapIcon, alt: "Bootstrap", title: "Bootstrap" },
          { src: JavaScriptIcon, alt: "JavaScript", title: "JavaScript" },
          { src: ReactIcon, alt: "React", title: "React" },
          { src: MaterialUIIcon, alt: "Material UI", title: "Material UI" },
          { src: TailwindIcon, alt: "Tailwind CSS", title: "Tailwind CSS" },
          { src: NodeJSIcon, alt: "NodeJS", title: "NodeJS" },
          { src: ViteIcon, alt: "Vite", title: "Vite" },
          { src: Springboot, alt: "SpringBoot", title: "SpringBoot" },
          { src: FlutterIcon, alt: "Flutter", title: "Flutter" },
          { src: DartIcon, alt: "Dart", title: "Dart" },
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

      <AboutSection
        title="Digital Marketing Professional"
        description={[
          <a
            href="https://drive.google.com/drive/folders/1-2AVBsKy8SG75QEmtcFjBkcvcWxfvjFW?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certified in Google SEO, SEM, and Analytics, with expertise gained
            from a digital marketing strategies course taught by a renowned
            industry expert.{" "}
            <strong>
              <u>Click here</u>
            </strong>{" "}
            to view my certifications.
          </a>,
          "Proficient in generating website traffic and high-quality leads through the strategic application of the Angels and Devils Cocktail ideology, effectively simulating emotions to engage audiences.",
          "Demonstrated understanding of sales funnels, with the ability to optimize each layer for guiding users towards making a purchase.",
          "Skilled in optimizing digital marketing campaigns, employing advanced strategies to enhance online visibility and engagement for effective results and conversions.",
          "Experienced in analyzing data and using insights from Google Analytics to refine marketing approaches, ensuring data-driven decision-making.",
          "Focused on leveraging digital marketing techniques to strengthen brand presence and drive revenue growth, emphasizing a results-oriented approach.",
        ]}
        stackIcons={[
          { src: GoogleMarket, alt: "Google Marketing Tools" },
          { src: GoogleAds, alt: "Google Ads" },
          { src: GoogleAnalytics, alt: "Google Analytics Tool" },
          { src: GoogleCloud, alt: "Google Cloud Platform" },
        ]}
        imageSrc={Salesfunnel}
        altText="Digital Marketing"
      />
    </div>
  );
}
export default About;
