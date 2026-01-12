import "./head.css";
import heroImg from "../../assets/Programming-background.jpg";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Head() {
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <i className="fa-solid fa-code"></i>
          <span>TheLaw-20</span>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills & Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience & Highlights</a></li>
        </ul>

        <button className="nav-btn-primary desktop-btn">
          <a href="#contact">Work With Me</a>
        </button>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills & Stack</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Work With Me</a>
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        {/* PARTICLES BACKGROUND */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: { value: 40 },
              color: { value: "#3b82f6" },
              shape: { type: "circle" },
              opacity: { value: 0.9 },
              size: { value: 10 },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                outModes: "out"
              },
              links: {
                enable: true,
                color: "#3b82f6",
                distance: 120,
                opacity: 0.15
              }
            },
            detectRetina: true
          }}
          className="particles-bg"
        />

        <div className="hero-wrapper">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-pill"></div>

            <h1>
              Building reliable, real-time
              <br /> digital experiences
            </h1>

            <p className="hero-stack">
              Flutter • Firebase • Real-Time Systems • Clean Architecture
            </p>

            <p className="hero-desc">
              I design and build scalable mobile and web applications with a
              focus on performance, reliability, and user experience.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">
                View Projects <i className="fa-solid fa-arrow-right"></i>
              </button>

              <button className="btn-outline">
                <a href="/cv.pdf" download><i className="fa-solid fa-download"></i> Download CV</a>
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>10+</h3>
                <span>Projects Built</span>
              </div>
              <div>
                <h3>5+</h3>
                <span>Technologies</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Production Ready</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img src={heroImg} alt="Developer" />

            <div className="floating-card">
              <i className="fa-solid fa-check"></i>
              <div>
                <strong>Clean Code</strong>
                <span>Production Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
