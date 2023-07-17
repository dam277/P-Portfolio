import { styled } from "styled-components";

import { responsive, colorPalette } from "../styles";

export const CompetencesContainer = styled.div`   
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CompetenceWrapper = styled.div`
    border-radius: 20px;
    height: 300px;
    width: 300px;
    padding: 2px;
    margin: 10px;
    background: linear-gradient(${colorPalette.main.button.color[0]}, ${colorPalette.main.button.color[1]});
`

export const Competence = styled.div`
    background-color: ${colorPalette.main.cardBackgroundColor};
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`

export const Language = styled.section`
    margin-top: 10px;
    flex: 1;
`

export const Framework = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const Library = styled.section`
    flex: 1;


`

export const Engine = styled.div`

`

export const CompetenceImage = styled.img`
    height : ${(props) => props.big ? "60" : "35"}px;
`

export const SubLanguageName = styled.sub`
    padding: 10px;
    color : ${colorPalette.main.text.color};
`