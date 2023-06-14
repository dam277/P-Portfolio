import { NavLink } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/">
            {({ isActive }) => (
                <>
                    <span>Accueil</span>
                    <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                </>
            )}
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/about">
            {({ isActive }) => (
                <>
                    <span>A propos</span>
                    <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                </>
            )}
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-navlink navlink" : "navlink"} to="/works">
            {({ isActive }) => (
                <>
                    <span>Travaux</span>
                    <div className={isActive ? "active-navlink-decoration" : "underline-animation"} />
                </>
            )}
            </NavLink>
        </nav>
    )
}

export default Nav;