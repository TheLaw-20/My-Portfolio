// ExperienceSection.jsx
import "./Experience.css";
import p1 from "../../assets/pro5.jpeg";

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <h2>Experience & Highlights</h2>
        <p>Problems solved, technologies mastered, and real‑world applications delivered</p>
        <span className="header-line"></span>
      </div>

      <div className="experience-layout">
        <div className="experience-image">
          <img src={p1} alt="Working on laptop" />
          <div className="experience-badge">
            <h3>3+</h3>
            <span>Years Building</span>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="timeline-card blue">
            <span className="dot"></span>
            <h3><i className="fa-solid fa-mobile"></i> Mobile App Development</h3>
            <p>
              Built production‑ready Flutter applications with complex features including
              real‑time chat, push notifications, location tracking, and media handling.
            </p>
            <div className="tags">
              <span>Flutter</span>
              <span>Dart</span>
              <span>BLoC</span>
            </div>
          </div>

          <div className="timeline-card green">
            <span className="dot"></span>
            <h3><i className="fa-solid fa-fire"></i> Firebase & Backend Services</h3>
            <p>
              Architected and implemented Firebase solutions including Authentication,
              Firestore databases, Cloud Functions, and Storage for scalable applications.
            </p>
            <div className="tags">
              <span>Firebase</span>
              <span>Firestore</span>
              <span>Cloud Functions</span>
            </div>
          </div>

          <div className="timeline-card purple">
            <span className="dot"></span>
            <h3><i className="fa-solid fa-comments"></i> Real‑Time Communication</h3>
            <p>
              Developed chat systems supporting text, images, audio messages, waveform
              voice notes, and instant push notifications.
            </p>
            <div className="tags">
              <span>WebSocket</span>
              <span>FCM</span>
              <span>Audio Processing</span>
            </div>
          </div>

          <div className="timeline-card pink">
            <span className="dot"></span>
            <h3><i className="fa-solid fa-globe"></i> Web Development</h3>
            <p>
              Created responsive, performant landing pages and web apps with strong focus
              on UX, SEO, and conversion optimization.
            </p>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;