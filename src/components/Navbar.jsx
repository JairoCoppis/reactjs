import React from 'react'
import { Button } from './Button'
import CartWidget from './CartWidget'

export const Navbar = () => {
  return ( //Agrgando CSS con className
            
            <nav className="navbarstyle"> 
              <div>
                <CartWidget/>
              </div>
                <ul>
                    <li>Inicio</li>
                    <li>Catalogo</li>
                </ul>
                  <div>
                      <span className="material-symbols-outlined"> 
                        shopping_cart_checkout 
                      </span>
                        <Button text="Carrito"/>
                  </div>
            </nav>
  )
}
