import { Link } from "react-router-dom";
import './About.css'; 
import Circles from '../../components/Circles/Circles'; 

const About = () => {
    return ( 
        <div className="about-container fadeIn">
            <div className="left-container">
                <div className="about-block">
                    <h1>About Me</h1>
                    <p style={{lineHeight:1.7}}>
                        I am an experienced Full Stack Web Developer and UX Designer with a passion to build better user experiences on the web. As a former Art Teacher, I taught the principals and elements of design to thousands of children and am passionate to implement those skills into ambitious web designs. I earned a certification in Full Stack Web Development from Georgia Institute of Technology and have worked the last three years as a Frontend Web Developer and a UX Designer. With my developed skills in JavaScript, CSS, HTML, RESTful APIs, MySQL, React, Wordpress, and Magento, I would like to continue to improve my skill set and work with your professional team. I describe myself as an innovative problem solver, passionate about creative user interfaces, and focused on frontend development. With each project, my aim is to best engage my audience for an impactful and positive user experience.
                    </p>
                </div>
                <Circles/>
                <div className="education-block">
                    <h2>Education</h2>
                    <h4>Georgia Institute of Technology</h4>
                    <p>Full Stack Website Development Certification </p>
                    <h4>University of Montevallo</h4>
                    <p>Alternative Masters in P-12 Art Education</p>
                    <h4>Auburn University</h4>
                    <p>Bachelors of Art & Minor in Art History</p>
                </div>
            </div>
            <div className="right-container">
                <Circles/>
                <div className="skills-block">
                    <h2>Skills</h2>
                    <div className="skills-list">
                        <div className="skills">
                            <h4>Developer</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Git & Github</li>
                                <li>Azure Dev Ops</li>
                                <li>MySQL</li>
                                <li>C#</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                                <li>Express</li>
                                <li>REST APIs</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h4>Power User</h4>
                            <ul>
                                <li>Magento</li>
                                <li>Wordpress</li>
                                <li>Wix</li>
                                <li>Cognito Forms</li>
                                <li>Beaconstac</li>
                                <li>uRapidFlow</li>
                                <li>Flippingbook</li>
                                <li>Cylindo</li>
                                <li>Zapier</li>
                                <li>Termly</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h4>Designer</h4>
                            <ul>
                                <li>Adobe XD</li>
                                <li>Adobe Photoshop</li>
                                <li>Google Analytics</li>
                                <li>FullStory</li>
                                <li>LucidChart</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h4>Project Manager</h4>
                            <ul>
                                <li>Jira</li>
                                <li>Trello</li>
                                <li>Asana</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Circles/>
                <div className="contact-block">
                    <h2>Want to Reach Out?</h2>
                    <button className="custom-btn fill"><Link to="/contact">Contact Me</Link></button>
                </div>
            </div>
            {/* <h2>Links</h2>
            <Link className="about-link" to="/"><p>LinkedIn</p></Link>
            <Link className="about-link" to="/"><p>Github</p></Link> */}
        </div>
     );
}
 
export default About;