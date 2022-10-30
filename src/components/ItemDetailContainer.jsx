import React, { useEffect, useState } from 'react';
import { products } from '../mock/products';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

const [item, setItem] = useState({}); 
  
    useEffect(() => { 
        const getProduct = () => {
            return new Promise((res, rej) => {

                const product = products.find((producto)=>producto.id === 1)

                setTimeout(() => {
                    res(product);
                }, 2000); 
            
            });
        };
        
        getProduct()
            .then((res) => {
                
                setItem(res);
            })
            .catch((error) => { 
                console.log(error);
            });
    }, []); 

    return (
        <div id="container">
            <ItemDetail item={item}/>
        </div>
    );
};




