"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

export default function CartIcon() {
  const { cartItemCount } = useCart();

  return (
    <CartContainer>
      <CartButton>
        <CartImage
          src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-illustration-600nw-1726574749.jpg"
          alt="Cart"
        />
        {cartItemCount > 0 && <ItemCount>{cartItemCount}</ItemCount>}
      </CartButton>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: relative;
  margin-left: 90%;
`;

const CartButton = styled.button`
  background: none;
  border: none;
`;

const CartImage = styled.img`
  width: 40px;
  height: 40px;

`;

const ItemCount = styled.span`
  
  top: -10px;
  right: -10px;
  background: black;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
`;
