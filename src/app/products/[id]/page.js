"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  console.log(product);
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.in/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.product))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>R${product.price}</Price>
      <Description>Description: {product.description}</Description>
      <Category>Category: {product.category}</Category>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 32px;
  }

  @media (min-width: 800px) {
    font-size: 40px;
  }
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    font-size: 24px;
  }

  @media (min-width: 800px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.4;
  color: #555;
`;

const Category = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;

  @media (min-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 800px) {
    font-size: 18px;
  }

  &:before {
    font-weight: bold;
  }
`;
