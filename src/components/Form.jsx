import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { db } from '../services/firebaseConfig';
import { CartContext } from '../context/CartContext';

export const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [adress, setAdress] = useState('');
    const [mail, setMail] = useState('');

    const [orderId, setOrderId] = useState('');
    //crear un estado de loading

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarData = (e) => {
        e.preventDefault();
        
        const objOrden = {
            buyer: {name,lastName,telefone,adress,mail},
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

    const handleTelefone = (e) => setTelefone(e.target.value);

    const handleAdress = (e) => setAdress(e.target.value);

    const handleMail = (e) => setMail(e.target.value);

    if (orderId) {
        return (
            <h1>Gracias por tu compra! tu número de seguimiento es {orderId} anotalo ahora y no lo pierdas.</h1>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '100px',
                padding: '50px 50px',
            }}>

                <h1>CheckOut</h1>

            <form action="" onSubmit={enviarData}>
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
                   <input
                    type="text"
                    placeholder="Telefono"
                    name="telefono"
                    onChange={handleTelefone}
                    value={telefone}
                />
                   <input
                    type="text"
                    placeholder="Direccion"
                    name="direccion"
                    onChange={handleAdress}
                    value={adress}
                />
                   <input
                    type="text"
                    placeholder="Mail"
                    name="mail"
                    onChange={handleMail}
                    value={mail}
                />
                <button className='btn-detalle'>Enviar</button>
            </form>
        </div>
    );
};

