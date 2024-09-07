import SearchBar from "@/app/components/SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders search bar and handles input change", () => {
  const onSearch = jest.fn();

  render(<SearchBar onSearch={onSearch} />);

  const input = screen.getByPlaceholderText("Search for items here...");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "query" } });

  expect(onSearch).toHaveBeenCalledWith("query");
});
