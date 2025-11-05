import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Rishabh</span></h1>
        <p>I'm a passionate Web Developer creating modern and responsive designs.</p>
        <a href="#projects" className="btn">View Projects</a>
        <a href="/resume.pdf" className="btn resume-btn" download>Download Resume</a>
      </div>
    </section>
  );
}

export default Hero;
