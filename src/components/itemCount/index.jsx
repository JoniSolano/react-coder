import './itemCount.css';

import React, {useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count -1);
    }

    const increase = () => {
        setCount(count +1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])

    return (
        <div className='countContainer'>
            <div>
                <button className='botonCount' disabled={count <= 0} onClick={decrease}>-</button>
                <span className='count'>{count}</span>
                <button className='botonCount' disabled={count >= stock} onClick={increase}>+</button>
            </div>
            <div>
                <button className='botonAccion' disabled={count <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;