import React from "react";

function AboutSection({ title, description, stackIcons, imageSrc, altText }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-4">
      <div className="lg:w-2/5 mx-auto">
        <img src={imageSrc} alt={altText} className="w-full h-auto lg:h-200" />
      </div>
      <div className="lg:w-3/5 mt-4 lg:mt-0 lg:ml-4 mx-auto">
        <div className="w-[80%] mx-auto">
          <h2 className="text-[36px] text-center md:text-left lg:text-left font-bold mb-2">
            {title}
          </h2>
          <div className="flex items-center flex-wrap gap-6 mt-2 mb-2">
            {stackIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 lg:w-10 lg:h-10 text-blue"
              />
            ))}
          </div>
        </div>
        <div className="lg:mt-0 lg:ml-4 mx-auto text-left">
          <div className="px-6 w-[90%] mx-auto">
            <ul className="list-disc list-inside text-gray-700 py-2 text-[18px]">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
