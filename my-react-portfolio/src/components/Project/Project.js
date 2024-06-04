import './Project.css';


const Project = () => {
    return ( 
        <div className="project">
            <div className="container">
                <iframe width="100%" src="www.google.com" title="project title" scrolling="no"></iframe>
            </div>
            <h4>Project Title</h4>
            <button className="custombtn mobilebtn"><a href="google.com" target="_blank" rel="noreferrer">Visit Site</a></button>
            <p>Role: My Role</p>
            <p>Company: My Company</p>
            <p>Framework: My Frameworks</p>
            <p>Description goes here.</p>
        </div>
    )
}; 

export default Project;