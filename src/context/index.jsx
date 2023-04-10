import { createContext , useState } from "react";
import {
    collection,
    getFirestore,
    addDoc,
    doc,
    updateDoc,
  } from "firebase/firestore";

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

    const clearCart = () => setProductsCart([]);

    const isInCart = (id) => productsCart.find(product => product.id === id) ? true : false;

    const totalPrice = () => {
        return productsCart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => productsCart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const removeProduct = (id) => setProductsCart(productsCart.filter(product =>product.id !== id));

    const db = getFirestore();
    const sendOrder = (name, email, phone) => {
    const totalBuy = cartProducts.reduce((total, product) => total + product.quantity * product.price, 0);
    const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      items: cartProducts,
      totalBuy,
    };
    const collectionRef = collection(db, 'orders');
    addDoc(collectionRef, order)
      .then((data) => {
        const orderId = data.id;
        setOrderId(orderId);
        cartProducts.forEach((product) => {
          const updatedStock = product.stock - product.quantity;
          updateDoc(doc(db, 'products', product.id), { stock: updatedStock });
        });
      })
      .catch((error) =>
   console.log({ error }));
  }
    function updateOrder(productId, updatedStock) {
        const itemToUpdate = doc(db, "Items", productId);
        updateDoc(itemToUpdate, { stock: updatedStock });
    }


    return (
        <Context.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            sendOrder,
            updateOrder,
            productsCart
        }}>
            {children}
        </Context.Provider>
    );
}

export default CustomProvider;