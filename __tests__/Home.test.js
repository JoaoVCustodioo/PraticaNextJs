import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages'; 

test('renders home page with search bar and dropdown', () => {
  render(<Home />);

  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument(); 
  expect(screen.getByText('Category')).toBeInTheDocument(); 
});
