import { NavLink } from "react-router-dom";

function Nav({ translations })
{
    return(
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/">
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
        </nav>
    )
}

export default Nav;