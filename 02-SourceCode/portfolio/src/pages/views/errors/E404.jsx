/**
 * @author : Damien Loup
 * @component : E404
 * @description : Display the 404 error message
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
import GetTranslations from "../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
import Errors from "../../components/errors";
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/errors.json";
import en from "../../../resources/langs/en/errors.json"
//#endregion

//#region - Import Datas
//#endregion

//#region - Import Styles
import { ErrorImage, ErrorTitle, ErrorSubtitle, ErrorDescription } from "../../../resources/css/errorsStyle";
//#endregion

//#region - Import Images
import error404 from "../../../resources/images/errors/404.png";
//#endregion

/**
 * Displays the 404 error message
 * @returns {HTMLElement} E404 html elements
 */
function E404()
{
    //#region - Important elements
    //#endregion
    
    //#region - Set States
    //#endregion

    //#region - UseEffect
    //#endregion

    //#region - Handle functions
    //#endregion
    
    //#region - Other functions
    //#endregion
    
    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    //#endregion

    //#region - Events
    //#endregion

    // Return html elements
    return(
        <Errors>
            <ErrorTitle>{translations.e404.title}</ErrorTitle>
            <ErrorImage src={error404} />
            <ErrorSubtitle>{translations.e404.subtitle}</ErrorSubtitle>
            <ErrorDescription>{translations.e404.description}</ErrorDescription>
        </Errors>
    )
}

export default E404;