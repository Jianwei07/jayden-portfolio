import React from "react";

function Hero() {
  return (
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <h1 className="text-black text-5xl font-bold">
          Front-End React and Flutter Mobile App Developer
        </h1>
        <p className="text-grey py-4 max-w-lg ">
          👋 Hey there! I'm Jayden Liaw, a Singapore-based software enthusiast
          on an exhilarating tech journey. Curiosity fuels me, and I thrive on
          teamwork. Currently exploring ReactJS and Flutter Mobile App to craft
          tools that redefine efficiency.
        </p>
        <div className="flex gap-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="50"
            viewBox="0 0 101 98"
            fill="none"
          >
            <path
              d="M50.2763 0.422363C22.6655 0.422363 0.276123 22.8078 0.276123 50.4226C0.276123 72.5143 14.6027 91.2564 34.4694 97.8679C36.9682 98.3307 37.8858 96.7833 37.8858 95.4625C37.8858 94.2704 37.8391 90.3313 37.8179 86.1534C23.9074 89.178 20.9723 80.2541 20.9723 80.2541C18.6978 74.4746 15.4207 72.9382 15.4207 72.9382C10.8844 69.8348 15.7626 69.8983 15.7626 69.8983C20.7836 70.2513 23.4275 75.0511 23.4275 75.0511C27.8869 82.6951 35.1243 80.485 37.9775 79.2078C38.4261 75.9758 39.7222 73.7704 41.1519 72.5218C30.0464 71.2571 18.3716 66.9698 18.3716 47.8113C18.3716 42.3526 20.3248 37.892 23.5235 34.3906C23.0043 33.131 21.293 28.0457 24.0078 21.1585C24.0078 21.1585 28.2065 19.8146 37.7615 26.2838C41.7496 25.1756 46.0271 24.6203 50.2763 24.6015C54.5256 24.6203 58.8062 25.1756 62.8022 26.2838C72.3457 19.8146 76.5385 21.1585 76.5385 21.1585C79.26 28.0457 77.5479 33.131 77.0287 34.3906C80.2345 37.892 82.1744 42.3523 82.1744 47.8113C82.1744 67.0153 70.4776 71.2442 59.3438 72.4818C61.1371 74.0335 62.7351 77.0765 62.7351 81.7411C62.7351 88.431 62.6771 93.8155 62.6771 95.4625C62.6771 96.7931 63.577 98.3522 66.1118 97.8613C85.9676 91.2423 100.276 72.5069 100.276 50.4226C100.276 22.8078 77.8899 0.422363 50.2763 0.422363Z"
              fill="#161614"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Hero;
