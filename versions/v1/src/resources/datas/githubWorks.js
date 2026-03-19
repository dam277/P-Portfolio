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

const GithubWorks = 
[
    {
        id: "w0",                               
        name: "Portfolio",                          // Searchbar
        image: portfolio,
        github: 
        {
            name : "P-Portfolio",
            link : "https://github.com/dam277/P-Portfolio/tree/master",
        },
        website: 
        {
            name : "Portfolio",
            link : "https://dam277.github.io/dam277/",
        },
        download : "",
        version: "1",
        completion: eCompletionIds.finished,        // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                 // Platform
        [
           {id: ePlatformIds.web, image: ePlatforms.web},  
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.javascript, image: eLanguages.javascript.image},
            {id: eLanguagesIds.html, image: eLanguages.html.image},
            {id: eLanguagesIds.css, image: eLanguages.css.image},
        ],
        associatedWorks : 
        [
        ]
    },
    {
        id: "w1",
        name: "Skillio Framework",                   // Searchbar
        image: skillioFramework,
        github: 
        {
            name : "P-SkillioFramework",
            link : "https://github.com/SiktiesSoftware/P-SkillioFramework",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "https://github.com/SiktiesSoftware/P-SkilioFramework/releases/download/V1.1.0/EmptyFramework.zip",
        version: "1.1.0",
        completion: eCompletionIds.inDevelopment,   // Completion
        type : eTypeIds.projects,                   // Type of work
        platforms :                                 // Platform
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
        associatedWorks : 
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
        github: 
        {
            name : "P-SpaceInvader",
            link : "https://github.com/dam277/P-SpaceInvader",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
        completion: eCompletionIds.inDevelopment,    // Completion
        type : eTypeIds.projects,                    // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software}
        ],  
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
        ],
        associatedWorks : 
        [
        ]
    },
    {
        id: "w3",
        name: "Github manager",                     // Searchbar
        image: "githubManager",
        github: 
        {
            name : "P-GithubManager",
            link : "https://github.com/dam277/P-GithubManager",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
        ]
    },
    {
        id: "w4",
        name : "Lwjgl",                             // Searchbar
        image : "lwjgl",
        github: 
        {
            name : "C-lwjgl",
            link : "https://github.com/dam277/C-Lwjgl",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w5",
        name : "Python",                            // Searchbar
        image : "python",
        github: 
        {
            name : "C-Python",
            link : "https://github.com/dam277/C-Python",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w6",
        name : "Discord bot",                       // Searchbar
        image : "discordBot",
        github: 
        {
            name : "C-DiscordBot",
            link : "https://github.com/dam277/C-DiscordBot",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w7",
        name : "Laravel",                           // Searchbar
        image : "laravel",
        github: 
        {
            name : "C-Laravel",
            link : "https://github.com/dam277/C-Laravel",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w8",
        name : "Discord channel manager",           // Searchbar
        image : "dcm",
        github: 
        {
            name : "P-DiscordChannelManager",
            link : "https://github.com/dam277/P-DiscordChannelManager",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w9",
        name : "Launcher",                          // Searchbar
        image : "launcher",
        github: 
        {
            name : "P-Launcher",
            link : "https://github.com/dam277/P-Launcher",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "P-Launcher-DinoGame",
            link : "https://github.com/dam277/P-Launcher-DinoGame",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "P-Launcher-HeroesFight",
            link : "https://github.com/dam277/P-Launcher-HeroesFight",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "P-Launcher-UltimateWarfight",
            link : "https://github.com/dam277/P-Launcher-UltimateWarfight",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w13",
        name : "Minecraft datapack",                // Searchbar
        image : "mcDatapack",
        github: 
        {
            name : "C-MinecraftDatapack",
            link : "https://github.com/dam277/C-MinecraftDatapack",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w14",
        name : "Minecraft mod",                     // Searchbar
        image : "mcMod",
        github: 
        {
            name : "C-MinecraftMod",
            link : "https://github.com/dam277/C-MinecraftMod",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w15",
        name : "Minecraft plugin",      // Searchbar
        image : "mcPlugin",
        github: 
        {
            name : "C-MinecraftPlugin",
            link : "https://github.com/dam277/C-MinecraftPlugin",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w16",
        name : "OpenGL",                            // Searchbar
        image : "opengl",
        github: 
        {
            name : "C-OpenGL",
            link : "https://github.com/dam277/C-OpenGL",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w17",
        name : "Rust",                            // Searchbar
        image : "rust",
        github: 
        {
            name : "C-Rust",
            link : "https://github.com/dam277/C-Rust",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w18",
        name : "Minecraft plugin (Server manager)", // Searchbar
        image : "mcPluginServerManager",
        github: 
        {
            name : "P-MinecraftPlugin-ServerManager",
            link : "https://github.com/dam277/P-MinecraftPlugin-ServerManager",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w19",
        name : "Minecraft datapack (World changes)",// Searchbar
        image : "mcDatapackWorldChanges",
        github: 
        {
            name : "P-MinecraftDatapack-WorldChanges",
            link : "https://github.com/dam277/P-MinecraftDatapack-WorldChanges",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w20",
        name : "Minecraft mod (Darkness)",          // Searchbar
        image : "mcModDarkness",
        github: 
        {
            name : "P-MinecraftMod-Darkness",
            link : "https://github.com/dam277/P-MinecraftMod-Darkness",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            "w22"
        ]
    },
    {
        id: "w21",
        name : "Minecraft mod (Alliances)",         // Searchbar
        image : "mcModAlliances",
        github: 
        {
            name : "P-MinecraftMod-Alliances",
            link : "https://github.com/dam277/P-MinecraftMod-Alliances",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w22",
        name : "Minecraft mod (Darkness upgrades)", // Searchbar
        image : "mcModDarknessUpgrades",
        github: 
        {
            name : "P-MinecraftMod-DarknessUpgrades",
            link : "https://github.com/dam277/P-MinecraftMod-DarknessUpgrades",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            "w20"
        ]
    },
    {
        id: "w23",
        name : "Minecraft launcher",                // Searchbar
        image : "mcLauncher",
        github: 
        {
            name : "P-MinecraftLauncher",
            link : "https://github.com/dam277/P-MinecraftLauncher",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "C-ServerConnection",
            link : "https://github.com/dam277/C-ServerConnection",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w25",
        name : "Go",                                // Searchbar
        image : "go",
        github: 
        {
            name : "C-Go",
            link : "https://github.com/dam277/C-Go",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w26",
        name : "Dart",                              // Searchbar
        image : "dart",
        github: 
        {
            name : "C-Dart",
            link : "https://github.com/dam277/C-Dart",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w27",
        name : "Procedural dungeon",                // Searchbar
        image : "proceduralDungeon",
        github: 
        {
            name : "P-ProceduralDungeon",
            link : "https://github.com/dam277/P-ProceduralDungeon",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w28",
        name : "Skillio framework (e2e Validator)", // Searchbar
        image : "sfE2eValidator",
        github: 
        {
            name : "P-SkillioFramework-e2eValidator",
            link : "https://github.com/SiktiesSoftware/P-SkillioFramework-e2eValidator",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "P-SkillioFramework-TemplateEngine",
            link : "https://github.com/SiktiesSoftware/P-SkillioFramework-templateEngine",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "P-SkillioFramework-VsCodeExtension",
            link : "https://github.com/SiktiesSoftware/P-SkillioFramework-VsCodeExtension",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
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
        github: 
        {
            name : "C-ReactJs",
            link : "https://github.com/dam277/C-ReactJs",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w32",
        name : "Angular",                           // Searchbar
        image : "angular",
        github: 
        {
            name : "C-Angular",
            link : "https://github.com/dam277/C-Angular",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w33",
        name : "Meteor",                             // Searchbar
        image : "meteor",
        github: 
        {
            name : "C-MeteorJs",
            link : "https://github.com/dam277/C-MeteorJs",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w34",
        name : "Three",                             // Searchbar
        image : "three",
        github: 
        {
            name : "C-ThreeJs",
            link : "https://github.com/dam277/C-ThreeJs",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w35",
        name : "Typescript",                        // Searchbar
        image : "typescript",
        github: 
        {
            name : "C-Typescript",
            link : "https://github.com/dam277/C-Typescript",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w36",
        name : "Vue",                               // Searchbar
        image : "vue",
        github: 
        {
            name : "C-VueJs",
            link : "https://github.com/dam277/C-VueJs",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w37",
        name : "Next",                              // Searchbar
        image : "next",
        github: 
        {
            name : "C-NextJs",
            link : "https://github.com/dam277/C-NextJs",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w38",
        name : "Electron",                          // Searchbar
        image : "electron",
        github: 
        {
            name : "C-Electron",
            link : "https://github.com/dam277/C-Electron",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w39",
        name : "Memo",                              // Searchbar
        image : "memo",
        github: 
        {
            name : "P-Memo",
            link : "https://github.com/dam277/P-Memo",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
        completion: eCompletionIds.inDevelopment,    // Completion
        type : eTypeIds.projects,                    // Type of work
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w40",
        name : "Wpf",                               // Searchbar
        image : "wpf",
        github: 
        {
            name : "C-Wpf",
            link : "https://github.com/dam277/C-Wpf",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
        completion: eCompletionIds.inDevelopment,    // Completion
        type : eTypeIds.courses,                     // Type of work
        platforms :                                  // Platform
        [
            {id: ePlatformIds.software, image: ePlatforms.software},  
        ],             
        languages :                                 // Languages
        [
            {id: eLanguagesIds.csharp, image: eLanguages.csharp.image},
            {id: eLanguagesIds.sql, image: eLanguages.sql.image},
        ],
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w41",
        name : "Converso",                          // Searchbar
        image : "converso",
        github: 
        {
            name : "P-Converso",
            link : "https://github.com/dam277/P-Converso",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w42",
        name : "Sfml",                              // Searchbar
        image : "sfml",
        github: 
        {
            name : "C-Sfml",
            link : "https://github.com/dam277/C-Sfml",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    },
    {
        id: "w43",
        name : "Docker",                            // Searchbar
        image : "docker",
        github: 
        {
            name : "C-Docker",
            link : "https://github.com/dam277/C-Docker",
        },
        website: 
        {
            name : "",
            link : "",
        },
        download : "",
        version: "",
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
        associatedWorks : 
        [
            
        ]
    }
]

export default GithubWorks;