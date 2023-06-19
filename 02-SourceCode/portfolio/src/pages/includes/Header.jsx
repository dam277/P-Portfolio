// Impot hooks
import { useContext, useState } from "react";
import { LangContext } from "../../utils/contexts/LangContext";

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);        // State to check if the menu is opened

    // Check if the website is bigger than a certain media px to change the styles
    const checkSize = (size) => window.matchMedia(`(min-width: ${size})`).matches;
    const [isBig, setIsBig] = useState(checkSize(responsive.mobile));               // State to check if the site of the page is big
    const [isSmall, setIsSmall] = useState(checkSize(responsive.mobile_small));     // State to check if the site of the page is small
    
    // Add event handlers when resizing the page
    window.addEventListener("resize", () => 
    {
        // Set the states of the styles when the page is resized
        setIsBig(checkSize(responsive.mobile));
        setIsSmall(checkSize(responsive.mobile_small));
    });

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
                {isSmall ? "Menu" : ""}
            </MenuButton>
            <Nav isMenuOpen={isMenuOpen} translations={translations} isBig={isBig}/>
            <Lang translations={translations} language={language} setLanguage={setLanguage} isBig={isBig}/>
        </header>
    )
}

export default Header;