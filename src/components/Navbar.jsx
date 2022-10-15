import React from 'react'
import {CartWidget} from './CartWidget'
import Logo from './Logo'
import { Button } from "./Button";

export const Navbar = () => {
  return ( //Agregando CSS con className
            <nav className="navbarstyle"> 
              <div>
                <Logo/>
              </div>
                <ul>
                    <li>Inicio</li>
                    <li>Catalogo</li>
                </ul>
                <div>
                  <CartWidget/>
                <Button text="Carrito"/>
                </div>
            </nav>
  )
}
