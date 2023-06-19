import { styled } from 'styled-components'
import { responsive } from './styles'

/** Title ================================================================================================*/

/**
 * Container for the title and logo to redirect to the homepage
 */
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    
`

/**
 * Title of the page
 */
export const Title = styled.h1`
    flex: 2;
    margin-left: 20px;
    font-size: 12px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 15px;
        margin-left: 30px;
    }

    @media (min-width: ${responsive.laptop}) 
    {
        font-size: 20px;
        margin-left: 50px;
    }
`

/**
 * Logo of the site
 */
export const Logo = styled.img`
    position: relative;
    height: 50px;
    left: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 70px;
        left: 20px;
    }
`

/** LANGUAGES ================================================================================================*/

/**
 * Container for the language part
 */
export const LanguageContainer = styled.div`
    flex: 1;
`

/**
 * Selector for the language part
 */
export const LanguageSelector = styled.select`
    width:50px;
    height: 20px;
    background-color: #000014;
    color: #ffffff;
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    flex: 1;

    cursor: pointer;

    @media (min-width: ${responsive.mobile}) 
    {
        min-width: 100px;
        height: 20px;
        font-size: 12px;
    }

    
    @media (min-width: ${responsive.laptop}) 
    {
        min-width: 100px;
        height: 40px;
        font-size: 15px;
    }
`

/**
 * Option of the language part
 */
export const LanguageOption = styled.option`
`

/** MENU ================================================================================================*/
export const MenuButton = styled.button`
    flex: 5;
    margin-left: 10px;
    margin-right: 10px;
    height: 20px;
    background-color: hsl(240, 100%, 4%);
    border: 1px solid white;
    border-radius: 4px;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #007bff4c;
    }

    @media (min-width: ${responsive.mobile}) 
    {
        display: none;
    }
`

/**
 * Image for the menu button
 */
export const MenuButtonImage = styled.img`
    height: 55%;

    @media (min-width: ${responsive.mobile_small}) 
    {
        margin-right: 5px;
    }
`