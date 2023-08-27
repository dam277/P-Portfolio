// Impot hooks
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../utils/contexts/LangContext";

// Import styles
import { MainContainer, TitleSection, Title, Subtitle, FiltersSection, FiltersLineSection, SearchBar, ProjectTypeCards, ProjectTypeLabel, ProjectTypeInput, ProjectTypeContentWrapper, ProjectTypeRadioButton, ProjectTypeContent, ProjectTypeImage, ProjectTypeTitle, WorksSection } from "../../../resources/css/worksStyle";
import { Button, Text } from "../../../resources/css/mainStyle";

// Import translations
import fr from "../../../resources/langs/fr/works.json";
import en from "../../../resources/langs/en/works.json"
import getTranslations from "../../../utils/globals/getTranslations";

// Import datas
import ProjectTypes from "../../../resources/datas/works/projectTypes";

/**
 * Works component
 * @returns {HTMLElement} Virtual dom
 */
function Works()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    // Set a state fot the project types cards
    const [inputs, setInputs] = useState([]);

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
        const currentInput = inputs.find((input) => input.id === id);

        // Check if the current input is already in the state
        if (currentInput)
        {
            // Get all the inputs without the current to update the state
            const inputsWithoutCurrentInput = inputs.filter((input) => input.id !== id);
            setInputs([...inputsWithoutCurrentInput, { id: id, checked: value }]);
        }
        else
        {
            // Set the new input with all the state
            setInputs([...inputs, { id: id, checked: value }]);
        }
    }

    return(
        <MainContainer>
            {/* Title */}
            <TitleSection>
                <Title>{translations.title}</Title>
                <Subtitle>{translations.subtitle}</Subtitle>
            </TitleSection>
            {/* Filters */}
            <FiltersSection>
                <FiltersLineSection>
                    <SearchBar type="text" placeholder={translations.filters.searchBar} />
                    {/* Project type checkboxes */}
                    <ProjectTypeCards>
                        {/* Type card */}
                        {ProjectTypes.map((type, index) =>
                        (
                            <ProjectTypeLabel key={`${type.id}-${index}`} htmlFor={type.id}>
                                {/* checkbox input */}
                                <ProjectTypeInput type="checkbox" name="projectType" id={type.id} onChange={(e) => handleInput(e.target.id, e.target.checked)} defaultChecked/>
                                <ProjectTypeContentWrapper checked={inputs.find((input) => input.id === type.id)?.checked}>
                                    <ProjectTypeRadioButton checked={inputs.find((input) => input.id === type.id)?.checked} />
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
            </FiltersSection>
            {/* All the works */}
            <WorksSection>
            </WorksSection>
        </MainContainer>
    )
}

export default Works;