import { useContext} from 'react';
import { Context } from '../../Context';
import { addDoc,collection,doc,getFirestore,updateDoc} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import "./checkout.css"

const Checkout = () => {
    const {productsCart, clearCart} = useContext(Context);

    const db = getFirestore();

    function updateOrder(productId,finalStock){
        const itemRef = doc(db,"items",productId);
        updateDoc(itemRef,{stock: finalStock}).catch((error)=> console.log(error));
    }

    function sendOrder(){
        const name = document.getElementById("formName").value;
        const phone = document.getElementById("formPhone").value;
        const email = document.getElementById("formEmail").value;

        const collectionRef = collection(db,"orders");
        const total = productsCart.reduce((accum,elem)=> accum + (elem.quantity * elem.price),0);
        const fecha = new Date().toLocaleDateString();

        const order = {
            buyer: {name: `${name}`,email:`${email}`,phone:`${phone}`},
            items: productsCart,
            fecha,
            total,
    };

    addDoc(collectionRef,order)
            .then(()=>{
                productsCart.map((product)=>{
                    const finalStock = product.stock - product.quantity;
                    updateOrder(product.id,finalStock);
                });
                alert("La operacion fue realizada con exito. Muchas gracias por su compra!");
                clearCart();
            })
            .catch((error)=>console.log(error))
        }

        return(
            <div className='checkoutContainer'>
                <h2>Para finalizar su pedido, complete el formulario:</h2>
                <form className='formContainer'>                
                    <Form.Label className="formTitle">Nombre Completo</Form.Label>
                    <Form.Control className="formText" id="formName" type="text" placeholder="Ingrese Nombre completo" required/>

                    <Form.Label className="formTitle">Telefono</Form.Label>
                    <Form.Control className="formText" id="formPhone" type="number" placeholder="Ingrese telefono" required/>

                    <Form.Label className="formTitle">Email</Form.Label>
                    <Form.Control className="formText" id="formEmail" type="email" placeholder="Ingrese su email" required/>
                    <Button className="buttonCompra" variant="primary" onClick={sendOrder} >Realizar compra </Button>{" "}
                </form>
            </div>
        );
}

export default Checkout;