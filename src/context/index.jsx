import { createContext , useState } from "react";

export const Context = createContext();

function CustomProvider({children}) {
    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setProductsCart(productsCart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} :product
            }));
        } else {
            setProductsCart([...productsCart, { ...item, quantity}]);
        }
    }

    console.log('carrito: ', productsCart);

    const clearCart = () => setProductsCart([]);

    const isInCart = (id) => productsCart.find(product => product.id === id) ? true : false;

    const totalPrice = () => {
        return productsCart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => productsCart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const removeProduct = (id) => setProductsCart(productsCart.filter(product =>product.id !== id));


    return (
        <Context.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            productsCart
        }}>
            {children}
        </Context.Provider>
    );
}

export default CustomProvider;