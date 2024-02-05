import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import freepik from "../assets/freepik.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-[#2D2E32] text-white text-center p-5 md:p-8 text-sm flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <span className="mr-2">
            Copyright &copy; {currentYear}. All Rights Reserved.
          </span>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <span className="flex flex-row items-center">
            images by{" "}
            <img
              src={freepik}
              alt="Freepik"
              className="ml-2 w-12 h-12 align-middle"
            />
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/liawjianwei/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <LinkedInIcon className="text-4xl" />
        </a>
        <a
          href="https://github.com/Jianwei07"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white"
        >
          <GitHubIcon className="text-4xl" />
        </a>
        <IconButton
          color="inherit"
          onClick={scrollToTop}
          className="text-white shadow-lg"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
