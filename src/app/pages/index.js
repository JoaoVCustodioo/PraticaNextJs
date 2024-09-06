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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
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
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(searchedProducts.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Container>
        <Content>
          <SearchAndFilter>
            <SearchBar onSearch={handleSearch} />
            <Dropdown onChange={handleCategoryChange} options={categories} />
          </SearchAndFilter>
          <ProductsGrid products={currentProducts} />
        </Content>
        <Pagination>
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Previous Page
          </Button>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next Page
          </Button>
        </Pagination>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  flex-shrink: 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  margin: 0 15px;
  font-size: 18px;
`;
