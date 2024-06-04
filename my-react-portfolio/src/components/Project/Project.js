import './Project.css';


const Project = () => {
    return ( 
        <div className="project">
            <div className="container">
                <iframe width="100%" src="www.trade.summerclassics.com/" title="project title" scrolling="no"></iframe>
            </div>
            <h4>Project Title</h4>
            <p>Description goes here.</p>
            <button className="custom-btn">Learn More</button>
        </div>
    )
}; 

export default Project;