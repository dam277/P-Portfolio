/**
 * @author : Damien Loup
 * @component : StudyPathCard
 * @description : Display a card for the study path
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
import { colorPalette } from "../../resources/css/styles";
//#endregion

//#region - Import Styles
import { CardInfos, InfosContainer, CardInfosTitles, CardInfosSubtitle, CardInfosPlace } from "../../resources/css/about/studyPathStyle";
import { Text } from "../../resources/css/mainStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display a card of the study path
 * @param {string} position => Position of the card in the page
 * @param {object} translations => Translations of the page
 * @param {object} card => Object of the actual card
 * @returns {HTMLElement} StudyPathCard html elements
 */
function StudyPathCard({position, translations, card})
{
   // Return html elements
   return (
      <CardInfos data-aos={position === "left" ? "fade-left" : "fade-right"} position={position}>
         <InfosContainer position={position}>
            {/* Title of the card */}
            <CardInfosTitles>{translations[card.name].title}</CardInfosTitles>
            {translations[card.name].subtitle && 
               (
                  <>
                     <CardInfosSubtitle>
                        <Text color={colorPalette.primary.text.color}>{translations[card.name].subtitle}</Text>
                     </CardInfosSubtitle>
                     <br />
                  </>
               )
            }
            {/* Place of the card */}
            <CardInfosPlace>{translations[card.name].place}</CardInfosPlace>
            {translations[card.name].text.map((paragraph, index) => 
            (
               <p key={index}>
                  <Text color={colorPalette.primary.text.paragraph.color}>
                     {paragraph}
                  </Text>
               </p>
            ))}
         </InfosContainer>
      </CardInfos>
   ) 
}

export default StudyPathCard;