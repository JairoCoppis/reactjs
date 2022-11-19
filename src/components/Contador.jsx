import { useState } from "react";

  export const Contador = ({ stock, onAdd, initial = 1 }) => {
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const agregar = () => {
        onAdd(cantidad);
    };

    const reset = () => {
      setCantidad(0);
    }

    return (
        <div style={{display:`flex`,
        justifyContent:`center`,
        alignItems:`center`}}>
            <section>
                <p>{cantidad}</p>
                <div>
                    <button onClick={restar}>-</button>

                    <button disabled={cantidad === stock} onClick={sumar}>+</button>
                </div>
            </section>
            <div>
                <button className="add" onClick={agregar}>Agregar al carrito</button>
                <button onClick={reset}>Volver a 0</button> 
            </div>
        </div>
    );
};