
import './Projects.css';
import AllProjectList from '../../projectLists/AllProjectList.json'; 
import Project from '../../components/Project/Project';  

const Projects = () => {
    let returnedProjectList = []; 
    let givenValue = ""; 

    const getValue = (event) => {
        givenValue = event.target.value.toString(); 
        console.log(givenValue); 
        returnProjects(); 
    }

    //sorts through and only returns projects that match the given framework and stores the results in the returnedProjectList array
    const returnProjects = () => {
        AllProjectList.projects.find((project) => {
            if ((project.framework).includes(givenValue)) {
                returnedProjectList.push(project);  
            }
        })
    }; 

    const displayAllProjects = () => {
        return (
            AllProjectList.projects.map((project) => {
                return(
                    <Project title={project.title} description={project.description} url={project.url}/>
                )
            })
        )
    }
    const displayCertainProjects = () => {
        return (
            returnedProjectList.map((project) => {
                <div className="project">
                    <div className="container">
                        <iframe width="100%" src={project.url} title={project.title} scrolling="no"></iframe>
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
            })
        )
        } 
        
    
    return ( 
        <div className="project-container fadeIn">
            <div className="project-header">
                <h2>Projects</h2>
                <p>I love working with a team in a fast paced environment. I tend to take charge, always keep busy and maintain a positive attitude. </p>
                <div className="project-button-container">
                    <button className="custom-btn" value="Custom" onClick={getValue}>See Custom Projects</button>
                    <button className="custom-btn" value="Wordpress" onClick={getValue}>See Wordpress Projects</button>
                    <button className="custom-btn" value="Magento" onClick={getValue}>See Magento Projects</button>
                </div>
            </div>
            <div className="project-list-container">
                {displayAllProjects()}
            </div>
        </div>
     );
}
 
export default Projects;