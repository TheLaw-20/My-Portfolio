import "./Foot.css";
import p1 from "../../assets/pro5.jpeg";

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={p1} alt="The-Law Logo" />
          <p>
            Software engineer building reliable, real-time digital experiences
            with Flutter, Firebase, and modern web technologies.
          </p>

          <div className="icons-con">
            <a href="https://github.com/TheLaw-20"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/231777575662?text=Hello%20Lawrence,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-whatsapp"></i>
</a>
</div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero"><i className="fa-solid fa-chevron-right"></i> Home</a></li>
            <li><a href="#about"><i className="fa-solid fa-chevron-right"></i> About Me</a></li>
            <li><a href="#skills"><i className="fa-solid fa-chevron-right"></i> Skills & Stack</a></li>
            <li><a href="#projects"><i className="fa-solid fa-chevron-right"></i> Projects</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li><a href="#experience"><i className="fa-solid fa-chevron-right"></i> Experience</a></li>
            <li><a href="#contact"><i className="fa-solid fa-chevron-right"></i> Contact</a></li>
            <li><i className="fa-solid fa-envelope"></i> Email Me</li>
            <li><i className="fa-solid fa-phone"></i> Call Me</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Lawrence P. Maurice. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Foot;
