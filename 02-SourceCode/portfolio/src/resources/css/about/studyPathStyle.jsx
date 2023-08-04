import { styled } from "styled-components";

import { responsive, colorPalette } from "../styles";

const cardContainerSize = 75;
const cardContainerHalfSize = 75/2;

const cardsDistance = 100;

export const CareerContainer = styled.div`   
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 50px;
    min-height: 100px;
    height: 100%;
    width: 100%;
    position: relative;
`

export const TimelineContainer = styled.div`
    z-index: 1;
    position: absolute;
    height: 100%;
`

export const TimelineHead = styled.div`
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 30px solid ${colorPalette.primary.colorDefault};
`

export const TimelineStem = styled.div`
    margin-left: calc(50% - 2.5px);
    width: 5px;
    min-height: 100px;
    height: 100%;
    background-color: ${colorPalette.primary.colorDefault};
`

export const CardsContainer = styled.div`
    z-index: 2;
    width: 100%;
`

export const CardContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardImageContainer = styled.div` 
    flex: 1;
    margin: 0 10px;
    
    @media (min-width: ${responsive.mobile}) 
    {
        margin: 0 40px;
    } 
`

export const CardImage = styled.img`
    width: ${cardContainerSize}px;
    height: ${cardContainerSize}px;
    border-top: 3px solid ${colorPalette.main.image.border[1]};
    border-bottom: 3px solid ${colorPalette.main.image.border[1]};
    background-color: ${colorPalette.primary.colorDefault};
    border-radius: 20px;
`

export const CardInfosContainer = styled.div`
    color: ${colorPalette.primary.text.paragraph.color};
    width: 100%;
    height: 80px;
`

export const Dates = styled.span`
    display: flex;
    justify-content: ${(props) => props.position === "left" ? "right" : "left"};
    margin-top: ${cardContainerHalfSize-6}px;
    flex: 8;
`

export const CardInfosAssignation = styled.img`
    position: absolute;
    visibility: hidden;
    height: 22px;
    width: 22px;
    top: ${cardContainerHalfSize}px;
    ${(props) => props.position === "right" ? 
    { 
        "margin-left": `${cardContainerSize*2-cardContainerHalfSize}px`
    } : 
    {
        "margin-right": `${cardContainerSize*2-cardContainerHalfSize}px`
    }} 

    
    @media (min-width: ${responsive.mobile}) 
    {
        visibility: visible;
    }
`

export const CardInfos = styled.div`
    flex: 8;
    display: flex;
    justify-content: ${(props) => props.position === "left" ? "right" : "left"};
`

export const InfosContainer = styled.div`
    background-color: ${colorPalette.main.cardBackgroundColor};
    ${(props) => props.position === "left" ? `border-right : 3px solid ${colorPalette.main.cardBorderColor[1]}` : `border-left: 3px solid ${colorPalette.main.cardBorderColor[1]}`};
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 80%;
    text-align: ${(props) => props.position === "left" ? "right" : "left"};

    @media (min-width: ${responsive.laptop}) 
    {
        max-width: 70%;
    }
    @media (min-width: ${responsive.desktop}) 
    {
        max-width: 55%;
    }
`

export const CardInfosTitles = styled.h3`
    margin-bottom: 0;
`

export const CardInfosSubtitle = styled.sub`
`

export const CardInfosPlace = styled.span`
`
