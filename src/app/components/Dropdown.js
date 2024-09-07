import styled from "styled-components";

export default function Dropdown({ options, onChange }) {
  return (
      <StyledSelect onChange={(event) => onChange(event)}>
        <option value="">All categories</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
  );
}

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;
