/**
 * @author : Damien Loup
 * @component : Header
 * @description : This component is used to display the header of the website
 */

// Import Libraries
import { Link } from "react-router-dom";

// Import Hooks
import { useContext, useState } from "react";

// Import Globals
import GetTranslations from "../../utils/globals/getTranslations";

// Import Enums 

// Import Contexts
import { LangContext } from "../../utils/contexts/LangContext";

// Import Components
import Nav from './Nav'
import Lang from './Lang'

// Import translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"

// Import Datas

// Import Styles
import { HeaderContainer, Title, Logo, TitleContainer, MenuButton, MenuButtonImage } from '../../resources/css/headerStyle';
import { responsive } from "../../resources/css/styles";

// Import images
import logo from '../../resources/images/logo.png'
import menuBar from "../../resources/images/nav-bar.png";

/**
 * Header component
 * @returns {HTMLElement} Header html elements
 */
function Header()
{
    // Important elements
    const checkSize = (size) => window.matchMedia(`(min-width: ${size})`).matches; // Check if the website is bigger than a certain media px to change the styles

    // Set States
    const [isMenuOpen, setIsMenuOpen] = useState(false);                            // State to check if the menu is opened
    const [isBig, setIsBig] = useState(checkSize(responsive.mobile));               // State to check if the site of the page is big
    const [isSmall, setIsSmall] = useState(checkSize(responsive.mobile_small));     // State to check if the site of the page is small

    // Set the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = GetTranslations(fr, en);

    // Events
    /**
     *  Add event handlers when resizing the page 
     */
    window.addEventListener("resize", () => 
    {
        // Set the states of the styles when the page is resized
        setIsBig(checkSize(responsive.mobile));
        setIsSmall(checkSize(responsive.mobile_small));
    });

    // Return html elements
    return(
        <HeaderContainer>
            {/* Title of the website with logo */}
            <TitleContainer>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                <Title>Portfolio - Damien Loup</Title>  
            </TitleContainer>
            {/* Navbar menu button (display when page is small) */}
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuButtonImage src={menuBar} />
                {isSmall ? "Menu" : ""}
            </MenuButton>
            {/* Navbar menu */}
            <Nav isMenuOpen={isMenuOpen} translations={translations} isBig={isBig}/>
            {/* Lang menu */}
            <Lang translations={translations} language={language} setLanguage={setLanguage} isBig={isBig}/>
        </HeaderContainer>
    )
}

export default Header;