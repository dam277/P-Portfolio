import { styled } from "styled-components";

import { responsive, colorPalette } from "./styles";

export const Button = styled.button`
    background: linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]});
    -webkit-background-clip: text;

    color: transparent;
    font-size: ${(props) => props.size ? props.size : `22`}px;

    border: ${(props) => props.border ? props.border : `1`}px solid;
    border-image: linear-gradient(${colorPalette.main.button.border[0]}, ${colorPalette.main.button.border[1]}) 1;
    transition: .5s ease-in-out;

    margin: ${(props) => props.margin && props.margin};
    padding: ${(props) => props.padding && props.padding};

    cursor: pointer;

    ${(props) => 
        props.width &&
        {
            "width": `${props.width}`,
        }
    }

    ${(props) => 
        props.height &&
        {
            "height": `${props.height}`,
        }
    }

    ${(props) => 
        props.isActive &&
        {
            "color": `${colorPalette.main.button.hover.color}`,
            "background": `linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]})`,
            "border": `${props.border ? props.border : `1`}px solid white`
        }
    }

    &:hover {
        color: ${colorPalette.main.button.hover.color};
        background: linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]});
        border: ${(props) => props.border ? props.border : `1`}px solid white;
    }
`

export const Text = styled.p`
    color: ${(props) => props.color ? props.color : colorPalette.primary.colorDefault};
    font-size : ${(props) => props.size ? props.size : "18"};
    margin: ${(props) => props.margin && props.margin};
    padding: ${(props) => props.padding && props.padding};

    @media (min-width: ${responsive.mobile}) 
    {
        ${(props) => props.setResponsive && 
        {
            "color": `${props.mobileColor && props.mobileColor}`,
            "font-size": `${props.mobileSize ? props.mobileSize : "19"}px`,
            "margin": `${props.mobileMargin && props.mobileMargin}`,
            "padding": `${props.mobilePadding && props.mobilePadding}`
        }}
    }

    @media (min-width: ${responsive.laptop}) 
    {
        ${(props) => props.setResponsive && 
        {
            "color": `${props.laptopColor && props.laptopColor}`,
            "font-size": `${props.laptopSize ? props.laptopSize : "20"}px`,
            "margin": `${props.laptopMargin && props.laptopMargin}`,
            "padding": `${props.laptopPadding && props.laptopPadding}`
        }}
    }
`