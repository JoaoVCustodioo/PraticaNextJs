import styled from "styled-components";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };
  return (
    <Bar>
      <SearchInput
        type="text"
        value={searchItem}
        placeholder="Search for items here..."
        onChange={handleInputChange}
      />
    </Bar>
  );
}

const Bar = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  text-color: black;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;
