import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs} from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';


export const ItemListContainer = () => {
    const [items, setItems] = useState([]); 

    
    const { categoryName } = useParams();

    useEffect(() => { 
        getDocs(collectionProd)
            .then((res) => {
                // console.log(res)
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryName]);

      return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    );
};