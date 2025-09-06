import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";
import car from "../assets/car.svg";
/*import arrow from "../assets/arrow.svg";*/
import hamburgerHeader from "../assets/hamburger-header.png";

const NavBar= ()=>{
    return(
        <>
            <div className="menu container">
                <a href="#">
                    <img className="logo" src={logo}  alt=""/>
                </a>
                <input type="checkbox" id="menu"/>
                <label htmlFor="menu">
                    <img className="menu-icono" src={menu} alt=""/>
                </label>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

const HeaderContent=()=>{
    return(
        <>
        <div className="header-content container">
                <div className="header-txt">
                    <h1>Hamburguesas</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam odit eos saepe vitae, repellat explicabo nostrum quo? Facere, sequi. Aperiam fugiat accusamus iusto excepturi dolorem quos. Tempora, reiciendis veniam.
                    </p>
                    <div className="botones">
                        <a href="#" className="btn-1">
                            Comprar
                            <img className="icon" src={car} alt=""/>
                        </a>
                        <a href="#" className="btn-2">
                            Informacion
                        </a>
                    </div>
                </div>

                <div className="header-img">
                    <img className="hamburger" src={hamburgerHeader}  alt=""/>
                </div>
        </div>
        </>
    )
}

export const Header=()=>{
    return(
        <>
        <header className="header">
            <NavBar/>
            <HeaderContent/>
        </header> 
        </>
    )
}