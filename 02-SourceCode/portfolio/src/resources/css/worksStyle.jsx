/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from './styles'

export const MainContainer = styled.main`
    background-color : ${colorPalette.main.backGroundDefault};
    color: ${colorPalette.primary.colorDefault};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const TitleSection = styled.section`
    font-family: Arial;
`

export const Title = styled.h1`
    font-size : 35px;
`

export const Subtitle = styled.h2`
    font-size : 20px;
`

export const WorksSection = styled.section`
    margin-top: 20px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`