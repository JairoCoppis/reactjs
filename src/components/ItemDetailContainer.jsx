import React, { useEffect, useState } from 'react';
import { getProduct } from '../mock/products';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

const { idProducto } = useParams();
const [item, setItem] = useState({});
  
    useEffect(() => {

        getProduct(idProducto)
            .then((res) => { 
                setItem(res);
            })
            .catch((error) => { 
                console.log(error);
            });
    }, [idProducto]); 

    return (
        <div id="container">
            <ItemDetail item={item}/>
        </div>
    );
};



// const getProduct = () => {
//     return new Promise((res, rej) => {

//         const product = products.find((producto)=>producto.id === +idProducto)

//         setTimeout(() => {
//             res(product);
//         }, 2000); 
    
//     });
// };
