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
    padding: 10px 0;
`

export const CardContainer = styled.div`
    width: 100%;
    padding: ${cardsDistance}px 0;
`

export const CardImageContainer = styled.div`
    position: absolute;
    margin-left: calc(50% - ${cardContainerHalfSize}px);    
    width: ${cardContainerSize}px;
    height: ${cardContainerSize}px;
    border-top: 3px solid ${colorPalette.main.image.border[1]};
    border-bottom: 3px solid ${colorPalette.main.image.border[1]};
    background-color: ${colorPalette.primary.colorDefault};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
`

export const CardImage = styled.img`
    border-radius: 20px;
`

export const CardInfosContainer = styled.div`
    color: ${colorPalette.primary.text.paragraph.color};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Dates = styled.span`
    ${(props) => props.position === "left" ? "margin-right: 200px" : "margin-left: 200px"}
`

export const CardInfosAssignation = styled.img`
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) => props.position === "right" ? 
    { 
        "transform": "rotate(90deg)",
        "margin-left": `${cardContainerSize*2-cardContainerHalfSize}px`
    } : 
    {
        "transform": "rotate(-90deg)",
        "margin-right": `${cardContainerSize*2-cardContainerHalfSize}px`
    }} 
    
`

export const CardInfos = styled.div`
    background-color: ${colorPalette.main.cardBackgroundColor};
    padding: 0 10px;
    border-radius: 10px;
    ${(props) => props.position === "left" ? `border-right : 1px solid ${colorPalette.main.cardBorderColor[1]}` : `border-left: 1px solid ${colorPalette.main.cardBorderColor[1]}`};

`

export const CardInfosTitles = styled.h3`
    margin-bottom: 0;
`

export const CardInfosSubtitle = styled.sub`

`

export const CardInfosPlace = styled.span`

`

export const CardInfosParagraph = styled.p`

`
