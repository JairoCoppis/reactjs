import { Link } from "react-router-dom"

export const Item = ({producto}) => {
 return ( 
        <div className="cards">
            <div className="imagen">
                <img
                    src={producto.img}
                    width="200px"
                    alt={producto.title}
                /> 
            </div>

            <article className="articulo">
                <h2>{producto.title}</h2>
                <h3>${producto.price}.-</h3>
                <Link to={`/item/${producto.id}`}>Ver detalles</Link>
            </article>
        </div>
    )                     
}   