import { Link } from "react-router-dom"

export const Item = ({producto}) => {
 
 return (
        
        <div>
         <img
             src={producto.img}
             width="200px"
             alt={producto.title}
        /> 
        <article>
            <h2>{producto.title}</h2>
            <h3>${producto.price}.-</h3>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
        </article>
        </div>
    )                     
}
    