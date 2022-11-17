import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
    const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext);

    if (cart.length === 0)
        return (
            <h1>
                Aún no hay productos en el carrito, volvé a <Link to="/">Inicio</Link> o presiona el logo.
            </h1>
        );

    return (
        <div className="cards">
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="200px" />
                    <div>
                        <h3>{prod.title}</h3>
                        <h3>{prod.cantidad} U/s</h3>
                        <button onClick={() => deleteOne(prod.id)}>
                            Eliminar
                        </button>  
                    </div>
                </div>
            ))}
             <h2>Total: {totalPrecio()}$</h2>
            <button onClick={deleteAll}>Vaciar carrito</button>
           <button className='links'> <Link to="/checkout">Checkout</Link> </button>
        </div>
    );
};


