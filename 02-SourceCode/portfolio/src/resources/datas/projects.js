// Import images
import portfolio from "../images/projects/portfolio.png";
import spaceInvader from "../images/projects/SpaceInvader.png";
import skillioFramework from "../images/projects/SkillioFramework.png";
//import githubManager from "../images/projects/GithubManager.png";

// Import enums
import eCompletionIds from "./enums/works/eCompletionIds";
import eTypeIds from "./enums/works/eTypeIds";
import ePlatformIds from "./enums/works/ePlatformIds";
import eLanguagesIds from "./enums/works/eLanguagesIds";
import eLanguages from "./enums/eLanguages";
import ePlatforms from "./enums/works/ePlatform";

// Import enums

const Projects = 
[
    {
        id: "w0",                               
        name: "Portfolio",                          // Searchbar
        image: portfolio,
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
           {id: ePlatformIds.web, image: ePlatforms.web},  
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedProjects : 
        [
        ]
    },
    {
        id: "w1",
        name: "Skllio Framework",                   // Searchbar
        image: skillioFramework,
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.php, image: eLanguages.php.image},
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedProjects : 
        [
            "w28",
            "w29",
            "w30"
        ]
    },
    {
        id: "w2",
        name: "Space Invader",                      // Searchbar
        image: spaceInvader,
        completion: eCompletionIds.finished,        // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software}
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
        ],
        associatedProjects : 
        [
        ]
    },
    {
        id: "w3",
        name: "Github manager",                     // Searchbar
        image: "githubManager",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
        ],
        associatedProjects : 
        [
        ]
    },
    {
        id: "w4",
        name : "Lwjgl",                             // Searchbar
        image : "lwjgl",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w5",
        name : "Python",                            // Searchbar
        image : "python",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.python, image: eLanguages.python.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w6",
        name : "Discord bot",                       // Searchbar
        image : "discordBot",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w7",
        name : "Laravel",                           // Searchbar
        image : "laravel",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.php, image: eLanguages.php.image},
            {id: eLanguagesIds.blade, image: eLanguages.blade.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w8",
        name : "Discord channel manager",           // Searchbar
        image : "dcm",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w9",
        name : "Launcher",                          // Searchbar
        image : "launcher",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
        ],
        associatedProjects : 
        [
            "w10",
            "w11",
            "w12",
        ]
    },
    {
        id: "w10",
        name : "Launcher (Dino game)",              // Searchbar
        image : "launcherDG",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image}
        ],
        associatedProjects : 
        [
            "w9",
            "w11",
            "w12",
        ]
    },
    {
        id: "w11",
        name : "Launcher (Heroes fight)",           // Searchbar
        image : "launcherHF",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image}
        ],
        associatedProjects : 
        [
            "w9",
            "w10",
            "w11",
        ]
    },
    {
        id: "w12",
        name : "Launcher (Ultimate warfight)",      // Searchbar
        image : "launcherUW",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image}
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w13",
        name : "Minecraft datapack",                // Searchbar
        image : "mcDatapack",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w14",
        name : "Minecraft mod",                     // Searchbar
        image : "mcMod",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w15",
        name : "Minecraft plugin",      // Searchbar
        image : "mcPlugin",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w16",
        name : "OpenGL",                            // Searchbar
        image : "opengl",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.cpp, image: eLanguages.cpp.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w17",
        name : "Rust",                            // Searchbar
        image : "rust",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.rust, image: eLanguages.rust.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w18",
        name : "Minecraft plugin (Server manager)", // Searchbar
        image : "mcPluginServerManager",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w19",
        name : "Minecraft datapack (World changes)",// Searchbar
        image : "mcDatapackWorldChanges",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w20",
        name : "Minecraft mod (Darkness)",          // Searchbar
        image : "mcModDarkness",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "w22"
        ]
    },
    {
        id: "w21",
        name : "Minecraft mod (Alliances)",         // Searchbar
        image : "mcModAlliances",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w22",
        name : "Minecraft mod (Darkness upgrades)", // Searchbar
        image : "mcModDarknessUpgrades",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "w20"
        ]
    },
    {
        id: "w23",
        name : "Minecraft launcher",                // Searchbar
        image : "mcLauncher",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "w18",
            "w20",
            "w21",
            "w22"
        ]
    },
    {
        id: "w24",
        name : "Server connection",                 // Searchbar
        image : "serverConnection",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
            eLanguagesIds.sql
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w25",
        name : "Go",                                // Searchbar
        image : "go",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.go, image: eLanguages.go.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w26",
        name : "Dart",                              // Searchbar
        image : "dart",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.dart, image: eLanguages.dart.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w27",
        name : "Procedural dungeon",                // Searchbar
        image : "proceduralDungeon",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w28",
        name : "Skillio framework (e2e Validator)", // Searchbar
        image : "sfE2eValidator",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            "w1",
            "w29",
            "w30"
        ]
    },
    {
        id: "w29",
        name : "Skillio framework (Template engine)",// Searchbar
        image : "sfTemplateEngine",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.php, image: eLanguages.php.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedProjects : 
        [
            "w1",
            "w28",
            "w30"
        ]
    },
    {
        id: "w30",
        name : "Skillio framework (VsCode extension)",// Searchbar
        image : "sfVsCodeExtension",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software}  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            "w1",
            "w28",
            "w29"
        ]
    },
    {
        id: "w31",
        name : "React",                             // Searchbar
        image : "react",
        completion: eCompletionIds.finished,        // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w32",
        name : "Angular",                           // Searchbar
        image : "angular",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.typescript, image: eLanguages.typescript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w33",
        name : "Meteor",                             // Searchbar
        image : "meteor",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w34",
        name : "Three",                             // Searchbar
        image : "three",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w35",
        name : "Typescript",                        // Searchbar
        image : "typescript",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.typescript, image: eLanguages.typescript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w36",
        name : "Vue",                               // Searchbar
        image : "vue",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w37",
        name : "Next",                              // Searchbar
        image : "next",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.web, image: ePlatforms.web},   
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w38",
        name : "Electron",                          // Searchbar
        image : "electron",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software}  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w39",
        name : "Memo",                              // Searchbar
        image : "memo",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
            {id: ePlatformIds.mobile, image: ePlatforms.mobile}  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
            {id: eLanguagesIds.sql, image: eLanguages.sql.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w40",
        name : "Wpf",                               // Searchbar
        image : "wpf",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
            {id: eLanguagesIds.sql, image: eLanguages.sql.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w41",
        name : "Converso",                          // Searchbar
        image : "converso",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},  
            {id: ePlatformIds.web, image: ePlatforms.web},
            {id: ePlatformIds.mobile, image: ePlatforms.mobile}  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
            {id: eLanguagesIds.java, image: eLanguages.java.image},
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
            {id: eLanguagesIds.sql, image: eLanguages.sql.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w42",
        name : "Sfml",                              // Searchbar
        image : "sfml",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software}
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.cpp, image: eLanguages.cpp.image},
        ],
        associatedProjects : 
        [
            
        ]
    },
    {
        id: "w43",
        name : "Docker",                            // Searchbar
        image : "docker",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},
            {id: ePlatformIds.web, image: ePlatforms.web}, 
        ],             
        languages :                                 // Languages
        [
        ],
        associatedProjects : 
        [
            
        ]
    }
]

export default Projects;