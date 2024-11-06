import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  CategoryPage,
  ProductDetailPage,
  ShoppingCartPage,
  PaymentMethodPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
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