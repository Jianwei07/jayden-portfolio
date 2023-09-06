import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

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
        padding: "20px 100px", // Recommended height with 20px top and bottom padding
        fontSize: "0.9rem", // Adjust the font size as needed
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span>Copyright &copy; {currentYear}. All Rights Reserved.</span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem", color: "white" }}
        >
          <LinkedInIcon style={{ fontSize: "1.5rem" }} />
        </a>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "1rem", color: "white" }}
        >
          <GitHubIcon style={{ fontSize: "1.5rem" }} />
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
