// Import styles
import { AboutProject, Copyright, Table, Td, A, Hr, FooterArticle, FooterSection} from "../../resources/css/footerStyle";

// Import hooks
import { useContext } from "react";

// Import contexts
import { LangContext } from "../../utils/contexts/LangContext";

// Import globals
import getTranslations from "../../utils/globals/getTranslations";

// Import datas
import { Creator } from "../../resources/datas/creator";

// Import translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"

function Footer()
{
    const { language } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <footer>
            <FooterArticle>
                <FooterSection>
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
                                <img src={Creator.profileImage} alt={translations.footer.profileImageAlt} />
                            </Td>
                        </tr>
                        <tr>
                            <Td>
                                <A href={"mailto:"+Creator.contact}>{Creator.contact}</A>
                            </Td>
                        </tr>
                    </Table>
                </FooterSection>
                <FooterSection>
                    <AboutProject>

                    </AboutProject>
                </FooterSection>
                <Hr />
                <FooterSection>
                    <Copyright>{translations.footer.copyright}</Copyright>
                </FooterSection>
            </FooterArticle>
        </footer>
    )
}

export default Footer;