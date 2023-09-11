/**
 * @author : Damien Loup
 * @component : Lang
 * @description : Display the language selector to select the current language
 */

// Import Libraries

// Import Hooks

// Import Globals

// Import Enums 

// Import Contexts

// Import Components

// Import Translations

// Import Datas
import languages from "../../resources/datas/langs.json";

// Import Styles
import { LanguageContainer, LanguageSelector, LanguageOption } from "../../resources/css/headerStyle";

// Import Images

/**
 * Display Lang selector and change the current language
 * @param {state(string)} language => Current language of the website
 * @param {state(function)} setLanguage => Current language of the website setter
 * @param {object} translations => Translations in the right language
 * @param {boolean} isBig => Define if the size of the page is big
 * @returns {HTMLElement} Lang html elements
 */
function Lang({language, setLanguage, translations, isBig})
{
    // Return html elements
    return(
        <LanguageContainer>
            <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
                {/* Display all language in the selector */}
                {languages.map((actualLanguage, index) => 
                (
                    <LanguageOption key={`${actualLanguage}-${index}`} value={actualLanguage}>
                        {isBig ? translations.header[actualLanguage.toLowerCase()] : actualLanguage}
                    </LanguageOption>
                ))}
            </LanguageSelector>
        </LanguageContainer>
    )
}

export default Lang;