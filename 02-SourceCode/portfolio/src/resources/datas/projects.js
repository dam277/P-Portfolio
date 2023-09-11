// Import images
import portfolio from "../images/projects/portfolio.png";
import spaceInvader from "../images/projects/SpaceInvader.png";
import skillioFramework from "../images/projects/SkillioFramework.png";

// Import enums
import eProjectCompletion from "./enums/eProjectCompletion";

const Projects = 
[
    {
        id: "work-0",
        name: "Portfolio",
        image: portfolio,
        completion: eProjectCompletion.inDevelopment,
        languages : 
        [

        ]
    },
    {
        id: "work-1",
        name: "Skllio Framework",
        image: skillioFramework,
        completion: eProjectCompletion.inDevelopment
    },
    {
        id: "work-2",
        name: "SpaceInvader",
        image: spaceInvader,
        completion: eProjectCompletion.finished
    }
]

export default Projects;