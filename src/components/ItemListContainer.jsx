import React, { useEffect, useState } from 'react';
import { products } from '../mock/products';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]); 

    useEffect(() => { 
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000); 
            
            });
        };
        
        getProducts()
            .then((res) => {
                
                setItems(res);
            })
            .catch((error) => { 
                console.log(error);
            });
    }, []); 

    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    );
};
