import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {/* Example project card */}
        <div className="project-card">
          <h2>Project Title</h2>
          <p>Project description goes here. This is a brief overview of what the project is about.</p>
          <div className="project-links">
            <a href="#" className="project-link">
              View Project
            </a>
            <a href="#" className="project-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
