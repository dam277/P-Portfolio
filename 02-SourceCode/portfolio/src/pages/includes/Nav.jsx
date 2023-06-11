import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>
                    <Link to="/works">Travaux</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;