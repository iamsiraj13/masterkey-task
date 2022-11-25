import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./hero.css";
const HeroSection = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("./fakeApi.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="hero">
      <div className="container smargin">
        <div className="smargin">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="hero_title">
                <h2>
                  We picked some <span className="h_title">cool things</span>{" "}
                  for you!
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12">
                  <div className="hero_product_title">
                    <h2>Hot deals for you</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {products.slice(0, 6).map((product) => (
                  <div className="col-md-4">
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
