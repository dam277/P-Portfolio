// Import libraries
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// Import contexts
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { MainContainer, MainImg, Supplements, Presentation, SocialNetworksContainer, PresentationText, SocialNetwork } from "../../../resources/css/aboutStyle";
import { Text } from "../../../resources/css/mainStyle";
import { Button } from "../../../resources/css/mainStyle";

// Import images
import smallPortrait from "../../../resources/images/about/smallPortait.png"

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import translations
import fr from "../../../resources/langs/fr/about.json";
import en from "../../../resources/langs/en/about.json";

// Import datas
import { socialNetworks } from "../../../resources/datas/socialNetworks";

function About()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <MainContainer>
            <Presentation>
                <MainImg src={smallPortrait} />
                <PresentationText>
                    {translations.presentation.map((content) => 
                    (
                        <Text color={content.color}>
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