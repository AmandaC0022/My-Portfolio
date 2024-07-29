import './SkillList.css'; 
import LinearProgress from '@mui/material/LinearProgress';
import skills from './SkillsList.json';

export const SkillList = () => {
    const handleLabel = (value) => {
        if(value >= 90) {
            return <p>Expert</p>
        }
        else if (value >= 70) {
            return <p>Proficent</p>
        }
        else if (value >= 50) {
            return <p>Moderate</p>
        }
        else return <p>Beginner</p>
    }

    console.log(skills); 

    const returnNumber = (value) => {
        return Number(value); 
    }
    return (
        <div className="skills-block">
            <h2>Skills</h2>
            <h4>Developer</h4>
            <div className="skill-bars">
                {skills.map((skill) => {
                    return (
                        <>
                            <p>{skill.skill}</p>
                            <div className="skill-bar-container">
                                <LinearProgress color="warning" variant="determinate" value={returnNumber(skill.value)} sx={{width: '85%'}}/>
                                {handleLabel(skill.value)}
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="skills-list">
                <div className="skills">
                    <h4>Power User</h4>
                    <ul>
                        <li>Magento</li>
                        <li>Wordpress</li>
                        <li>WooComerce</li>
                        <li>Wix</li>
                        <li>Cognito Forms</li>
                        <li>Beaconstac</li>
                        <li>uRapidFlow</li>
                        <li>Flippingbook</li>
                        <li>Cylindo</li>
                        <li>Zapier</li>
                        <li>Termly</li>
                    </ul>
                </div>
                <div className="skills">
                    <h4>Designer</h4>
                    <ul>
                        <li>Adobe XD</li>
                        <li>Adobe Photoshop</li>
                        <li>Google Analytics</li>
                        <li>FullStory</li>
                        <li>LucidChart</li>
                    </ul>
                </div>
                <div className="skills">
                    <h4>Project Manager</h4>
                    <ul>
                        <li>Jira</li>
                        <li>Trello</li>
                        <li>Asana</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}; 