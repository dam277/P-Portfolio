// Impot hooks
import { useContext } from "react";
import { LangContext } from "../../utils/contexts/LangContext";

// Import includes
import Nav from './Nav'
import Lang from './Lang'

// Import images
import logo from '../../resources/images/logo.png'

// Import translations
import fr from "../../resources/langs/fr/includes.json"
import en from "../../resources/langs/en/includes.json"

// Import globals
import getTranslations from "../../utils/globals/getTranslations";

import { Link } from "react-router-dom";

// Import the styles
import { Title, Logo, TitleContainer } from '../../resources/css/headerStyle';

function Header()
{
    // Get the language, the set language and the translations function with the language context
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <header>
            <TitleContainer>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                <Title>Portfolio - Damien Loup</Title>  
                
            </TitleContainer>
            <Nav translations={translations}/>
            <Lang translations={translations} language={language} setLanguage={setLanguage}/>
        </header>
    )
}

export default Header;