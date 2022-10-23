import { products } from "../mock/products"

export const Item = () => {
 
    return (
        <div>
         <img
             src={products.img}
             width="200px"
             alt={products.title}
        />

        <article>
            <h2>{products.title}</h2>
            <h3>${products.price}.-</h3>
         </article>
         </div>
    )                     
}
    