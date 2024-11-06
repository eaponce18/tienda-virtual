import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  CategoryPage,
  ProductDetailPage,
  ShoppingCartPage,
  PaymentMethodPage,
  LoginPage,
} from '../pages';
import Login from '../pages/loginPage/LoginPage';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/cart',
    element: <ShoppingCartPage />,
  },
  {
    path: '/payment',
    element: <PaymentMethodPage />,
  },
]); 