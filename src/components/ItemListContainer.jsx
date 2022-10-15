import {Button} from "./Button"

export const ItemListContainer = ({greeting}) => {

    return (
        
        <div className="cards">
            <img src="./img/macchiato.png" alt="" />
            <div>
            <article>
                Hola! {greeting}
            </article>
            </div>
            
            <Button text="Comprar"/>
        </div>
        
    ) 
}


//----------------------------------

// const Main = ({saludo}) => { //Si pongo llaves hago el destructuring y no necesito acceder a la propiedad del objeto con un punto. En caso de querer usar mas prop le pongo una coma y accedo a edad, etc.

//     return (

//         <article>
//             Hola! {saludo}
//         </article>
//     )
// }

// export default Main //Export default (Solo uno por archivo)



//----------------------------------


// const Main = (props) => { 

//     console.log(props) //Props es un objeto

//     return (

//         <article>
//             Hola! {props.saludo}
//         </article>
//     )
// }

// export default Main //Export default (Solo uno por archivo)