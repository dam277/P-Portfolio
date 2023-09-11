/**
 * @author : Damien Loup
 * @component : Nav
 * @description : Display the navigation menu to navigate to the specified page
 */

// Import Libraries
import { NavLink } from "react-router-dom";

// Import Hooks

// Import Globals

// Import Enums 

// Import Contexts

// Import Components

// Import Translations

// Import Datas

// Import Styles
import { NavContainer, SmallUl, SmallLi } from "../../resources/css/headerStyle";

// Import Images

/**
 * Component description
 * @param {boolean} isMenuOpen => Define if the menu is open (in small page like phone)
 * @param {object} translations => Translations in the right language
 * @param {boolean} isBig => Define if the size of the page is big
 * @returns {HTMLElement} Nav html elements
 */
function Nav({ isMenuOpen, translations, isBig })
{
    // Return html elements
    return(
        <NavContainer isOpen={isMenuOpen && !isBig}>
            {/* Display the menu small or big */}
            {isMenuOpen && !isBig ? 
            (
                // Smallmenu
                <SmallUl>
                    <SmallLi>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink navlink-move"} to="/">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.home}</span>
                        )}
                        </NavLink>
                    </SmallLi>
                    <SmallLi>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink navlink-move"} to="/about">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.about}</span>
                        )}
                        </NavLink>
                    </SmallLi>
                    <SmallLi>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink navlink-move"} to="/works">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.works}</span>
                        )}
                        </NavLink>
                    </SmallLi>
                </SmallUl>
            ) 
            : 
            (
                // Big menu
                <>
                    <NavLink className={({ isActive }) => isActive ? "active-navlink  navlink" : "navlink"} to="/">
                    {({ isActive }) => (
                        <>
                            <span>{translations.header.home}</span>
                            <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                        </>
                    )}
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/about">
                    {({ isActive }) => (
                        <>
                            <span>{translations.header.about}</span>
                            <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                        </>
                    )}
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/works">
                    {({ isActive }) => (
                        <>
                            <span>{translations.header.works}</span>
                            <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                        </>
                    )}
                    </NavLink>
                </>
            )}
        </NavContainer>
    )
}

export default Nav;