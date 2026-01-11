import React from "react";
import "./App.css";
import { useLenis } from "./hooks/useLenis";
import FixedNavbar from "./components/common/FixedNavbar";
import ScrollToTop from "./components/common/ScrollToTop";
import Hero from "./components/common/Hero";
import Afterhero from "./components/common/Afterhero";
import Mission from "./components/common/Mission";
//import Life from "./components/common/Life";
import Life from "./components/common/Life";
import Courses from "./components/common/Courses";
import Process from "./components/common/Process";
import Faq from "./components/common/Faq";
import Footer from "./components/common/Footer";
import Awards from "./components/common/Awards";
import Curve from "./components/common/Curve";
import Team from "./components/common/Team";
import Testimonial from "./components/common/Testimonial";
import EnquiryForm from "./components/common/EnquiryForm";

function App() {
  // Initialize smooth scroll with Lenis
  useLenis();

  return (
    <div className="App">
      <FixedNavbar />
      <ScrollToTop />
      <EnquiryForm />
      <div id="hero">
        <Hero />
      </div>
      <div id="afterhero">
        <Afterhero />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <Curve />
      <div id="awards">
        <Awards />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="life">
        <Life />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
