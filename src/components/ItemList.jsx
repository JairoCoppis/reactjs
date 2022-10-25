import {Item} from './Item';

export const ItemList = ({ items }) => {
    return (
            items.map((producto) => {
                return <Item producto={producto} key={producto.id} />;
            })
        
    );
};