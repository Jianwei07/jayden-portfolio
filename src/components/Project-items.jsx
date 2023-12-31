import React from "react";

function ProjectItems({ title, description, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-gray-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      />
      <div className="w-full px-4 py-2">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-md md:text-l mb-2 md:mb-2" font-semibold>
          {description}
        </p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-gray-800 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
export default ProjectItems;
