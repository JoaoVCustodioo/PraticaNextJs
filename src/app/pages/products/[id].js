
import styled from "styled-components";

export default function ProductDetails() {

  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Fetch error:', error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>R${product.price}</Price>
      <Description>{product.description}</Description>
      <Category>Categoria: {product.category}</Category>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Category = styled.p`
  font-size: 14px;
  color: #555;
`;
