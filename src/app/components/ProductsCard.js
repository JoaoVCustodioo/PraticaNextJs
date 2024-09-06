import styled from "styled-components";
import Link from "next/link";

export default function ProductsCard({ product }) {
  return (
    <Link
      style={{ color: "inherit", textDecoration: "none" }}
      href={`/products/${product.id}`}
    >
      <Card>
        <Image src={product.image} alt={product.title} />
        <ProductName>{product.title.slice(0, 50)}...</ProductName>
        <Price>R${product.price}</Price>
        <Description>{product.description.slice(0, 80)}...</Description>
      </Card>
    </Link>
  );
}

const Card = styled.a`
  text-decoration: none;
  color: inherit;
  height: 350px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: block;
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-wheight: bold;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
`;
