// Import libraries
import { styled } from "styled-components";

// Import styles
import { responsive, colorPalette } from "./styles";

export const MainContainer = styled.div`
    background: linear-gradient(115.75deg, #700C0C -16.42%, #2E1F4D 49.58%, #1E0C61 77.68%, #000000 109.13%);
    height: 100%;
`

export const Messages = styled.section`
    display: inline-block;
    margin-top: 5%;
    margin-left : 2%;
    font-size: 16px;

    @media (min-width: ${responsive.mobile}) 
    {
        margin-left : 7.5%;
        font-size: 30px;
    }
    
    @media (min-width: ${responsive.laptop})  
    {
        margin-left : 10%;
        font-size: 45px;
    }
`

export const Presentation = styled.div`
    margin-left: 45px;
    border-left: 1px solid ${colorPalette.main.text.border};
`

export const Paragraph = styled.p`
    margin: 10px;
    padding: 0;
`

export const Text = styled.span`
    color: ${(props) => props.isPair ? colorPalette.main.text.color : colorPalette.primary.colorDefault};
`

export const Works = styled.section`

`

export const LastProject = styled.div`

`

export const Carousel = styled.div`

`

export const PageButton = styled.button`

`

export const PointButton = styled.button`

`

export const ActualProject = styled.div`

`