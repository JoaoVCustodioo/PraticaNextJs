import ProductsGrid from '@/app/components/ProductsGrid';
import { render, screen } from '@testing-library/react';



jest.mock('../components/ProductsCard', () => (props) => (
  <div data-testid="products-card">
    {props.product.title}
  </div>
));

test('renders a list of products', () => {
  const products = [
    { id: 1, title: 'Product 1', image: 'https://via.placeholder.com/100', price: 19.99, description: 'Description 1' },
    { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/100', price: 29.99, description: 'Description 2' },
  ];

  render(<ProductsGrid products={products} />);

  products.forEach((product) => {
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });
});
