//import { Link } from "react-router-dom";
import './About.css'; 
import Circles from '../../components/Circles/Circles'; 
import { SkillList } from "../../components/SkillList/SkillList";

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
                <SkillList />
                <Circles/>
                <div className="contact-block">
                    <h2>Want to Reach Out?</h2>
                    <a href="mailto:AmandaC0022@gmail.com" target="_blank" rel="noreferrer">
                        <button className="custom-btn fill">
                            <p>Email Me</p>
                            {/* <Link to="/contact">Contact Me</Link> */}
                        </button>
                    </a>
                </div>
            </div>
            {/* <h2>Links</h2>
            <Link className="about-link" to="/"><p>LinkedIn</p></Link>
            <Link className="about-link" to="/"><p>Github</p></Link> */}
        </div>
     );
}
 
export default About;