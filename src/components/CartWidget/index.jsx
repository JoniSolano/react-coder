import { FaShoppingBag } from "react-icons/fa";
import "./cartWidget.css"
import { Context } from "../../Context";
import { useContext } from "react";

function CartWidget() {
    const {totalProducts} = useContext(Context)

    return (
        <div className="cart">
            <span><FaShoppingBag/>{totalProducts() || '0'}</span>
        </div>
    );
}

export default CartWidget;
