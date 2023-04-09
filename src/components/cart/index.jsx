import "./cart.css"
import { Context } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart";

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
            <p>Total: ${totalPrice()}</p>
        </div>
    );
}

export default CartContainer;