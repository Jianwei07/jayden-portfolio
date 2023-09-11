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
    <footer
      style={{
        backgroundColor: "#2D2E32",
        color: "white",
        textAlign: "center",
        padding: "20px 80px",
        fontSize: "0.9rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span style={{ marginRight: "10px" }}>
          Copyright &copy; {currentYear}. All Rights Reserved.
        </span>
        <span className="flex flex-row items-center">
          images by{" "}
          <img
            src={freepik}
            alt="Freepik"
            style={{
              width: "50px",
              height: "50px",
              verticalAlign: "middle",
              marginLeft: "5px",
            }}
          />
        </span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/liawjianwei/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem", color: "white" }}
        >
          <LinkedInIcon style={{ fontSize: "2rem" }} />
        </a>
        <a
          href="https://github.com/Jianwei07"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem", color: "white" }}
        >
          <GitHubIcon style={{ fontSize: "2rem" }} />
        </a>
        <IconButton
          color="inherit"
          onClick={scrollToTop}
          style={{ color: "white", boxShadow: "0px 4px 6px rgba(0,0,0,0.3)" }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
