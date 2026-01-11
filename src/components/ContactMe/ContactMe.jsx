import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// EmailJS config (clean & reusable)
const EMAIL_SERVICE_ID = "service_5z9liah";
const EMAIL_TEMPLATE_ID = "template_ej302tc";
const EMAIL_PUBLIC_KEY = "jKZdNKklDm-SwVSLw";

const ContactMeSection = () => {
  const [status, setStatus] = useState(""); // success | error | loading
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formData,
        EMAIL_PUBLIC_KEY
      );

      setStatus("success");
      resetForm();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* HEADER */}
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p>Open to opportunities, collaborations, and interesting problems</p>
        <div className="header-line"></div>
      </div>

      {/* CONTENT */}
      <div className="contact-wrapper">
        {/* LEFT CARD */}
        <div className="contact-info-card">
          <h3>Get In Touch</h3>
          <p className="desc">
            Whether you have a project in mind, need technical expertise, or want
            to collaborate on something exciting, I'd love to hear from you.
          </p>

          <div className="info-item">
            <span className="icon email">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <div>
              <h4>Email</h4>
              <p>lawrence21maurice@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon phone">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <h4>Phone</h4>
              <p>+250 798 654 937</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon location">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <h4>Location</h4>
              <p>Available for remote work worldwide</p>
            </div>
          </div>

          <hr />

          <h4 className="connect">Connect With Me</h4>
          <div className="socials">
            <a href="https://github.com/TheLaw-20" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://wa.me/250798654937?text=Hello%20Lawrence,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <div className="quick-response">
            <span>
              <i className="fa-solid fa-clock"></i>
            </span>
            <div>
              <h4>Quick Response</h4>
              <p>I typically respond within 24 hours</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>

          <form onSubmit={sendEmail}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>

          {/* STATUS FEEDBACK */}
          {status === "success" && (
            <p className="success-msg">
              Message sent successfully. I’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="error-msg">
              Something went wrong. Please try again or reach me via{" "}
              <a
                href="https://wa.me/250798654937"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              .
            </p>
          )}

          <p className="secure">
            <i className="fa-solid fa-lock"></i> Your information is secure and
            will never be shared
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="contact-cta">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's turn your ideas into production-ready applications</p>
        <div className="cta-buttons">
          <button className="primary">
            <a href="#projects">View My Work</a>
          </button>
          <button className="secondary">
            <a href="/cv.pdf" download>
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
