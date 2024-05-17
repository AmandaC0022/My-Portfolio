import pdf from '../images/2024WebDevelopmentResume.pdf'; 

const Resume = () => {
    return ( 
        <div className="resume-container">
            <h2>Resume</h2>
            <hr/>
            <object data={pdf} type="application/pdf" width="100%" height="700px" aria-labelledby="2024 Web Development Resume" alt="2024 Web Development Resume"></object>
        </div>
     );
}
 
export default Resume;