// Import hooks
import { useContext, useState } from "react";
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { Button } from "../../../resources/css/mainStyle";
import { MainContainer, Messages, Presentation, Paragraph, Text, Works, LastProject, Carousel, PageButtonsContainer, PointButton, ActualProject, WorkTitle, ProjectImage } from "../../../resources/css/homeStyle";

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import datas
import Projects  from "../../../resources/datas/projects";

// Import translations
import fr from "../../../resources/langs/fr/home.json";
import en from "../../../resources/langs/en/home.json"
import eProjectCompletion from "../../../resources/datas/enums/eProjectCompletion";

function Home()
{
    // Get the translations
    const translations = getTranslations(fr, en);

    // Set a state for the page of the carousel
    const [pageLast, setPageLast] = useState(1);
    const [pageActual, setPageActual] = useState(1);

    // Check if the index is pair
    const isPair = (index) => index % 2 === 0;

    // Set a finished project list
    const projectsFinished = Projects.filter(project => project.completion === eProjectCompletion.finished);
    const projectsWorkingOn = Projects.filter(project => project.completion === eProjectCompletion.inDevelopment);

    return(
        <MainContainer>
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
            <Works>
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