import PropTypes from "prop-types";

function AboutSection({ title, description, stackIcons, imageSrc, altText }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-4">
      <div className="lg:w-2/5 mx-auto">
        <img src={imageSrc} alt={altText} className="w-full h-auto lg:h-200" />
      </div>
      <div className="lg:w-3/5 mt-4 lg:mt-0 lg:ml-4 mx-auto">
        <div className="w-full mx-10 py-2">
          <h2 className="text-[40px] text-center md:text-left lg:text-left font-bold mb-2">
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
          <div className="w-full mx-auto">
            <ul className="text-gray-700 text-[20px] text-left font-public-sans">
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
