// Import libraries
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// Import translations
import fr from "../../../../resources/langs/fr/about/studyPath.json";
import en from "../../../../resources/langs/en/about/studyPath.json";

// Import globals
import getTranslations from "../../../../utils/globals/getTranslations";

// Import contexts
import { LangContext } from "../../../../utils/contexts/LangContext";

function StudyPath()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <container>
            StudyPath
        </container>
    )
}

export default StudyPath;