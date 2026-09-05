import { experience, education } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.company}>
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <p className="context">{job.context}</p>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="education">
          <h3>Education</h3>
          <p className="degree">{education.degree}</p>
          <p className="school">
            {education.school} — {education.year}
          </p>
        </div>
      </div>
    </section>
  );
}
