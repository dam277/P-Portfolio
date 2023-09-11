// Impot hooks
import { useState } from "react";

// Import components
import Filters from "../../components/works/Filters";
import Work from "../../components/works/Work";

// Import styles
import { MainContainer, TitleSection, Title, Subtitle, WorksSection } from "../../../resources/css/worksStyle";

// Import translations
import fr from "../../../resources/langs/fr/works.json";
import en from "../../../resources/langs/en/works.json"
import getTranslations from "../../../utils/globals/getTranslations";

// Import datas
import ProjectTypes from "../../../resources/datas/works/projectTypes";
import typeRadioButtons from "../../../resources/datas/works/typeRadio.json";
import completionRadioButtons from "../../../resources/datas/works/completionRadio.json";
import LanguagesButtons from "../../../resources/datas/works/languagesButtons";
import Projects from "../../../resources/datas/projects";

/**
 * Works component
 * @returns {HTMLElement} Virtual dom
 */
function Works()
{
    // Get the translations
    const translations = getTranslations(fr, en);

    // Set a state fot the searchbar, project types cards, radio buttons and languages
    const [searchbar, setSearchbar] = useState("");
    const [cards, setCards] = useState(ProjectTypes.map((card) => ({id: card.id, checked: card.defaultCheck}))); 
    const [typeRadio, setTypeRadio] = useState("type-all");
    const [completionRadio, setCompletionRadio] = useState("completion-all");
    const [languages, setLanguages] = useState(LanguagesButtons.map((language) => ({id: language.id, checked: language.defaultCheck})));

    return(
        <MainContainer>
            {/* Title */}
            <TitleSection>
                <Title>{translations.title}</Title>
                <Subtitle>{translations.subtitle}</Subtitle>
            </TitleSection>
            {/* Filters */}
            <Filters translations={translations} searchbar={searchbar} setSearchbar={setSearchbar} cards={cards} setCards={setCards} typeRadio={typeRadio} setTypeRadio={setTypeRadio} completionRadio={completionRadio} setCompletionRadio={setCompletionRadio} languages={languages} setLanguages={setLanguages} projectTypes={ProjectTypes} typeRadioButtons={typeRadioButtons} completionRadioButtons={completionRadioButtons} languagesButtons={LanguagesButtons}/>
            {/* All the works */}
            <WorksSection>
                {Projects.map((project) => 
                (
                    <Work key={`${project.name}-${project.id}`} translations={translations} keyValue={`${project.name}-${project.id}`} image={project.image} title={project.name} completion={project.completion}/>
                ))}
            </WorksSection>
        </MainContainer>
    )
}

export default Works;