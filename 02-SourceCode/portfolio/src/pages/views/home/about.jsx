import { Outlet, Link } from "react-router-dom";

function About()
{
    return(
        <main>
            About
            <div>
                <Link to="studyPath">Mon parcours</Link>
                <Link to="competences">Mes compétences</Link>
            </div>
            <Outlet />
        </main>
    )
}

export default About;