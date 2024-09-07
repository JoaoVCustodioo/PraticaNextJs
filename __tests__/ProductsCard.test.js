import { render, screen, fireEvent } from "@testing-library/react";
import ProductsCard from "../components/ProductsCard";
import { CartProvider, useCart } from "../context/CartContext";
import { act } from "react-dom/test-utils";

const TestWrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

test("renders product details and handles add to cart", () => {
  const addItemToCart = jest.fn();

  render(
    <TestWrapper>
      <ProductsCard
        product={{
          id: 1,
          image: "https://via.placeholder.com/100",
          title: "Product Title",
          price: 29.99,
          description: "Product description goes here.",
        }}
      />
    </TestWrapper>
  );

  expect(screen.getByAltText("Product Title")).toBeInTheDocument();
  expect(screen.getByText("Product Title...")).toBeInTheDocument();
  expect(screen.getByText("R$29.99")).toBeInTheDocument();
  expect(
    screen.getByText("Product description goes here...")
  ).toBeInTheDocument();

  const button = screen.getByText("Add to cart");
  expect(button).toBeInTheDocument();

  act(() => {
    fireEvent.click(button);
  });
  expect(addItemToCart).toHaveBeenCalledWith({
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "Product Title",
    price: 29.99,
    description: "Product description goes here.",
  });
});
