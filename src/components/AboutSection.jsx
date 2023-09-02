import React from "react";

function AboutSection({ title, description, stackIcons, imageSrc, altText }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-4 sm:order-first md:order-first lg:order-last">
      <div className="lg:w-1/3 ">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full lg:w-2/5 h-auto lg:h-500 "
        />
      </div>
      <div className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-4">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 md:text-3xl lg:text-xl order-2 lg:order-2">
          {title}
        </h2>
        <div className="flex gap-2 mb-4">
          {stackIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-6 h-6 lg:w-8 lg:h-8"
            />
          ))}
        </div>
        <ul className="list-disc list-inside text-gray-500 text-sm md:text-base lg:text-base max-w-lg mb-4 font-public-sans">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
