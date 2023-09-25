/**
 * @author : Damien Loup
 * @component : Home
 * @description : Display the homepage
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
import { useState } from "react";
//#endregion

//#region - Import Globals
import getTranslations from "../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
import eCompletionIds from "../../../resources/datas/enums/works/eCompletionIds";
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/home.json";
import en from "../../../resources/langs/en/home.json"
//#endregion

//#region - Import Datas
import GithubWorks from "../../../resources/datas/githubWorks";
//#endregion

//#region - Import Styles
import { RadioWrapper, RadioSection, RadioLabelWithoutText, RadioLabel, RadioButton, RadioDesign, Text } from "../../../resources/css/mainStyle";
import { MainContainer, Messages, Presentation, Paragraph, Works, Carousel, PageButtonsContainer, PointButton, WorkBox, WorkTitle, ProjectImageNavlink, ProjectImage } from "../../../resources/css/homeStyle";
import { colorPalette } from "../../../resources/css/styles";
import ReplaceSpecificString from "../../../utils/globals/replaceSpecificString";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display the home page with the projects selected
 * @returns {HTMLElement} Home html elements
 */
function Home()
{
    //#region - Important elements
    const worksFinished = GithubWorks.filter(work => work.completion === eCompletionIds.finished);            // work finished successfully
    const worksWorkingOn = GithubWorks.filter(work => work.completion === eCompletionIds.inDevelopment);      // Project in development
    //#endregion
    
    //#region - Set States
    const [pageLast, setPageLast] = useState(worksFinished[0].id);            // "Last" carousel page    
    const [pageActual, setPageActual] = useState(worksWorkingOn[0].id);        // "Actual" carousel page
    //#endregion
    
    //#region - Other functions
    /**
     * Check if the index is pair
     * @param {number} index => Index of the array
     * @returns boolean 
     */
    const isPair = (index) => index % 2 === 0;
    //#endregion
    
    //#region - Set the translations
    const translations = getTranslations(fr, en);
    //#endregion

    // Return html elements
    return(
        <MainContainer>
            {/* Firt messages (welcome) */}
            <Messages>
                <Paragraph>
                    {translations.welcomeMessage.map((message, index) =>
                    (
                        <Text key={`welcome-${index}`}  color={isPair(index) && colorPalette.primary.text.color}>{ReplaceSpecificString(message)}</Text>
                    ))}
                </Paragraph>
                <Presentation>
                    <Paragraph>
                        {translations.presentation.aboutMe.map((message, index) =>
                        (
                            <Text key={`aboutme-${index}`} size={30} color={!isPair(index) && colorPalette.primary.text.color}>{ReplaceSpecificString(message)}</Text>
                        ))}
                    </Paragraph>
                    <Paragraph>
                        {translations.presentation.work.map((message, index) =>
                        (
                            <Text key={`work-${index}`} size={30} color={!isPair(index) && colorPalette.primary.text.color}>{ReplaceSpecificString(message)}</Text>
                        ))}
                    </Paragraph>
                </Presentation>
            </Messages>
            {/* Carousels of last and current works */}
            <Works>
                {/* Last work carousel */}
                <WorkBox>
                    <WorkTitle>{translations.works.last}</WorkTitle>
                    <Carousel position="left">
                        <ProjectImageNavlink  to={`/works/${pageLast}`}>
                            <ProjectImage src={pageLast && worksFinished.find((work) => work.id === pageLast).image} />
                        </ProjectImageNavlink>
                        <PageButtonsContainer>
                            <RadioSection>
                                {worksFinished.map((work, index) =>
                                (
                                    <RadioLabelWithoutText key={`last-${work.id}`} htmlFor={`last-${work.id}`}>
                                        <RadioButton type="radio" name="last" id={`last-${work.id}`} value={work.name} onChange={(e) => setPageLast(e.target.id.replace("last-", ""))} defaultChecked={index === 0}/>
                                        <RadioDesign checked={pageLast === work.id} />
                                    </RadioLabelWithoutText>
                                ))}
                            </RadioSection>
                        </PageButtonsContainer>
                    </Carousel>
                </WorkBox>
                {/* Actual work carousel */}
                <WorkBox>
                    <WorkTitle>{translations.works.actual}</WorkTitle>
                    <Carousel position="right">
                        <ProjectImageNavlink to={`/works/${pageActual}`}>
                            <ProjectImage src={pageActual && worksWorkingOn.find((work) => work.id === pageActual).image} />
                        </ProjectImageNavlink>
                        <PageButtonsContainer>
                            <RadioSection>
                                {worksWorkingOn.map((work, index) =>
                                (
                                    <RadioLabelWithoutText key={`actual-${work.id}`} htmlFor={`actual-${work.id}`}>
                                        <RadioButton type="radio" name="actual" id={`actual-${work.id}`} value={work.name} onChange={(e) => setPageActual(e.target.id.replace("actual-", ""))} defaultChecked={index === 0}/>
                                        <RadioDesign checked={pageActual === work.id} />
                                    </RadioLabelWithoutText>
                                ))}
                            </RadioSection>
                        </PageButtonsContainer>
                    </Carousel>
                </WorkBox>
            </Works>
        </MainContainer>
    )
}

export default Home;