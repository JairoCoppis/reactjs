import {Item} from './Item';
import React, { memo } from 'react';

export const ItemList = memo (
    ({ items }) => {
    return (
        <>
           {items.map((producto) => {
                return <Item producto={producto} key={producto.id} />;
            })}
       </>  
    )  
    },
    
    (a, b) => a.items === b.items
);