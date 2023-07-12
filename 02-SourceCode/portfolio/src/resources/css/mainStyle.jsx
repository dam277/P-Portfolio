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

    //margin-left: 1000px; 

    &:hover {
        color: ${colorPalette.main.button.hover.color};
        background: linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]});
        border: ${(props) => props.border ? props.border : `1`}px solid white;
    }
`

export const Text = styled.p`
    color: ${(props) => props.color != "" ? props.color : colorPalette.primary.colorDefault};
    font-size : 18px;
`