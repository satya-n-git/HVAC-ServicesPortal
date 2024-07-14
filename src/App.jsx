import "./index.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Element name="faq">
        <Faq />
      </Element>
      <Footer/>
    </>
  );
}

export default App;
