import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export const ItemDetailContainer = () => {
const [loading, setLoading] = useState(true);
const { idProducto } = useParams();
const [item, setItem] = useState({});
  
    useEffect(() => {
        const collectionProducts = collection(db, 'productos');
        const ref = doc(collectionProducts, idProducto);

        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [idProducto]); 

    if (loading) {
        return (
            <div className="detail-container">
                <h1>Espere, Cargando..</h1>
            </div>
        );
    }

    return (
        <div id="container">
            <ItemDetail item={item}/>
        </div>
    );
};