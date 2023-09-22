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
import { MainContainer, Messages, Presentation, Paragraph, Text, Works, LastProject, Carousel, PageButtonsContainer, PointButton, ActualProject, WorkTitle, ProjectImage } from "../../../resources/css/homeStyle";
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
    const projectsFinished = GithubWorks.filter(project => project.completion === eCompletionIds.finished);            // Project finished successfully
    const projectsWorkingOn = GithubWorks.filter(project => project.completion === eCompletionIds.inDevelopment);      // Project in development
    //#endregion
    
    //#region - Set States
    const [pageLast, setPageLast] = useState(1);            // Last page of the carousel    
    const [pageActual, setPageActual] = useState(1);        // Actual page of the carousel
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
                        <Text isPair={isPair(index)}>{message}</Text>
                    ))}
                </Paragraph>
                <Presentation>
                    <Paragraph>
                        {translations.presentation.aboutMe.map((message, index) =>
                        (
                            <Text isPair={!isPair(index)}>{message}</Text>
                        ))}
                    </Paragraph>
                    <Paragraph>
                        {translations.presentation.work.map((message, index) =>
                        (
                            <Text isPair={!isPair(index)}>{message}</Text>
                        ))}
                    </Paragraph>
                </Presentation>
            </Messages>
            {/* Carousels of last and current works */}
            <Works>
                {/* Last project */}
                <LastProject>
                    <WorkTitle>{translations.works.last}</WorkTitle>
                    <Carousel>
                        <ProjectImage src={projectsFinished.length > 0 && projectsFinished[pageLast - 1].image} />
                        <PageButtonsContainer>
                            <PointButton type="radio" id={0} value={1} name="pageLast" onClick={(e) => setPageLast(e.target.value)}/>
                            {projectsFinished.map((project, index) => 
                            (
                                index < projectsFinished.length - 1 &&
                                (
                                    <PointButton key={project.id} type="radio" id={project.id} value={index + 2} name="pageLast" onClick={(e) => setPageLast(e.target.value)}/>
                                )
                            ))}
                        </PageButtonsContainer>
                    </Carousel>
                </LastProject>
                {/* Actual project */}
                <ActualProject>
                    <WorkTitle>{translations.works.actual}</WorkTitle>
                    <Carousel>
                        <ProjectImage src={projectsWorkingOn.length > 0 && projectsWorkingOn[pageActual - 1].image} />
                        <PageButtonsContainer>
                            <PointButton type="radio" id={0} value={1} name="pageActual" onClick={(e) => setPageActual(e.target.value)}/>
                            {projectsWorkingOn.map((project, index) => 
                            (
                                index < projectsWorkingOn.length - 1 &&
                                (
                                    <PointButton key={project.id} type="radio" id={project.id} value={index + 2} name="pageActual" onClick={(e) => setPageActual(e.target.value)}/>
                                )
                            ))}
                        </PageButtonsContainer>
                    </Carousel>
                </ActualProject>
            </Works>
        </MainContainer>
    )
}

export default Home;