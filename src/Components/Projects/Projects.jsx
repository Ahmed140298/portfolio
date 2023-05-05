import React from "react";
import "./Projects.css";
import ProjectData from "../../Data/ProjectsArray";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container projects">
        {ProjectData.map((item) => {
          return (
            <article key={item.id} className="project-item">
              <div className="project-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="item-cta">
                <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a href={item.demo} className="btn primary-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

