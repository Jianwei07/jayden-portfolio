import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AboutSection = ({
  title,
  description,
  stackIcons,
  imageSrc,
  altText,
}) => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-amber-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-100 rounded-2xl blur-xl opacity-20"></div>
              <img
                src={imageSrc}
                alt={altText}
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3">
              {stackIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                </motion.div>
              ))}
            </div>

            {/* Description Points */}
            <div className="space-y-4">
              {description.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-amber-500 text-sm sm:text-base">•</span>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  stackIcons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default AboutSection;
