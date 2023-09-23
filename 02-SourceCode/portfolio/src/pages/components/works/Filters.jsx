/**
 * @author : Damien Loup
 * @component : Filters
 * @description : Displays the filters in the works page
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
import { useRef, useState } from "react";
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
import GithubWorks from "../../../resources/datas/githubWorks";
//#endregion

//#region - Import Styles
import { FiltersSection, FiltersLineSection, FiltersRowSection, RowWrapper, SearchBar, SearchBarSuggestionsContainer, SearchBarSuggestions, SearchBarSuggestion, ProjectRadiosContainer, ProjectTypeCards, ProjectTypeLabel, ProjectTypeInput, ProjectTypeContentWrapper, ProjectTypeRadioButton, ProjectTypeContent, ProjectTypeImage, ProjectTypeTitle, LanguagesContainer, LanguageLabel, LanguageCheckbox, LanguageImage } from "../../../resources/css/works/filtersStyle";
import { Text, RadioSection, RadioWrapper, RadioLabel, RadioButton, RadioDesign } from "../../../resources/css/mainStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Component description
 * @param {object} translations => Translations of the page
 * @param {state(string)} searchbar => Searchbar value
 * @param {state(function)} setSearchbar =>  Searchbar value setter
 * @param {state(array)} platform => Platform value
 * @param {state(function)} setPlatforms => Platform value setter
 * @param {state(string)} typeRadio => Type radio value
 * @param {state(function)} setTypeRadio => Type radio value setter
 * @param {state(string)} completionRadio => Completion radio value
 * @param {state(function)} setCompletionRadio => Completion radio value setter
 * @param {state(array)} languages => Languages value
 * @param {state(function)} setLanguages => Languages value setter 
 * @param {object} workPlatforms => Project types filters
 * @param {object} typeRadioButtons => Type radio buttons filters
 * @param {object} completionRadioButtons =>  Completion radio buttons filters
 * @param {object} languagesButtons => Language buttons filters
 * @returns {HTMLElement} Filters html elements
 */
function Filters({translations, searchbar, setSearchbar, platforms, setPlatforms, typeRadio, setTypeRadio, completionRadio, setCompletionRadio, languages, setLanguages, workPlatforms, typeRadioButtons, completionRadioButtons, languagesButtons})
{
    //#region Set states
    const [isSearchBarFocused, setIsearchBarFocused] = useState(false);
    console.log(isSearchBarFocused);
    //#endregion

    //#region Set refs
    const inputRef = useRef(null);
    //#endregion

    //#region - Handle functions
    /**
     * Handle a card change to modify its state
     * @param {string} id => Id of the checkbox
     * @param {boolean} value => Value of the checkbox
     */
    function handlePlatform(id, value)
    {
        // Get the current input just changed yet
        const currentPlatform = platforms.find((card) => card.id === id);

        // Check if the current input is already in the state
        if (currentPlatform)
        {
            // Get all the inputs without the current to update the state
            const platformsWithoutCurrentPlatform = platforms.filter((platform) => platform.id !== id);
            setPlatforms([...platformsWithoutCurrentPlatform, { id: id, checked: value }]);
        }
        else
        {
            // Set the new input with all the state
            setPlatforms([...platforms, { id: id, checked: value }]);
        }
    }

    /**
     * Handle a language change to modify its state
     * @param {string} id => Id of the checkbox
     * @param {boolean} value => Value of the checkbox
     */
    function handleLanguages(id, value)
    {
        if (id === "languages-all")
        {
            setLanguages(languagesButtons.map((language) => ({id: language.id, checked: language.defaultCheck})));
            return;
        }
        else
        {
            // Get all 
            const all = languages.find((language) => language.id === "languages-all");

            // Set the languages without all and current
            const languagesWithoutAllAndCurrent = languages.filter((language) => language.id !== all.id && language.id !== id);

            setLanguages([...languagesWithoutAllAndCurrent, { id: all.id, checked: false }, { id: id, checked: value }]);
        }
    }

    /**
     * Handle an input change to modify its state
     * @param {string} id => Id of the radio button
     * @param {boolean} name => Value of the radio button
     */
    function handleRadio(id, name)
    {
        // Check the name of the radio button to set the value to the correct state
        if(name === "type")
            setTypeRadio(id);
        else if(name === "completion")
            setCompletionRadio(id);
    }

    /**
     * Handle the suggestion with searchbar comparared the name of the work
     * @param {string} id => work id
     */
    function handleSuggestion(id) 
    {
        // Get work from the id
        const work = GithubWorks.filter((work) => work.id === id)[0];

        // Modify the value of the state and seatchbar
        inputRef.current.value = work.name;
        setSearchbar(work.name);
    }
    //#endregion

    // Set the suggestionList for the searchbar
    const suggestionList = GithubWorks.filter((work) => work.name.toLowerCase().includes(searchbar.toLowerCase()));
    
    // Return html elements
    return (
        <FiltersSection>
            {/* Filter line */}
            <FiltersLineSection>
                {/* Filter row */}
                <FiltersRowSection>
                    <RowWrapper>
                        {/* Search bar */}
                        <SearchBar ref={inputRef} type="text" placeholder={translations.filters.searchBar} onChange={(e) => setSearchbar(e.target.value)} onBlur={() => setIsearchBarFocused(false)} onFocus={() => setIsearchBarFocused(true)} />
                            {isSearchBarFocused && searchbar.length > 0 &&
                            (
                                <SearchBarSuggestionsContainer>
                                    <SearchBarSuggestions>
                                        {suggestionList.map((suggestion, index) => 
                                        (
                                            <SearchBarSuggestion key={`${suggestion.id}-${index}`} id={suggestion.id} onMouseDown={(e) => handleSuggestion(e.target.id)}>{suggestion.name}</SearchBarSuggestion>
                                        ))}
                                    </SearchBarSuggestions>
                                </SearchBarSuggestionsContainer>
                            )}
                        {/* Radio buttons under search bar */}
                        <ProjectRadiosContainer>
                            <RadioSection>
                                {completionRadioButtons.map((button, index) => 
                                (
                                    <RadioWrapper key={`${button.id}-${index}`} checked={completionRadio === button.id}>
                                        <RadioLabel htmlFor={button.id}>
                                            <RadioButton type="radio" name="completion" id={button.id} value={button.value} onChange={(e) => handleRadio(e.target.id, e.target.name)} defaultChecked={button.defaultCheck}/>
                                            <RadioDesign checked={completionRadio === button.id} />
                                            <Text size="12" setResponsiveLaptop={true} laptopSize="14">{translations.filters.projectCompletion[button.id]}</Text>
                                        </RadioLabel>
                                    </RadioWrapper>
                                ))}
                            </RadioSection>
                            <RadioSection>
                                {typeRadioButtons.map((button, index) => 
                                (
                                    <RadioWrapper key={`${button.id}-${index}`} checked={typeRadio === button.id}>
                                        <RadioLabel htmlFor={button.id}>
                                            <RadioButton type="radio" name="type" id={button.id} value={button.value} onChange={(e) => handleRadio(e.target.id, e.target.name)} defaultChecked={button.defaultCheck}/>
                                            <RadioDesign checked={typeRadio === button.id} />
                                            <Text size="12" setResponsiveLaptop={true} laptopSize="14">{translations.filters.workType[button.id]}</Text>
                                        </RadioLabel>
                                    </RadioWrapper>
                                ))}
                            </RadioSection>
                        </ProjectRadiosContainer>
                    </RowWrapper>
                </FiltersRowSection>
                {/* Project type checkboxes */}
                <ProjectTypeCards>
                    {/* Type card */}
                    {workPlatforms.map((type, index) =>
                    (
                        <ProjectTypeLabel key={`${type.id}-${index}`} htmlFor={type.id}>
                            {/* checkbox input */}
                            <ProjectTypeInput type="checkbox" name="projectType" id={type.id} onChange={(e) => handlePlatform(e.target.id, e.target.checked)} checked={platforms.find((input) => input.id === type.id)?.checked} defaultChecked={workPlatforms.defaultCheck}/>
                            <ProjectTypeContentWrapper checked={platforms.find((input) => input.id === type.id)?.checked}>
                                <ProjectTypeRadioButton checked={platforms.find((input) => input.id === type.id)?.checked}/>
                                {/* Content of the card */}
                                <ProjectTypeContent>
                                    <ProjectTypeImage src={type.image} />
                                    <ProjectTypeTitle>{translations.filters.projectType[type.id][0]} <br /> {translations.filters.projectType[type.id][1]}</ProjectTypeTitle>
                                </ProjectTypeContent>
                            </ProjectTypeContentWrapper>
                        </ProjectTypeLabel>
                    ))}
                </ProjectTypeCards>
            </FiltersLineSection>
            <FiltersLineSection>
                <LanguagesContainer>
                    {/* Languages */}
                    {languagesButtons.map((language, index) =>
                    (
                        <>
                            <LanguageLabel key={`${language.id}-${index}`}>
                                <LanguageCheckbox id={language.id} name="languages" type="checkbox" onChange={(e) => handleLanguages(e.target.id, e.target.checked)} checked={languages.find((input) => input.id === language.id)?.checked} defaultChecked={language.defaultCheck}/>
                                <LanguageImage checked={languages.find((input) => input.id === language.id)?.checked} src={language.image} />
                            </LanguageLabel>
                            {index === 0 && (<hr />)}
                        </>
                    ))}
                </LanguagesContainer>
            </FiltersLineSection>
        </FiltersSection>
    )
}

export default Filters;