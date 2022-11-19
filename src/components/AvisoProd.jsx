import { Link} from "react-router-dom"

export const AvisoProd = () => {
  return (
    <div className='cards'>
    <h4>
        Aún no hay productos en el carrito, volvé a <Link to="/">Inicio</Link> o presiona el logo para volver a la pantalla principal, luego segui estas instrucciones: 1. Ver detalle, 2. Selecciona la cantidad y presiona Agregar al carrito, 3. Presiona Ir al carrito, 4. Checkout -ingresa tus datos- 4. Enviar. Nota: anota tu numero de seguimiento. Una vez realizado tu pedido nos ponemos en contacto. Gracias!!
    </h4>
    </div>
  )
}

