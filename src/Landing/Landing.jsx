import React from "react";
import Faq from "./sections/Faq/Faq";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Features from "./sections/Features/Features";
import Testimonials from "./sections/Testimonials/Testimonials";
import Hero from "./sections/Hero/Hero";

export default function Landing() {
  return (
    <>
      <div className="anchor" id="home"></div>
      <Hero />
      <div className="anchor" id="about"></div>
      <About />
      <div className="anchor" id="experience"></div>
      <Experience />
      <div className="anchor" id="features"></div>
      <Features />
      <div className="anchor" id="testimonials"></div>
      <Testimonials />
      <Faq />
    </>
  );
}
