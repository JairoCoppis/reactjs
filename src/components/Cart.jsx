import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AvisoProd } from './AvisoProd';

export const Cart = () => {
    const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext);

    if (cart.length === 0)
        return (
            <AvisoProd/>
        );

    return (
        <div className="cards">
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="200px" />
                        <div>
                            <h3>{prod.title}</h3>
                            <h3>{prod.cantidad} U/s</h3>
                            <button className='btn-detalle' onClick={() => deleteOne(prod.id)}>Eliminar</button>  
                        </div>
                </div>
            ))}
             <h2>Total a pagar: ${totalPrecio()}</h2>
                <button className='btn-detalle' onClick={deleteAll}>Vaciar carrito</button>
                    <button className='btn-detalle'> <Link to="/checkout">Terminar mi compra</Link> </button>
        </div>
    );
};