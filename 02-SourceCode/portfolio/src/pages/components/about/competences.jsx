// Import libraries
import { useContext } from "react";

// Import translations
import fr from "../../../resources/langs/fr/about/competences.json";
import en from "../../../resources/langs/en/about/competences.json";

// Import styles
import { CompetencesContainer, Competence, CompetenceWrapper, Language, Framework, Engine, Library, CompetenceImage } from "../../../resources/css/about/competencesStyle";

// Import datas
import { LanguageCompetences, EngineCompetences } from "../../../resources/datas/about/competences";

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import contexts
import { LangContext } from "../../../utils/contexts/LangContext";

function Competences()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <CompetencesContainer>
            {LanguageCompetences.map((competence) => 
            (
                competence.learned && 
                (
                    <CompetenceWrapper>
                        <Competence>
                            <Language>
                                {competence.languages.map((language) => 
                                (
                                    <>
                                        <CompetenceImage src={language.image} />
                                    </>
                                ))}
                            </Language>
                            {/* <Framework>
                                {competence.frameworks.map((framework) => 
                                (
                                    <>
                                        <CompetenceImage src={framework.image} />
                                    </>
                                ))}
                            </Framework>
                            <Library>
                            {competence.libraries.map((librarie) => 
                            (
                                <>
                                    <CompetenceImage src={librarie.image} />
                                </>
                            ))}
                            </Library> */}
                        </Competence>
                    </CompetenceWrapper>
                )
            ))}
        </CompetencesContainer>
    )
}

export default Competences;