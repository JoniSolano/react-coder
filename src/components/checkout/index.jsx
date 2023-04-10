import { useContext} from 'react';
import { Context } from '../../Context';
import { addDoc,collection,doc,getFirestore,updateDoc} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

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
            <div>
                <h3>Para Finalizar su pedido, complete el formulario</h3>
                <form>                
                    <Form.Label className="textoLabel">Nombre Completo</Form.Label>
                    <Form.Control id="formName" type="text" placeholder="Ingrese Nombre completo" required/>

                    <Form.Label className="textoLabel">Telefono</Form.Label>
                    <Form.Control id="formPhone" type="number" placeholder="Ingrese telefono" required/>

                    <Form.Label className="textoLabel">Email</Form.Label>
                    <Form.Control id="formEmail" type="email" placeholder="Ingrese su email" required/>
                    <NavLink to={'/cart'}>
                        <Button variant="success">Ver Pedido </Button>
                    </NavLink>
                    <Button variant="primary" className="formButton" onClick={sendOrder} >Realizar compra </Button>{" "}
                </form>
            </div>
        );
}

export default Checkout;