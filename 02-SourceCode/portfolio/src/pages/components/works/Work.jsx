/**
 * @author : Damien Loup
 * @component : Work
 * @description : Display a work card in the works page
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
//#endregion

//#region - Import Styles
import { WorkContainer, WorkImageWrapper, WorkImage, WorkContent, WorkTitle, WorkDescription, WorkCompletion } from "../../../resources/css/works/workStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display a work card in the works page
 * @param {object} translations => Translation of the page
 * @param {string} keyValue => Value of the key of the container
 * @param {image} image => Image of the work
 * @param {string} title =>  Title of the work
 * @param {string} completion => Completion of the work
 * @returns {HTMLElement} Work html elements
 */
function Work({ translations, keyValue, image, title, completion })
{
    // Return html elements
    return (
        <WorkContainer key={keyValue} completion={completion}>
            {/* Image of work */}
            <WorkImageWrapper>
                <WorkImage src={image}/>
            </WorkImageWrapper>
            {/* Content of work */}
            <WorkContent>
                <WorkTitle>{title}</WorkTitle>
                <WorkDescription>Description</WorkDescription>
                <WorkCompletion>{translations.works.completion[completion]}</WorkCompletion>
            </WorkContent>
        </WorkContainer>
    )
}

export default Work;