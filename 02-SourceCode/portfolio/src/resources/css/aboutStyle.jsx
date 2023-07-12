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

export const Presentation = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-bottom: 1px solid ${colorPalette.primary.colorDefault};

    @media (min-width: ${responsive.laptop}) 
    {
        flex-direction: row;
    }
`

export const PresentationText = styled.div`
    padding: 100px;
`

export const PortraitContainer = styled.table`

`

export const MainImg = styled.img`

`

export const SocialNetworksContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SocialNetwork = styled.img`
    height : 40px;
    width : 40px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    border-bottom: 1px solid ${colorPalette.primary.colorDefault};

    &:hover {
        border: 1px solid ${colorPalette.main.image.border};
        height: 50px;
        width: 50px;
        transition: .5s ease-in-out;
    }
`

export const Supplements = styled.section`
    width: 100%;
    height: 100%;
`