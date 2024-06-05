import './Project.css';
import OpenModal from '../Modal/Modal'; 

const Project = (props) => {
    
    return ( 
        <div className="project">
            <div className="container">
                <img className="project-img" src={require(`../../images/${props.image}`)} alt={props.url}/>
                {/* <iframe width="100%" src={props.url} title={props.title} scrolling="no"></iframe> */}
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <OpenModal 
                title={props.title} 
                role={props.role}
                company={props.company}
                framework={props.framework}
                technologies={props.technologies}
                workexamples={props.workexamples}
            />
        </div>
    )
}; 

export default Project;