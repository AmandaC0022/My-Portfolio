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
            <iframe className="resume-iframe" width="100%" src={pdf}/>
        </div>
     );
}
 
export default Resume;