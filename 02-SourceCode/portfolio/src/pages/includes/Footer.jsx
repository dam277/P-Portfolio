/**
 * @author : Damien Loup
 * @component : Footer
 * @description : This component is responsible for displaying the footer of the website
 */

//#region - Import Hooks
//#endregion

//#region - Import Globals
import GetTranslations from "../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"
//#endregion

//#region - Import Datas
import { Creator } from "../../resources/datas/footer/creator";
import Programs from "../../resources/datas/footer/programs";
//#endregion

//#region - Import Styles
import { FooterContainer, AboutProject, Copyright, A, ProfileText, Hr, FooterArticle, FooterSection, ProfileContainer, ProfileLinkImage, LogoFooter, ImgProgram, ProgramsContainer, ProgramTypeContainer, H2, H3, H4 } from "../../resources/css/footerStyle";
import { Text } from "../../resources/css/mainStyle";
//#endregion

//#region - Import Images
import github from "../../resources/images/socialNetworks/github.png";
import gmail from "../../resources/images/socialNetworks/gmail.png";
//#endregion

/**
 * Display the footer of the website
 * @returns {HTMLElement} Footer html elements
 */
function Footer()
{
    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    //#endregion    

    // Return html elements
    return(
        <FooterContainer>
            <FooterArticle>
                {/* Big logo */}
                <FooterSection flex={3}>
                    <LogoFooter src={Creator.logoFooter} alt={translations.footer.logoFooterImageAlt} />
                </FooterSection>
                <Hr doNotDisplay={true}/>
                {/* About project section */}
                <FooterSection flex={4}>
                    <AboutProject>
                        {/* Title and description */}
                        <div>
                            <H2>{translations.footer.aboutTitle}</H2>
                            {translations.footer.projectDescription.map((line, index) => 
                            (
                                <p key={index}>
                                    <Text>{line}</Text>
                                </p>
                            ))}
                        </div>
                        {/* Github and Gmail links */}
                        <ProfileContainer>
                            <A href={Creator.githubLink}>
                                <ProfileLinkImage src={github} alt="Github logo" />
                                <ProfileText>{Creator.name}</ProfileText>
                            </A>
                            <A href={"mailto:"+Creator.contact}>
                                <ProfileLinkImage src={gmail} height="35px" alt="Gmail logo" />
                                <ProfileText>{Creator.contact}</ProfileText>
                            </A>
                        </ProfileContainer>
                    </AboutProject>
                </FooterSection>
                {/* Languages and libraries used for project */}
                <FooterSection flex={3}>
                    <H3>{translations.footer.programsTitle}</H3>
                    <ProgramsContainer>
                        <ProgramTypeContainer>
                            <H4>{translations.footer.languages}</H4>
                            {Programs.languages.map((language, index) => 
                            (
                                <ImgProgram key={`${language}-${index}`} src={language} />
                            ))}
                        </ProgramTypeContainer>
                        <ProgramTypeContainer>
                            <H4>{translations.footer.libraries}</H4>
                            {Programs.frameworks.map((framework, index) => 
                            (
                                <ImgProgram key={`${framework}-${index}`} src={framework} />
                            ))}
                        </ProgramTypeContainer>
                    </ProgramsContainer>
                </FooterSection>
            </FooterArticle>
            <Hr />
            {/* Copyright */}
            <Copyright>{translations.footer.copyright}</Copyright>
        </FooterContainer>
    )
}

export default Footer;