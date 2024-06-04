import pdf from '../../images/2024WebDevelopmentResume.pdf'; 
import './Resume.css'; 
import Circles from '../../components/Circles/Circles'

const Resume = () => {
    return ( 
        <div className="resume-container">
            <div className="resume-header">
                <h2>Resume</h2>
            </div>
            <Circles/>
            <object data={pdf} type="application/pdf" width="100%" height="700px" aria-labelledby="2024 Web Development Resume" alt="2024 Web Development Resume"></object>
        </div>
     );
}
 
export default Resume;