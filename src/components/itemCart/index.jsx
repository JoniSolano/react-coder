import "./itemCart.css";
import { Context } from "../../Context";
import { useContext } from "react";

const ItemCart = ({product}) => {
    const {removeProduct} = useContext(Context);

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;