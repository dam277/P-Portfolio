// Import libraries
import { styled } from "styled-components";

// Import styles
import { responsive, colorPalette } from "./styles";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { NavLink } from "react-router-dom";

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
    border-left: 1px solid ${colorPalette.primary.text.border};
`

export const Paragraph = styled.p`
    margin: 10px;
    padding: 0;
`

export const Works = styled.section`
    color: ${colorPalette.primary.colorDefault};
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    text-align: center;
    margin-top: 50px;

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
        font-size: 18px;
    }
`

export const WorkTitle = styled.h2`
    text-decoration: underline;
`

export const WorkBox = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
    margin-top: 100px;
    flex: 1;
    min-width: 300px;
    max-width: 1100px;

    @media (min-width: ${responsive.mobile}) 
    {
        min-width: 400px;
        max-width: 1300px;
        margin-top: 0;
    }

    @media (min-width: ${responsive.laptop_small}) 
    {
        min-width: 612.5px;
        max-width: 1300px;
    }
`

export const Carousel = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    @media (min-width: ${responsive.desktop}) 
    {
        box-shadow: ${(props) => 
        props.position === "left" ? 
        `rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px`
        : 
        `rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px`};
    }

    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px
`

export const PageButtonsContainer = styled.div`
    position: absolute;
    bottom: 0;
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

export const ProjectImageNavlink = styled(NavLink)`
    width: 100%;
    height: 100%;
    min-height: 50px;

    margin-bottom: -5px;
    cursor: pointer;
`

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    
    max-height: 492px;
`