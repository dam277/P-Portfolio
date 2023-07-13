import { styled } from "styled-components";

import { responsive, colorPalette } from "../styles";

export const CompetencesContainer = styled.div`   
    margin-left: 10%;
    margin-right: 10%;
    display: block;
`

export const CompetenceWrapper = styled.div`
    float: left;
    border-radius: 20px;
    height: 100px;
    width: 100px;
    padding: 2px;
    margin: 10px;
    background: linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]});
`

export const Competence = styled.div`
    background-color: ${colorPalette.main.cardBackgroundColor};
    height: 100%;
    border-radius: 20px;
`

export const Language = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    justify-content: center; /* Centrer les images horizontalement */
    gap: 10px;
`

export const Framework = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    justify-content: center; /* Centrer les images horizontalement */
    gap: 10px;
`

export const Library = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    justify-content: center; /* Centrer les images horizontalement */
    gap: 10px;
`

export const Engine = styled.div`

`


export const CompetenceImage = styled.img`
    height : 35px;
`
