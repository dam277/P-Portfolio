/**
 * @author : Damien Loup
 * @component : Works
 * @description : Display the works page with the filters and works
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
import { useEffect, useState } from "react";
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
import WorkPlatforms from "../../../resources/datas/works/workPlatforms";
import TypeRadioButtons from "../../../resources/datas/works/typeRadioButtons";
import CompletionRadioButtons from "../../../resources/datas/works/completionRadioButtons.js";
import LanguagesButtons from "../../../resources/datas/works/languagesButtons";
import GithubWorks from "../../../resources/datas/githubWorks";
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
    const [platforms, setPlatforms] = useState(WorkPlatforms.map((platform) => ({id: platform.id, checked: platform.defaultCheck}))); 
    const [typeRadio, setTypeRadio] = useState("type-all");
    const [completionRadio, setCompletionRadio] = useState("completion-all");
    const [languages, setLanguages] = useState(LanguagesButtons.map((language) => ({id: language.id, checked: language.defaultCheck})));
    //#endregion

    let filteredWorks = GithubWorks;

    //#region - Filter works
    filteredWorks = FilterWithSearchBar();
    filteredWorks = FilterWithPlatform();
    //#endregion

    //#region Functions
    function FilterWithSearchBar()
    {
        if(searchbar.length < 0)
            return filteredWorks;

        return filteredWorks.filter((work) => work.name.toLowerCase().includes(searchbar));
    }

    function FilterWithPlatform()
    {
        const checkedPlatforms = platforms.filter((actualPlatform) => actualPlatform.checked);
        if(checkedPlatforms.length === WorkPlatforms.length)
            return filteredWorks;

        return filteredWorks.filter((work) => work.platforms.some((platform) => checkedPlatforms.some(targetId => targetId.id === platform.id)))
    }
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
            <Filters translations={translations} searchbar={searchbar} setSearchbar={setSearchbar} platforms={platforms} setPlatforms={setPlatforms} typeRadio={typeRadio} setTypeRadio={setTypeRadio} completionRadio={completionRadio} setCompletionRadio={setCompletionRadio} languages={languages} setLanguages={setLanguages} workPlatforms={WorkPlatforms} typeRadioButtons={TypeRadioButtons} completionRadioButtons={CompletionRadioButtons} languagesButtons={LanguagesButtons}/>
            {/* All the works */}
            <WorksSection>
                {/* {GithubWorks.map((githubWork) => 
                (
                    <Work key={`${githubWork.name}-${githubWork.id}`} translations={translations} keyValue={`${githubWork.name}-${githubWork.id}`} work={githubWork}/>
                ))} */}
                {filteredWorks.map((filteredWork) => 
                (
                    <Work key={`${filteredWork.name}-${filteredWork.id}`} translations={translations} keyValue={`${filteredWork.name}-${filteredWork.id}`} work={filteredWork}/>
                ))}
            </WorksSection>
        </MainContainer>
    )
}

export default Works;