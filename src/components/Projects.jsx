import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Selected Spaces</p>

          <h2>Sample project concepts with a more editorial layout.</h2>

          <p>
            These are fictional project samples that help the website feel like
            a premium service business portfolio instead of a generic company
            page.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index === 0 ? "featured" : ""}`}
              key={project.title}
            >
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;