// Import libraries
import { useContext, useState, useRef, useEffect  } from "react";

// Import translations
import fr from "../../../../resources/langs/fr/about/competences.json";
import en from "../../../../resources/langs/en/about/competences.json";

// Import styles
import { colorPalette } from "../../../../resources/css/styles";
import { CompetencesContainer} from "../../../../resources/css/about/competencesStyle";
import { Text } from "../../../../resources/css/mainStyle";

// Import datas
import { LanguageCompetences, EngineCompetences } from "../../../../resources/datas/about/competences";

// Import globals
import getTranslations from "../../../../utils/globals/getTranslations";

// Import contexts
import { LangContext } from "../../../../utils/contexts/LangContext";

// Import components
import CompetenceCard from "../../CompetenceCard";

function Competences()
{
    // Get the translations
    const { language } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    const types = {
        Languages : "language",
        Engine : "engine",
    }

    return(
        <>
            <Text color={colorPalette.primary.text.paragraph.color}>{translations.about}</Text>
            <CompetencesContainer>
                {LanguageCompetences.map((competence, index) => 
                (
                    competence.learned && 
                    (
                        <CompetenceCard index={index} translations={translations} competence={competence} type={types.Language}/>
                    )
                ))}
                {EngineCompetences.map((competence, index) => 
                (
                    competence.learned && 
                    (
                        <CompetenceCard index={index} translations={translations} competence={competence} type={types.Engine}/>
                    )
                ))}
            </CompetencesContainer>
        </>
    )
}

export default Competences;