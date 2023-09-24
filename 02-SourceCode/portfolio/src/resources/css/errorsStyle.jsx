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
    justify-content: center;
    text-align: center;
`

export const ErrorTitle = styled.h1`
    text-transform: uppercase;
    font-size: 60px;
    margin: 0;
`

export const ErrorSubtitle = styled.h2`
    text-transform: uppercase;
`

export const ErrorImage = styled.img`
`

export const ErrorDescription = styled.p`
    
`