import "./AboutMe.css";
import p1 from "../../assets/coding.jpeg";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="mini-con2"></div>

      <div className="about-content">
        {/* Image */}
        <div className="img-holder">
          <img src={p1} alt="About me" />
        </div>

        {/* Text */}
        <div className="about-text">
          <p>
            Software engineer with hands-on experience building{" "}
            <span className="highlight">production-ready applications</span>{" "}
            that users rely on every day. My expertise lies in creating
            real-time, interactive systems that handle complex user
            interactions with elegance and reliability.
          </p>

          <p>
            Strong in <span className="highlight">Flutter, Firebase</span>, chat
            systems, push notifications, and location services. I focus on{" "}
            <span className="highlight-black">clean architecture</span>,
            maintainability, and solving real-world problems with scalable
            solutions.
          </p>

          <p>
            Every line of code I write is driven by a simple principle: build
            systems that are reliable, performant, and delightful to use.
          </p>

          {/* Mini Cards */}
          <div className="mini-cards-wrapper">
            <div className="mini-card">
              <i className="fa-solid fa-mobile"></i>
              <h3>Mobile First</h3>
              <p>Flutter & cross-platform development</p>
            </div>

            <div className="mini-card">
              <i className="fa-solid fa-bolt"></i>
              <h3>Real-Time</h3>
              <p>Live chat & notifications</p>
            </div>

            <div className="mini-card">
              <i className="fa-solid fa-layer-group"></i>
              <h3>Architecture</h3>
              <p>Clean, scalable patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
