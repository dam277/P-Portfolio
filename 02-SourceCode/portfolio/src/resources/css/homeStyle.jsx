// Import libraries
import { styled } from "styled-components";

// Import styles
import { responsive, colorPalette } from "./styles";

export const MainContainer = styled.div`
    background: linear-gradient(115.75deg, #700C0C -16.42%, #2E1F4D 49.58%, #1E0C61 77.68%, #000000 109.13%);
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Messages = styled.section`
    display: inline-block;
    margin-top: 25px;
    margin-left : 2%;
    font-size: 15px;
    flex: 0;

    @media (min-width: ${responsive.mobile}) 
    {
        margin-left : 7.5%;
        font-size: 20px;
    }
    
    @media (min-width: ${responsive.laptop})  
    {
        margin-left : 10%;
        font-size: 35px;
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
    flex: 6;
    color: ${colorPalette.primary.colorDefault};
    display: none;
    @media (min-height: ${responsive.mobile_small_height})  
    {
        display: flex;
        flex-direction: column;
        margin-top: 1%;
        text-align: center;
        font-size: 10px;
    }

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 13px;
    }

    @media (min-width: ${responsive.laptop}) 
    {
        font-size: 18px;
    }

    @media (min-width: ${responsive.desktop})  
    {
        flex-direction: row;
        font-size: 18px;
    }
`

export const WorkTitle = styled.h2`
    text-decoration: underline;
`

export const LastProject = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    flex: 1;
`

export const Carousel = styled.div`
    border: 1px solid black;
    height: 85%;
    max-height: 450px;
    width: 100%;
    display: block;
    cursor: pointer;

    @media (min-width: ${responsive.desktop}) 
    {
        max-height: 1000px;
    }
`

export const PageButtonsContainer = styled.div`
`

export const PointButton = styled.input`

`

export const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
`

export const ActualProject = styled.div`
    flex: 1;
    margin-left: 50px;
    margin-right: 50px;
`