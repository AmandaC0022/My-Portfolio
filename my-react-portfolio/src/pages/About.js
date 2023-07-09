import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="about-container">
            <h2>About Me</h2>
            <hr/>
            <p style={{lineHeight:1.7}}>
                I am a Front-End Web Developer building upon an Art Education background to build a more intuitive user experience on the web. I describe myself as an innovative problem solver, passionate about creative user interface design, with a focus on mobile-first development. With each project, my aim is to best engage my audience for an impactful user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 
            </p>
            <h2>Education</h2>
            <hr/>
            <h4>Georgia Institute of Technology</h4>
            <p>Full Stack Website Development Certification </p>
            <h4>University of Montevallo</h4>
            <p>Alternative Masters in P-12 Art Education</p>
            <h4>Auburn University</h4>
            <p>Bachelors of Art</p>
            <p>Minor in Art History</p>
            <h2>Skills</h2>
            <hr/>
            <div className="skills-list">
                <div className="skills">
                    <h4>Developer</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Git & Github</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                        <li>Express</li>
                        <li>APIs</li>
                    </ul>
                </div>
                <div>
                    <h4>Power User</h4>
                    <ul>
                        <li>Magento Commerce 2</li>
                        <li>Wordpress</li>
                        <li>Cognito Forms</li>
                        <li>Beaconstac</li>
                        <li>uRapidFlow</li>
                        <li>Flippingbook</li>
                        <li>Cylindo</li>
                        <li>Zapier</li>
                    </ul>
                </div>
                <div className="skills">
                    <h4>Designer</h4>
                    <ul>
                        <li>Adobe XD</li>
                        <li>Adobe Photoshop</li>
                        <li>LucidChart</li>
                    </ul>
                </div>
            </div>
            <h2>Links</h2>
            <hr/>
            <Link className="about-link" to="/"><p>LinkedIn</p></Link>
            <Link className="about-link" to="/"><p>Github</p></Link>
        </div>
     );
}
 
export default About;