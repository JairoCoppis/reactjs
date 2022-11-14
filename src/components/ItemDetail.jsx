import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Contador } from './Contador'


export const ItemDetail = ({item}) => {

  const [show, setShow] = useState(true);
  const { addToCart, cantidadDeProducto } = useContext(CartContext);

  const onAdd = (qty) => {
    setShow(false);
    addToCart(item, qty);
};

const cantidad = cantidadDeProducto(item.id);

  return (
    <div className="cardsDetail" >
       <img src={item.img} alt={item.title} />
            <div>
            {show ? (
                    <h2>{item.title}</h2>
                ) : (
                    <h2>Este producto ya fue agregado al carrito</h2>
                )}
                <p>
                    {item.description}
                </p>
                <h3>${item.price}</h3>
                {show ? (
                    <Contador stock={item.stock} onAdd={onAdd} initial={cantidad} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
        </div>
    </div>
  )
}

