import { Button } from "@mui/material";
import React, {useState} from "react";
import products from "../../mocks/products";
import "./itemDetail.css";

function ItemDetail ({product=products}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="containerProd">
            <img className="fotoProd" src={product.image} alt={product.name} />
            <div className="detalleProd">
                <div className="detalles">
                    <h2>{product.name}</h2>
                    <p>"{product.description}"</p>
                    <p>${product.price}</p>
                </div>
                <div className="count">
                    <button className="botonCount" onClick={() => setQuantity(quantity -1)}>-</button>
                    <p>{quantity}</p>
                    <button className="botonCount" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div className="acciones">
                    <Button className="botonAccion" variant="outlined"
                    >Comprar</Button>
                    <Button className="botonAccion" variant="outlined"
                    >Añadir al carrito</Button>
                </div>
            </div>  
        </div>
    )
}

export default ItemDetail;