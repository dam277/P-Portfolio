/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from '../styles'

export const FiltersSection = styled.section`
    width: 100%;
    margin-top: 20px;
`

export const FiltersLineSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    
    @media (min-width: ${responsive.laptop}) 
    {
        flex-direction: row;
    }
`

export const FiltersRowSection = styled.div`
	display: flex;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;

    @media (min-width: ${responsive.laptop}) 
    {
        justify-content: right;
    }
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    @media (min-width: ${responsive.laptop_small}) 
    {
        margin-right: 10px;
    }
`

// Search bar
export const SearchBar = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colorPalette.primary.colorDefault};
    color: ${colorPalette.primary.colorDefault};
    padding: 8px;
    transition: 0.3s;
    width: 80%;
    font-size: 14px;

    &:focus{
        outline: none;
        border-color: ${colorPalette.main.filters.searchBar.borderColor}
    }

    @media (min-width: ${responsive.laptop_small}) 
    {
        width: 100%;
        font-size: 17px;
    }
`

export const SearchBarSuggestionsContainer = styled.div`
    position: relative;
    width: 80%;
    font-size: 15px;

    @media (min-width: ${responsive.laptop_small}) 
    {
        width: 100%;
        font-size: 16px;
    }
`

export const SearchBarSuggestions = styled.ul`
    position: absolute;
    border-collapse: separate;
    z-index: 10;
    left: 0;
    padding: 5px;
    list-style: none;
    text-align: left;
`

export const SearchBarSuggestion = styled.li`
    background-color: ${colorPalette.main.filters.searchBar.suggestions.backGroundColor};
    border: 1px solid ${colorPalette.main.filters.searchBar.suggestions.borderColor};
    padding: 5px;
    cursor: pointer;

    &:hover
    {
        background-color: ${colorPalette.main.filters.searchBar.suggestions.hover.backGroundColor};
    }
`

// Radio container
export const ProjectRadiosContainer = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    margin: 10px 10px 0 0;
    width: 100%;

    @media (min-width: ${responsive.desktop_big}) 
    {
        justify-content: space-between; 
    }
`

export const ProjectTypeCards = styled.div`
	display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    @media (min-width: ${responsive.mobile}) 
    {
        justify-content: initial;
        flex-wrap: nowrap;
    }
`
export const ProjectTypeLabel = styled.label`
    cursor: pointer;
    margin-left: 20px;
`
export const ProjectTypeInput = styled.input`
    appearance: none;
`
export const ProjectTypeContentWrapper = styled.div`
    background-color: ${colorPalette.main.filters.card.backGroundColor};
    border: 1px solid ${colorPalette.main.filters.card.borderColor};
    border-radius: 5px;
    padding: 10px;
    transition: 200ms linear;

    ${(props) => (props.checked) && 
    {
        "border": `1px solid ${colorPalette.main.filters.card.borderColorChecked}`,
    }};
`
export const ProjectTypeRadioButton = styled.span`
    float: left;
    width: 12px;
    height: 12px;
    border: solid 2px ${colorPalette.main.filters.card.borderColor};
    border-radius: 50%;
    transition:  200ms linear;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.93552 4.58423C0.890286 4.53718 0.854262 4.48209 0.829309 4.42179C0.779553 4.28741 0.779553 4.13965 0.829309 4.00527C0.853759 3.94471 0.889842 3.88952 0.93552 3.84283L1.68941 3.12018C1.73378 3.06821 1.7893 3.02692 1.85185 2.99939C1.91206 2.97215 1.97736 2.95796 2.04345 2.95774C2.11507 2.95635 2.18613 2.97056 2.2517 2.99939C2.31652 3.02822 2.3752 3.06922 2.42456 3.12018L4.69872 5.39851L9.58026 0.516971C9.62828 0.466328 9.68554 0.42533 9.74895 0.396182C9.81468 0.367844 9.88563 0.353653 9.95721 0.354531C10.0244 0.354903 10.0907 0.369582 10.1517 0.397592C10.2128 0.425602 10.2672 0.466298 10.3112 0.516971L11.0651 1.25003C11.1108 1.29672 11.1469 1.35191 11.1713 1.41247C11.2211 1.54686 11.2211 1.69461 11.1713 1.82899C11.1464 1.88929 11.1104 1.94439 11.0651 1.99143L5.06525 7.96007C5.02054 8.0122 4.96514 8.0541 4.90281 8.08294C4.76944 8.13802 4.61967 8.13802 4.4863 8.08294C4.42397 8.0541 4.36857 8.0122 4.32386 7.96007L0.93552 4.58423Z' fill='white'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center center;
        transform: scale(1.6);
        transition:  200ms linear;
        opacity: 0;
        
        ${(props) => (props.checked) && 
        {
            "transform": "scale(1)",
            "opacity": "1",
        }};
    }

    ${(props) => (props.checked || props.checked === undefined) && 
    {
        "background": `${colorPalette.main.filters.card.radio.backGroundColor}`,
        "border-color": `${colorPalette.main.filters.card.radio.borderColor}`,
        "transform": "scale(1.2)",
        "box-shadow": `0 2px 4px 0 rgba(219, 215, 215, 0.5), 0 0 0 3px ${colorPalette.main.filters.card.radio.borderColor}`,
    }};

    @media (min-width: ${responsive.laptop_big}) 
    {
        width: 15px;
        height: 15px;
    }
`
export const ProjectTypeContent = styled.div`
    display : flex;
    align-items: center;
    flex-direction : column;
    width : 100%;
`
export const ProjectTypeImage = styled.img`
    width : 80px;

    @media (min-width: ${responsive.laptop_big}) 
    {
        width : 100px; 
    }
`

export const ProjectTypeTitle = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 14px;

    @media (min-width: ${responsive.laptop_big}) 
    {
        font-size: 17px; 
    }
`

/** Languages filters */

export const LanguagesContainer = styled.div`
    display: flex;
    background-color: ${colorPalette.main.filters.languages.backGroundColor};
    border: 2px solid ${colorPalette.main.filters.languages.borderColor};
    padding: 5px 0 0 0;
    margin-top: 20px;
    overflow-x: auto;
    width: 80%;

    @media (min-width: ${responsive.desktop}) 
    {
        width: auto;
    }
`

export const LanguageContainer = styled.div`
    display: flex;
`

export const LanguageLabel = styled.label`
    margin: -16px 10px 3px 10px;
    padding: 0;
    cursor: pointer;

    @media (min-width: ${responsive.desktop}) 
    {
        margin: 0 10px;
    }
`

export const LanguageCheckbox = styled.input`
    height: 0;
    width: 0;
    appearance: none;
`

export const LanguageImage = styled.img`
    height: 40px;
    transition: .3s ease-in-out;
    ${(props) => !props.checked && "filter: grayscale(100%)"};

    &:hover
    {
        filter: grayscale(0);
    }
`