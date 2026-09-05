import { skillGroups, softSkills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <p>{softSkills.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
