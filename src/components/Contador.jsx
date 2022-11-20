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
        <div className="principal">
            <section>
                <p>{cantidad}</p>
                    <div>
                        <button className='btn-detalle' disabled={cantidad === stock} onClick={sumar}>+</button>
                        <button className='btn-detalle' onClick={restar}>-</button>
                    </div>
            </section>
                <div>
                    <button className='btn-detalle' onClick={agregar}>Agregar al carrito</button>
                    <button className='btn-detalle' onClick={reset}>Volver a 0</button> 
                </div>
        </div>
    );
};