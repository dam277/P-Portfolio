import { styled } from 'styled-components'
import { colorPalette, responsive } from "./styles";

/** Header ================================================================================================*/
export const HeaderContainer = styled.header`
    background-color: ${colorPalette.primary.backGroundDefault};
    color: ${colorPalette.primary.colorDefault};
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
    height: 75px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 100px;
    }
`

/** Title ================================================================================================*/
/**
 * Container for the title and logo to redirect to the homepage
 */
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${colorPalette.primary.colorDefault};
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
/** NAVIGATION ================================================================================================*/
export const NavContainer = styled.nav`
    position: absolute;
    height: 0;
    visibility: hidden;
    top: 100%;
    width: 100%;
    
    ${props => 
        props.isOpen &&
        {
            "visibility": `visible`,
            "display": `flex`,
            "height": `100%`,
            "border-top": `1px solid hsl(0, 0%, 100%)`
        }
    }

    @media (min-width: ${responsive.mobile}) 
    {
        top: 0;
        width: 40%;
        height: 100%;
        visibility: visible;
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        flex: 10;
        display: flex;
        align-items: center;
    }
`

export const SmallUl = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
`

export const SmallLi = styled.li`
    border-bottom: 1px solid white;
    background-color: #000022;
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
    width: 50px;
    height: 20px;
    background-color: ${colorPalette.header.button.backGroundColor};
    color: ${colorPalette.primary.colorDefault};
    text-align: center;
    margin-right: 10px;
    font-size: 12px;
    float: right;
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
    background-color: ${colorPalette.header.button.backGroundColor};
    border: 1px solid white;
    border-radius: 4px;
    color: ${colorPalette.primary.colorDefault};
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${colorPalette.header.button.hover.backGroundColor};
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

