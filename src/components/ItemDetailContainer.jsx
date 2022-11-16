import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';

export const ItemDetailContainer = () => {

const { idProducto } = useParams();
const [item, setItem] = useState({});
  
    useEffect(() => {

        const ref = doc(collectionProd, idProducto);

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
    }, [idProducto]); 

    return (
        <div id="container">
            <ItemDetail item={item}/>
        </div>
    );
};
