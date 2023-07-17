// Import images
// Import languagess
import blade from "../../images/languages/Blade.png";
import c from "../../images/languages/C.png";
import cpp from "../../images/languages/Cpp.png";
import csharp from "../../images/languages/Csharp.png";
import css from "../../images/languages/Css.png";
import dart from "../../images/languages/Dart.png";
import go from "../../images/languages/Go.png";
import html from "../../images/languages/Html.png";
import java from "../../images/languages/Java.png";
import javascript from "../../images/languages/Javascript.png";
import php from "../../images/languages/Php.png";
import powershell from "../../images/languages/Powershell.png";
import python from "../../images/languages/Python.png";
import sql from "../../images/languages/Sql.png";
import sqlite from "../../images/languages/Sqlite.png";
import swift from "../../images/languages/Swift.png";
import typescript from "../../images/languages/Typescript.png";
import rust from "../../images/languages/Rust.png";
// Import Frameworks
import angular from "../../images/frameworks/Angular.png";
import electron from "../../images/frameworks/Electron.png";
import laravel from "../../images/frameworks/Laravel.png";
import meteor from "../../images/frameworks/Meteor.png";
import next from "../../images/frameworks/Next.png";
import react from "../../images/frameworks/React.png";
import three from "../../images/frameworks/Three.png";
import vue from "../../images/frameworks/Vue.png";
import symfony from "../../images/frameworks/Symfony.png";
import mvc from "../../images/frameworks/Mvc.png";
import tailwind from "../../images/frameworks/Tailwind.png";
import xamarin from "../../images/frameworks/Xamarin.png";
import mysql from "../../images/frameworks/Mysql.png";
// Import engines
import unity from "../../images/engines/Unity.png";
import unrealEngine from "../../images/engines/UnrealEngine.png";
// Import libraries
import sfml from "../../images/libraries/Sfml.png";
import lwjgl from "../../images/libraries/Lwjgl.png";
import opengl from "../../images/libraries/OpenGl.png";
import jquery from "../../images/libraries/Jquery.png";
import styledComponents from "../../images/libraries/StyledComponents.png";

export const LanguageCompetences = 
[
    {
        learned : true,
        languages : 
        [
            { name : "Javascript", image : javascript, learned : true },
            { name : "Typescript", image : typescript, learned : true }
        ],
        frameworks : 
        [
            { name : "React", image : react, learned : true },
            { name : "React", image : angular, learned : false },
            { name : "React", image : electron, learned : false },
            { name : "React", image : meteor, learned : false },
            { name : "React", image : next, learned : false },
            { name : "React", image : three, learned : false },
            { name : "React", image : vue, learned : false },
        ],
        libraries : 
        [
            { name : "Styled components", image : styledComponents, learned : true },
            { name : "Jquery", image : jquery, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : "Java", image : java, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        [
            { name : "Lwjgl", image : lwjgl, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : "Php", image : php, learned : true },
            { name : "Blade", image : blade, learned : true }
        ],
        frameworks : 
        [
            { name : "Laravel", image : laravel, learned : true },
            { name : "Mvc", image : mvc, learned : true },
            { name : "Symfony", image : symfony, learned : false },
        ],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : "Html", image : html, learned : true },
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
            { name : "Css", image : css, learned : true },
        ],
        frameworks : 
        [
            { name : "Tailwind", image : tailwind, learned : true },
        ],
        libraries : 
        []
    },
    {
        learned : false,
        languages : 
        [
            { name : "C", image : c, learned : false },
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
            { name : "C++", image : cpp, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        [
            { name : "OpenGL", image : opengl, learned : false },
            { name : "Sfml", image : sfml, learned : false },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : "C#", image : csharp, learned : true },
        ],
        frameworks : 
        [],
        libraries : 
        [
            { name : "Xamarin", image : xamarin, learned : true },
        ]
    },
    {
        learned : true,
        languages : 
        [
            { name : "Sql", image : sql, learned : true },
        ],
        frameworks : 
        [
            { name : "MySql", image : mysql, learned : true },
        ],
        libraries : 
        []
    },
    {
        learned : true,
        languages : 
        [
            { name : "Sqlite", image : sqlite, learned : true },
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
            { name : "Powershell", image : powershell, learned : true },
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
            { name : "Swift", image : swift, learned : true },
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
            { name : "Python", image : python, learned : false },
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
            { name : "Go", image : go, learned : false },
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
            { name : "Dart", image : dart, learned : false },
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
            { name : "Rust", image : rust, learned : false },
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
        engine : 
        [
            { name : "Unreal Engine", image : unrealEngine, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
    {
        engine : 
        [
            { name : "Unity", image : unity, learned : false },
        ],
        frameworks : 
        [],
        libraries : 
        []
    },
];