/**
 * @author : Damien Loup
 * @component : Details
 * @description : Display the details of a specific work
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
import { useParams, Navigate } from "react-router-dom";
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
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/details.json";
import en from "../../../resources/langs/en/details.json"
import descriptionsFr from "../../../resources/langs/fr/works/descriptions.json";
import descriptionsEn from "../../../resources/langs/en/works/descriptions.json";
//#endregion

//#region - Import Datas
import Projects from "../../../resources/datas/projects";
import eDirections from "../../../resources/datas/enums/details/eDirection";
//#endregion

//#region - Import Styles
import { MainContainer, WorkContainer, WorkImageWrapper, Title, DescriptionTitle, DescriptionContainer, Description, DescriptionSubtitle, WorkDescriptionTable, WorkDescriptionThead, WorkDescriptionTbody, WorkDescriptionTr, WorkDescriptionTd, Image, AssociatedWorks, AssociatedWorksContainer, AssociatedWork,  AssociatedWorksTitle, AssociatedWorkLink, WorkDetailsContainer, DetailsTitle, DetailsContainer, Detail, DetailTitle, DetailContainer, DetailImage, WorkChoiceContainer, WorkChoiceLink, TextButton } from "../../../resources/css/detailsStyle";
import { Button } from "../../../resources/css/mainStyle";
import ColoredText from "../../components/smallElements/ColoredText";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display the details of a specific work
 * @returns {HTMLElement} Details html elements
 */
function Details()
{
    
    //#region - Important elements
    const { id } = useParams();
    const actualWork = Projects.find((work) => work.id === id);
    //#endregion

    // Check if the work exists and redirect to the works page
    if (!actualWork)
        return <Navigate to={"/works"} />;
    
    //#region - Set States
    //#endregion

    //#region - UseEffect
    //#endregion

    //#region - Handle functions
    //#endregion
    
    //#region - Other functions
    const choiceId = (direction) => 
    {
        if (direction === eDirections.previous) 
        {
            if(actualWork.id === Projects[0].id)
                return Projects[Projects.length - 1].id;
            return Projects[index(actualWork.id) - 1].id;
        }
        else
            if(actualWork.id === Projects[Projects.length - 1].id)
                return Projects[0].id;
            return Projects[index(actualWork.id) + 1].id;
    }

    const index = (id) => Projects.findIndex(project => project.id === id);
    //#endregion
    
    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    const descriptionTranslation = GetTranslations(descriptionsFr, descriptionsEn)[id];
    //#endregion

    //#region - Events
    //#endregion

    // Return html elements
    return(
        <MainContainer>
            <WorkContainer>
                <Title>{actualWork.name}</Title>
                {descriptionTranslation.map((description) => 
                (
                    <>
                        <DescriptionTitle>{description.title}</DescriptionTitle>
                        <DescriptionContainer>
                            {description.text.map((paragraph) => 
                            (
                                typeof paragraph === 'string' ? 
                                (
                                    paragraph.includes(eKeyWords.title) ?
                                    <DescriptionSubtitle>{paragraph.replace(eKeyWords.title, "")}</DescriptionSubtitle>
                                    :
                                    <Description>
                                        {paragraph.includes(eKeyWords.color[1]) ?
                                        (
                                            <ColoredText text={paragraph}/>
                                        )
                                        :
                                        (
                                            <>
                                                {paragraph}{paragraph.charAt(paragraph.length - 1) !== ":" && paragraph.charAt(paragraph.length - 1) !== "?" && "."}
                                            </>
                                        )}
                                    </Description>
                                    
                                )
                                :
                                (
                                    <WorkDescriptionTable>
                                        <WorkDescriptionThead key={`descriptionThead-${index}`}>
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
                                                    <WorkDescriptionTr key={`descriptionTbodyTr-${index}`} index={index}>
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
                        </DescriptionContainer>
                    </>
                ))}
                <WorkImageWrapper>
                    <Image src={actualWork.image} alt="Work illustration" />
                </WorkImageWrapper>
                <AssociatedWorks>
                    <AssociatedWorksTitle>{translations.associatedWork.title}</AssociatedWorksTitle>
                    <AssociatedWorksContainer>
                        {actualWork.associatedProjects.length > 0 ?
                        (
                            actualWork.associatedProjects.map((workId) => 
                            (
                                <AssociatedWork>
                                    <AssociatedWorkLink to={`/works/${workId}`}>
                                        <Button size="16" setResponsiveMobile={true} mobileSize="19">{translations.associatedWork.detail}</Button>
                                    </AssociatedWorkLink>
                                    &nbsp;
                                    {Projects.find((work) => work.id === workId).name}
                                </AssociatedWork>
                            ))
                        )
                        :
                        (
                            <>
                                -
                            </>
                        )}
                    </AssociatedWorksContainer>
                </AssociatedWorks>
                <WorkDetailsContainer>
                    <DetailsTitle>{translations.details}</DetailsTitle>
                    <DetailsContainer>
                        <Detail>
                            <DetailTitle>{translations.languages}</DetailTitle>
                            <DetailContainer>
                                {actualWork.languages.map((language) => 
                                (
                                    <DetailImage src={language.image} alt={language.id}/>
                                ))}
                            </DetailContainer>
                        </Detail>
                        <Detail>
                            <DetailTitle>{translations.completion.title}</DetailTitle>
                            <DetailContainer completion={actualWork.completion}>
                                {translations.completion[actualWork.completion]}
                            </DetailContainer>
                        </Detail>
                        <Detail>
                            <DetailTitle>{translations.github}</DetailTitle>
                            <DetailContainer>
                                {actualWork.github?.link ? 
                                (
                                    <a href={actualWork.github.link}>
                                        <Button size="16" setResponsiveMobile={true} mobileSize="19">{actualWork.github.name}</Button>
                                    </a>
                                )
                                :
                                (
                                    <>
                                        -
                                    </>
                                )}
                            </DetailContainer>
                        </Detail>
                        <Detail>
                            <DetailTitle>{translations.website}</DetailTitle>
                            <DetailContainer>
                            {actualWork.website?.link ? 
                                (
                                    <a href={actualWork.website.link}>
                                        <Button>{actualWork.website.name}</Button>
                                    </a>
                                )
                                :
                                (
                                    <>
                                        -
                                    </>
                                )}
                            </DetailContainer>
                        </Detail>
                        <Detail>
                            <DetailTitle>{translations.download}</DetailTitle>
                            <DetailContainer>
                            {actualWork.download ? 
                                (
                                    <a href={actualWork.download}>
                                        <Button>{translations.version} {actualWork.version}</Button>
                                    </a>
                                )
                                :
                                (
                                    <>
                                        -
                                    </>
                                )}
                            </DetailContainer>
                        </Detail>
                    </DetailsContainer>
                </WorkDetailsContainer>
            </WorkContainer>
            <WorkChoiceContainer>
                <WorkChoiceLink align="left" to={`/works/${choiceId(eDirections.previous)}`}>
                    <Button minwidth="100px" maxwidth="205px" width="100%" size="16" setResponsiveMobile={true} mobileSize="19">
                        <TextButton>{translations.previous}</TextButton>
                    </Button>
                </WorkChoiceLink>
                <WorkChoiceLink align="right" to={`/works/${choiceId(eDirections.next)}`}>
                    <Button minwidth="100px" maxwidth="205px" width="100%" size="16" setResponsiveMobile={true} mobileSize="19">
                        <TextButton>{translations.next}</TextButton>
                    </Button>
                </WorkChoiceLink>
            </WorkChoiceContainer>
        </MainContainer>
    )
}

export default Details;