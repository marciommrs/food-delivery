import { useCallback } from 'react';
import { Product } from './types';

type Props ={
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  const formatPrice = useCallback((price: number): string => {
    const formmatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return formmatter.format(price);
  }, []);

  return (
    <div className="order-card-container">
      <h3 className="order-card-title">{product.name}</h3>
      <img src={product.imageUri} alt="Pizza" className="order-card-image" />
      <h3 className="order-card-price">{formatPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
