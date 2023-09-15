/**
 * @author : Damien Loup
 * @component : Competences
 * @description : Displays the competences of the about page
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
import GetTranslations from "../../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
import eCompetencesTypes from "../../../../resources/datas/enums/eCompetencesTypes";
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
import CompetenceCard from "../../CompetenceCard";
//#endregion

//#region - Import Translations
import fr from "../../../../resources/langs/fr/about/competences.json";
import en from "../../../../resources/langs/en/about/competences.json";
//#endregion

//#region - Import Datas
import { LanguageCompetences, EngineCompetences } from "../../../../resources/datas/about/competences";
//#endregion

//#region - Import Styles
import { colorPalette } from "../../../../resources/css/styles";
import { CompetencesContainer} from "../../../../resources/css/about/competencesStyle";
import { Text } from "../../../../resources/css/mainStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display the comptetences list
 * @returns {HTMLElement} Competences html elements
 */
function Competences()
{
    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    //#endregion

    // Return html elements
    return(
        <>
            {/* About competences */}
            <Text color={colorPalette.primary.text.paragraph.color}>{translations.about}</Text>
            {/* All competences */}
            <CompetencesContainer>
                {LanguageCompetences.map((competence, index) => 
                (
                    competence.learned && 
                    (
                        // Display a component of competence card
                        <CompetenceCard key={`languagesComp-${index}`} index={index} translations={translations} competence={competence} type={eCompetencesTypes.language}/>
                    )
                ))}
                {EngineCompetences.map((competence, index) => 
                (
                    competence.learned && 
                    (
                        // Display a component of competence card
                        <CompetenceCard key={`enginesComp-${index}`} index={index} translations={translations} competence={competence} type={eCompetencesTypes.engine}/>
                    )
                ))}
            </CompetencesContainer>
        </>
    )
}

export default Competences;