
import './Projects.css';
import AllProjectList from '../../projectLists/AllProjectList.json'; 
import Project from '../../components/Project/Project';  
import Circles from '../../components/Circles/Circles'; 
import { useState, useEffect } from 'react';

const Projects = () => {
    const [projectList, setProjectList] = useState(AllProjectList.projects);
    const [defaultList, setDefaultList] = useState(AllProjectList.projects);   

    const getValue = (event) => { 
        const givenValue = event.target.value.toString(); 
        filterProjects(givenValue); 
    };  

    const filterProjects = (value) => {
        const filteredList = defaultList.filter(project => project.framework === value);
        setProjectList(filteredList); 
    }; 

    const resetProjects = () => {
        setProjectList(defaultList); 
    }; 

    const displayProjects = () => {
        console.log(projectList); 
        return (
            projectList.map((project) => {
                return ( 
                    <Project 
                        key={project.title}
                        title={project.title} 
                        description={project.description} 
                        url={project.url}
                        imagepath={project.imagepath}
                        role={project.role}
                        company={project.company}
                        framework={project.framework}
                        technologies={project.technologies}
                        workexamples={project.workexamples}
                    />
                )
            })
        )
    }

    return ( 
        <div className="project-container fadeIn">
            <div className="project-header">
                <h2>Projects</h2>
                <p>I love working with a team in a fast paced environment. I tend to take charge, always keep busy and maintain a positive attitude. </p>
                <div className="project-button-container">
                    <button className="custom-btn fill" value="Custom" onClick={getValue}><p>See Custom Projects</p></button>
                    <button className="custom-btn fill" value="Wordpress" onClick={getValue}><p>See Wordpress Projects</p></button>
                    <button className="custom-btn fill" value="Magento" onClick={getValue}><p>See Magento Projects</p></button>
                    <button className="custom-btn fill" onClick={resetProjects}><p>See All Projects</p></button>
                </div>
            </div>
            <Circles/>
            <div className="project-list-container">
                {displayProjects()}
            </div>
        </div>
     );
}
 
export default Projects;