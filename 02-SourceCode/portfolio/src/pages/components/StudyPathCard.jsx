// Import styles
import { CardInfos, InfosContainer, CardInfosTitles, CardInfosSubtitle, CardInfosPlace } from "../../resources/css/about/studyPathStyle";
import { Text } from "../../resources/css/mainStyle";
import { colorPalette } from "../../resources/css/styles";

function StudyPathCard({position, translations, card})
{
   return (
      <CardInfos data-aos={position === "left" ? "fade-left" : "fade-right"} position={position}>
         <InfosContainer position={position}>
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