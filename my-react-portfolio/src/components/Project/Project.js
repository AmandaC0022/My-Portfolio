import './Project.css';
import OpenModal from '../Modal/Modal'; 

const Project = (props) => {
    return ( 
        <div className="project">
            <div className="container">
                <iframe width="100%" src={props.url} title={props.title} scrolling="no"></iframe>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <OpenModal/>
        </div>
    )
}; 

export default Project;