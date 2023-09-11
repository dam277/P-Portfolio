/**
 * @author : Damien Loup
 * @component : Works
 * @description : Display the works page with the filters and works
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
import { useState } from "react";
//#endregion

//#region - Import Globals
import GetTranslations from "../../../utils/globals/getTranslations";
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
import Filters from "../../components/works/Filters";
import Work from "../../components/works/Work";
//#endregion

//#region - Import Translations
import fr from "../../../resources/langs/fr/works.json";
import en from "../../../resources/langs/en/works.json"
//#endregion

//#region - Import Datas
import ProjectTypes from "../../../resources/datas/works/projectTypes";
import TypeRadioButtons from "../../../resources/datas/works/typeRadioButtons";
import CompletionRadioButtons from "../../../resources/datas/works/completionRadioButtons.js";
import LanguagesButtons from "../../../resources/datas/works/languagesButtons";
import Projects from "../../../resources/datas/projects";
//#endregion

//#region - Import Styles
import { MainContainer, TitleSection, Title, Subtitle, WorksSection } from "../../../resources/css/worksStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Display the works page
 * @returns {HTMLElement} Works html elements
 */
function Works()
{
    //#region - Set States
    const [searchbar, setSearchbar] = useState("");
    const [platform, setPlatform] = useState(ProjectTypes.map((platform) => ({id: platform.id, checked: platform.defaultCheck}))); 
    const [typeRadio, setTypeRadio] = useState("type-all");
    const [completionRadio, setCompletionRadio] = useState("completion-all");
    const [languages, setLanguages] = useState(LanguagesButtons.map((language) => ({id: language.id, checked: language.defaultCheck})));
    //#endregion

    //#region - Set the translations
    const translations = GetTranslations(fr, en);
    //#endregion

    // Return html elements
    return(
        <MainContainer>
            {/* Title */}
            <TitleSection>
                <Title>{translations.title}</Title>
                <Subtitle>{translations.subtitle}</Subtitle>
            </TitleSection>
            {/* Filters */}
            <Filters translations={translations} searchbar={searchbar} setSearchbar={setSearchbar} platforms={platform} setPlatform={setPlatform} typeRadio={typeRadio} setTypeRadio={setTypeRadio} completionRadio={completionRadio} setCompletionRadio={setCompletionRadio} languages={languages} setLanguages={setLanguages} projectTypes={ProjectTypes} typeRadioButtons={TypeRadioButtons} completionRadioButtons={CompletionRadioButtons} languagesButtons={LanguagesButtons}/>
            {/* All the works */}
            <WorksSection>
                {Projects.map((project) => 
                (
                    <Work key={`${project.name}-${project.id}`} translations={translations} keyValue={`${project.name}-${project.id}`} image={project.image} title={project.name} completion={project.completion} type={project.type} languages={project.languages}/>
                ))}
            </WorksSection>
        </MainContainer>
    )
}

export default Works;