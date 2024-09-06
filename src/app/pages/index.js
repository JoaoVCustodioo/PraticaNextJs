"use client";

import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import ProductsGrid from "../components/ProductsGrid";
import Dropdown from "../components/Dropdown";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=150")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchedProducts(data.products);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleSearch = (searchItem) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchedProducts(filtered);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === "") {
      setSearchedProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setSearchedProducts(filtered);
    }
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <>
      <Container>
        <SearchAndFilter>
          <SearchBar onSearch={handleSearch} />
          <Dropdown onChange={handleCategoryChange} options={categories} />
        </SearchAndFilter>
        <ProductsGrid products={searchedProducts} />
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
`;

const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;
