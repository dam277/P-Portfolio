import { Outlet, Link } from "react-router-dom";

function About()
{
    return(
        <main>
            About
            <nav>
                <Link to="studyPath">Mon parcours</Link>
                <Link to="competences">Mes compétences</Link>
            </nav>
            <Outlet />
        </main>
    )
}

export default About;