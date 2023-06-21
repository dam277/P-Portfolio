// Impot hooks
import { useContext, useState } from "react";
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { Button } from "../../../resources/css/mainStyle";
import { MainContainer, Messages, Presentation, Paragraph, Text, Works, LastProject, Carousel, PageButton, PointButton, ActualProject } from "../../../resources/css/homeStyle";

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import translations
import fr from "../../../resources/langs/fr/home.json";
import en from "../../../resources/langs/en/home.json"

function Home()
{
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    // Check if the index is pair
    const isPair = (index) => index % 2 === 0;

    return(
        <main>
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
                        <h2></h2>
                        <Carousel>
                            {/* <PageButton></PageButton>
                            <PointButton></PointButton>
                            <PageButton></PageButton> */}
                        </Carousel>
                    </LastProject>
                    <ActualProject>

                    </ActualProject>
                </Works>
            </MainContainer>
        </main>
    )
}

export default Home;