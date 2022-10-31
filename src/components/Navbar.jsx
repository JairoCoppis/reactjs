import React from 'react'
import {CartWidget} from './CartWidget'
import {Logo} from './Logo'
import { Button } from "./Button";
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
            <nav className="navbarstyle"> 
              <div>
                <Link to="/"><Logo/></Link>
              </div>
                <ul>
                    <NavLink className="links" to="/category/Remeras">Remeras</NavLink>
                    <NavLink className="links" to="/category/Camisas">Camisas</NavLink>
                    <NavLink className="links" to="/category/Billeteras">Billeteras</NavLink>
                </ul>
                <div>
                 <Link className="links" to="/cart"><CartWidget/></Link>
                <Button text="Carrito"/>
                </div>
            </nav>
  )
}
