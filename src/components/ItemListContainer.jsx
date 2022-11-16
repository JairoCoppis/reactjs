import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]); 
    const { categoryName } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const collectionProd = collection(db, 'productos');

        const ref = categoryName
            ? query(collectionProd, where('category', '==', categoryName))
            : collectionProd;

        getDocs(ref)
            .then((res) => {
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
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div className="container">
                <Skeleton count={8} width={200} height={40} />
            </div>
        );
    }

      return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    );
};