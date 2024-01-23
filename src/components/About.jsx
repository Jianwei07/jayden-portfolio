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
import Docker from "../assets/docker.svg";
import Kubernetes from "../assets/k88.svg";
import AmazonWebServices from "../assets/amzweb.svg";
import Miro from "../assets/miro.svg";
import Figma from "../assets/figma.svg";
import Asana from "../assets/asana.svg";

function About() {
  return (
    <div className="bg-amber-50 px-4 md:px-8 lg:px-16">
      <div className="w-full text-center py-4 flex justify-center items-center">
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
        title="Full-Stack Software Development"
        description={[
          <a key="1">
            <strong>MERN Stack Proficiency:</strong> Proficient in the MERN
            stack (MongoDB, ExpressJS, ReactJS, NodeJS), I`ve developed
            sophisticated web applications. Recent projects include a personal
            chatbot leveraging ChatGPT API and a dynamic To-Do-List application
            interfacing with MongoDB for ticket management.
          </a>,
          <a key="2">
            <strong>Innovative Project Development:</strong> Successfully
            implemented two significant projects: a fully-functional Bank
            Terminal using Java and Spring Boot, and InnovPay - a ReactJS and
            MUI based banking product offering currency exchange services akin
            to Wise, showcasing both backend proficiency and frontend finesse.
          </a>,
          <a key="3">
            <strong>Responsive Web Design:</strong> Skilled in creating
            responsive and user-friendly websites using ReactJS, integrated with
            UI frameworks like MUI and TailwindCSS, ensuring a seamless user
            experience across various devices.
          </a>,
          <a key="4">
            <strong>Microservices and Containerization:</strong> Currently
            extending my expertise to deploying applications as microservices
            using Docker, enhancing scalability and efficiency in application
            delivery.
          </a>,
          <a key="5">
            <strong>Robust Backend Experience:</strong> Experienced in
            integrating backend applications with technologies like Node.js,
            Oracle DB, and MongoDB, enabling the creation of robust, scalable,
            and secure web applications.
          </a>,
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
        title="DevOps, Architecture, and Cloud Infrastructure"
        description={[
          <a key="6">
            <strong>Certified and Experienced:</strong> Holding certifications
            in DevOps, DevSecOps, AWS Cloud Practitioner, and Oracle Cloud
            Infrastructure Foundations Associate, I bring a well-rounded
            expertise in both theory and practice of DevOps and cloud
            architecture.
          </a>,
          <a key="7">
            <strong>Kubernetes and Containerization Skills:</strong> Completed
            an intensive Kubernetes bootcamp, good knowledge at deploying
            applications using Docker, and currently exploring more advanced
            Kubernetes features for scalable application deployment.
          </a>,
          <a key="8">
            <strong>Technical Proficiency:</strong> Advanced knowledge in
            networking, YAML/JSON/XML, and command-line skills, which enhance my
            configuration management and cloud navigation capabilities.
          </a>,
          <a key="9">
            <strong>Agile and Lean DevOps Approach:</strong> A strong advocant
            of agile methodologies and Lean DevOps practices, focusing on
            identifying purpose, objective and utiltizing feedback loops to
            continuous improvement, and streamlined software delivery.
          </a>,
        ]}
        stackIcons={[
          { src: Docker, alt: "Docker" },
          { src: Kubernetes, alt: "Kubernetes" },
          { src: AWSIcon, alt: "AWS" },
          { src: AmazonWebServices, alt: "AmazonWebServices" },
          { src: MongoDBIcon, alt: "MongoDB" },
          { src: Oracle, alt: "Oracle" },
          { src: GoogleCloud, alt: "Google Cloud" },
          { src: FireBaseIcon, alt: "Firebase" },
        ]}
        imageSrc={CloudInfra}
        altText="Cloud Intrastructure Image"
      />
      <AboutSection
        title="Data Science, AI and Machine Learning"
        description={[
          <a key="10">
            <strong>Engineering Risk and Probability:</strong> Experienced in
            applying machine learning algorithms, including Linear Regression,
            Polynomial Regression, Decision Trees, and Random Forest. I have
            utilized these models to predict civil engineering risk.
          </a>,
          <a key="11">
            Proficient in using Jupyter Notebook for data cleaning and skilled
            in uncovering trends and generating insights from CSV data using
            Matplotlib, Seaborn, Plotly, and NumPy.
          </a>,
          <a key="12">
            <strong>
              Geospartial, Geotechnical Engineering and Numerical Modeling:
            </strong>{" "}
            Applied Python to generate essential soil parameters within Plaxis
            2D to analysis soil deformation.
          </a>,
          <a key="13">
            Self-explored the field of Natural Language Processing (NLP) and
            tinkered around chatbots using technologies like ChatterBot,
            TkinterBot, and spaCy.
          </a>,
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
        altText="Data Science and Machine Learning"
      />
      <AboutSection
        title="Digital Marketing Professional"
        description={[
          <a
            key="14"
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
