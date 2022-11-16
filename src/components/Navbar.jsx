import React from 'react'
import { CartWidget } from './CartWidget'
import { Logo } from './Logo'
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';

export const Navbar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
      const categCollection = collection(db,'category');
      getDocs(categCollection)
          .then((res) => {
              const secciones = res.docs.map((prod) => {
                  return {
                      id: prod.id,
                      ...prod.data(),
                  };
              });
              setCategory(secciones);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

  return (
            <nav className="navbarstyle">       
                <div>
                  <Link className="logo" to="/"><Logo/></Link>
                </div>

                  <div>
                    <ul>                    
                    {category.map((cat) => (
                    <NavLink
                        key={cat.id}
                        className="links"
                        to={`/category/${cat.path}`}
                    >
                        {cat.title}
                    </NavLink>
                ))}
                    </ul>
                  </div>

                  <div>
                    <Link className="links" to="/cart"><CartWidget/></Link>
                  </div>            
            </nav>
  )
}

   /* <NavLink className="links" to="/category/Cafe Caliente">Cafe Caliente</NavLink>
      <NavLink className="links" to="/category/Cafe Frio">Cafe Frio</NavLink>
      <NavLink className="links" to="/category/Bebida Fria">Bebida Fria</NavLink> */