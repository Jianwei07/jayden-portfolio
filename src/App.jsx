import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResumeLink = () => {
    window.open(
      "https://drive.google.com/drive/folders/1f20Htb_lJvoSf-iWl_ibBi3unSCKhojq?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="App">
      <Header
        scrollToAbout={() => scrollToSection("about")}
        scrollToProjects={() => scrollToSection("projects")}
        scrollToContact={() => scrollToSection("contact")}
        openResumeLink={openResumeLink}
      />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
