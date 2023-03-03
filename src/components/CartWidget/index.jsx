import { FaShoppingBag } from "react-icons/fa";
import "./cartWidget.css"

function CartWidget() {
    return (
        <div className="cart">
            <span><FaShoppingBag/></span>
            <span>3</span>
        </div>
    );
}

export default CartWidget;
