/**
 * @author : Damien Loup
 * @component : StudyPath
 * @description : Displays the study path subpage
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
import GetTranslations from "../../../../utils/globals/getTranslations";
import ReplaceSpecificString from "../../../../utils/globals/replaceSpecificString";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
import StudyPathCard from "../../StudyPathCard";
//#endregion

//#region - Import Translations
import fr from "../../../../resources/langs/fr/about/studyPath.json";
import en from "../../../../resources/langs/en/about/studyPath.json";
//#endregion

//#region - Import Datas
import { CareerPath } from "../../../../resources/datas/about/careerPath";
//#endregion

//#region - Import Styles
import { CareerContainer, TimelineContainer, TimelineHead, TimelineStem, CardsContainer, CardContainer, CardImageContainer, CardImage, Dates, CardInfosAssignation } from "../../../../resources/css/about/studyPathStyle";
//#endregion

//#region - Import Images
import assignationLeft from "../../../../resources/images/about/careerPath/assignationLeft.png";
import assignationRight from "../../../../resources/images/about/careerPath/assignationRight.png";
//#endregion

/**
 * Display the study path subpage
 * @returns {HTMLElement} StudyPath html elements
 */
function StudyPath()
{
    //#region - Algorithms
    CareerPath.map((card) => 
    {
        // Replace the elements (like {today} to the current date)
        card.dates.start = ReplaceSpecificString(card.dates.start);
        card.dates.end = ReplaceSpecificString(card.dates.end);
    });
    //#endregion
    
    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    //#endregion

    // Return html elements
    return(
        <>
            <CareerContainer>
                {/* Timeline arrow */}
                <TimelineContainer>
                    <TimelineStem />
                    <TimelineHead />
                </TimelineContainer>
                {/* Cards */}
                <CardsContainer>
                    {CareerPath.map((card, index) =>
                        (
                            <CardContainer key={`${card.name}-${index}`} data-aos="fade-down">
                                {card.position.card === "left" ? (
                                    <>
                                        {/* Component to display a card */}
                                        <StudyPathCard translations={translations} card={card} position={card.position.card} />
                                        <CardInfosAssignation src={assignationLeft} position={card.position.card} />
                                    </>
                                ) : 
                                (
                                    // Dates of the card
                                    <Dates current={card.current} position={card.position.date}>
                                        {card.dates.start} - {card.dates.end}
                                    </Dates>
                                )}
                                {/* Image of the card */}
                                <CardImageContainer>
                                    <CardImage src={card.image} alt={card.name} />
                                </CardImageContainer>
                                {card.position.card === "right" ? (
                                    <>
                                        {/* Component to display a card */}
                                        <CardInfosAssignation src={assignationRight} position={card.position.card} />
                                        <StudyPathCard translations={translations} card={card} position={card.position.card} />
                                    </>
                                ) : 
                                ( 
                                    // Dates of the card
                                    <Dates current={card.current} position={card.position.date}>
                                        {card.dates.start} - {card.dates.end}
                                    </Dates>
                                )}
                            </CardContainer>
                        )
                    )}
                </CardsContainer>
            </CareerContainer>
        </>
    )
}

export default StudyPath;