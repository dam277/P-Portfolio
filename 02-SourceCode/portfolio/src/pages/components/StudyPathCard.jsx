// Import styles
import { CardInfos, CardInfosTitles, CardInfosSubtitle, CardInfosPlace, CardInfosParagraph } from "../../resources/css/about/studyPathStyle";

function StudyPathCard({position, translations, card})
{
   return (
      <CardInfos position={position} data-aos={position === "left" ? "fade-right" : "fade-left"}>
         <CardInfosTitles>{translations[card.name].title}</CardInfosTitles>
         <CardInfosSubtitle>{translations[card.name].subtitle}</CardInfosSubtitle>
         <CardInfosPlace>{translations[card.name].place}</CardInfosPlace>
         <CardInfosParagraph>s</CardInfosParagraph>
      </CardInfos>
   ) 
}

export default StudyPathCard;