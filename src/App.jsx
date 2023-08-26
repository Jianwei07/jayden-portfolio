import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header style={{ paddingTop: "30px" }} />
        <Hero active="home" />
        <About active="about" />
        <Projects active="projects" />
        <Contact active="contact" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
