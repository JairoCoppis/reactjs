import React, { useEffect, useState } from 'react';
import { products } from '../mock/products';


const ItemList = () => {
    const [items, setItems] = useState([]); // ... lo ponemos en useState con [] para q lo lea una vez; los mantenga en el tiempo. Indicamos q el useState va a comenzar con un array vacio o con info, da lo mismo.

    useEffect(() => { // Es tan pesado que el codigo debe estar en useEffect y...
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000); //Tiempo diferido para simular un servidor
            
            });
        };
        //console.log(task); //esto me devuelve una promesa
        getProducts()
            .then((res) => {
                //console.log('res', res);
                setItems(res); //Con setItems actualizamos el useState, o sea lo llenamos con el array.
            })
            .catch((error) => { //rej
                console.log(error);
            });
    }, []); //Con este tipo de useState logramos q se lea una sola vez

   //console.log(items); // Veo el resultado de getProducts

    //Le pasamos items q son el valor del array
    return (
        <div id="container">
           
           {

         items.map((producto) => { //A partir del map podemos retornar JSX. Por cada iteracion tenemos un Producto. Map es la manera mas facil a comparacion de for y otros iteradores.
             //Div es hijo de App.js. 
             //Key= es para React, para controlar. Por buena practica se utiliza el ID del producto, se pasa en el elemento padre donde se renderizaria. En return el div es el padre de los demas elementos.

           return (
               <div key={producto.id}> 

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
            );

         })
        }


        </div>
    );
};

export default ItemList;





// return (
//     <div id="container">

//         {

//         items.map((producto) => { //A partir del map podemos retornar JSX. Por cada iteracion tenemos un Producto. Map es la manera mas facil a comparacion de for y otros iteradores.
//             //Div es hijo de App.js. 
//             //Key= es para React, para controlar. Por buena practica se utiliza el ID del producto, se pasa en el elemento padre donde se renderizaria. En return el div es el padre de los demas elementos.

//             return (
//                 <div key={producto.id}> 

//                     <img
//                         src={producto.img}
//                         width="200px"
//                         alt={producto.title}
//                     />

//                     <article>
//                         <h2>{producto.title}</h2>
//                         <h3>${producto.price}.-</h3>
//                     </article>

//                 </div>
//             );

//         })
//         }

//     </div>
// );
// };

// export default ItemList;

