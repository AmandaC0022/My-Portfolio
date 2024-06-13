import './Project.css';
import OpenModal from '../Modal/Modal'; 
//import ProjectProps from './Project'; 

const Project = ({title, description, role, company, framework, technologies, workexamples, imagepath, url}) => {
    return ( 
        <div className="project">
            <div className="container">
                <img className="project-img" src={require(`../../images/${imagepath}`)} alt={url}/>
                {/* <iframe width="100%" src={props.url} title={props.title} scrolling="no"></iframe> */}
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <OpenModal 
                title={title} 
                role={role}
                company={company}
                framework={framework}
                technologies={technologies}
                workexamples={workexamples}
            />
        </div>
    )
}; 

export default Project;