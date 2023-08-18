import { styled, keyframes } from "styled-components";

import { responsive, colorPalette } from "./styles";

export const Button = styled.button`
    background: linear-gradient(${colorPalette.primary.button.color[0]}, ${colorPalette.primary.button.color[1]});
    -webkit-background-clip: text;

    color: transparent;
    font-size: ${(props) => props.size ? props.size : `22`}px;

    border: ${(props) => props.border ? props.border : `1`}px solid;
    border-image: linear-gradient(${colorPalette.primary.button.border[0]}, ${colorPalette.primary.button.border[1]}) 1;
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
            "color": `${colorPalette.primary.button.hover.color}`,
            "background": `linear-gradient(${colorPalette.primary.button.color[0]}, ${colorPalette.primary.button.color[1]})`,
            "border": `${props.border ? props.border : `1`}px solid white`
        }
    }

    &:hover {
        color: ${colorPalette.primary.button.hover.color};
        background: linear-gradient(${colorPalette.primary.button.color[0]}, ${colorPalette.primary.button.color[1]});
        border: ${(props) => props.border ? props.border : `1`}px solid white;
    }
`

export const Text = styled.span`
    color: ${(props) => props.color ? props.color : colorPalette.primary.colorDefault};
    font-size : ${(props) => props.size ? props.size : "18"};
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
