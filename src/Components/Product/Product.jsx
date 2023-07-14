import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/productlist">Ürünler</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Product;


