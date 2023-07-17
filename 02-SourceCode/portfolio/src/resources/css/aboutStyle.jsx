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
    padding: 50px 0;
    border-bottom: 1px solid ${colorPalette.primary.colorDefault};

    @media (min-width: ${responsive.mobile}) 
    {
        padding: 50px;
    }

    @media (min-width: ${responsive.laptop}) 
    {
        flex-direction: row;
    }
`

export const PresentationText = styled.div`
    padding-top: 30px;
    margin: 0 10px;
    text-align: center;

    @media (min-width: ${responsive.mobile})  
    {
        padding: 70px;
    }

    @media (min-width: ${responsive.laptop})  
    {
        padding: 100px;
    }
`

export const MainImgContainer = styled.div`
`

export const MainImg = styled.img`
    height: 355px;
    width: 260px;

    @media (min-width: ${responsive.mobile})  
    {
        height: 525px;
        width: 360px;
    }

`

export const SocialNetworksContainer = styled.section`
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
        border: 1px solid ${colorPalette.main.image.border[1]};
        height: 50px;
        width: 50px;
        transition: .5s ease-in-out;
    }
`

export const Introduction = styled.section`
    width: 95%;

    @media (min-width: ${responsive.mobile}) 
    {
        width: 70%;
    }
`

export const IntroductionTitle = styled.h2`
    font-size: 35px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 2px ${colorPalette.main.text.color};

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 50px;
    }

    @media (min-width: ${responsive.laptop}) 
    {
        font-size: 60px;
    }
`

export const Supplements = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`