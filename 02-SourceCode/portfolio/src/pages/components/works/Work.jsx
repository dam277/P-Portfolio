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
import eKeyWords from "../../../resources/datas/enums/eKeyWords";
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
import ColoredText from "../smallElements/ColoredText";
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/works/descriptions.json";
import en from "../../../resources/langs/en/works/descriptions.json"
//#endregion

//#region - Import Datas
import Projects from "../../../resources/datas/projects";
//#endregion

//#region - Import Styles
import { WorkContainer, WorkImageWrapper, WorkImage, WorkContent, WorkTitleContainer, WorkTitle, WorkDistinctionImagesContainer, WorkDistinctionImage, WorkDescription, WorkDescriptionTitle, WorkDescriptionSubtitle, WorkDescriptionParagraph, WorkDescriptionTable, WorkDescriptionThead, WorkDescriptionTbody, WorkDescriptionTr, WorkDescriptionTd, WorkDescriptionAssociatedWorksContainer, WorkCompletion } from "../../../resources/css/works/workStyle";
import { Button } from "../../../resources/css/mainStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display a work card in the works page
 * @param {object} translations => Translation of the page
 * @param {string} keyValue => Value of the key of the container
 * @param {string} work => Actual work 
 * @returns {HTMLElement} Work html elements
 */
function Work({ translations, keyValue, work})
{
    //#region Get translations
    const descriptionTranslations = GetTranslations(fr, en);
    //#endregion

    //#region Handle functions
    /**
     * Handle the click of a associated work button to automatically scroll to the one which has the specified ID
     * @param {string} id => ID of the work
     */
    function handleAssociatedProject(id)
    {
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth" })
    }
    //#endregion

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
                    <WorkDistinctionImagesContainer>
                        {work.languages.map((language, index) => 
                        (
                            <WorkDistinctionImage key={`${index}-${keyValue}`} src={language.image} alt={language.name}/>
                        ))}
                        {work.platforms.map((platform, index) =>
                        (
                            <WorkDistinctionImage key={`${index}-${keyValue}`} src={platform.image} alt={platform.name}/>
                        ))}
                    </WorkDistinctionImagesContainer>
                    
                </WorkTitleContainer>
                <WorkDescription>
                    {descriptionTranslations[work.id].map((description, index) => 
                    (
                        description.text.length > 0 && 
                        (
                            <>
                                <WorkDescriptionTitle key={`descriptionTitle-${index}`}>{description.title}</WorkDescriptionTitle>
                                {description.text.map((paragraph, index) => 
                                (
                                    typeof paragraph === "string" ? 
                                    (
                                        paragraph.includes(eKeyWords.title) ? 
                                        ( 
                                            <WorkDescriptionSubtitle key={`descriptionSubtitle-${index}`}>
                                                {paragraph.replace(eKeyWords.title, "")}
                                            </WorkDescriptionSubtitle>
                                        )
                                        : 
                                        (
                                            <WorkDescriptionParagraph key={`descriptionParagraph-${index}`}>
                                                -&nbsp;
                                                {paragraph.includes(eKeyWords.color[1]) ?
                                                (
                                                    <ColoredText text={paragraph} color={eKeyWords.color} />
                                                )
                                                :
                                                (
                                                    <>
                                                        {paragraph}{paragraph.charAt(paragraph.length - 1) !== ":" && paragraph.charAt(paragraph.length - 1) !== "?" && "."}
                                                    </>
                                                )}
                                                
                                            </WorkDescriptionParagraph>
                                        )
                                    )
                                    :
                                    (
                                        <WorkDescriptionTable>
                                            <WorkDescriptionThead key={`descriptionThead-${index}`} completion={work.completion}>
                                                <WorkDescriptionTr>
                                                    {paragraph[0].map((tHeadText, index) =>
                                                    (
                                                        <WorkDescriptionTd key={`descriptionTheadTd-${index}`}>{tHeadText}</WorkDescriptionTd>
                                                    ))}
                                                </WorkDescriptionTr>
                                            </WorkDescriptionThead>
                                            <WorkDescriptionTbody key={`descriptionBody-${index}`}>
                                                {paragraph.map((tElem, index) =>
                                                (
                                                    index !== 0 &&
                                                    (
                                                        <WorkDescriptionTr key={`descriptionTbodyTr-${index}`} completion={work.completion} index={index}>
                                                            {tElem.map((tHeadText, index) =>
                                                            (
                                                                <WorkDescriptionTd key={`descriptionTbodyTd-${index}`}>{tHeadText}</WorkDescriptionTd>
                                                            ))}
                                                        </WorkDescriptionTr>
                                                    )
                                                ))}
                                            </WorkDescriptionTbody>
                                        </WorkDescriptionTable>
                                    )
                                ))}
                            </>
                        )
                    ))}
                    {work.associatedProjects.length > 0 && (<WorkDescriptionTitle>{translations.works.associatedWorks}</WorkDescriptionTitle>)}
                    <WorkDescriptionAssociatedWorksContainer>
                        {work.associatedProjects.map((projectId, index) => 
                        (
                            <Button key={`assiocatedButton-${index}`} completion={work.completion} width={"300px"} setResponsiveMobileSmall={true} mobileSmallSize={17} margin={"2px"} size={15} onClick={() => handleAssociatedProject(projectId)}>{Projects.find((project) => project.id === projectId).name}</Button>
                        ))}
                    </WorkDescriptionAssociatedWorksContainer>
                </WorkDescription>
                <WorkCompletion completion={work.completion}>{translations.works.completion[work.completion]}</WorkCompletion>
            </WorkContent>
        </WorkContainer>
    )
}

export default Work;