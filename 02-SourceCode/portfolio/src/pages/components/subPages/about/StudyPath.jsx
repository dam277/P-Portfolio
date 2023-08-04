// Import libraries
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// Import styles
import { CareerContainer, TimelineContainer, TimelineHead, TimelineStem, CardsContainer, CardContainer, CardImageContainer, CardImage, CardInfosContainer, Dates, CardInfosAssignation } from "../../../../resources/css/about/studyPathStyle";

// Import components
import StudyPathCard from "../../StudyPathCard";

// Import datas
import { CareerPath } from "../../../../resources/datas/about/careerPath";

// Import images
import assignationLeft from "../../../../resources/images/about/careerPath/assignationLeft.png";
import assignationRight from "../../../../resources/images/about/careerPath/assignationRight.png";

// Import translations
import fr from "../../../../resources/langs/fr/about/studyPath.json";
import en from "../../../../resources/langs/en/about/studyPath.json";

// Import globals
import getTranslations from "../../../../utils/globals/getTranslations";

// Import contexts
import { LangContext } from "../../../../utils/contexts/LangContext";

function StudyPath()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    return(
        <>
            <CareerContainer>
                <TimelineContainer>
                    <TimelineStem />
                    <TimelineHead />
                </TimelineContainer>
                <CardsContainer>
                    {CareerPath.map(card =>
                        (
                            <CardContainer data-aos="fade-down">
                                {card.position.card === "left" ? (
                                    <>
                                        <StudyPathCard translations={translations} card={card} position={card.position.card} />
                                        <CardInfosAssignation src={assignationLeft} position={card.position.card} />
                                    </>
                                ) : 
                                (
                                    <Dates position={card.position.date}>{card.dates}</Dates>
                                )}
                                <CardImageContainer>
                                    <CardImage src={card.image} alt="" />
                                </CardImageContainer>
                                {card.position.card === "right" ? (
                                    <>
                                        <CardInfosAssignation src={assignationRight} position={card.position.card} />
                                        <StudyPathCard translations={translations} card={card} position={card.position.card} />
                                    </>
                                ) : 
                                ( 
                                    <Dates position={card.position.date}>{card.dates}</Dates>
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


{/* <CardContainer>
<CardImageContainer data-aos="fade-down">
    <CardImage src={card.image} alt="" />
</CardImageContainer>
<CardInfosContainer>
    {card.position.card === "left" && (
        <>
            <StudyPathCard translations={translations} card={card} position={card.position.card} />
            <CardInfosAssignation data-aos="fade-down" src={assignationLeft} position={card.position.card} />
        </>
    )}
    <Dates data-aos="fade-down" position={card.position.date}>{card.dates}</Dates>
    {card.position.card === "right" && (
        <>
            <CardInfosAssignation data-aos="fade-down" src={assignationRight} position={card.position.card} />
            <StudyPathCard translations={translations} card={card} position={card.position.card} />
        </>
    )}
</CardInfosContainer>
</CardContainer> */}