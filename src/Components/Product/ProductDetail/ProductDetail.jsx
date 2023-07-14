import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productStore } from "../ProductStore";
import { observer } from "mobx-react-lite";

const ProductDetail = () => {
const {id} = useParams()
  useEffect(() => {
    const getByIdProduct = async () => {
      console.log("id", id);
      await productStore.getProduct(id);
    };
    getByIdProduct();
  }, [id]);

  return(  
    <div className="row">
      <div className="col-md-3-detail">
    <div className="card-detail">
      <div className="card-img">
      <img className="img-product-detail" src={productStore.products.image} alt="" />
      </div>
      <div className="card-body">      
        <h5 className="card-title">{productStore.products.title}</h5>
        <p>Category: {productStore.products.category}</p>
        <p>Description : {productStore.products.description}</p>
        <p className="card-price">Price : {productStore.products.price}$</p>
      </div>
    </div>
  </div>
  </div>
    
  ) 
};
export default observer(ProductDetail);
