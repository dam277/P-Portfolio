/**
 * @author : Damien Loup
 * @component : Work
 * @description : Display a work card in the works page
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
import GetTranslations from "../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/works/descriptions.json";
import en from "../../../resources/langs/en/works/descriptions.json"
//#endregion

//#region - Import Datas
import Projects from "../../../resources/datas/projects";
//#endregion

//#region - Import Styles
import { WorkContainer, WorkImageWrapper, WorkImage, WorkContent, WorkTitleContainer, WorkTitle, WorkLanguagesImageContainer, WorkLanguagesImage, WorkDescription, WorkDescriptionTitle, WorkDescriptionParagraph, WorkDescriptionAssociatedWorksContainer, WorkCompletion } from "../../../resources/css/works/workStyle";
import { Button } from "../../../resources/css/mainStyle";
import { NavLink } from "react-router-dom";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display a work card in the works page
 * @param {object} translations => Translation of the page
 * @param {string} keyValue => Value of the key of the container
 * @param {image} image => Image of the work
 * @param {string} title =>  Title of the work
 * @param {string} completion => Completion of the work
 * @param {string} type => Type of the work
 * @returns {HTMLElement} Work html elements
 */
function Work({ translations, keyValue, work})
{
    const descriptionTranslations = GetTranslations(fr, en);

    function handleAssociatedProject(id)
    {
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth" })
    }

    // Return html elements
    return (
        <WorkContainer id={work.id} key={keyValue} completion={work.completion}>
            {/* Image of work */}
            <WorkImageWrapper>
                <WorkImage src={work.image}/>
            </WorkImageWrapper>
            {/* Content of work */}
            <WorkContent>
                <WorkTitleContainer>
                    <WorkTitle>{work.name} - {translations.works.type[work.type]}</WorkTitle>
                    <WorkLanguagesImageContainer>
                        {work.languages.map((language, index) => 
                        (
                            <WorkLanguagesImage key={`${language.id}-${index}`} src={language.image} alt="language"/>
                        ))}
                    </WorkLanguagesImageContainer>
                </WorkTitleContainer>
                <WorkDescription>
                    {descriptionTranslations[work.id].map((description, index) => 
                    (
                        <>
                            <WorkDescriptionTitle key={`descriptionTitle-${index}`}>{description.title}</WorkDescriptionTitle>
                            {description.text.map((paragraph, index) => 
                            (
                                <WorkDescriptionParagraph key={`descriptionParagraph-${index}`}>
                                    - {paragraph} 
                                </WorkDescriptionParagraph>
                            ))}
                        </>
                    ))}
                    {work.associatedProjects.length > 0 && (<WorkDescriptionTitle>{translations.works.associatedWorks}</WorkDescriptionTitle>)}
                    <WorkDescriptionAssociatedWorksContainer>
                        {work.associatedProjects.map((projectId, index) => 
                        (
                            <Button completion={work.completion} width={"300px"} setResponsiveMobileSmall={true} mobileSmallSize={17} margin={"2px"} size={15} onClick={() => handleAssociatedProject(projectId)}>{Projects.find((project) => project.id === projectId).name}</Button>
                        ))}
                    </WorkDescriptionAssociatedWorksContainer>
                </WorkDescription>
                <WorkCompletion completion={work.completion}>{translations.works.completion[work.completion]}</WorkCompletion>
            </WorkContent>
        </WorkContainer>
    )
}

export default Work;