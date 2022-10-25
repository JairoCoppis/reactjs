
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
        </article>
        </div>
    )                     
}
    