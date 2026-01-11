import "./SkillsStack.css"

function SkillsStack(){
    return(
        <section className="skills-section" id="skills">
            <h2 className="section-title">Skills & Stack</h2>
            <p className="section-description">Technologies and tools I use to build production-ready applications</p>
            <div className="mini-con2"></div>
            <div className="skills-card-wrapper">
                <div className="skill-card1">
                    <i className="fa-solid fa-code"></i>
                    <h3>Frontend</h3>
                    <div className="content">
                        <p> <i className="fa-solid fa-mobile"></i> Flutter</p>
                    </div>

                    <div className="content">
                        <p><i className="fab fa-react"></i> React</p>
                    </div>

                    <div className="content">
                        <p><i className="fab fa-html5"></i> HTML / CSS</p>
                    </div>

                    <div className="content">
                        <p><i className="fab fa-js"></i> JavaScript</p>
                    </div>
                </div>

                <div className="skill-card2">
                    <i className="fa-solid fa-code"></i>
                    <h3>Backend & Services</h3>
                    <div className="content">
                        <p><i className="fa-solid fa-fire"></i> Firebase Auth</p>
                    </div>

                    <div className="content">
                        <p> <i className="fa-solid fa-database"></i> Firestore</p>
                    </div>

                    <div className="content">
                        <p> <i className="fa fa-bolt"></i> Cloud Functions</p>
                    </div>

                    <div className="content">
                        <p><i className="fa fa-globe"></i> REST APIs</p>
                    </div>
                </div>

                <div className="skill-card3">
                    <i className="fa-solid fa-code"></i>
                    <h3>Architecture</h3>
                    <div className="content">
                        <p> <i className="fa-solid fa-layer-group"></i> BLoC Pattern</p>
                    </div>

                    <div className="content">
                        <p> <i className="fa-solid fa-diagram-project"></i> Clean Arch</p>
                    </div>

                    <div className="content">
                        <p><i className="fa fa-plug"></i> DI</p>
                    </div>

                    <div className="content">
                        <p><i className="fa-solid fa-repeat"></i> State Mgmt</p>
                    </div>
                </div>

                <div className="skill-card4">
                    <i className="fa-solid fa-code"></i>
                    <h3>Real-Time & Media</h3>
                    
                    <div className="content">
                    <p><i className="fa fa-comments"></i> Chat Systems</p>
                    </div>

                    <div className="content">
                    <p> <i className="fa fa-bell"></i> Push Notifs</p>
                    </div>

                    <div className="content">
                    <p> <i className="fa-solid fa-volume-high"></i> Audio</p>
                    </div>

                    <div className="content">
                    <p><i className="fa-solid fa-location-dot"></i> Location</p>
                    </div> 
                </div>

            </div>
        </section>
    );
}

export default SkillsStack