import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
  return ( //Agrgando CSS con className
            
            <nav className="navbar"> 
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                </ul>
                  <Button text="Carrito"/>
            </nav>
  )
}
