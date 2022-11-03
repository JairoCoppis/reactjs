import React from 'react'
import {CartWidget} from './CartWidget'
import {Logo} from './Logo'
// import { Button } from "./Button";
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
            <nav className="navbarstyle">       
                <div>
                  <Link className="logo" to="/"><Logo/></Link>
                </div>

                  <div>
                    <ul>                    
                        <NavLink className="links" to="/category/Cafe Caliente">Cafe Caliente</NavLink>
                        <NavLink className="links" to="/category/Cafe Frio">Cafe Frio</NavLink>
                        <NavLink className="links" to="/category/Bebida Fria">Bebida Fria</NavLink>
                    </ul>
                  </div>

                  <div>
                    <Link className="links" to="/cart"><CartWidget/></Link>
                    {/* <Button text="Carrito"/> */}
                  </div>            
            </nav>
  )
}
