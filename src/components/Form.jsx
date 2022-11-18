import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { db } from '../services/firebaseConfig';
import { CartContext } from '../context/CartContext';


export const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState('');
    //crear un estado de loading

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();
        
        const objOrden = {
            buyer: { //Crear estado
                name,
                lastName,
                telefono: 202020,
                direccion: 'Calle siempre viva 677',
                email: 'JairoC@gmail.com',
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Error', error);
            });
    };

    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    if (orderId) {
        return (
            <h1>Gracias por tu compra! tu número de seguimiento es {orderId} anotalo ahora y no lo pierdas.</h1>
        );
    }

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleLastName}
                    value={lastName}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

