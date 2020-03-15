import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context";

import { ButtonContainer } from "./Button";

const Details = () => {
  const { detailProduct, addToCart, openModal } = useContext(ProductContext);
  const { id, title, img, company, price, info, inCart } = detailProduct;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="product" className="img-fluid" />
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
            made by: {company}
          </h4>
          <h4 className="text-blue">
            <strong>price: $ {price}</strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-2">
            some info about the product:
          </p>
          <p className="text-muted lead">{info}</p>

          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart}
              onClick={() => {
                // Add to cart
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "in cart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
