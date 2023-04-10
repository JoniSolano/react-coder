import { useContext, useState } from 'react';
import { Context } from '../../Context';

const Checkout = () => {
    const {productsCart, } = useContext(Context);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email !== emailConfirm) {
            alert('Los correos electronicos no coinciden')
            return;
        }
        sendOrder(name, email, phone);
    };

    return (
        <div>
            <h1>Formulario de compra</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  aria-label='Nombre y Apellido' required placeholder='Nombre y apellido' />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required aria-label='Telefono' placeholder='Telefono' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label='email' placeholder='Email'/>
                <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required aria-label='Confirmar Email' placeholder='Repita su email' />
                <button>Comprar</button>
            </form>
            <h3>Resumen de compra</h3>
            <ul>
                {productsCart.map((product) => (
                    <li key={product.id}>
                        {product.name} x{product.quantity} <span>unidades</span> ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Checkout;