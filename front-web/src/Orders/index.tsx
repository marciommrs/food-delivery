import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import { OrderLocationData, Product } from './types';

import './styles.css';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeaders />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={(location) => setOrderLocation(location)} />
    </div>
  );
};

export default Orders;
