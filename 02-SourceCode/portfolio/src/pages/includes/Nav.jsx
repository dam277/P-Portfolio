// Import rooting elements
import { NavLink } from "react-router-dom";

import { NavLinkText } from "../../resources/css/headerStyle";

/**
 * Nav component for the header navigation menu
 * @param {Array} translations array of translations 
 * @returns {HTMLElement} html elements containing the navigation menu
 */
function Nav({ isMenuOpen, translations, isBig })
{   
    console.log(isMenuOpen);

    return(
        <nav className={isMenuOpen && !isBig ? "nav-opened" : "" }>
            {isMenuOpen && !isBig ? 
            (
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink  navlink" : "navlink navlink-move"} to="/">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.home}</span>
                        )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink  navlink" : "navlink navlink-move"} to="/about">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.about}</span>
                        )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active-navlink  navlink" : "navlink navlink-move"} to="/works">
                        {({ isActive }) => (
                            <span>{isActive && "> "}{translations.header.works}</span>
                        )}
                        </NavLink>
                    </li>
                </ul>
            ) 
            : 
            (
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
        </nav>
    )
}

export default Nav;