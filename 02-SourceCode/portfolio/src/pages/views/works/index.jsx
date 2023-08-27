// Impot hooks
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../utils/contexts/LangContext";

import { MainContainer, TitleSection, Title, Subtitle, FiltersSection, FiltersLineSection, SearchBar, ProjectTypeCards, ProjectTypeLabel, ProjectTypeInput, ProjectTypeContentWrapper, ProjectTypeRadioButton, ProjectTypeContent, ProjectTypeImage, ProjectTypeTitle, WorksSection } from "../../../resources/css/worksStyle";
import { Button, Text } from "../../../resources/css/mainStyle";

// Import translations
import fr from "../../../resources/langs/fr/works.json";
import en from "../../../resources/langs/en/works.json"
import getTranslations from "../../../utils/globals/getTranslations";

// Import datas
import ProjectTypes from "../../../resources/datas/works/projectTypes";

function Works()
{
    // Get the translations
    const { language, setLanguage } = useContext(LangContext);
    const translations = getTranslations(language, fr, en);

    const [inputs, setInputs] = useState([]);
    
    useEffect(() => 
    {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="projectType"]');
        checkboxes.forEach((checkbox) => 
        {
            const id = checkbox.id;
            const value = checkbox.checked;
            handleInput(id, value);
        });
    }, []);

    function handleInput(id, value) 
    {
        const currentInput = inputs.find((input) => input.id === id);

        if (currentInput)
        {
            const inputsWithoutCurrentInput = inputs.filter((input) => input.id !== id);
            setInputs([...inputsWithoutCurrentInput, { id: id, checked: value }]);
        }
        else
        {
            setInputs([...inputs, { id: id, checked: value }]);
        }
    }

    return(
        <MainContainer>
            <TitleSection>
                <Title>{translations.title}</Title>
                <Subtitle>{translations.subtitle}</Subtitle>
            </TitleSection>
            <FiltersSection>
                <FiltersLineSection>
                    <SearchBar type="text" placeholder={translations.filters.searchBar} />
                    <ProjectTypeCards>
                        {ProjectTypes.map((type, index) => 
                        (
                            <ProjectTypeLabel key={`${type.id}-${index}`} htmlFor={type.id}>
                                <ProjectTypeInput type="checkbox" name="projectType" id={type.id} onChange={(e) => handleInput(e.target.id, e.target.checked)} defaultChecked/>
                                <ProjectTypeContentWrapper checked={inputs.find((input) => input.id === type.id)?.checked}>
                                    <ProjectTypeRadioButton checked={inputs.find((input) => input.id === type.id)?.checked} />
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
            <WorksSection>
            </WorksSection>
        </MainContainer>
    )
}

export default Works;