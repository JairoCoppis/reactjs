import React, { useEffect, useState } from 'react';
// import { products } from '../mock/products';
import { getProducts } from '../mock/products';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
    const [items, setItems] = useState([]); 

    const { categoryName } = useParams();

    useEffect(() => { 
            getProducts(categoryName)
                .then((res) => {
                    setItems(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, [categoryName]);

    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    );
};




  //     const getProducts = () => {
    //         return new Promise((res, rej) => {
    //             setTimeout(() => {
    //                 res(products);
    //             }, 2000); 
            
    //         });
    //     };
        
    //     getProducts()
    //         .then((res) => {
                
    //             setItems(res);
    //         })
    //         .catch((error) => { 
    //             console.log(error);
    //         });
    // }, []); 