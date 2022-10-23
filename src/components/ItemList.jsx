import {Item} from "./Item"
import {products} from "../mock/products"
 
export const ItemList = () => {
   return(
      products.map((products) => {
            return(
            <Item key={products.id} producto={products}/>
            ) 
         })
         
         )}
         