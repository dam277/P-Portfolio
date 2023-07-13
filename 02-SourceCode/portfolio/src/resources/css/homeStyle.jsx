// Import libraries
import { styled } from "styled-components";

// Import styles
import { responsive, colorPalette } from "./styles";

export const MainContainer = styled.main`
    background: linear-gradient(115.75deg, #700C0C -16.42%, #2E1F4D 49.58%, #1E0C61 77.68%, #000000 109.13%);
    display: flex;
    flex-direction: column;
`

export const Messages = styled.section`
    display: inline-block;
    margin-top: 65px;
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
    margin-top: 20%;
    color: ${colorPalette.primary.colorDefault};
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    text-align: center;
    font-size: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        margin-top: 7%;
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
    margin-bottom: 20px;
    flex: 1;
`

export const Carousel = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`

export const PageButtonsContainer = styled.div`
`

export const PointButton = styled.input`
    height: 10px;
    width: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 15px;
        width: 15px;
    }
`

export const ProjectImage = styled.img`
    height: 250px;
    width: 100%;
    border: 1px solid ${colorPalette.main.image.border[1]};
    cursor: pointer;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 400px;
    }

    @media (min-width: ${responsive.laptop}) 
    {
        height: 500px;
    }
`

export const ActualProject = styled.div`
    flex: 1;
    margin-left: 50px;
    margin-right: 50px;
`