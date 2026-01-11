import "./Project.css";
import p1 from "../../assets/flutter.png";
import p2 from "../../assets/react.png";

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-description">
        Real-world applications built with production-grade architecture and
        user-centric design
      </p>
      <div className="mini-con2"></div>

      <div className="projects-grid">

        {/* ================= MySafe ================= */}
        <div className="project-card project-card1">
          <div className="img-card">
            <img src={p1} alt="MySafe App" />
          </div>

          <div className="project-card-content">
            <h3 className="project-title">
              <i className="fa-solid fa-shield"></i> MySafe
            </h3>

            <p>
              A real-time personal safety application focused on emergency
              alerts, location sharing, and community communication.
            </p>

            <h4>Key Features</h4>
            <p><i className="fa-solid fa-check"></i> Real-time chat with media support</p>
            <p><i className="fa-solid fa-check"></i> Emergency alerts & push notifications</p>
            <p><i className="fa-solid fa-check"></i> Location tracking & interactive maps</p>
            <p><i className="fa-solid fa-check"></i> Audio messages with waveform playback</p>
            <p><i className="fa-solid fa-check"></i> Persistent user-specific state</p>

            <h4>Tech Stack</h4>
            <p>
              <i className="fa-brands fa-flutter"></i> Flutter |
              <i className="fa-solid fa-fire"></i> Firebase |
              <i className="fa-solid fa-database"></i> Firestore |
              <i className="fa-solid fa-bell"></i> Push Notifications
            </p>

          </div>
        </div>

        {/* ================= Nyagatare Rice ================= */}
        <div className="project-card project-card2">
          <div className="img-card">
            <img src={p2} alt="Nyagatare Rice" />
          </div>

          <div className="project-card-content">
            <h3 className="project-title">
              <i className="fa-solid fa-seedling"></i> Nyagatare Rice
            </h3>

            <p>
              A responsive corporate website for a rice processing company in
              Rwanda with a modern, clean user experience.
            </p>

            <h4>Key Features</h4>
            <p><i className="fa-solid fa-check"></i> Fully responsive layout</p>
            <p><i className="fa-solid fa-check"></i> Off-canvas mobile navigation</p>
            <p><i className="fa-solid fa-check"></i> Smooth scrolling UX</p>

            <h4>Tech Stack</h4>
            <p>
              <i className="fa-brands fa-react"></i> React |
              <i className="fa-brands fa-html5"></i> HTML |
              <i className="fa-brands fa-css3-alt"></i> CSS
            </p>
          </div>
        </div>

        {/* ================= PizzaWay ================= */}
        <div className="project-card project-card3">
          <div className="img-card">
            <img src={p1} alt="PizzaWay" />
          </div>

          <div className="project-card-content">
            <h3 className="project-title">
              <i className="fa-solid fa-pizza-slice"></i> PizzaWay
            </h3>

            <p>
              A modern food ordering application with smooth cart management
              and fast checkout.
            </p>

            <h4>Key Features</h4>
            <p><i className="fa-solid fa-check"></i> Pizza customization</p>
            <p><i className="fa-solid fa-check"></i> Real-time cart updates</p>
            <p><i className="fa-solid fa-check"></i> Secure checkout</p>

            <h4>Tech Stack</h4>
            <p>
              <i className="fa-brands fa-flutter"></i> Flutter |
              <i className="fa-solid fa-fire"></i> Firebase
            </p>
          </div>
        </div>

        {/* ================= Neza Pro ================= */}
        <div className="project-card project-card4">
          <div className="img-card">
            <img src={p2} alt="Neza Pro" />
          </div>

          <div className="project-card-content">
            <h3 className="project-title">
              <i className="fa-solid fa-cookie-bite"></i> Neza Pro
            </h3>

            <p>
              A premium pastries landing page focused on branding and
              conversions.
            </p>

            <h4>Highlights</h4>
            <p><i className="fa-solid fa-check"></i> Elegant UI</p>
            <p><i className="fa-solid fa-check"></i> Smooth animations</p>
            <p><i className="fa-solid fa-check"></i> Performance optimized</p>

            <h4>Tech Stack</h4>
            <p>
              <i className="fa-brands fa-react"></i> React |
              <i className="fa-brands fa-css3-alt"></i> CSS
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
