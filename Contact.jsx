import { useState } from "react";
import { profile, formspreeEndpoint } from "../data.js";

const NOT_CONFIGURED = formspreeEndpoint.includes("YOUR_FORM_ID");

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (NOT_CONFIGURED) return;

    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-inner">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-note">
          Have a role or project in mind? Send a message below, or reach out directly.
        </p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>

            {NOT_CONFIGURED && (
              <p className="form-warning">
                Contact form isn&apos;t connected yet — set your Formspree form ID in{" "}
                <code>src/data.js</code> (see README) to enable it. Meanwhile, use the direct
                email/LinkedIn links.
              </p>
            )}
            {status === "sent" && <p className="form-success">Thanks — your message was sent!</p>}
            {status === "error" && (
              <p className="form-warning">Something went wrong. Please email me directly.</p>
            )}

            <button className="btn btn-primary" type="submit" disabled={NOT_CONFIGURED || status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>

          <div className="contact-direct">
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              ✉ Email me
            </a>
            <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              🔗 LinkedIn
            </a>
            <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
