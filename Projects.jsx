import { projects, projectsNote } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Project Highlights</h2>
        <p className="section-note">{projectsNote}</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <ul className="tag-list">
                {p.tags.map((t) => (
                  <li key={t} className="tag tag-accent">
                    {t}
                  </li>
                ))}
              </ul>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
