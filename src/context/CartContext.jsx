import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cantidad: prodDelCarrito.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado);
    };


    const deleteAll = () => {
        setCart([]);
    };

  const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    const totalUnidades = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count = count += prod.cantidad;
        });
        return count;
    };
   
    const totalPrecio = () => 1000;

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteAll,
                deleteOne,
                totalUnidades,
                totalPrecio,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


