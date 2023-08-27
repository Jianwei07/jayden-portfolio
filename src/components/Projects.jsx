import React from "react";
import ProjectItems from "./Project-items";
import ProjectData from "../data/Projects";
import ProjectImage from "../assets/projects-image.svg";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center md:p-16 lg:p-16">
      <div className="w-full text-center py-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <img
            src={ProjectImage}
            alt="Projects visual"
            className="w-full lg:w-2/5 h-auto lg:h-200 order-1 lg:order-1"
          />
          <div className="lg:ml-10 order-2 lg:order-2">
            <div className="lg:w-4/5">
              <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-2 lg:text-left">
                Exploring Tech Horizons: My Development Endeavors
              </h2>
              <p className="text-gray-500 py-1 text-sm md:text-base lg:text-base  font-small font-public-sans">
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
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
