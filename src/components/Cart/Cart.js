import React, { useContext } from "react";

import { ProductContext } from "../../context";

import Title from "../Title";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
