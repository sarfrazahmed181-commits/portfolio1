import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Hi, I&apos;m</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-meta">
          <span>📍 {profile.location}</span>
          <span>📧 {profile.email}</span>
          <span>📞 {profile.phone}</span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-secondary" href="#projects">
            View projects
          </a>
        </div>

        <div className="hero-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
