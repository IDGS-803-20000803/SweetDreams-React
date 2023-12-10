/* eslint-disable no-unused-vars */
import React from "react";

const NavBar = () => {
  
  return (
    <header>
      <nav>
        
          <h1 className="title_nav">SWEET DREAMS</h1>
          <ul className="list_nav">
            <a href="#nostros">
              <li className="item_nav">
                <span className="material-symbols-outlined">info</span>
              </li>
            </a>
            <a href="#productos">
              <li className="item_nav">
                <span className="material-symbols-outlined">storefront</span>
              </li>
            </a>
            <a href="#contacto">
              <li className="item_nav">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </li>
            </a>
            <a href="/carrito">
              <li>
                <span className="material-symbols-outlined">shopping_cart</span>
              </li>
            </a>
          </ul>
        
      </nav>
    </header>
  );
};

export default NavBar;
