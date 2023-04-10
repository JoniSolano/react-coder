import "./itemCart.css";
import { Context } from "../../Context";
import { useContext } from "react";

const ItemCart = ({product}) => {
    const {removeProduct} = useContext(Context);

    return (
        <div className="itemCart">
            <img className="fotoCart" src={product.image} alt={product.title} />
            <div className="detailProd">
                <div>
                    <p>Titulo: {product.name}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: {product.price}</p>
                    <p>Subtotal: ${product.quantity * product.price}</p>
                </div>
                <div>
                    <button className="buttonAccion" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;