import CartWidget from "../CartWidget";
import logo from "../../assets/img/logo-icono.png"
import "./navBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
            <ul>
                <li><img src={logo} alt="logo"/></li>
                <li>
                    <NavLink className="botones" to={"/"}>Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink className="botones" to={"/category/pizzas"}>Pizzas</NavLink>
                </li>
                <li>
                    <NavLink className="botones" to={"/category/burguers"}>Burguers</NavLink>
                </li>
                <li>
                    <NavLink className="botones" to={"/category/cervezas"}>Cervezas</NavLink>
                </li>
            </ul>
            <NavLink to={"/cart"}>
                <CartWidget />
            </NavLink>  
        </div>
    );
}

export default NavBar;