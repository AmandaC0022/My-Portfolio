import pdf from '../images/2023WebDevelopmentResume.pdf'; 

const Resume = () => {
    return ( 
        <div className="resume-container">
            <h2>Resume</h2>
            <hr/>
            <object data={pdf} type="application/pdf" width="100%" height="700px" aria-labelledby="2023 Web Development Resume" alt="2023 Web Development Resume"></object>
        </div>
     );
}
 
export default Resume;