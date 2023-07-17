// Import libraries
import { useContext, useState, useRef, useEffect  } from "react";

// Import translations
import fr from "../../../resources/langs/fr/about/competences.json";
import en from "../../../resources/langs/en/about/competences.json";

// Import styles
import { CompetencesContainer, Competence, CompetenceWrapper, Language, Framework, Engine, Library, CompetenceImage, SubLanguageName } from "../../../resources/css/about/competencesStyle";

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
            {LanguageCompetences.map((competence, index) => 
            (
                competence.learned && 
                (
                    <CompetenceWrapper data-aos="zoom-in" key={index}>
                        <Competence>
                            <Language>
                                {competence.languages.map((language) => 
                                (
                                    <CompetenceImage big={true} src={language.image} />
                                ))}
                            </Language>
                            <Framework>
                                <span>{translations.framework}</span>
                                <div>
                                    {competence.frameworks.map((framework) => 
                                    (
                                        framework.learned && 
                                        (
                                            <CompetenceImage src={framework.image} />
                                        )
                                    ))}
                                </div>
                            </Framework>
                            <Library>
                                <span>{translations.libraries}</span>
                                <div>
                                    {competence.libraries.map((librarie) => 
                                    (
                                        librarie.learned && 
                                        (
                                            <CompetenceImage src={librarie.image} />
                                        )
                                    ))}
                                </div>
                            </Library>
                                <SubLanguageName>
                                    {competence.languages.map((language, index) => 
                                    (
                                        <>
                                            {competence.languages.length >= 2 && index == competence.languages.length - 1 ? " - " : ""}{language.name}
                                        </>
                                    ))}
                                </SubLanguageName>
                        </Competence>
                    </CompetenceWrapper>
                )
            ))}
        </CompetencesContainer>
    )
}

export default Competences;