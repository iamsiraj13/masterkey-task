import React, { Fragment } from "react";
const Product = ({ product }) => {
  return (
    <Fragment>
      <div className="product p-2">
        <div className="product_img">
          <img src={product.picture} alt="" />
        </div>

        <div className="product_body">
          <h3 className="product_title">{product.name}</h3>
          <div className="product_info d-flex justify-content-between">
            <span className="price">${product.price}</span>
            <span className="discount">-{product.discount}%</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
