import bluestockimage from "../images/Bluestock.jpg"; 
import cwimage from '../images/IMG_0040.jpg'; 
import cffimage from '../images/IMG_0041.jpg';
import kukaimage from '../images/Kuka-Home-Furnishings.jpg'; 
import scimage from '../images/IMG_7369.jpg'; 
import gabbyimage from '../images/IMG_7365.jpg';
import gabbyfabrics from '../images/IMG_7367.jpg'; 
import scfabrics from '../images/IMG_7368.jpg';
import contractimage from '../images/IMG_7366.jpg';   
import scblog from '../images/IMG_7369.jpg'; 
import gabbyblog from '../images/IMG_7370.jpg';
import ProjectList from '../projects/ProjectList.json';  
// import gergsworld from '../images/'; 

const Projects = () => {
    console.log(ProjectList); 
    return ( 
        <div>
            <h2>Projects</h2>
            <hr/>
            <div className="project-container">
                {ProjectList.projects.map((project) => (
                    <div className="project">
                        <div className="container">
                            <img src={project.imagepath} alt={project.url}/>
                            <div className="overlay">
                                <button className="custombtn"><a href={project.url} target="_blank" rel="noreferrer">Visit Site</a></button>
                            </div>
                        </div>
                        <h4>{project.title}</h4>
                        <button className="custombtn mobilebtn"><a href={project.url} target="_blank" rel="noreferrer">Visit Site</a></button>
                        <p>Role: {project.role}</p>
                        <p>Company: {project.company}</p>
                        <p>Framework: {project.framework}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;