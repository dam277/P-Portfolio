// Import enums
import eLanguages from "../enums/eLanguages";
import eFrameworks from "../enums/eFrameworks";
import eLibraries from "../enums/eLibraries";
import eEngines from "../enums/eEngines";

export const LanguageCompetences = 
[
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.javascript.name, image : eLanguages.javascript.image, learned : true },
            { name : eLanguages.typescript.name, image : eLanguages.typescript.image, learned : true }
        ],
        frameworks : 
        [
            { name : eFrameworks.react.name, image : eFrameworks.react.image, learned : true },
            { name : eFrameworks.angular.name, image : eFrameworks.angular.image, learned : false },
            { name : eFrameworks.electron.name, image : eFrameworks.electron.image, learned : false },
            { name : eFrameworks.meteor.name, image : eFrameworks.meteor.image, learned : false },
            { name : eFrameworks.next.name, image : eFrameworks.next.image, learned : false },
            { name : eFrameworks.three.name, image : eFrameworks.three.image, learned : false },
            { name : eFrameworks.vue.name, image : eFrameworks.vue.image, learned : false },
        ],
        libraries : 
        [
            { name : eLibraries.styledComponents.name, image : eLibraries.styledComponents.image, learned : true },
            { name : eLibraries.jquery.name, image : eLibraries.jquery.image, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.java.name, image : eLanguages.java.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        [
            { name : eLibraries.lwjgl.name, image : eLibraries.lwjgl.image, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.php.name, image : eLanguages.php.image, learned : true },
            { name : eLanguages.blade.name, image : eLanguages.blade.image, learned : true }
        ],
        frameworks : 
        [
            { name : eFrameworks.laravel.name, image : eFrameworks.laravel.image, learned : true },
            { name : eFrameworks.mvc.name, image : eFrameworks.mvc.image, learned : true },
            { name : eFrameworks.symfony.name, image : eFrameworks.symfony.image, learned : false },
        ],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.html.name, image : eLanguages.html.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.css.name, image : eLanguages.css.image, learned : true },
        ],
        frameworks : 
        [
            { name : eFrameworks.tailwind.name, image : eFrameworks.tailwind.image, learned : true },
        ],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : eLanguages.c.name, image : eLanguages.c.image, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name :  eLanguages.cpp.name, image : eLanguages.cpp.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        [
            { name : eLibraries.opengl.name, image : eLibraries.opengl.image, learned : false },
            { name : eLibraries.sfml.name, image : eLibraries.sfml.image, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.csharp.name, image : eLanguages.csharp.image, learned : true },
        ],
        frameworks : 
        [
            { name : eFrameworks.xamarin.name, image : eFrameworks.xamarin.image, learned : true },
        ],
        libraries : 
        [
            
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.sql.name, image : eLanguages.sql.image, learned : true },
        ],
        frameworks : 
        [
            { name : eFrameworks.mysql.name, image : eFrameworks.mysql.image, learned : true },
        ],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.sqlite.name, image : eLanguages.sqlite.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.powershell.name, image : eLanguages.powershell.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : eLanguages.swift.name, image : eLanguages.swift.image, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : eLanguages.python.name, image : eLanguages.python.image, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : eLanguages.go.name, image : eLanguages.go.image, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : eLanguages.dart.name, image : eLanguages.dart.image, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : eLanguages.rust.name, image : eLanguages.rust.image, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
];

export const EngineCompetences = 
[
    {
        learned : false,
        engines : 
        [],
        languages : 
        [],
        libraries : 
        []
    },
    {
        learned : false,
        engines : 
        [
            { name : eEngines.unity.name, image : eEngines.unity.image, learned : false },
        ],
        languages : 
        [],
        libraries : 
        []
    },
];