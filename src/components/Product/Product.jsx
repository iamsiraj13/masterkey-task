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
          <div className="product_info">
            <span className="price">$1165</span>
            <span className="discount">-14%</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
