import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsCard from '../components/ProductsCard'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

const mockProduct = {
  id: 1,
  image: 'https://via.placeholder.com/150',
  title: 'Test Product',
  price: 9.99,
  description: 'Test description',
};

test('renders product card with correct data', () => {
  render(
    <Router>
      <ProductsCard product={mockProduct} />
    </Router>
  );

  expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('R$9.99')).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();
});

test('navigates to product details on click', () => {
  const { container } = render(
    <Router>
      <ProductsCard product={mockProduct} />
    </Router>
  );

  fireEvent.click(container.querySelector('a'));
});
