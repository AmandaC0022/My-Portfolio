import './SkillList.css'; 
import LinearProgress from '@mui/material/LinearProgress';
import DeveloperSkills from './Lists/DeveloperSkills.json';
import EcommerceSkills from './Lists/EcommerceSkills.json'; 
import DesignerSkills from './Lists/DesignerSkills.json'; 
import ProjectManagerSkills from './Lists/ProjectManagerSkills.json'; 

export const SkillList = () => {
    const SkillType = [
        {
            title: "Developer",
            list: DeveloperSkills
        }, 
        {
            title: "Designer",
            list: DesignerSkills
        },
        {
            title: "E-Commerce",
            list: EcommerceSkills
        },
        {
            title: "Project Manager",
            list: ProjectManagerSkills
        },
    ]
    
    return (
        <div className="skills-block">
            <h2>Skills</h2>
            {SkillType.map((skilllist) => {
                return (
                    <div key={skilllist.title}>
                        <h4>{skilllist.title}</h4>
                        <div className="skill-bars">
                            {skilllist.list.skills.map((skill) => {
                                return (
                                    <div className="skill-bar-container" key={skill.skill}>
                                        <p>{skill.skill}</p>
                                        <LinearProgress color="secondary" variant="determinate" value={skill.value} sx={{width: '70%'}}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}; 