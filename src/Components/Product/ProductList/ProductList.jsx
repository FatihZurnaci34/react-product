import React, { useEffect } from "react";
import { productStore } from "../ProductStore";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const getProductList = async () => {
      await productStore.getProductList();
    };

    getProductList();
  }, []);

  const onClick = (id) => {
    navigate(`/productdetail/${id}`)
  }
  return (
    <div>
      <h2>ÜRÜNLER</h2>
      <div className="row">
        {Array.isArray(productStore.products) ? (
          productStore.products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card" onClick={() => onClick(product.id)}>
                <div className="card-img">
                    <img className="img-product" src={product.image} alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p>Category: {product.category}</p>
                  <p className="card-price">{product.price}$</p>
                  <p className="card-rate">Rate : {product.rating.rate}</p>
                  <Link className="btn" to={`/productdetail/${product.id}`}>
                    <div className="card-btn">
                        <button className="btn">DETAY</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default observer(ProductList);