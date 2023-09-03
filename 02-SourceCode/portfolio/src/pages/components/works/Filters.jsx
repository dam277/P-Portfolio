// Import styles
import { useEffect } from "react";
import { FiltersSection, FiltersLineSection, FiltersRowSection, RowWrapper, SearchBar, ProjectRadiosContainer, RadioSection, RadioWrapper, RadioLabel, RadioButton, RadioDesign, ProjectTypeCards, ProjectTypeLabel, ProjectTypeInput, ProjectTypeContentWrapper, ProjectTypeRadioButton, ProjectTypeContent, ProjectTypeImage, ProjectTypeTitle, LanguagesContainer, LanguageLabel, LanguageCheckbox, LanguageImage } from "../../../resources/css/works/filtersStyle";
import { Text } from "../../../resources/css/mainStyle";

function Filters({translations, searchbar, setSearchbar, cards, setCards, typeRadio, setTypeRadio, completionRadio, setCompletionRadio, languages, setLanguages, projectTypes, typeRadioButtons, completionRadioButtons, languagesButtons})
{
    // Using useEffect to initialize the inputs in the array
    useEffect(() =>
    {
        // Get checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="projectType"]');

        // Run each checkbox to put it in the inputs state
        checkboxes.forEach((checkbox) =>
        {
            const id = checkbox.id;
            const value = checkbox.checked;
            handleInput(id, value);
        });
    }, []);

    /**
     * Handle an input change to modify its state
     * @param {string} id => Id of the checkbox
     * @param {boolean} value => Value of the checkbox
     */
    function handleInput(id, value)
    {
        // Get the current input just changed yet
        const currentInput = cards.find((input) => input.id === id);

        // Check if the current input is already in the state
        if (currentInput)
        {
            // Get all the inputs without the current to update the state
            const inputsWithoutCurrentInput = cards.filter((input) => input.id !== id);
            setCards([...inputsWithoutCurrentInput, { id: id, checked: value }]);
        }
        else
        {
            // Set the new input with all the state
            setCards([...cards, { id: id, checked: value }]);
        }
    }

    function handleRadio(id, name)
    {
        if(name === "type")
            setTypeRadio(id);
        else if(name === "completion")
            setCompletionRadio(id);

        console.log(completionRadio);
    }

    //console.log(completionRadio);

    return (
        <FiltersSection>
            {/* Filter line */}
            <FiltersLineSection>
                {/* Filter row */}
                <FiltersRowSection>
                    <RowWrapper>
                        {/* Search bar */}
                        <SearchBar type="text" placeholder={translations.filters.searchBar} onChange={(e) => setSearchbar(e.target.value)} />
                        {/* Radio buttons under search bar */}
                        <ProjectRadiosContainer>
                            <RadioSection>
                                {completionRadioButtons.map((button) => 
                                (
                                    <RadioWrapper key={`${button.id}`} checked={completionRadio === button.id}>
                                        <RadioLabel htmlFor={button.id}>
                                            <RadioButton type="radio" name="completion" id={button.id} value={button.value} onChange={(e) => handleRadio(e.target.id, e.target.name)} defaultChecked={button.defaultCheck}/>
                                            <RadioDesign checked={completionRadio === button.id} />
                                            <Text size="12" setResponsiveLaptop={true} laptopSize="14">{translations.filters.projectCompletion[button.id]}</Text>
                                        </RadioLabel>
                                    </RadioWrapper>
                                ))}
                            </RadioSection>
                            <RadioSection>
                                {typeRadioButtons.map((button) => 
                                (
                                    <RadioWrapper key={`${button.id}`} checked={typeRadio === button.id}>
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
                    {projectTypes.map((type, index) =>
                    (
                        <ProjectTypeLabel key={`${type.id}-${index}`} htmlFor={type.id}>
                            {/* checkbox input */}
                            <ProjectTypeInput type="checkbox" name="projectType" id={type.id} onChange={(e) => handleInput(e.target.id, e.target.checked)} defaultChecked/>
                            <ProjectTypeContentWrapper checked={cards.find((input) => input.id === type.id)?.checked}>
                                <ProjectTypeRadioButton checked={cards.find((input) => input.id === type.id)?.checked} />
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
                    <LanguageLabel>
                        <LanguageCheckbox type="checkbox"/>
                        <LanguageImage src={languagesButtons[1].image} />
                    </LanguageLabel>
                </LanguagesContainer>
            </FiltersLineSection>
        </FiltersSection>
    )
}

export default Filters;