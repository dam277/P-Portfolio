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
import eCompletionIds from "../../../resources/datas/enums/works/eCompletionIds";
import eTypeIds from "../../../resources/datas/enums/works/eTypeIds";
import eLanguagesIds from "../../../resources/datas/enums/works/eLanguagesIds";
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
    const [typeRadio, setTypeRadio] = useState(eTypeIds.all);
    const [completionRadio, setCompletionRadio] = useState(eCompletionIds.all);
    const [languages, setLanguages] = useState(LanguagesButtons.map((language) => ({id: language.id, checked: language.defaultCheck})));
    //#endregion

    let filteredWorks = GithubWorks;

    //#region - Filter works
    filteredWorks = FilterWithSearchBar();
    filteredWorks = FilterWithPlatform();
    filteredWorks = FilterWithType();
    filteredWorks = FilterWithCompletion();
    filteredWorks = FilterWithLanguages();
    //#endregion
    
    //#region Functions
    /**
     * Filter the works with the given search bar content
     * @returns array of works
     */
    function FilterWithSearchBar()
    {
        if(searchbar.length < 0)
            return filteredWorks;

        return filteredWorks.filter((work) => work.name.toLowerCase().includes(searchbar.toLowerCase()));
    }

    /**
     * Filter the works with the given platform checkboxes
     * @returns array of works
     */
    function FilterWithPlatform()
    {
        const checkedPlatforms = platforms.filter((actualPlatform) => actualPlatform.checked);
        if(checkedPlatforms.length === WorkPlatforms.length)
            return filteredWorks;

        return filteredWorks.filter((work) => work.platforms.some((platform) => checkedPlatforms.some(checkedPlatform => checkedPlatform.id === platform.id)))
    }

    /**
     * Filter the works with the given type radio button
     * @returns array of works
     */
    function FilterWithType()
    {
        if(typeRadio === eTypeIds.all)
            return filteredWorks;

        return filteredWorks.filter((work) => work.type === typeRadio);
    }

    /**
     * Filter the works with the given completion radio button
     * @returns array of works
     */
    function FilterWithCompletion()
    {
        if(completionRadio === eCompletionIds.all)
            return filteredWorks;

        return filteredWorks.filter((work) => work.completion === completionRadio);
    }

    /**
     * Filter the works with the given language checkboxes
     * @returns array of works
     */
    function FilterWithLanguages()
    {
        const checkedLanguages = languages.filter((language) => language.checked);

        if(checkedLanguages.length === 1 && checkedLanguages[0].id === eLanguagesIds.all)
            return filteredWorks;

        return filteredWorks.filter((work) => work.languages.some((language) => checkedLanguages.some(checkedLanguage => checkedLanguage.id === language.id)));
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
                {filteredWorks.map((filteredWork) => 
                (
                    <Work key={`${filteredWork.name}-${filteredWork.id}`} translations={translations} keyValue={`${filteredWork.name}-${filteredWork.id}`} work={filteredWork}/>
                ))}
            </WorksSection>
        </MainContainer>
    )
}

export default Works;