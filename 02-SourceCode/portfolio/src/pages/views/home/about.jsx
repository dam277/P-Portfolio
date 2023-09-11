// Import libraries
import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";

// Import contexts
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { MainContainer, MainImg, Supplements, Presentation, MainImgContainer, SocialNetworksContainer, PresentationText, SocialNetwork, Introduction, IntroductionTitle, Links } from "../../../resources/css/aboutStyle";
import { Text, Button } from "../../../resources/css/mainStyle";

// Import images
import smallPortrait from "../../../resources/images/about/smallPortait.png"

// Import globals
import getTranslations from "../../../utils/globals/getTranslations";

// Import translations
import fr from "../../../resources/langs/fr/about.json";
import en from "../../../resources/langs/en/about.json";

// Import datas
import SocialNetworks from "../../../resources/datas/socialNetworks";
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
                    {translations.presentation.map((content, index) => 
                    (
                        <p key={`presentation-${index}`}>
                            <Text setResponsive={true} size="18" color={content.color}>
                                {content.text}
                            </Text>
                        </p>
                    ))}
                </PresentationText>
            </Presentation>
            <SocialNetworksContainer>
                {SocialNetworks.map((network, index) => 
                (
                    <a key={`${index}-${network.name}`} href={network.url}>
                        <SocialNetwork src={network.image} />
                    </a>
                ))}
            </SocialNetworksContainer>
            <Introduction>
                <IntroductionTitle>{translations.introduction.title}</IntroductionTitle>
                {translations.introduction.texts.map((content, index) => 
                (
                    <p key={`introduction-${index}`}>
                        <Text color={colorPalette.primary.text.paragraph.color} margin="10px">
                            {content.text}
                        </Text>
                    </p>
                ))}
            </Introduction>
            <Supplements>
                <Links>
                    <NavLink to="studyPath">
                        {({ isActive }) => 
                        (
                            <Button isActive={isActive} width="200px">{translations.supplements.path}</Button>
                        )}
                    </NavLink>
                    <NavLink to="competences">
                        {({ isActive }) => 
                        (
                            <Button isActive={isActive} width="200px">{translations.supplements.competences}</Button>
                        )}
                    </NavLink>
                </Links>
                <Outlet />
            </Supplements>
        </MainContainer>
    )
}

export default About;