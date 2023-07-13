// Import libraries
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// Import contexts
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { MainContainer, MainImg, Supplements, Presentation, MainImgContainer, SocialNetworksContainer, PresentationText, SocialNetwork, Introduction, IntroductionTitle } from "../../../resources/css/aboutStyle";
import { Text, Button } from "../../../resources/css/mainStyle";

// Import images
import smallPortrait from "../../../resources/images/about/smallPortait.png"

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import translations
import fr from "../../../resources/langs/fr/about.json";
import en from "../../../resources/langs/en/about.json";

// Import datas
import { socialNetworks } from "../../../resources/datas/socialNetworks";
import { colorPalette } from "../../../resources/css/styles";

function About()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <MainContainer>
            <Presentation>
                <MainImgContainer>
                    <MainImg src={smallPortrait} />
                </MainImgContainer>
                <PresentationText>
                    {translations.presentation.map((content) => 
                    (
                        <Text setResponsive={true} size="18" color={content.color}>
                            {content.text}
                        </Text>
                    ))}
                </PresentationText>
            </Presentation>
            <SocialNetworksContainer>
                {socialNetworks.map((network) => 
                (
                    <a href={network.url}>
                        <SocialNetwork src={network.image} />
                    </a>
                ))}
            </SocialNetworksContainer>
            <Introduction>
                <IntroductionTitle>{translations.introduction.title}</IntroductionTitle>
                {translations.introduction.texts.map((content) => 
                (
                    <Text color={colorPalette.main.text.paragraph.color} margin="10px">
                        {content.text}
                    </Text>
                ))}
            </Introduction>
            <Supplements>
                <Link to="studyPath">
                    <Button>Mon parcours</Button>
                </Link>
                <Link to="competences">
                    <Button>Mes compétences</Button>
                </Link>
                <Outlet />
            </Supplements>
        </MainContainer>
    )
}

export default About;