import PropTypes from "prop-types";

function ProjectItems({ title, description, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-gray-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-56 object-cover cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      />
      <div className="w-full px-4 py-2">
        <h3 className="text-lg md:text-xl mb-1 font-semibold">{title}</h3>
        <p className="text-md md:text-sm mb-2 mb- italic">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-gray-800 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

ProjectItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgUrl: PropTypes.array.isRequired,
  stack: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItems;
