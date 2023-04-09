// import { Button } from "@mui/material";
import React, {useState, useContext} from "react";
import { Context } from "../../Context";
import products from "../../mocks/products";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import "./itemDetail.css";

export const ItemDetail = ({product=products}) => {
    const {addProduct} = useContext(Context);
    const [goToCart, setGoToCart] = useState(false);
    function onAdd(quantity) {
        setGoToCart(true);
        addProduct(product, quantity);
    }

    return (
        <div className="containerProd">
            <img className="fotoProd" src={product.image} alt={product.name} />
            <div className="detalleProd">
                <div className="detalles">
                    <h2>{product.name}</h2>
                    <p>"{product.description}"</p>
                    <p>${product.price}</p>
                </div>
                {
                    goToCart
                    ? <Link to='/cart'>Terminar compra</Link>
                    : <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                }
            </div>  
        </div>
    )
}

export default ItemDetail;