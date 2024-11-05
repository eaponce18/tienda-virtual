import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import ProductDetailPage from './ProductDetailPage';
import ShoppingCartPage from './ShoppingCartPage';
import PaymentMethodPage from './PaymentMethodPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/payment" element={<PaymentMethodPage />} />
      </Routes>
    </Router>
  );
}

export default App;
