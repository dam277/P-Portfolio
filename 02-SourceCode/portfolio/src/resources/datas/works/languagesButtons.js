// Import enums
import eLanguages from "../enums/eLanguages";
import eLanguagesIds from "../enums/works/eLanguagesIds";

// Import images
import all from "../../images/works/filters/All.png";

const LanguagesButtons = 
[
    {
        id : eLanguagesIds.all,
        image : all,
        defaultCheck : true,
    },
    {
        id : eLanguagesIds.blade,
        image : eLanguages.blade.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.c,
        image : eLanguages.c.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.cpp,
        image : eLanguages.cpp.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.csharp,
        image : eLanguages.csharp.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.css,
        image : eLanguages.css.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.dart,
        image : eLanguages.dart.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.go,
        image : eLanguages.go.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.html,
        image : eLanguages.html.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.java,
        image : eLanguages.java.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.javascript,
        image : eLanguages.javascript.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.php,
        image : eLanguages.php.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.powershell,
        image : eLanguages.powershell.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.python,
        image : eLanguages.python.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.sql,
        image : eLanguages.sql.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.sqlite,
        image : eLanguages.sqlite.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.swift,
        image : eLanguages.swift.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.typescript,
        image : eLanguages.typescript.image,
        defaultCheck : false,
    },
    {
        id : eLanguagesIds.rust,
        image : eLanguages.rust.image,
        defaultCheck : false,
    },
]

export default LanguagesButtons;