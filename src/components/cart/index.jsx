import { Context } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart";
import "./cart.css"

const CartContainer = () => {
    const {productsCart, totalPrice} = useContext(Context);

    if (productsCart.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Buscar productos</Link>
            </div>
        )
    }

    return (
        <div>
            {
                productsCart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className="totalCount">
                <p>Total: ${totalPrice()}</p>
                <Link to={"/checkout"}>
                    <button className="buttonAccion">Terminar Compra</button>
                </Link>
            </div>
        </div>
    );
}

export default CartContainer;