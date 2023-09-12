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

// Import enums

const Projects = 
[
    {
        id: "work-0",                               
        name: "Portfolio",                          // Searchbar
        image: portfolio,
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-1",
        name: "Skllio Framework",                   // Searchbar
        image: skillioFramework,
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
            "work-28",
            "work-29",
            "work-30"
        ]
    },
    {
        id: "work-2",
        name: "Space Invader",                      // Searchbar
        image: spaceInvader,
        completion: eCompletionIds.finished,        // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-3",
        name: "Github manager",                     // Searchbar
        image: "githubManager",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-4",
        name : "Lwjgl",                             // Searchbar
        image : "lwjgl",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-5",
        name : "Python",                            // Searchbar
        image : "python",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-6",
        name : "Discord bot",                       // Searchbar
        image : "discordBot",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-7",
        name : "Laravel",                           // Searchbar
        image : "laravel",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-8",
        name : "Discord channel manager",           // Searchbar
        image : "dcm",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-9",
        name : "Launcher",                          // Searchbar
        image : "launcher",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
        ],
        associatedProjects : 
        [
            "work-10",
            "work-11",
            "work-12",
        ]
    },
    {
        id: "work-10",
        name : "Launcher (Dino game)",              // Searchbar
        image : "launcherDG",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image}
        ],
        associatedProjects : 
        [
            "work-9",
            "work-11",
            "work-12",
        ]
    },
    {
        id: "work-11",
        name : "Launcher (Heroes fight)",           // Searchbar
        image : "launcherHF",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image}
        ],
        associatedProjects : 
        [
            "work-9",
            "work-10",
            "work-11",
        ]
    },
    {
        id: "work-12",
        name : "Launcher (Ultimate warfight)",      // Searchbar
        image : "launcherUW",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-13",
        name : "Minecraft datapack",                // Searchbar
        image : "mcDatapack",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-14",
        name : "Minecraft mod",                     // Searchbar
        image : "mcMod",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-15",
        name : "Minecraft plugin",      // Searchbar
        image : "mcPlugin",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-16",
        name : "OpenGL",                            // Searchbar
        image : "opengl",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-17",
        name : "Rust",                            // Searchbar
        image : "rust",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-18",
        name : "Minecraft plugin (Server manager)", // Searchbar
        image : "mcPluginServerManager",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-19",
        name : "Minecraft datapack (World changes)",// Searchbar
        image : "mcDatapackWorldChanges",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-20",
        name : "Minecraft mod (Darkness)",          // Searchbar
        image : "mcModDarkness",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "work-22"
        ]
    },
    {
        id: "work-21",
        name : "Minecraft mod (Alliances)",         // Searchbar
        image : "mcModAlliances",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-22",
        name : "Minecraft mod (Darkness upgrades)", // Searchbar
        image : "mcModDarknessUpgrades",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "work-20"
        ]
    },
    {
        id: "work-23",
        name : "Minecraft launcher",                // Searchbar
        image : "mcLauncher",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.java, image: eLanguages.java.image},
        ],
        associatedProjects : 
        [
            "work-18",
            "work-20",
            "work-21",
            "work-22"
        ]
    },
    {
        id: "work-24",
        name : "Server connection",                 // Searchbar
        image : "serverConnection",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-25",
        name : "Go",                                // Searchbar
        image : "go",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-26",
        name : "Dart",                              // Searchbar
        image : "dart",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-27",
        name : "Procedural dungeon",                // Searchbar
        image : "proceduralDungeon",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
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
        id: "work-28",
        name : "Skillio framework (e2e Validator)", // Searchbar
        image : "sfE2eValidator",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            "work-1",
            "work-29",
            "work-30"
        ]
    },
    {
        id: "work-29",
        name : "Skillio framework (Template engine)",// Searchbar
        image : "sfTemplateEngine",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.php, image: eLanguages.php.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedProjects : 
        [
            "work-1",
            "work-28",
            "work-30"
        ]
    },
    {
        id: "work-30",
        name : "Skillio framework (VsCode extension)",// Searchbar
        image : "sfVsCodeExtension",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
        ],
        associatedProjects : 
        [
            "work-1",
            "work-28",
            "work-29"
        ]
    },
    {
        id: "work-31",
        name : "React",                             // Searchbar
        image : "react",
        completion: eCompletionIds.finished,        // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-32",
        name : "Angular",                           // Searchbar
        image : "angular",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-33",
        name : "Meteor",                             // Searchbar
        image : "meteor",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-34",
        name : "Three",                             // Searchbar
        image : "three",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-35",
        name : "Typescript",                        // Searchbar
        image : "typescript",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-36",
        name : "Vue",                               // Searchbar
        image : "vue",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-37",
        name : "Next",                              // Searchbar
        image : "next",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.web  
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
        id: "work-38",
        name : "Electron",                          // Searchbar
        image : "electron",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software  
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
        id: "work-39",
        name : "Memo",                              // Searchbar
        image : "memo",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.projects,                   // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,
            ePlatformIds.mobile  
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
        id: "work-40",
        name : "Wpf",                               // Searchbar
        image : "wpf",
        completion: eCompletionIds.notStarted,      // Completion
        type : eTypeIds.courses,                    // Type of work
        platform :                                  // Platform
        [
            ePlatformIds.software,  
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
]

export default Projects;