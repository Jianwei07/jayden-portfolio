import AboutSection from "./AboutSection";
import FullStackImage from "../assets/fullstack.svg";
import CloudInfra from "../assets/cloudinfra.svg";
import uiux from "../assets/uiux.svg";
import GenAI from "../assets/genai.png";

import ReactIcon from "../assets/react.svg";
import MaterialUIIcon from "../assets/mui.svg";
import NodeJSIcon from "../assets/nodejs.svg";
import PythonIcon from "../assets/python.svg";
import FlaskIcon from "../assets/flask.svg";
import FastAPIIcon from "../assets/fastapi.svg";
import LangchainIcon from "../assets/langchain-text.svg";
import HuggingFaceIcon from "../assets/huggingface.svg";
import DockerIcon from "../assets/docker.svg";
import KubernetesIcon from "../assets/k88.svg";
import AWSIcon from "../assets/aws.svg";
import OracleIcon from "../assets/oracle.svg";
import GoogleCloudIcon from "../assets/googlecloud.svg";
import FireBaseIcon from "../assets/firebase.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import SpringbootIcon from "../assets/springboot.svg";
import FigmaIcon from "../assets/figma.svg";
import MiroIcon from "../assets/miro.svg";
import AsanaIcon from "../assets/asana.svg";

function About() {
  return (
    <div className="bg-amber-50 px-4 md:px-8 lg:px-16">
      <div className="w-full text-center py-4 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-blue-600">My Tech Journey</h2>
      </div>

      <AboutSection
        title="Full-Stack Software Development"
        description={[
          "Skilled in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) for developing interactive and scalable web applications.",
          "Developed a personal AI chatbot using the ChatGPT API and built a dynamic To-Do-List application with MongoDB integration for ticket management.",
          "Experienced in designing RESTful APIs with Node.js, Spring Boot, and Flask, integrating databases such as Oracle DB and MongoDB.",
          "Adept at creating responsive and visually appealing web applications using ReactJS, TailwindCSS, and MUI.",
        ]}
        stackIcons={[
          { src: ReactIcon, alt: "React" },
          { src: NodeJSIcon, alt: "NodeJS" },
          { src: MaterialUIIcon, alt: "Material UI" },
          { src: MongoDBIcon, alt: "MongoDB" },
          { src: SpringbootIcon, alt: "Spring Boot" },
        ]}
        imageSrc={FullStackImage}
        altText="Full Stack Development"
      />

      <AboutSection
        title="Gen AI & Applied AI"
        description={[
          "Proficient in leveraging Hugging Face and LangChain for building AI-driven applications.",
          "Experienced in developing AI-powered APIs using FastAPI and Flask, optimizing performance for AI-driven workflows.",
          "Implemented AI models for NLP tasks, chatbot development, and document processing using modern LLM frameworks.",
        ]}
        stackIcons={[
          { src: PythonIcon, alt: "Python" },
          { src: FastAPIIcon, alt: "FastAPI" },
          { src: FlaskIcon, alt: "Flask" },
          { src: LangchainIcon, alt: "Langchain" },
          { src: HuggingFaceIcon, alt: "Hugging Face" },
        ]}
        imageSrc={GenAI}
        altText="Generative AI and Applied AI"
      />

      <AboutSection
        title="DevOps & Cloud Infrastructure"
        description={[
          "AWS and Oracle Cloud certified, with hands-on experience in cloud architecture and deployment strategies.",
          "Proficient in Docker and Kubernetes, ensuring scalable and efficient deployment pipelines.",
          "Familiar with implementing CI/CD pipelines for automated deployments and version control.",
        ]}
        stackIcons={[
          { src: AWSIcon, alt: "AWS" },
          { src: GoogleCloudIcon, alt: "Google Cloud" },
          { src: DockerIcon, alt: "Docker" },
          { src: KubernetesIcon, alt: "Kubernetes" },
          { src: OracleIcon, alt: "Oracle" },
          { src: FireBaseIcon, alt: "Firebase" },
        ]}
        imageSrc={CloudInfra}
        altText="Cloud Infrastructure"
      />

      <AboutSection
        title="UI/UX & Product Design"
        description={[
          "Experienced in designing intuitive user experiences using Figma and Miro, ensuring seamless usability and aesthetic appeal.",
          "Collaborated with developers to bridge the gap between design and implementation, enhancing overall user satisfaction.",
        ]}
        stackIcons={[
          { src: FigmaIcon, alt: "Figma" },
          { src: MiroIcon, alt: "Miro" },
          { src: AsanaIcon, alt: "Asana" },
        ]}
        imageSrc={uiux}
        altText="UI/UX Design"
      />
    </div>
  );
}

export default About;
