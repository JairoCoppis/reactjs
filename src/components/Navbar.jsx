import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
  return ( //Agrgando CSS con className
            
            <nav className="navbarstyle"> 
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
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
