//////////////////* IMPORTACIONES *\\\\\\\\\\\\\\\\\\

import "./NavBar.css"
import CardWidget from "../cardWidget/CardWidget"

//////////////////* LOGICA *\\\\\\\\\\\\\\\\\\
const NavBar = () => {
    return(
        <header className="navBar">
            <nav>
            <div id="navBar">
                <ul>
                    <li>INICIO</li>
                    <li>TINTOS</li>
                    <li>BLANCOS</li>
                    <li>ESPUMANTES</li>
                </ul>
            </div>
            <CardWidget cantidad= "10"></CardWidget>
        </nav>

        </header>
    )
}

//////////////////* EXPORTACIONES *\\\\\\\\\\\\\\\\\\

export default NavBar