import style from 'styled-components'

/**
 * Title of the page
 */
export const Title = style.h3
`
    flex: 2;
    margin-left: 100px;
`

/**
 * Logo of the site
 */
export const Logo = style.img
`
    position: relative;
    height: 70px;
    left: 20px;
`

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
    height: 40%;
    background-color: hsl(240, 100%, 4%);
    color: white;
    text-align: center;
`

/**
 * Option of the language part
 */
export const LanguageOption = style.option
`
`