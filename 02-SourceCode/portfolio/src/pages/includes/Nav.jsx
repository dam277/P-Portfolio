// Import rooting elements
import { NavLink } from "react-router-dom";

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
                <>
                    <NavLink className="navlink" to="/">
                    {({ isActive }) => (
                        <span>{translations.header.home}</span>
                    )}
                    </NavLink>
                    <NavLink to="/about">
                    {({ isActive }) => (
                        <span>{translations.header.about}</span>
                    )}
                    </NavLink>
                    <NavLink to="/works">
                    {({ isActive }) => (
                        <span>{translations.header.works}</span>
                    )}
                    </NavLink>
                </>
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