import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context";

import { ButtonContainer } from "./Button";
import { ModalWrapper } from "./ModalWrapper";

const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = useContext(ProductContext);

  const { title, price, img } = modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <ModalWrapper>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to the cart</h5>
              <img src={img} alt="product" className="img-fluid" />
              <h5>{title}</h5>
              <h5 className="text-muted">price: ${price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => closeModal()}>
                  continue shopping
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart to="/cart" onClick={() => closeModal()}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
};

export default Modal;
