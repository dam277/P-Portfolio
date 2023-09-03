// Impot hooks
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../utils/contexts/LangContext";

// Import components
import Filters from "../../components/works/Filters";

// Import styles
import { MainContainer, TitleSection, Title, Subtitle, WorksSection } from "../../../resources/css/worksStyle";
import { Button, Text } from "../../../resources/css/mainStyle";

// Import translations
import fr from "../../../resources/langs/fr/works.json";
import en from "../../../resources/langs/en/works.json"
import getTranslations from "../../../utils/globals/getTranslations";

// Import datas
import ProjectTypes from "../../../resources/datas/works/projectTypes";
import typeRadioButtons from "../../../resources/datas/works/typeRadio.json";
import completionRadioButtons from "../../../resources/datas/works/completionRadio.json";
import LanguagesButtons from "../../../resources/datas/works/languages";

/**
 * Works component
 * @returns {HTMLElement} Virtual dom
 */
function Works()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    // Set a state fot the searchbar, project types cards, radio buttons and languages
    const [searchbar, setSearchbar] = useState("");
    const [cards, setCards] = useState([]);
    const [typeRadio, setTypeRadio] = useState("type-all");
    const [completionRadio, setCompletionRadio] = useState("completion-all");
    const [languages, setLanguages] = useState([]);

    return(
        <MainContainer>
            {/* Title */}
            <TitleSection>
                <Title>{translations.title}</Title>
                <Subtitle>{translations.subtitle}</Subtitle>
            </TitleSection>
            {/* Filters */}
            <Filters translations={translations} searchbar={searchbar} setSearchbar={setSearchbar} cards={cards} setCards={setCards} typeRadio={typeRadio} setTypeRadio={setTypeRadio} completionRadio={completionRadio} setCompletionRadio={setCompletionRadio} languages={languages} setLanguages={setLanguage} projectTypes={ProjectTypes} typeRadioButtons={typeRadioButtons} completionRadioButtons={completionRadioButtons} languagesButtons={LanguagesButtons}/>
            {/* All the works */}
            <WorksSection>
            </WorksSection>
        </MainContainer>
    )
}

export default Works;