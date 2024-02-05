import PropTypes from "prop-types";

function AboutSection({ title, description, stackIcons, imageSrc, altText }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-4">
      <div className="lg:w-2/5 mx-auto">
        <img src={imageSrc} alt={altText} className="w-full h-auto lg:h-200" />
      </div>
      <div className="lg:w-3/5 mt-4 lg:mt-0 lg:ml-4 mx-auto">
        <div className="w-full p-4">
          <h2 className="text-center sm:text-left md:text-left lg:text-left text-3xl md:text-4xl lg:text-5xl xl:text-5xl  font-bold mb-2">
            {title}
          </h2>
          <div className="flex items-center flex-wrap gap-2 md:gap-4 lg:gap-6 mt-2 mb-2">
            {stackIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className={`w-7 h-7 sm:center sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 text-blue transition duration-300 ease-in-out transform hover:scale-110`}
              />
            ))}
          </div>
        </div>
        <div className="lg:mt-0 lg:ml-4 mx-auto text-left">
          <div className="w-full mx-auto">
            <ul className="text-gray-700 text-sm md:text-sm lg:text-base mb-6 font-public-sans">
              {description.map((point, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[auto,1fr] gap-x-4 items-start"
                >
                  <span className="text-gray-700 font-bold">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  stackIcons: PropTypes.array.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default AboutSection;
