import CartWidget from "../CartWidget";
import logo from "../../assets/img/logo-icono.png"
import "./navBar.css";

function NavBar() {
    return (
        <div className="nav-bar">
            <ul>
                <li><img src={logo} alt="logo"/></li>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;