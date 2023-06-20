// Import rooting elements
import { NavLink } from "react-router-dom";

/** Import styles */
import { NavContainer, SmallUl, SmallLi } from "../../resources/css/headerStyle";

/**
 * Nav component for the header navigation menu
 * @param {Array} translations array of translations 
 * @returns {HTMLElement} html elements containing the navigation menu
 */
function Nav({ isMenuOpen, translations, isBig })
{
    return(
        <NavContainer isOpen={isMenuOpen && !isBig}>
            {isMenuOpen && !isBig ? 
            (
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