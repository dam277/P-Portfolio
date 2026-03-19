/**
 * @author : Damien Loup
 * @component : Lang
 * @description : Display the language selector to select the current language
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
//#endregion

//#region - Import Datas
import languages from "../../resources/datas/langs.json";
//#endregion

//#region - Import Styles
import { LanguageContainer, LanguageSelector, LanguageOption } from "../../resources/css/headerStyle";
//#endregion

//#region - Import Images
//#endregion

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