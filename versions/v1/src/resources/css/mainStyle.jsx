import { styled, keyframes } from "styled-components";

import { responsive, colorPalette } from "./styles";
import GetColorFromCompletion from "../../utils/globals/getColorFromCompletion";

//Button
export const Button = styled.button`
    //#region Can be overridden
    // Bases
    border: ${(props) => props.border ? props.border : `1`}px solid;
    border-image: ${(props) => `linear-gradient(${GetColorFromCompletion(props.completion).button.border[0]}, ${GetColorFromCompletion(props.completion).button.border[1]}) 1`};
    background: ${(props) => `linear-gradient(${GetColorFromCompletion(props.completion).button.color[0]}, ${GetColorFromCompletion(props.completion).button.color[1]})`};

    // Dimensions
    margin: ${(props) => props.margin && props.margin};
    padding: ${(props) => props.padding && props.padding};
    max-width: ${(props) => props.width && props.maxwidth};
    min-width: ${(props) => props.width && props.minwidth};
    width: ${(props) => props.width && props.width};
    max-height: ${(props) => props.height && props.maxheight};
    min-height: ${(props) => props.height && props.minheight};
    height: ${(props) => props.height && props.height};
    
    // Text
    color: transparent;
    font-size: ${(props) => props.size ? props.size : `18`}px;
    //#endregion
    
    // Cursor
    cursor: pointer;
    
    // Transitions
    transition: .5s ease-in-out;

    // Positions
    z-index: 3;
    
    // Addons
    -webkit-background-clip: text;

    //#region Button active
    ${(props) => 
        props.isActive &&
        {
            "color": `${colorPalette.primary.colorDefault}`,
            "background": `linear-gradient(${GetColorFromCompletion(props.completion).button.color[0]}, ${GetColorFromCompletion(props.completion).button.color[1]})`,
            "border": `${props.border ? props.border : `1`}px solid white`
        }
    }
    //#endregion

    //#region Button hover
    &:hover {
        color: ${colorPalette.primary.colorDefault};
        background: ${(props) => `linear-gradient(${GetColorFromCompletion(props.completion).button.color[0]}, ${GetColorFromCompletion(props.completion).button.color[1]})`};
        border: ${(props) => props.border ? props.border : `1`}px solid white;
    }
    //#endregion

    @media (min-width: ${responsive.mobile_small}) 
    {
        ${(props) => props.setResponsiveMobileSmall && 
        {
            "font-size": `${props.mobileSmallSize ? props.mobileSmallSize : "20"}px`,
            "margin": `${props.mobileSmallMargin && props.mobileSmallMargin}`,
            "padding": `${props.mobileSmallPadding && props.mobileSmallPadding}`,
            "visibility": `${props.mobileSmallVisibility && props.mobileSmallVisibility}`
        }}
    }

    @media (min-width: ${responsive.mobile}) 
    {
        ${(props) => props.setResponsiveMobile && 
        {
            "font-size": `${props.mobileSize ? props.mobileSize : "22"}px`,
            "margin": `${props.mobileMargin && props.mobileMargin}`,
            "padding": `${props.mobilePadding && props.mobilePadding}`,
            "visibility": `${props.mobileVisibility && props.mobileVisibility}`
        }}
    }
`

// Text
export const Text = styled.span`
    color: ${(props) => props.color ? props.color : colorPalette.primary.colorDefault};
    ${(props) => props.sizeDefault && 
    {
        "font-size" : `${props.size ? props.size : "18"}px`}
    };
    margin: ${(props) => props.margin && props.margin};
    padding: ${(props) => props.padding && props.padding};
    text-align: ${(props) => props.align && props.align};
    visibility: ${(props) => props.visibility && props.visibility};

    @media (min-width: ${responsive.mobile_small}) 
    {
        ${(props) => props.setResponsiveMobileSmall && 
        {
            "color": `${props.mobileSmallColor && props.mobileSmallColor}`,
            "font-size": `${props.mobileSmallSize ? props.mobileSmallSize : "19"}px`,
            "margin": `${props.mobileSmallMargin && props.mobileSmallMargin}`,
            "padding": `${props.mobileSmallPadding && props.mobileSmallPadding}`,
            "visibility": `${props.mobileSmallVisibility && props.mobileSmallVisibility}`
        }}
    }

    @media (min-width: ${responsive.mobile}) 
    {
        ${(props) => props.setResponsiveMobile && 
        {
            "color": `${props.mobileColor && props.mobileColor}`,
            "font-size": `${props.mobileSize ? props.mobileSize : "19"}px`,
            "margin": `${props.mobileMargin && props.mobileMargin}`,
            "padding": `${props.mobilePadding && props.mobilePadding}`,
            "visibility": `${props.mobileVisibility && props.mobileVisibility}`
        }}
    }

    @media (min-width: ${responsive.laptop}) 
    {
        ${(props) => props.setResponsiveLaptop && 
        {
            "color": `${props.laptopColor && props.laptopColor}`,
            "font-size": `${props.laptopSize ? props.laptopSize : "20"}px`,
            "margin": `${props.laptopMargin && props.laptopMargin}`,
            "padding": `${props.laptopPadding && props.laptopPadding}`,
            "visibility": `${props.laptopVisibility && props.laptopVisibility}`
        }}
    }
`

// Loader
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid black;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

// Radio buttons
export const RadioSection = styled.section`
   	display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 20px;

    @media (min-width: ${responsive.mobile}) 
    {
        margin-top: 10px;
    }
`

export const RadioWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 0 3px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    transition: .5s ease-in-out;
    ${(props) => props.checked && `background: linear-gradient(to right bottom, ${colorPalette.main.filters.radioButton.checked[0]}, ${colorPalette.main.filters.radioButton.checked[1]})`}; 

    &:hover{
        background: linear-gradient(to right bottom, ${colorPalette.main.filters.radioButton.checked[0]}, ${colorPalette.main.filters.radioButton.checked[1]});
    }
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
    background: ${colorPalette.main.backGroundDefault};

    padding: 2px 6px 2px 0;
    margin: 2px;
    border-radius: 100px;

    cursor: pointer;
    transition: .5s ease-in-out;
`

export const RadioLabelWithoutText = styled.label`
    display: flex;
    align-items: center;
    border-radius: 100px;

    cursor: pointer;
    transition: .5s ease-in-out;
`

export const RadioButton = styled.input`
   appearance: none;
`

export const RadioDesign = styled.div`
    width: ${(props) => props.checked ? "15px" : "13px"};
    height: ${(props) => props.checked ? "15px" : "13px"};
    border-radius: 100%;
    border: ${(props) => !props.checked && `1px solid ${colorPalette.main.filters.radioButton.borderColor}`};
    background: linear-gradient(to right bottom, ${colorPalette.main.filters.radioButton.checked[0]}, ${colorPalette.main.filters.radioButton.checked[1]});
    position: relative;
    margin-right: 4px;

    &::before
    {
        content: '';
        display: inline-block;
        width: inherit;
        height: inherit;
        border-radius: inherit;

        background: ${colorPalette.main.backGroundDefault};
        transform: scale(1);
        margin-bottom: 100%;
        transition: .3s;

        transform:  ${(props) => props.checked && "scale(0)"};
    }
`