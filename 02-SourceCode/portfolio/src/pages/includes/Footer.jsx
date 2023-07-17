// Import styles
import { FooterContainer, AboutProject, Copyright, Table, Td, A, Hr, FooterArticle, FooterSection, ImgProfile, ImgProgram, ProgramsContainer, ProgramTypeContainer, H2, H3, H4, AboutSection} from "../../resources/css/footerStyle";

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
                    <Table>
                        <tr>
                            <th>{translations.footer.creator}</th>
                        </tr>
                        <tr>
                            <Td>
                                <A href={Creator.githubLink} data-replace="get a link">{Creator.name}</A>
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                <ImgProfile src={Creator.profileImage} alt={translations.footer.profileImageAlt} />
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                <A href={"mailto:"+Creator.contact}>{Creator.contact}</A>
                            </Td>
                        </tr>
                    </Table>
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