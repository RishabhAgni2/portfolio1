import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio built with HTML, CSS, and JavaScript." },
    { title: "Weather App", desc: "A React app using API integration for live weather data." },
    { title: "Todo List", desc: "A simple task management app using local storage." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
