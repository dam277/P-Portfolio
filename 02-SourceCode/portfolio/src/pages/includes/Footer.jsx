// Import styles
import { FooterContainer, AboutProject, Copyright, A,ProfileText, Hr, FooterArticle, FooterSection, ProfileContainer, ProfileSection, LogoFooter, ImgProgram, ProgramsContainer, ProgramTypeContainer, H2, H3, H4, AboutSection} from "../../resources/css/footerStyle";

// Import images
import github from "../../resources/images/socialNetworks/github.png";
import gmail from "../../resources/images/socialNetworks/gmail.png";

// Import hooks
import { useContext } from "react";

// Import contexts
import { LangContext } from "../../utils/contexts/LangContext";

// Import globals
import getTranslations from "../../utils/globals/getTranslations";

// Import datas
import { Creator } from "../../resources/datas/footer/creator";
import { Languages, Libraries } from "../../resources/datas/footer/programs";

// Import translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"
import { Button } from "../../resources/css/mainStyle";

function Footer()
{
    const { language } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <FooterContainer>
            <FooterArticle>
                <FooterSection flex={3}>
                    <LogoFooter src={Creator.logoFooter} alt={translations.footer.logoFooterImageAlt} />
                </FooterSection>
                <Hr doNotDisplay={true}/>
                <FooterSection flex={4}>
                    <AboutProject>
                        <div>
                            <H2>{translations.footer.aboutTitle}</H2>
                            {translations.footer.projectDescription.map((line, index) => 
                            (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                        <ProfileContainer>
                            <A href={Creator.githubLink}>
                                <img src={github} height="35px" alt="Github logo" />
                                <ProfileText>{Creator.name}</ProfileText>
                            </A>
                            <A href={"mailto:"+Creator.contact}>
                                <img src={gmail} height="35px" alt="Gmail logo" />
                                <ProfileText>{Creator.contact}</ProfileText>
                            </A>
                        </ProfileContainer>
                    </AboutProject>
                </FooterSection>
                <FooterSection flex={3}>
                    <H3>{translations.footer.programsTitle}</H3>
                    <ProgramsContainer>
                        <ProgramTypeContainer>
                            <H4>{translations.footer.languages}</H4>
                            {Languages.map((language, index) => 
                            (
                                <ImgProgram key={`${language}-${index}`} src={language} />
                            ))}
                        </ProgramTypeContainer>
                        <ProgramTypeContainer>
                            <H4>{translations.footer.libraries}</H4>
                            {Libraries.map((library, index) => 
                            (
                                <ImgProgram key={`${library}-${index}`} src={library} />
                            ))}
                        </ProgramTypeContainer>
                    </ProgramsContainer>
                </FooterSection>
            </FooterArticle>
            <Hr />
            <Copyright>{translations.footer.copyright}</Copyright>
        </FooterContainer>
    )
}

export default Footer;