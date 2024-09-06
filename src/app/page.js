import Home from "./pages";
import { CartProvider } from "./context/CartContext";
import CartIcon from "./components/Cart";


export default function App() {
  return (
    <CartProvider>
    <div>
      <CartIcon />
      <Home />
    </div>
    </CartProvider>
  );
}
