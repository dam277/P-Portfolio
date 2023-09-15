/**
 * @author : Damien Loup
 * @component : About
 * @description : Display the about page of the website
 */

//#region - Import Libraries
import { Outlet, NavLink } from "react-router-dom";
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
import getTranslations from "../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/about.json";
import en from "../../../resources/langs/en/about.json";
//#endregion

//#region - Import Datas
import SocialNetworks from "../../../resources/datas/socialNetworks";
import { colorPalette } from "../../../resources/css/styles";
//#endregion

//#region - Import Styles
import { MainContainer, MainImg, Supplements, Presentation, MainImgContainer, SocialNetworksContainer, PresentationText, SocialNetwork, Introduction, IntroductionTitle, Links } from "../../../resources/css/aboutStyle";
import { Text, Button } from "../../../resources/css/mainStyle";
//#endregion

//#region - Import Images
import smallPortrait from "../../../resources/images/about/smallPortait.png"
//#endregion

/**
 * Display the about page
 * @returns {HTMLElement} About html elements
 */
function About()
{
    //#region - Set the translations
    const translations = getTranslations(fr, en);
    //#endregion

    // Return html elements
    return(
        <MainContainer>
            {/* Presentation of me */}
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
            {/* Social Networks */}
            <SocialNetworksContainer>
                {SocialNetworks.map((network, index) => 
                (
                    <a key={`${index}-${network.name}`} href={network.url}>
                        <SocialNetwork src={network.image} />
                    </a>
                ))}
            </SocialNetworksContainer>
            {/* Introduction about myself */}
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
            {/* Subpages buttons + outlet */}
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