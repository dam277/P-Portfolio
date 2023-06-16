// Impot hooks
import { useContext, useState } from "react";
import { LangContext } from "../../utils/contexts/LangContext";// Import styles

// Import includes
import Nav from './Nav'
import Lang from './Lang'

// Import images
import logo from '../../resources/images/logo.png'
import menuBar from "../../resources/images/nav-bar.png";

// Import translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"

// Import globals
import getTranslations from "../../utils/globals/getTranslations";

// Import router functions
import { Link } from "react-router-dom";

// Import the styles
import { Title, Logo, TitleContainer, MenuButton, MenuButtonImage } from '../../resources/css/headerStyle';
import { responsive } from "../../resources/css/styles";

function Header()
{
    // Get the language, the set language and the translations function with the language context
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Check if the website is bigger than a certain media px to change the styles
    const checkIsBig = () => window.matchMedia(`(min-width: ${responsive.mobile})`).matches;
    const [isBig, setIsBig] = useState(checkIsBig());
    window.addEventListener("resize", () => setIsBig(checkIsBig()));

    return(
        <header>
            <TitleContainer>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                <Title>Portfolio - Damien Loup</Title>  
            </TitleContainer>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButtonImage src={menuBar} />
                Menu
            </MenuButton>
            <Nav isMenuOpen={isMenuOpen} translations={translations} isBig={isBig}/>
            <Lang translations={translations} language={language} setLanguage={setLanguage} isBig={isBig}/>
        </header>
    )
}

export default Header;