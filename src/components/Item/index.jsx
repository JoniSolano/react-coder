import "./item.css";
import { Link } from "react-router-dom";

function Item({product}) {
    return (
        <div className="card">
            <img className="fotito" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <Link to={'/item/${product.id}'}>
                <button>Ver mas</button>
            </Link>
        </div>
    )
}

export default Item;