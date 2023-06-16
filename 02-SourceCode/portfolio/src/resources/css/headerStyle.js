import style from 'styled-components'
import { responsive } from './styles'

/** Title ================================================================================================*/

/**
 * Container for the title and logo to redirect to the homepage
 */
export const TitleContainer = style.div
`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    
`

/**
 * Title of the page
 */
export const Title = style.h3
`
    flex: 2;
    margin-left: 20px;
    font-size: 12px;

    @media (min-width: ${responsive.laptop}) 
    {
        font-size: 20px;
        margin-left: 50px;
    }
`

/**
 * Logo of the site
 */
export const Logo = style.img
`
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
export const LanguageContainer = style.div
`
    flex: 1; 
    display: flex;
    align-items: center;
`

/**
 * Selector for the language part
 */
export const LanguageSelector = style.select
`
    width: 80%;
    min-width:50px;
    max-width:200px;
    height: 20px;
    background-color: hsl(240, 100%, 4%);
    color: white;
    text-align: center;
    margin-right: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        min-width: 100px;
        height: 40%;
    }
`

/**
 * Option of the language part
 */
export const LanguageOption = style.option
`
`

/** MENU ================================================================================================*/
export const MenuButton = style.button
`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
    height: 20px;
    background-color: hsl(240, 100%, 4%);
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: hsl(240, 100%, 18%);
    }
    $:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }

    @media (min-width: ${responsive.mobile}) 
    {
        display: none;
    }
`

export const MenuButtonImage = style.img
`
    margin-right: 5px;
    height: 55%;
`